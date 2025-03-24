import { TaskStorage } from "./taskStorage";


export class TaskDeleter {

  constructor(taskUniqueId, taskListId, button) {
    
    this.taskUniqueId = taskUniqueId;
    this.taskListId = taskListId;
    this.button = button;

  }

  deleteTask() {

    this.button.addEventListener("click", () => {

      //DOM
      const mainContainer = document.querySelector(".main-container");
      const currentTaskDiv = document.querySelector(`#${this.taskUniqueId}`).parentElement.parentElement;

      mainContainer.removeChild(currentTaskDiv);

      //Local Storage

      new TaskStorage(this.taskListId, this.taskUniqueId).deleteStoredTask();

    })
  }

}