
import { Task } from "./task.js";
import { Title } from "./title.js";
import { Description } from "./description.js";
import { DueDate } from "./dueDate.js";

const task = new Task
  (
    new Title(" - Test Title - ").title,
    new Description ("test description").description,
    new DueDate ("16/6/24").dueDate
  )

