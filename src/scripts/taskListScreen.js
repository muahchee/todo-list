import { dialogOpen } from "./dialogState";
import { EverythingResetter } from "./reset";
import { TaskListCreator } from "./taskListCreator";
import { TaskListForm } from "./taskListForm";
import { TaskListRestorer } from "./taskListRestorer";


export class TaskListScreen {

  constructor (taskListName) {

    this.mainContainer = document.querySelector(".main-container");

    this.sideBar = document.querySelector(".side-bar");

    this.h2 = document.createElement("h2");
    this.h2.textContent = "All Task Lists"

    this.newTaskListBtn = document.createElement("button");
    this.newTaskListBtn.textContent = "New Task List";

    this.resetEverythingBtn = document.createElement("button");
    this.resetEverythingBtn.textContent = "Reset Everything!!";

  }

  start() {

    //clear sidebar and main
    while(this.sideBar.firstChild){
      this.sideBar.removeChild(this.sideBar.lastChild);
    }

    while(this.mainContainer.firstChild){
      this.mainContainer.removeChild(this.mainContainer.lastChild);
    }

    dialogOpen(this.newTaskListBtn, new TaskListForm().createNewTaskListForm());

    new EverythingResetter(this.resetEverythingBtn).addResetListener();

    this.sideBar.appendChild(this.h2);
    this.sideBar.appendChild(this.newTaskListBtn);
    this.sideBar.appendChild(this.resetEverythingBtn);
    
    const taskListDiv = new TaskListCreator("First Task List!").createTaskList();

    this.mainContainer.appendChild(taskListDiv)

  }

  showTaskListScreen() {

    //clear sidebar and main
    while(this.sideBar.firstChild){
      this.sideBar.removeChild(this.sideBar.lastChild);
    }

    while(this.mainContainer.firstChild){
      this.mainContainer.removeChild(this.mainContainer.lastChild);
    }

    dialogOpen(this.newTaskListBtn, new TaskListForm().createNewTaskListForm());

    new EverythingResetter(this.resetEverythingBtn).addResetListener();

    this.sideBar.appendChild(this.h2);
    this.sideBar.appendChild(this.newTaskListBtn);
    this.sideBar.appendChild(this.resetEverythingBtn);


    //restore
    new TaskListRestorer().restoreTaskLists();

  }
}
