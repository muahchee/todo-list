//change checkbox check status

export function checkOff (task, item) {

  task.checklist[item] = "checked";

}

export function uncheck (task, item) {

  task.checklist[item] = "unchecked";

}