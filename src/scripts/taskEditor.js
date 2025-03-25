import { formatDistance } from "date-fns";
import { FormProcessor } from "./formProcessor";
import { Checkbox } from "./section";
import { TaskStorage } from "./taskStorage";


export class TaskEditor {

  constructor(taskUniqueId, taskListId, formData) {

    this.taskUniqueId = taskUniqueId;
    this.taskListId = taskListId;
    this.formData = formData;
  }

  //update the taskObject, update DOM, update storage
  editTask() {

    const taskListArr = JSON.parse(localStorage.getItem(this.taskListId));

    const currentTaskObject = taskListArr.filter(task => task["uniqueId"] === this.taskUniqueId)[0];

    const formObject = new FormProcessor(this.formData).processForm();

    //----updating task object-----
    currentTaskObject.title = formObject.title;
    currentTaskObject.dueDate = formObject.dueDate;
    currentTaskObject.description = formObject.description;

    for (let key in formObject) {
      if (key.match(/^checkbox/)){
        currentTaskObject[`${key}`] = formObject[`${key}`];
        currentTaskObject[`checked${key}`] = false

      }
    }
    
    //---updating DOM----

    const currentTaskDiv = document.querySelector(`#${this.taskUniqueId}`).parentElement.parentElement;

    const mainLabel = currentTaskDiv.querySelector(`label[for="${this.taskUniqueId}"]`)

    //title
    let currentTitle = currentTaskDiv.querySelector("h2");

    if (currentTitle === null) {
      currentTitle = document.createElement("h2");
      currentTitle.textContent = ""
      mainLabel.prepend(currentTitle)
    }

    currentTitle.textContent = currentTaskObject.title;

    //due date
    let currentDueDate = currentTaskDiv.querySelector(".due-date");

    if (currentDueDate === null) {
      currentDueDate = document.createElement("p");
      currentDueDate.textContent = ""
      mainLabel.appendChild(currentDueDate)
    }

    let duration = formatDistance(new Date(currentTaskObject.dueDate), new Date(), {
      addSuffix: true
    })

    currentDueDate.textContent = "Due Date: " + currentTaskObject.dueDate + ` (${duration})`;
    
    //description
    const details = currentTaskDiv.querySelector("details");
    let currentDescription = currentTaskDiv.querySelector(".description");

    if (currentDescription === null) {
      currentDescription = document.createElement("p");
      currentDescription.textContent = ""
      details.prepend(currentDescription)
    }

    currentDescription.textContent = currentTaskObject.description;

    //checkbox
    const optionButtonsContainer = currentTaskDiv.querySelector(".option-buttons");

    for (let key in currentTaskObject) {
      if (key.match(/^checkbox/)) {
        //if query selector fails, append new checkbox
        if (!currentTaskDiv.querySelector(`#${key}`)) {

          const newCheckboxWrapper = new Checkbox(currentTaskObject[key]).createCheckbox();

          currentTaskDiv.querySelector("details").insertBefore(newCheckboxWrapper, optionButtonsContainer)


        } else {
          const currentCheckbox = currentTaskDiv.querySelector(`#${key}`).querySelector("label");
          currentCheckbox.textContent = currentTaskObject[key];
        }

      }
    }

    //-------updating Storage----

    new TaskStorage(this.taskListId, this.taskUniqueId).editTask(currentTaskObject);
  }
}