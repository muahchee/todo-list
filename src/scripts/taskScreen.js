// task view screen (probably just the side bar)

import { dialogOpen } from "./dialogState.js";
import { InitialTask } from "./initialTask.js";
import { TaskListResetter } from "./reset.js";
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

    new TaskListResetter(this.taskListId, this.resetCurrentListBtn).addResetListener();

    this.sideBar.appendChild(this.h2);
    this.sideBar.appendChild(this.newTaskBtn);
    this.sideBar.appendChild(this.resetCurrentListBtn);
    this.sideBar.appendChild(this.backToMainButton);

    //create initial Task
    new InitialTask(this.taskListId).createInitialTask();

  }

}