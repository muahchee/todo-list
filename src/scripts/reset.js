import { TaskStorage } from "./taskStorage";
import { InitialTask } from "./initialTask";


export class TaskListResetter {

  constructor(taskListId, resetBtn){

    this.taskListId = taskListId;

    this.resetBtn = resetBtn;

    this.mainContainer = document.querySelector(".main-container")

  }

  addResetListener() {

    this.resetBtn.addEventListener("click", () => {

    //clear main container DOM
    while (this.mainContainer.firstChild){
      this.mainContainer.removeChild(this.mainContainer.lastChild);
    }

    //clear tasks in LS
    new TaskStorage (this.taskListId).clearTaskList();

    //add iniitial task
    new InitialTask(this.taskListId).createInitialTask();


    })

    

  }

}