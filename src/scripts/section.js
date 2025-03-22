export class Title {

  constructor(title) {

    this.title = title;

  };

  createTitle() {

    let titleDOM = document.createElement("h2");
    titleDOM.textContent = this.title

    return titleDOM

  }

} 

import { formatDistance } from "date-fns";

export class DueDate {

  constructor(dueDate) {

    this.dueDate = dueDate;

  };

  createDueDate() {

    //shows how long until due date
    let duration = formatDistance(this.dueDate, new Date(), {
      addSuffix: true
    })

    let dueDateDOM = document.createElement("p");
    dueDateDOM.setAttribute("class", "due-date")
    dueDateDOM.textContent = "Due Date: " + this.dueDate + ` (${duration})`

    return dueDateDOM;

  }

} 

export class Description {

  constructor(description) {

    this.description = description;

  };

  createDescription() {

    let descriptionDOM = document.createElement("p");
    descriptionDOM.textContent = this.description;

    return descriptionDOM;

  }
  
} 

export class Checkbox {

  constructor(checkbox) {

    this.checkbox = checkbox;

  };

  _checkboxIdString() {

    return this.checkbox.replace(/\s/g, "-")

  }

  createCheckbox() {

    let checkboxWrapper = document.createElement("div");
    checkboxWrapper.setAttribute("class", "single-checkbox")

    let checkboxInputDOM = document.createElement("input");
    checkboxInputDOM.setAttribute("type", "checkbox");
    checkboxInputDOM.setAttribute("id", this._checkboxIdString());

    let checkboxLabelDOM = document.createElement("label");
    checkboxLabelDOM.setAttribute("for", this._checkboxIdString());
    checkboxLabelDOM.textContent = this.checkbox;

    checkboxWrapper.appendChild(checkboxInputDOM);
    checkboxWrapper.appendChild(checkboxLabelDOM);

    return checkboxWrapper;

  }
  
  
} 
