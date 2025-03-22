
//Local Storage will have the tasklistId as the key, and an array of objects(taskObjects) and the value

export class TaskStorage {

  constructor(taskListId, uniqueId, taskObject) {

    this.uniqueId = uniqueId;

    this.taskObject = taskObject;
    
    this.taskListId = taskListId;

  }

  clearTaskList() {

    localStorage.setItem(this.taskListId, JSON.stringify([]))

  }

  changeStoredTaskPriority() {

    const taskListArr = JSON.parse(localStorage.getItem(this.taskListId));

    const currentTask = taskListArr.filter(task => task["uniqueId"] === this.uniqueId)[0];

    const currentTaskIndex = taskListArr.indexOf(currentTask);

    if (currentTask["priority"] === false){

      currentTask["priority"] = true;

    } else {

      currentTask["priority"] = false;

    };
    //replace task with updated one 
    taskListArr.splice(currentTaskIndex, 1, currentTask);

    localStorage.setItem(this.taskListId, JSON.stringify(taskListArr))

    return currentTask["priority"];

  }

  storeTask() {

    //add a unique id property to each task, so I can target a particular one when editing and entry
    this.taskObject["uniqueId"] = this.uniqueId

    const taskListArr = JSON.parse(localStorage.getItem(this.taskListId)) || []

    taskListArr.push(this.taskObject)

    localStorage.setItem(this.taskListId, JSON.stringify(taskListArr))

  }

}