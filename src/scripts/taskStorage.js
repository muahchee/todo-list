
//Local Storage will have the tasklistId as the key, and an array of objects(taskObjects) and the value
//responsibility - manipulating the Local Storage

export class TaskStorage {

  constructor(taskListId, uniqueId) {

    this.uniqueId = uniqueId;
    
    this.taskListId = taskListId;

  }


  clearTaskList() {

    localStorage.setItem(this.taskListId, JSON.stringify([]))

  }

  changeMainCheckboxState() {

    const taskListArr = JSON.parse(localStorage.getItem(this.taskListId));

    const currentTask = taskListArr.filter(task => task["uniqueId"] === this.uniqueId)[0];

    const currentTaskIndex = taskListArr.indexOf(currentTask);

    if (currentTask["mainChecked"] === false){

      currentTask["mainChecked"] = true;

    } else {

      currentTask["mainChecked"] = false;

    };
    //replace task with updated one 
    taskListArr.splice(currentTaskIndex, 1, currentTask);

    localStorage.setItem(this.taskListId, JSON.stringify(taskListArr))

    return currentTask["mainChecked"];

  }

  changeInternalCheckboxState(key) {

    const taskListArr = JSON.parse(localStorage.getItem(this.taskListId));

    const currentTask = taskListArr.filter(task => task["uniqueId"] === this.uniqueId)[0];

    const currentTaskIndex = taskListArr.indexOf(currentTask);

    if (currentTask[`checked${key}`] === false) {

      currentTask[`checked${key}`] = true;

    } else {

      currentTask[`checked${key}`] = false;

    }

    //replace task with updated one 
    taskListArr.splice(currentTaskIndex, 1, currentTask);

    localStorage.setItem(this.taskListId, JSON.stringify(taskListArr))

    return currentTask[`checked${key}`];


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

  storeTask(taskObject) {

    this.taskObject = taskObject

    //add a unique id property to each task, so I can target a particular one when editing and entry
    this.taskObject["uniqueId"] = this.uniqueId

    const taskListArr = JSON.parse(localStorage.getItem(this.taskListId)) || []

    taskListArr.push(this.taskObject)

    localStorage.setItem(this.taskListId, JSON.stringify(taskListArr))

  }

  editTask(taskObject) {

    this.taskObject = taskObject;

    const taskListArr = JSON.parse(localStorage.getItem(this.taskListId));

    const currentTask = taskListArr.filter(task => task["uniqueId"] === this.uniqueId)[0];

    const currentTaskIndex = taskListArr.indexOf(currentTask);

    //replace task with updated one 
    taskListArr.splice(currentTaskIndex, 1, this.taskObject);

    localStorage.setItem(this.taskListId, JSON.stringify(taskListArr))


  }

  deleteStoredTask() {

    const taskListArr = JSON.parse(localStorage.getItem(this.taskListId));

    const currentTask = taskListArr.filter(task => task["uniqueId"] === this.uniqueId)[0];

    const currentTaskIndex = taskListArr.indexOf(currentTask);

    //remove task at index
    taskListArr.splice(currentTaskIndex, 1);

    localStorage.setItem(this.taskListId, JSON.stringify(taskListArr))

  }

}