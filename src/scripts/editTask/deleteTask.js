//delete task off task list

export function deleteTask(list, task) {

  list.splice(list.indexOf(task), 1)
  
}