
import { Task } from "./task.js";
import { Title } from "./sections/title.js";
import { Description } from "./sections/description.js";
import { DueDate } from "./sections/dueDate.js";


//the user (for now)

const task2 = new Task
  (
    new Title(" - Ink Zine illustration - ").title,
    new Description ("almost finished!").description,
    new DueDate ("17/6/24").dueDate
  );

console.log(task2.task)
