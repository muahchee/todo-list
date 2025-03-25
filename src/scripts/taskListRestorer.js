import { TaskCreator } from "./taskCreator";
import { TaskListCreator } from "./taskListCreator";


export class TaskListRestorer {

  constructor() {

    this.mainContainer = document.querySelector(".main-container");
    
  }

  restoreTaskLists() {

    for (let i = 0; i < localStorage.length; i++) {
      console.log(localStorage.key(i).slice(7, -1));

      const taskListName = localStorage.key(i).slice(7, -1)

      new TaskListCreator(taskListName).createTaskList();
    }
  }
}
