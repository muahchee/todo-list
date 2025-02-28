// create a list of tasks sorted by priority
export const TaskList = class {

  constructor() {

    this.list = []

  };

  // adds a task to a list
  addTask(task) {

  this.list.push(task);

  console.log ("added task to tasklist!!")

}  

  sortList() {

    this.list.sort( ( a, b ) => b.priority - a.priority)
  }


}