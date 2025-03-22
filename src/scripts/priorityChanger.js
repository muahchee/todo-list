import { TaskStorage } from "./taskStorage.js";

export class PriorityChanger {

  constructor(taskUniqueId, taskListId, button){

    this.taskUniqueId = taskUniqueId;
    this.taskListId = taskListId;
    this.button = button;

  }

  //attach event to button
  //change task div color to red
  //change priority property with taskStorage

  changePriority(){

    this.button.addEventListener("click", () => {

      const currentTaskDiv = document.querySelector(`#${this.taskUniqueId}`).parentElement.parentElement;

      //change priority and returns current priority state in LS
      const currentPriority = new TaskStorage(this.taskListId, this.taskUniqueId).changeStoredTaskPriority();

      //change dom depending on current priority state
      if (currentPriority === true){

        currentTaskDiv.style.backgroundColor = "var(--priority)";
        currentTaskDiv.style.boxShadow = "0px 0px 20px 5px var(--priority-shadow)"

        this.button.textContent = "Unprioritise"    

      } else if (currentPriority === false) {

        currentTaskDiv.style.backgroundColor = "var(--lighter)";
        currentTaskDiv.style.boxShadow = "0px 0px 20px 5px var(--light-shadow)"

        this.button.textContent = "Prioritise"

      }

    })
  }
}
