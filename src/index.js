
import { createTask } from "./createTask.js";
import { addTask } from "./addTask.js";
import { TaskList } from "./taskList.js";
import { prioritise, unprioritise } from "./changePriority.js";


import { Title } from "./sections/title.js";
import { Description } from "./sections/description.js";
import { DueDate } from "./sections/dueDate.js";


//the user (for now)
  //wants to create a task
  //wants to see the currently list of tasks

const taskList = new TaskList().list;

//create task
addTask( taskList, 
  createTask
  (
    new Title(" - Ink Zine illustration - ").title,
    new Description ("almost finished!").description,
    new DueDate ("17/6/s24").dueDate
    
  ) );

addTask( taskList, 
  createTask
  (
    new Title(" - Ink Zine illustration - ").title,
    new Description ("almost finished!").description,
    new DueDate ("17/6/s24").dueDate
  ) );


console.log(taskList);

console.log(prioritise(taskList[0]));

console.log(taskList[0]);

console.log(unprioritise(taskList[0]));

console.log(taskList[0]);




// what gets printed is the TaskList

