// task view screen (probably just the side bar)

import { dialogOpen } from "./dialogState.js";
import { InitialTask } from "./initialTask.js";
import { TaskListResetter } from "./reset.js";
import { TaskForm } from "./taskForm.js";
import { TaskRestorer } from "./taskRestorer.js";

export class TaskScreen {

  constructor(taskListId, taskListName) {

    this.taskListId = taskListId;

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

    this.mainContainer = document.querySelector(".main-container")
    
  }

  showTaskScreen() {

    //clear sidebar & main container
    while(this.sideBar.firstChild){
      this.sideBar.removeChild(this.sideBar.lastChild);
    };

    while(this.mainContainer.firstChild){
      this.mainContainer.removeChild(this.mainContainer.lastChild);
    }

    dialogOpen(this.newTaskBtn, new TaskForm(this.taskListId).createNewTaskForm())

    new TaskListResetter(this.taskListId, this.resetCurrentListBtn).addResetListener();

    this.sideBar.appendChild(this.h2);
    this.sideBar.appendChild(this.newTaskBtn);
    this.sideBar.appendChild(this.resetCurrentListBtn);
    this.sideBar.appendChild(this.backToMainButton);

    //restores stored tasks
    new TaskRestorer(this.taskListId).restoreTasks();

    //create initial Task
    const mainContainer = document.querySelector(".main-container");

    if (!mainContainer.firstChild) {
      new InitialTask(this.taskListId).createInitialTask();
    }

  }

}