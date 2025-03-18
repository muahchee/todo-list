export class TaskDOM {

  constructor(taskObject) {

    this.taskObject = taskObject
    this.uniqueID = Symbol("task").toString()

  }

  createTaskDOM() {

    //create base task html
    this.mainContainer = document.querySelector(".main-container");

    this.task = document.createElement("div");
    this.task.setAttribute("class", "task");

    this.taskTitleDate = document.createElement("div");
    this.taskTitleDate.setAttribute("class", "task-title-date");

    this.mainCheckbox = document.createElement("input");
    this.mainCheckbox.setAttribute("type", "checkbox");
    this.mainCheckbox.setAttribute("id", this.uniqueID);

    this.mainLabel = document.createElement("label");
    this.mainLabel.setAttribute("for", this.uniqueID);


    //sections from taskObject

    if (this.taskObject["title"]){
      this.title = this.taskObject["title"];

      console.log("title = " + this.title)
    }
    
    if (this.taskObject["dueDate"]){
      this.dueDate = this.taskObject["dueDate"]

      console.log("duedate = " + this.dueDate)
    }

    if (this.taskObject["description"]){
      this.description = this.taskObject["description"]

      console.log("description = " + this.description)
    }

    let checkboxArr = []
    for (let key in this.taskObject) {
      if (key.match(/checkbox/)){
        checkboxArr.push(this.taskObject[key])
      }
    }

    console.log("checkboxes = " + checkboxArr)
   }

}