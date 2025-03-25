import { dialogOpen } from "./dialogState";
import { TaskListCreator } from "./taskListCreator";
import { TaskListForm } from "./taskListForm";


export class TaskListScreen {

  constructor (taskListName) {

    this.mainContainer = document.querySelector(".main-container");

    this.taskListName = taskListName;

    this.sideBar = document.querySelector(".side-bar");

    this.h2 = document.createElement("h2");
    this.h2.textContent = "All Task Lists"

    this.newTaskListBtn = document.createElement("button");
    this.newTaskListBtn.textContent = "New Task List";

    this.resetEverythingBtn = document.createElement("button");
    this.resetEverythingBtn.textContent = "Reset Everything!!";

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

    this.sideBar.appendChild(this.h2);
    this.sideBar.appendChild(this.newTaskListBtn);
    this.sideBar.appendChild(this.resetEverythingBtn);

    //create initial Task

    const initialtaskListDiv = new TaskListCreator(this.taskListName).createTaskList();

    this.mainContainer.appendChild(initialtaskListDiv)

    // if (!this.mainContainer.firstChild) {
    //   const taskListDiv = new TaskListCreator(this.taskListName, this.taskListId).initialTaskList();

    //   mainContainer.appendChild(taskListDiv)
    // }


  }
}
