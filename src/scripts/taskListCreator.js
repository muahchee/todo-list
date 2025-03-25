import { TaskScreen } from "./taskScreen";
import { TaskStorage } from "./taskStorage";

export class TaskListCreator {

  constructor(taskListName) {


    this.taskListName = taskListName;
    this.taskListId = Symbol(taskListName).toString();
    this.mainContainer = document.querySelector(".main-container")
  }

  createTaskList() {

    const taskListDiv = document.createElement("div");
    taskListDiv.setAttribute("class", "task");

    const taskListH2 = document.createElement("h2");
    taskListH2.textContent = this.taskListName;

    taskListDiv.appendChild(taskListH2);
    this.mainContainer.appendChild(taskListDiv);

    console.log(this.taskListId)

    taskListDiv.addEventListener("click", () => {
      new TaskScreen(this.taskListId, this.taskListName).showTaskScreen()
    })

    new TaskStorage(this.taskListId).clearTaskList();

    return taskListDiv

  }
}