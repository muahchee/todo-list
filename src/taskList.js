// create a list of tasks sorted by priority
export const TaskList = class {

  constructor() {

    this.list = []

  };

  sortList() {

    this.list.sort( ( a, b ) => b.priority - a.priority)
  }


}