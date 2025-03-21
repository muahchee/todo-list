import { TaskDOM } from "./taskDOM";

export class TaskRestorer {

  constructor(taskListId) {

    this.mainContainer = document.querySelector(".main-container");

    this.storedTasksArr = JSON.parse(localStorage.getItem(taskListId));

  }

  restoreTasks() {

    this.storedTasksArr.forEach((taskObject) => {

      new TaskDOM(taskObject).createTaskDOM();

    })

  }

}
