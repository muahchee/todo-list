
//responsibility - collect user INPUT for sections

//include inputs for each section (title, description etc)
// also an "add task" button that invokes addtask() fo the current tasklist
export class TaskFormDOM {
  constructor(){

    this.form = document.createElement("form")

    this.titleSection = document.createElement("p");
    this.titleLabel = document.createElement("label");
    this.titleLabel.setAttribute("for", "title");
    this.titleLabel.textContent = "Title: ";
    this.titleInput = document.createElement("input");
    this.titleInput.setAttribute("type", "text");
    this.titleInput.setAttribute("id", "title");
    this.titleInput.setAttribute("name", "title");

    this.dueDateSection = document.createElement("p");
    this.dueDateLabel = document.createElement("label");
    this.dueDateLabel.setAttribute("for", "due-date");
    this.dueDateLabel.textContent = "Due Date: ";
    this.dueDateInput = document.createElement("input");
    this.dueDateInput.setAttribute("type", "date");
    this.dueDateInput.setAttribute("id", "due-date");
    this.dueDateInput.setAttribute("name", "due-date");

    this.descriptionSection = document.createElement("p");
    this.descriptionLabel = document.createElement("label");
    this.descriptionLabel.setAttribute("for", "description");
    this.descriptionLabel.textContent = "Description: ";
    this.descriptionInput = document.createElement("input");
    this.descriptionInput.setAttribute("type", "text");
    this.descriptionInput.setAttribute("id", "description");
    this.descriptionInput.setAttribute("name", "description");

    this.checkboxesSection = document.createElement("p");
    this.checkboxesLabel = document.createElement("label");
    this.checkboxesInput = document.createElement("input");

    this.addDescriptionBtn = document.createElement("button");
    this.addDescriptionBtn.setAttribute("class", "add-description");
    this.addNotesBtn = document.createElement("button");
    this.addNotesBtn.setAttribute("class", "add-notes");
    this.addCheckboxesBtn = document.createElement("button");
    this.addCheckboxesBtn.setAttribute("class", "add-checkboxes");

    this.addTaskBtn = document.createElement("button");
    this.addTaskBtn.setAttribute("class", "add-task")
    

    //append child

    this.titleSection.appendChild(this.titleLabel);
    this.titleSection.appendChild(this.titleInput);
    this.dueDateSection.appendChild(this.dueDateLabel);
    this.dueDateSection.appendChild(this.dueDateInput);

    this.form.appendChild(this.titleSection);
    this.form.appendChild(this.dueDateSection);

  }


}
