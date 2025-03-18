import { FormProcessor } from "../formProcessor.js";

export class TaskCreatorDOM {

  constructor(formData) {

    this.formObject = new FormProcessor(formData).processForm();

  }

  createTaskDOM() {

    if (this.formObject["title"]){
      this.title = this.formObject["title"];

      console.log("title = " + this.title)
    }
    
    if (this.formObject["dueDate"]){
      this.dueDate = this.formObject["dueDate"]

      console.log("duedate = " + this.dueDate)
    }

    if (this.formObject["description"]){
      this.description = this.formObject["description"]

      console.log("description = " + this.description)
    }

    let checkboxArr = []
    for (let key in this.formObject) {
      if (key.match(/checkbox/)){
        checkboxArr.push(this.formObject[key])
      }
    }

    console.log("checkboxes = " + checkboxArr)
    console.log(Array.isArray(checkboxArr))
   }

}