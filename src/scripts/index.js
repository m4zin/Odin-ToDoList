import { sendTaskForm, goBackToIndex } from './handleForm.js'
import { createTask, TaskDeleteAndEditForm, showQuickTasks } from './tasks.js'

// Today's quick tasks btn
const quickTasksBtn = document.querySelector('.quick-tasks-btn')
quickTasksBtn.addEventListener('click', showQuickTasks)

// Sends a form to fill info for new task.
const createTaskBtn = document.querySelector('.add-task-btn')
createTaskBtn.addEventListener('click', sendTaskForm)

// Goes back to main page whilst adding task.
const goBackBtn = document.querySelector('.go-back')
goBackBtn.addEventListener('click', goBackToIndex)

// Adding task to list
const addTaskToList = document.querySelector('.task-submit-btn')
addTaskToList.addEventListener('click', () => {
    createTask()
    goBackToIndex()
})

// Handling deletion of tasks
// Doing it this way because delete button not added -
// Until task is added.
const parentElemOfList = document.querySelector('.list-of-tasks')
parentElemOfList.addEventListener('click', TaskDeleteAndEditForm)




