import { FormProcessor } from "../formProcessor.js";

export class TaskCreatorDOM {

  constructor(formData) {

    this.formObject = new FormProcessor(formData).processForm();

  }

  createTaskDOM() {

    console.log(this.formObject);
  }

}