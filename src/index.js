
import { Task } from "./task.js";
import { Title } from "./sections/title.js";
import { Description } from "./sections/description.js";
import { DueDate } from "./sections/dueDate.js";

const task1 = new Task
  (
    new Title(" - Complete To-Do List Project - ").title,
    new Description ("do things one feature at a time").description,
    new DueDate ("16/6/24").dueDate
  );

const task2 = new Task
  (
    new Title(" - Ink Zine illustration - ").title,
    new Description ("almost finished!").description,
    new DueDate ("17/6/24").dueDate
  );

