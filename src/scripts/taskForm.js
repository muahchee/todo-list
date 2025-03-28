
//responsibility - collect user INPUT for sections

import { v4 as uuidv4 } from "uuid";
import { dialogClose } from "./dialogState.js";
import { TaskCreator } from "./taskCreator.js";
import { TaskEditor } from "./taskEditor.js";

//include inputs for each section (title, description etc)
// also an "add task" button that invokes addtask() fo the current tasklist
export class TaskForm {
  constructor(taskListId){

    this.taskListId = taskListId;

    this.fullWrapper = document.querySelector(".full-wrapper");

    this.dialog = document.createElement("dialog");

    this.form = document.createElement("form");
    this.form.setAttribute("class", "dialog-wrapper");
    this.form.setAttribute("method", "dialog");

    this.title = document.createElement("p");
    this.titleLabel = document.createElement("label");
    this.titleLabel.setAttribute("for", "title");
    this.titleLabel.textContent = "Title: ";
    this.titleInput = document.createElement("input");
    this.titleInput.setAttribute("type", "text");
    this.titleInput.setAttribute("id", "title");
    this.titleInput.setAttribute("name", "title");

    this.dueDate = document.createElement("p");
    this.dueDateLabel = document.createElement("label");
    this.dueDateLabel.setAttribute("for", "dueDate");
    this.dueDateLabel.textContent = "Due Date: ";
    this.dueDateInput = document.createElement("input");
    this.dueDateInput.setAttribute("type", "date");
    this.dueDateInput.setAttribute("id", "dueDate");
    this.dueDateInput.setAttribute("name", "dueDate");

    this.description = document.createElement("p");
    this.descriptionLabel = document.createElement("label");
    this.descriptionLabel.setAttribute("for", "description");
    this.descriptionLabel.textContent = "Description: ";
    this.descriptionInput = document.createElement("input");
    this.descriptionInput.setAttribute("type", "text");
    this.descriptionInput.setAttribute("id", "description");
    this.descriptionInput.setAttribute("name", "description");


    this.checkboxesSection = document.createElement("div");
    this.checkboxesLabel = document.createElement("label");
    this.checkboxesLabel.textContent = "Checkboxes?"
    this.checkboxesInput = document.createElement("input");
    this.checkboxesInput.setAttribute("name", "checkbox1")

    this.addCheckboxBtn = document.createElement("button");
    this.addCheckboxBtn.setAttribute("class", "add-checkbox");
    this.addCheckboxBtn.setAttribute("type", "button");
    this.addCheckboxBtn.textContent = "add another checkbox"

    this.addTaskBtn = document.createElement("button");
    this.addTaskBtn.setAttribute("class", "add-task")
    this.addTaskBtn.setAttribute("type", "submit")
    this.addTaskBtn.textContent = "Add Task"

    this.cancelBtn = document.createElement("button");
    this.cancelBtn.setAttribute("class", "cancel-btn")
    this.cancelBtn.setAttribute("type", "button")
    this.cancelBtn.textContent = "Cancel";
    dialogClose(this.cancelBtn, this.dialog)

  }

  //add another checkbox field under first one
  _addAnotherCheckbox(checkboxesSection, addCheckboxBtn, existingCheckboxId) {

      return function () {

      let checkboxId = existingCheckboxId || uuidv4();

      let newCheckboxInput = document.createElement("input");
      newCheckboxInput.setAttribute("name", `checkbox${checkboxId}`);

      checkboxesSection.insertBefore(newCheckboxInput, addCheckboxBtn);}

  }

  _appendEverything() {
    this.fullWrapper.appendChild(this.dialog);

    this.dialog.appendChild(this.form);

    this.form.appendChild(this.title);
    this.form.appendChild(this.dueDate);
    this.form.appendChild(this.description);
    this.form.appendChild(this.checkboxesSection);
    this.form.appendChild(this.addTaskBtn);
    this.form.appendChild(this.cancelBtn);

    this.title.appendChild(this.titleLabel);
    this.title.appendChild(this.titleInput);
    
    this.dueDate.appendChild(this.dueDateLabel);
    this.dueDate.appendChild(this.dueDateInput);

    this.description.appendChild(this.descriptionLabel);
    this.description.appendChild(this.descriptionInput);

    this.checkboxesSection.appendChild(this.checkboxesLabel);
    this.checkboxesSection.appendChild(this.checkboxesInput)
    this.checkboxesSection.appendChild(this.addCheckboxBtn);

  }

  createNewTaskForm() {

    //append child
    this._appendEverything();
    
    //event listener

    this.addCheckboxBtn.addEventListener("click", this._addAnotherCheckbox(this.checkboxesSection, this.addCheckboxBtn))

    this.form.addEventListener("submit", () => {

      const formData = new FormData(this.form)

      new TaskCreator(this.taskListId, formData).createTask();
      
      //reset form
      while(this.checkboxesSection.children.length > 2) {
        this.checkboxesSection.removeChild(this.checkboxesSection.lastChild);
      };
      this.checkboxesSection.appendChild(this.addCheckboxBtn);
      this.form.reset();
    })


    return this.dialog
    
  }

  createEditForm(taskUniqueId, button) {

    this._appendEverything()

    this.addCheckboxBtn.addEventListener("click", this._addAnotherCheckbox(this.checkboxesSection, this.addCheckboxBtn))

    button.addEventListener("click", () => {

      //need to populate form fields with existing values, add "value" attribute to each field
      //get existing taskObject from LS
      const taskListArr = JSON.parse(localStorage.getItem(this.taskListId));

      const currentTaskLS = taskListArr.filter(task => task["uniqueId"] === taskUniqueId)[0];

      this.titleInput.value = currentTaskLS.title || "";
      this.dueDateInput.value = currentTaskLS.dueDate || "";
      this.descriptionInput.value = currentTaskLS.description || "";
      //for the first checkbox
      this.checkboxesInput.value = currentTaskLS.checkbox1;

      //subsequent checkboxes
      for (let key in currentTaskLS) {
        if (key.match(/^checkbox/) && key !== "checkbox1"){

          let newCheckboxInput = document.createElement("input");
          newCheckboxInput.setAttribute("name", key);
          newCheckboxInput.value = currentTaskLS[key],

          this.checkboxesSection.insertBefore(newCheckboxInput, this.addCheckboxBtn);
        }
      }

    })


    this.form.addEventListener("submit", () => {

      const formData = new FormData(this.form)

      new TaskEditor(taskUniqueId, this.taskListId, formData).editTask();
      
      //reset form
      while(this.checkboxesSection.children.length > 2) {
        this.checkboxesSection.removeChild(this.checkboxesSection.lastChild);
      };
      this.checkboxesSection.appendChild(this.addCheckboxBtn);
      this.form.reset();

    })

    return this.dialog
  }
}
