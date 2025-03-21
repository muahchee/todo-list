
//responsibility - collect user INPUT for sections

import { TaskCreator } from "./taskCreator.js";

//include inputs for each section (title, description etc)
// also an "add task" button that invokes addtask() fo the current tasklist
export class newTaskForm {
  constructor(taskListId){

    this.taskListId = taskListId;

    this.fullWrapper = document.querySelector(".full-wrapper");

    this.dialog = document.createElement("dialog");

    this.form = document.createElement("form");
    this.form.setAttribute("class", "dialog-wrapper");
    this.form.setAttribute("method", "dialog");

    this.title = document.createElement("p");
    this.titleLabel = document.createElement("label");
    this.titleLabel.setAttribute("for", "title");
    this.titleLabel.textContent = "Title: ";
    this.titleInput = document.createElement("input");
    this.titleInput.setAttribute("type", "text");
    this.titleInput.setAttribute("id", "title");
    this.titleInput.setAttribute("name", "title");

    this.dueDate = document.createElement("p");
    this.dueDateLabel = document.createElement("label");
    this.dueDateLabel.setAttribute("for", "dueDate");
    this.dueDateLabel.textContent = "Due Date: ";
    this.dueDateInput = document.createElement("input");
    this.dueDateInput.setAttribute("type", "date");
    this.dueDateInput.setAttribute("id", "dueDate");
    this.dueDateInput.setAttribute("name", "dueDate");

    this.description = document.createElement("p");
    this.descriptionLabel = document.createElement("label");
    this.descriptionLabel.setAttribute("for", "description");
    this.descriptionLabel.textContent = "Description: ";
    this.descriptionInput = document.createElement("input");
    this.descriptionInput.setAttribute("type", "text");
    this.descriptionInput.setAttribute("id", "description");
    this.descriptionInput.setAttribute("name", "description");


    this.checkboxesSection = document.createElement("div");
    this.checkboxesLabel = document.createElement("label");
    this.checkboxesLabel.textContent = "Checkboxes?"
    this.checkboxesInput = document.createElement("input");
    this.checkboxesInput.setAttribute("name", "checkbox1")

    this.addCheckboxBtn = document.createElement("button");
    this.addCheckboxBtn.setAttribute("class", "add-checkbox");
    this.addCheckboxBtn.setAttribute("type", "button");
    this.addCheckboxBtn.textContent = "add another checkbox"

    this.addTaskBtn = document.createElement("button");
    this.addTaskBtn.setAttribute("class", "add-task")
    this.addTaskBtn.setAttribute("type", "submit")
    this.addTaskBtn.textContent = "Add Task"
  }

  //add another checkbox field under first one
  _addAnotherCheckbox(checkboxesSection, addCheckboxBtn) {

    let checkboxCount = 1;

      return function () {

      checkboxCount++;

      console.log(this.checkboxCount)

      let newCheckboxInput = document.createElement("input");
      newCheckboxInput.setAttribute("name", `checkbox${checkboxCount}`);

      checkboxesSection.insertBefore(newCheckboxInput, addCheckboxBtn);}

  }

  createNewTaskForm() {

    //append child

    this.fullWrapper.appendChild(this.dialog);

    this.dialog.appendChild(this.form);

    this.form.appendChild(this.title);
    this.form.appendChild(this.dueDate);
    this.form.appendChild(this.description);
    this.form.appendChild(this.checkboxesSection);
    this.form.appendChild(this.addTaskBtn)

    this.title.appendChild(this.titleLabel);
    this.title.appendChild(this.titleInput);
    
    this.dueDate.appendChild(this.dueDateLabel);
    this.dueDate.appendChild(this.dueDateInput);

    this.description.appendChild(this.descriptionLabel);
    this.description.appendChild(this.descriptionInput);

    this.checkboxesSection.appendChild(this.checkboxesLabel);
    this.checkboxesSection.appendChild(this.checkboxesInput)
    this.checkboxesSection.appendChild(this.addCheckboxBtn);

    //event listener

    this.addCheckboxBtn.addEventListener("click", this._addAnotherCheckbox(this.checkboxesSection, this.addCheckboxBtn))

    this.form.addEventListener("submit", () => {

      const formData = new FormData(this.form)

      new TaskCreator(taskListId, formData).createTask();
      
      //reset form
      while(this.checkboxesSection.children.length > 2) {
        this.checkboxesSection.removeChild(this.checkboxesSection.lastChild);
      };
      this.checkboxesSection.appendChild(this.addCheckboxBtn);
      this.form.reset();
    })


    return this.dialog
    
  }
}
