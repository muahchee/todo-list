
import { createTask } from "./createTask.js";
import { addTask } from "./addTask.js";
import { TaskList } from "./taskList.js";


import { prioritise, unprioritise } from "./editTask/changePriority.js";
import { checkOff, uncheck } from "./editTask/changeCheck.js";


import { Title } from "./sections/title.js";
import { Description } from "./sections/description.js";
import { DueDate } from "./sections/dueDate.js";
import { Checklist } from "./sections/checklist.js";
import { Notes } from "./sections/notes.js";

//the user (for now)
  //wants to create a task
  //wants to see the currently list of tasks

const taskContainer = new TaskList()
const taskList = taskContainer.list;


//create task
addTask( taskList, 
  createTask
  (
    new Title (" - Ink Zine illustration - ").title,
    new Description ("almost finished!").description,
    new DueDate ("17/6/s24").dueDate,
    new Checklist ("sketch", "ink", "colour").checklist,
  ) );

addTask( taskList, 
  createTask
  (
    new Title (" - Second Title- ").title,
    new Description ("POODR").description,
    new DueDate ("17/6/s24").dueDate,
    new Notes ("better get it done soon").notes
  ) );


addTask( taskList, 
  createTask
  (
    new Title (" - Third- ").title,
    new Description ("oatchy").description,
    new DueDate ("999/6/14").dueDate,
    new Notes ("dandori today and dandori tomorrow").notes
  ) );




console.log(taskList);





// console.log(checkOff(taskList[0], "sketch"));

// console.log(taskList);


// console.log(taskContainer.sortList());

// console.log(prioritise(taskList[1]));

// console.log(taskContainer.sortList());

// console.log(taskList);

