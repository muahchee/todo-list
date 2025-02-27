//compiles sections into an object

export function createTask (...sections){

  let taskObject = {};

  // each item in the sections array should also be an array with 2 items
  // [0] is the key, [1] is the title  

  for (let i = 0 ; i < sections.length ;  i++){

    //insert key/value pairs to taskObject

    taskObject[sections[i][0]] = sections[i][1];

  };    
  return taskObject;
}

