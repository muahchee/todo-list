import { CheckboxChanger } from "./checkboxChanger.js";
import { PriorityChanger } from "./priorityChanger.js";
import { Title, DueDate, Description, Checkbox } from "./section.js";
import { v4 as uuidv4 } from "uuid";
import { TaskEditor } from "./taskEditor.js";
import { dialogOpen } from "./dialogState.js";
import { TaskForm } from "./taskForm.js";

export class TaskDOM {

  constructor(taskObject, taskListId, taskUniqueId) {

    this.taskListId = taskListId

    this.taskObject = taskObject

    //generate new id if one is not provided, add a random letter at the beginning because cant query select ids that start with numbers
    this.taskUniqueId = taskUniqueId || this._randomAlphabet() + uuidv4();

  }

  //returns a random letter
  _randomAlphabet() {
    
    const lowercaseAsciiStart = 97;
    const letterIndex = Math.floor(Math.random() * 26);
    const letter = String.fromCharCode(lowercaseAsciiStart + letterIndex);

    return letter

  }

  createTaskDOM() {

    //create base task html
    this.mainContainer = document.querySelector(".main-container");

    this.task = document.createElement("div");
    this.task.setAttribute("class", "task");

    this.taskTitleDate = document.createElement("div");
    this.taskTitleDate.setAttribute("class", "task-title-date");

    this.mainCheckbox = document.createElement("input");
    this.mainCheckbox.setAttribute("type", "checkbox");
    this.mainCheckbox.setAttribute("id", this.taskUniqueId);
    new CheckboxChanger(this.taskUniqueId, this.taskListId, this.mainCheckbox).changeMainChecked();

    this.mainLabel = document.createElement("label");
    this.mainLabel.setAttribute("for", this.taskUniqueId);

    this.details = document.createElement("details");

    this.summary = document.createElement("summary");

    //append base task html
    this.mainContainer.appendChild(this.task);

    this.task.appendChild(this.taskTitleDate);
    this.task.appendChild(this.details);

    this.taskTitleDate.appendChild(this.mainCheckbox);
    this.taskTitleDate.appendChild(this.mainLabel);

    this.details.appendChild(this.summary);


    //sections from taskObject

    if (this.taskObject["title"]){
      this.title = this.taskObject["title"];

      this.mainLabel.appendChild(new Title(this.title).createTitle());
    }
    
    if (this.taskObject["dueDate"]){
      this.dueDate = this.taskObject["dueDate"]

      this.mainLabel.appendChild(new DueDate(this.dueDate).createDueDate());
    }

    if (this.taskObject["description"]){
      this.description = this.taskObject["description"]

      this.details.appendChild(new Description(this.description).createDescription());
    }

    //loop over each field with "checkbox" in the name
    for (let key in this.taskObject) {
      if (key.match(/^checkbox/)){

        this.checkboxWrapper = new Checkbox(this.taskObject[key]).createCheckbox()

        this.details.appendChild(this.checkboxWrapper)

        //event listener for line through and storage
        const checkboxInput = this.checkboxWrapper.querySelector("input");


        new CheckboxChanger(this.taskUniqueId, this.taskListId, checkboxInput).changeInternalChecked(key);
      }
    }


    //option buttons

    this.optionButtonsContainer = document.createElement("div");
    this.optionButtonsContainer.setAttribute("class", "option-buttons");

    this.editButton = document.createElement("button");
    this.editButton.setAttribute("class", "edit-btn");
    this.editButton.textContent = "Edit";
    dialogOpen(this.editButton, new TaskForm(this.taskListId).createEditForm(this.taskUniqueId, this.editButton));
    
    this.priorityButton = document.createElement("button");
    this.priorityButton.textContent = "Prioritise";
    this.priorityButton.setAttribute("class", "priority-btn");
    new PriorityChanger(this.taskUniqueId, this.taskListId, this.priorityButton).changePriority();

    this.deleteButton = document.createElement("button");
    this.deleteButton.setAttribute("class", "delete-btn");
    this.deleteButton.textContent = "Delete"

    this.optionButtonsContainer.appendChild(this.editButton);
    this.optionButtonsContainer.appendChild(this.priorityButton);
    this.optionButtonsContainer.appendChild(this.deleteButton);

    this.details.appendChild(this.optionButtonsContainer);

    return this.taskUniqueId
  }


}