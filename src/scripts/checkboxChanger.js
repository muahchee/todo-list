import { TaskStorage } from "./taskStorage";

export class CheckboxChanger {

  constructor(taskUniqueId, taskListId, checkbox) {

    this.taskUniqueId = taskUniqueId;
    this.taskListId = taskListId;
    this.checkbox = checkbox;

  }

  changeMainChecked() {

    this.checkbox.addEventListener("click", () => {

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

  changeInternalChecked(key) {

    this.checkbox.addEventListener("click", () => {

      this.key = key;

      const currentCheckboxLabel = this.checkbox.parentElement.querySelector("label");

      const currentCheckboxChecked = new TaskStorage(this.taskListId, this.taskUniqueId).changeInternalCheckboxState(this.key);

      if (currentCheckboxChecked === true) {

        currentCheckboxLabel.style.textDecoration = "line-through";

      } else if (currentCheckboxChecked === false) {

        currentCheckboxLabel.style.textDecoration = "none";;

      };
    })

    

  }

}
