import { TaskListCreator } from "./taskListCreator";
import { dialogClose } from "./dialogState";

export class TaskListForm {

  constructor() {

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

    this.addTaskListBtn = document.createElement("button");
    this.addTaskListBtn.setAttribute("class", "add-task")
    this.addTaskListBtn.setAttribute("type", "submit")
    this.addTaskListBtn.textContent = "Add Task List"

    this.cancelBtn = document.createElement("button");
    this.cancelBtn.setAttribute("class", "cancel-btn")
    this.cancelBtn.setAttribute("type", "button")
    this.cancelBtn.textContent = "Cancel";
    dialogClose(this.cancelBtn, this.dialog)
  }

  _appendEverything() {
    this.fullWrapper.appendChild(this.dialog);

    this.dialog.appendChild(this.form);

    this.form.appendChild(this.title);
    this.form.appendChild(this.addTaskListBtn);
    this.form.appendChild(this.cancelBtn);

    this.title.appendChild(this.titleLabel);
    this.title.appendChild(this.titleInput);

  }

  createNewTaskListForm() {

    this._appendEverything();

    this.form.addEventListener("submit", () => {

      const formData = new FormData(this.form);

      console.log(formData.get("title"))

      new TaskListCreator(formData.get("title"), this.taskListId).createTaskList();

      this.form.reset();
    })

    return this.dialog
  }
}
