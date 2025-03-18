import { TaskDOM } from "./dom/taskCreatorDOM.js";
import { FormProcessor } from "./formProcessor.js";

export class TaskCreator{

  constructor(formData){

    this.formData = formData;

    //can be used to store in storage
    this.taskObject = new FormProcessor(formData).processForm();
  }

  createTask() {

    new TaskDOM(this.taskObject).createTaskDOM();
  }

}