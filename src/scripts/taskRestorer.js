import { TaskDOM } from "./taskDOM";

export class TaskRestorer {

  constructor(taskListId) {

    this.taskListId = taskListId

    this.mainContainer = document.querySelector(".main-container");

    this.storedTasksArr = JSON.parse(localStorage.getItem(taskListId));

  }

  restoreTasks() {

    this.storedTasksArr.forEach((taskObject) => {

      let taskUniqueId = taskObject["uniqueId"]

      new TaskDOM(taskObject, this.taskListId, taskUniqueId).createTaskDOM();

      const currentTaskDiv = document.querySelector(`#${taskUniqueId}`).parentElement.parentElement;

      const currentTaskLabel = document.querySelector(`#${taskUniqueId}`).parentElement.querySelector("label");

      const taskListArr = JSON.parse(localStorage.getItem(this.taskListId));

      const currentTaskLS = taskListArr.filter(task => task["uniqueId"] === taskUniqueId)[0];


      //restore color according to priority

      const priorityBtn = currentTaskDiv.querySelector(".priority-btn");

      if (currentTaskLS["priority"] === true) {

        currentTaskDiv.style.backgroundColor = "var(--priority)";
        currentTaskDiv.style.boxShadow = "0px 0px 20px 5px var(--priority-shadow)"

        priorityBtn.textContent = "Unprioritise" 

      }

      //restore main checkbox state

      if (currentTaskLS["mainChecked"] === true) {

        currentTaskLabel.style.textDecoration = "line-through";

      }


    })

  }

}
