// task view screen (probably just the side bar)

import { dialogOpen } from "./dialogState.js";
import { TaskCreator } from "./taskCreator.js";
import { newTaskForm } from "./taskForm.js";

export class TaskScreen {

  constructor(taskListName) {

    this.taskListId = Symbol(taskListName).toString();

    this.sideBar = document.querySelector(".side-bar");

    this.h2 = document.createElement("h2");
    this.h2.textContent = taskListName

    this.newTaskBtn = document.createElement("button");
    this.newTaskBtn.textContent = "New Task";

    this.resetCurrentListBtn = document.createElement("button");
    this.resetCurrentListBtn.textContent = "Reset Current List";

    this.backToMainButton = document.createElement("button");
    this.backToMainButton.setAttribute("class", "back");
    this.backToMainButton.textContent = "Back to Main";
    
  }

  showTaskScreen() {

    //clear sidebar
    while(this.sideBar.firstChild){
      this.sideBar.removeChild(this.sideBar.lastChild);
    }

    dialogOpen(this.newTaskBtn, new newTaskForm(this.taskListId).createNewTaskForm())

    this.sideBar.appendChild(this.h2);
    this.sideBar.appendChild(this.newTaskBtn);
    this.sideBar.appendChild(this.resetCurrentListBtn);
    this.sideBar.appendChild(this.backToMainButton);

    //create initial Task

    const mainContainer = document.querySelector(".main-container")

    const initialObject = {
      title: "First Task! :3",
      dueDate: "2025-03-21",
      description: "This is the initial task!",
      checkbox1: "this is a checkbox!",
      checkbox2: "this is another checkbox!"
    }
    
    const initialFormData = new FormData();

    for (let key in initialObject) {
      initialFormData.append(key, initialObject[key]);
    }

    //will take effect when TaskRestorer is made
    if (!mainContainer.fristChild){
    new TaskCreator(this.taskListId, initialFormData).initialTask();
    }

  }

}