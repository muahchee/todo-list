import { TaskDOM } from "./taskDOM.js";
import { FormProcessor } from "./formProcessor.js";
import { TaskStorage } from "./taskStorage.js";

export class TaskCreator{

  constructor(formData){

    this.formData = formData;

    //can be used to store in storage
    this.taskObject = new FormProcessor(formData).processForm();
  }

  createTask() {

    //TaskDom outputs the task's uniqueID, which is now stored in this new Task variable
    const newTask = new TaskDOM(this.taskObject).createTaskDOM();

    new TaskStorage(newTask, this.taskObject).storeTask();
  }

}