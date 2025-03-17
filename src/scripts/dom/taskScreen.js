// task view screen (probably just the side bar)

export class TaskScreen {

  constructor(taskListName) {

    this.sideBar = document.querySelector(".side-bar");

    this.h2 = document.createElement("h2");
    this.h2.textContent = taskListName

    this.newTaskBtn = document.createElement("button");
    this.newTaskBtn.textContent = "New Task";

    this.resetCurrentListBtn = document.createElement("button");
    this.resetCurrentListBtn.textContent = "Reset Current List";

    this.backToMainButton = document.createElement("button");
    this.backToMainButton.setAttribute("class", "back");
    this.backToMainButton.textContent = "Back to Main";
    
  }

  showTaskScreen() {

    //clear sidebar
    while(this.sideBar.firstChild){
      this.sideBar.removeChild(this.sideBar.lastChild);
    }

    this.sideBar.appendChild(this.h2);
    this.sideBar.appendChild(this.newTaskBtn);
    this.sideBar.appendChild(this.resetCurrentListBtn);
    this.sideBar.appendChild(this.backToMainButton);

  }

}