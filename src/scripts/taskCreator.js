import { TaskDOM } from "./taskDOM.js";
import { FormProcessor } from "./formProcessor.js";
import { TaskStorage } from "./taskStorage.js";

export class TaskCreator{

  constructor(taskListId, formData){

    this.taskListId = taskListId;

    this.formData = formData;

    //can be used to store in storage
    this.taskObject = new FormProcessor(this.formData).processForm();

    //add a "checked" property for each internal checkbox. Syntax = "checkedcheckbox1"
    for (let key in this.taskObject) {
      if (key.match(/^checkbox/)){
        this.taskObject[`checked${key}`] = false;
      }
    }

    //add a priority property for each task
    this.taskObject["priority"] = false;

    //add "checked" property for main checkbox
    this.taskObject["mainChecked"] = false;

    console.log(this.taskObject)
  }

  initialTask() {

    const initialTask = new TaskDOM(this.taskObject, this.taskListId).createTaskDOM();

    new TaskStorage(this.taskListId, initialTask, this.taskObject).storeTask();
  }

  createTask() {

    //TaskDom outputs the task's uniqueID, which is now stored in this new Task variable
    const newTask = new TaskDOM(this.taskObject, this.taskListId).createTaskDOM();

    new TaskStorage(this.taskListId, newTask, this.taskObject).storeTask();
  }

}