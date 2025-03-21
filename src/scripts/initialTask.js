import { TaskCreator } from "./taskCreator.js";


export class InitialTask {

  constructor(taskListId) {

    this.taskListId = taskListId;

  }

  createInitialTask() {
    
    const mainContainer = document.querySelector(".main-container")

    const initialObject = {
      title: "First Task! :3",
      dueDate: "2025-03-21",
      description: "This is the initial task!",
      checkbox1: "this is a checkbox!",
      checkbox2: "this is another checkbox!"
    }
    
    const initialFormData = new FormData();

    for (let key in initialObject) {
      initialFormData.append(key, initialObject[key]);
    }

    //will take effect when TaskRestorer is made
    if (!mainContainer.fristChild){
    new TaskCreator(this.taskListId, initialFormData).initialTask();
    }
  }

}
