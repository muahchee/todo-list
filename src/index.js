

//--creation of task and list--
import { createTask } from "./createTask.js";
import { TaskList } from "./taskList.js";
import { ProjectList } from "./projectList.js";

//--editing the task--
import { prioritise, unprioritise } from "./editTask/changePriority.js";
import { checkOff, uncheck } from "./editTask/changeCheck.js";
import { deleteTask } from "./editTask/deleteTask.js";

//--creating sections of the task--
import { Title } from "./sections/title.js";
import { Description } from "./sections/description.js";
import { DueDate } from "./sections/dueDate.js";
import { Checklist } from "./sections/checklist.js";
import { Notes } from "./sections/notes.js";

import { TaskFormDOM } from "./dom/taskForm.js";

//--the user--
  //wants to create a task
  //wants to see the currently list of tasks

  //create project (only one will exist)
const projectContainer = new ProjectList();
const projectList = projectContainer.list;

const taskContainer1 = new TaskList()
const taskList1 = taskContainer1.list;

projectContainer.addTask(taskList1);

//--creating the tasks--
taskContainer1.addTask(
  createTask
  (
    new Title (" - Ink Zine illustration - ").title,
    new Description ("almost finished!").description,
    new DueDate ("2025/03/06").dueDate,
    new Checklist ("sketch", "ink", "colour").checklist,
  ) );

taskContainer1.addTask(
  createTask
  (
    new Title (" - Second Title- ").title,
    new Description ("POODR").description,
    new DueDate ("2024/09/13").dueDate,
    new Notes ("better get it done soon").notes
  ) );


taskContainer1.addTask(
  createTask
  (
    new Title (" - Third- ").title,
    new Description ("oatchy").description,
    new DueDate ("2014/05/06").dueDate,
    new Notes ("dandori today and dandori tomorrow").notes
  ) );


const taskDom = new TaskFormDOM();
const mainContainer = document.querySelector(".full-wrapper")

mainContainer.appendChild(taskDom.form)

console.log(taskList1);


console.log(projectList);


