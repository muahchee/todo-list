import "./styles.css";

import { TaskListScreen } from "./scripts/taskListScreen.js";

//---------------------------------//


//create screen for single task view
// new TaskScreen("Task List").showTaskScreen()

const mainContainer = document.querySelector(".main-container");
  console.log(!mainContainer.firstChild)

  if (localStorage.key(0) === null) {
    new TaskListScreen().start();
  } else {
    new TaskListScreen().showTaskListScreen();
  }
  




