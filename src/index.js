import "./styles.css";

import { TaskScreen } from "./scripts/dom/taskScreen.js";


//--creation of task and list--
import { createTask } from "./scripts/createTask.js";
import { TaskList } from "./scripts/taskList.js";

//--editing the task--
import { prioritise, unprioritise } from "./scripts/editTask/changePriority.js";
import { checkOff, uncheck } from "./scripts/editTask/changeCheck.js";
import { deleteTask } from "./scripts/editTask/deleteTask.js";

//--creating sections of the task--
import { Title } from "./scripts/sections/title.js";
import { Description } from "./scripts/sections/description.js";
import { DueDate } from "./scripts/sections/dueDate.js";
import { Checklist } from "./scripts/sections/checklist.js";

import { TaskFormDOM } from "./scripts/dom/taskForm.js";



//create screen for single task view
new TaskScreen("Task List").showTaskScreen()








//--------------------------------------------//

//--the user--
  //wants to create a task
  //wants to see the currently list of tasks

  //create project (only one will exist)
// const projectContainer = new ProjectList();
// const projectList = projectContainer.list;

// const taskContainer1 = new TaskList()
// const taskList1 = taskContainer1.list;

// projectContainer.addTask(taskList1);

// //--creating the tasks--
// taskContainer1.addTask(
//   createTask
//   (
//     new Title (" - Ink Zine illustration - ").title,
//     new Description ("almost finished!").description,
//     new DueDate ("2025/03/06").dueDate,
//     new Checklist ("sketch", "ink", "colour").checklist,
//   ) );

// taskContainer1.addTask(
//   createTask
//   (
//     new Title (" - Second Title- ").title,
//     new Description ("POODR").description,
//     new DueDate ("2024/09/13").dueDate,
//   ) );


// taskContainer1.addTask(
//   createTask
//   (
//     new Title (" - Third- ").title,
//     new Description ("oatchy").description,
//     new DueDate ("2014/05/06").dueDate,
//   ) );



