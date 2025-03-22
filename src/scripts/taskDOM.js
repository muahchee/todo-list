import { PriorityChanger } from "./priorityChanger.js";
import { Title, DueDate, Description, Checkbox } from "./section.js";
import { v4 as uuidv4 } from "uuid";

export class TaskDOM {

  constructor(taskObject, taskListId) {

    this.taskListId = taskListId

    this.taskObject = taskObject
    this.taskUniqueId = uuidv4();

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

        this.details.appendChild(new Checkbox
          (this.taskObject[key]).createCheckbox())
      }
    }


    //option buttons

    this.optionButtonsContainer = document.createElement("div");
    this.optionButtonsContainer.setAttribute("class", "option-buttons");

    this.editButton = document.createElement("button");
    this.editButton.textContent = "Edit"
    
    this.priorityButton = document.createElement("button");
    this.priorityButton.textContent = "Prioritise";
    new PriorityChanger(this.taskUniqueId, this.taskListId, this.priorityButton).changePriority();

    this.deleteButton = document.createElement("button");
    this.deleteButton.textContent = "Delete"

    this.optionButtonsContainer.appendChild(this.editButton);
    this.optionButtonsContainer.appendChild(this.priorityButton);
    this.optionButtonsContainer.appendChild(this.deleteButton);

    this.details.appendChild(this.optionButtonsContainer);

    return this.taskUniqueId
  }


}