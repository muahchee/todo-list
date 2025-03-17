
//responsibility - collect user INPUT for sections

import { dialogClose } from "./dialogState";

//include inputs for each section (title, description etc)
// also an "add task" button that invokes addtask() fo the current tasklist
export class newTaskForm {
  constructor(){

    this.fullWrapper = document.querySelector(".full-wrapper");

    this.dialog = document.createElement("dialog");

    this.dialogWrapper = document.createElement("form");
    this.dialogWrapper.setAttribute("class", "dialog-wrapper");
    this.dialogWrapper.setAttribute("method", "dialog");

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
    this.dueDateLabel.setAttribute("for", "due-date");
    this.dueDateLabel.textContent = "Due Date: ";
    this.dueDateInput = document.createElement("input");
    this.dueDateInput.setAttribute("type", "date");
    this.dueDateInput.setAttribute("id", "due-date");
    this.dueDateInput.setAttribute("name", "due-date");

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

    return function() {
      checkboxCount++;

      let newCheckboxInput = document.createElement("input");
      newCheckboxInput.setAttribute("name", `checkbox${checkboxCount}`);

      checkboxesSection.insertBefore(newCheckboxInput, addCheckboxBtn);

    } 
  }

  createNewTaskForm() {

    this.addCheckboxBtn.addEventListener("click", this._addAnotherCheckbox(this.checkboxesSection, this.addCheckboxBtn))

    //append child

    this.fullWrapper.appendChild(this.dialog);

    this.dialog.appendChild(this.dialogWrapper);

    this.dialogWrapper.appendChild(this.title);
    this.dialogWrapper.appendChild(this.dueDate);
    this.dialogWrapper.appendChild(this.description);
    this.dialogWrapper.appendChild(this.checkboxesSection);
    this.dialogWrapper.appendChild(this.addTaskBtn)

    this.title.appendChild(this.titleLabel);
    this.title.appendChild(this.titleInput);
    
    this.dueDate.appendChild(this.dueDateLabel);
    this.dueDate.appendChild(this.dueDateInput);

    this.description.appendChild(this.descriptionLabel);
    this.description.appendChild(this.descriptionInput);

    this.checkboxesSection.appendChild(this.checkboxesLabel);
    this.checkboxesSection.appendChild(this.checkboxesInput)
    this.checkboxesSection.appendChild(this.addCheckboxBtn);


    return this.dialog
    
  }
}
