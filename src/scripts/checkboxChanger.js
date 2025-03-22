import { TaskStorage } from "./taskStorage";

export class CheckboxChanger {

  constructor(taskUniqueId, taskListId, input) {

    this.taskUniqueId = taskUniqueId;
    this.taskListId = taskListId;
    this.input = input;

  }

  changeMainChecked() {

    this.input.addEventListener("click", () => {

      const currentTaskLabel = document.querySelector(`#${this.taskUniqueId}`).parentElement.querySelector("label");

      //change main checkbox state and returns main checkbox state in LS
      const currentMainChecked = new TaskStorage(this.taskListId, this.taskUniqueId).changeMainCheckboxState();

      if (currentMainChecked === true){

        currentTaskLabel.style.textDecoration = "line-through";

      } else if (currentMainChecked === false) {

        currentTaskLabel.style.textDecoration = "none";
      }

    })
    
  }

}
