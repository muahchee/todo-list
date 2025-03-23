import { TaskForm } from "./taskForm";

export class TaskEditor {

  constructor(taskUniqueId, taskListId, editBtn, taskObject) {

    this.taskUniqueId = taskUniqueId;
    this.taskListId = taskListId;
    this.editBtn = editBtn;
    this.taskObject = taskObject
  }

  editTask() {

    this.editBtn.addEventListener("click", () => {

      

      const editForm = new TaskForm()

    })
    
  }
}