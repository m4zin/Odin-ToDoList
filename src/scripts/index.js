import {sendTaskForm, goBackToIndex} from './handleForm.js'
import { addTaskToList } from './createTasks.js'

// Sends a form to fill info for new task.
const addTaskBtn = document.querySelector('.add-task-btn')
addTaskBtn.addEventListener('click', sendTaskForm)

// Goes back to main page whilst adding task.
const goBackBtn = document.querySelector('.go-back')
goBackBtn.addEventListener('click', goBackToIndex)

addTaskToList()
