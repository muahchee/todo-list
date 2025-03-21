import { TaskDOM } from "./taskDOM.js";
import { FormProcessor } from "./formProcessor.js";
import { TaskStorage } from "./taskStorage.js";

export class TaskCreator{

  constructor(taskListId, formData){

    this.taskListId = taskListId;

    this.formData = formData;

    //can be used to store in storage
    this.taskObject = new FormProcessor(this.formData).processForm();
  }

  initialTask() {

    const initialTask = new TaskDOM(this.taskObject).createTaskDOM();

    console.log(initialTask);

    new TaskStorage(this.taskListId, initialTask, this.taskObject).storeTask();

    

  }

  createTask() {

    //TaskDom outputs the task's uniqueID, which is now stored in this new Task variable
    const newTask = new TaskDOM(this.taskObject).createTaskDOM();

    new TaskStorage(this.taskListId, newTask, this.taskObject).storeTask();
  }

}