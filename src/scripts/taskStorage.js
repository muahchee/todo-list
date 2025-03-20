
//Local Storage will have the tasklistId as the key, and an array of objects(taskObjects) and the value

export class TaskStorage {

  constructor(uniqueId, taskObject) {

    this.uniqueId = uniqueId;

    this.taskObject = taskObject;

    //!!!Temporary!!!
    //key for LS, will be the TaskList id
    this.taskListID = "temporary";

  }

  storeTask() {

    //add a unique id property to each task, so I can target a particular one when editing and entry
    this.taskObject["uniqueId"] = this.uniqueId

    const taskListArr = JSON.parse(localStorage.getItem(this.taskListID)) || []

    taskListArr.push(this.taskObject)

    localStorage.setItem(this.taskListID, JSON.stringify(taskListArr))

  }

}