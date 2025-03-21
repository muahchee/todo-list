
//Local Storage will have the tasklistId as the key, and an array of objects(taskObjects) and the value

export class TaskStorage {

  constructor(taskListId, uniqueId, taskObject) {

    this.uniqueId = uniqueId;

    this.taskObject = taskObject;

    //!!!Temporary!!!
    //key for LS, will be the TaskList id
    this.taskListId = taskListId;

  }

  storeTask() {

    //add a unique id property to each task, so I can target a particular one when editing and entry
    this.taskObject["uniqueId"] = this.uniqueId

    const taskListArr = JSON.parse(localStorage.getItem(this.taskListId)) || []

    taskListArr.push(this.taskObject)

    localStorage.setItem(this.taskListId, JSON.stringify(taskListArr))

  }

}