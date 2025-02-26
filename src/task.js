//compiles sections into an object
export class Task {

  constructor(...sections) {

    this.task = sections;
   
  }

  get task() {

    return this._task;

  }

  set task(value) {

    let taskObject = {};

    // each item in the sections array should also be an array with 2 items
    // [0] is the key, [1] is the title  

    for (let i = 0 ; i < value.length ;  i++){

      //insert key/value pairs to taskObject

      taskObject[value[i][0]] = value[i][1];

    };    

    

    this._task = taskObject;

  }
 
}

