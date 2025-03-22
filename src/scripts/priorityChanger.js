
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

      const currentTaskDiv = document.querySelector(`#Symbol(task)`).parentElement

      console.log(currentTaskDiv)

    })
  }
}
