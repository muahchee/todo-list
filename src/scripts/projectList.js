// create a list of tasks sorted by priority
export const ProjectList = class {

  constructor() {

    this.list = []

  };

  addTask(tasklist){
    this.list.push(tasklist);

    console.log("added tasklist to projectlist")
  }

}

