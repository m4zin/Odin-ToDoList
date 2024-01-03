import {sendTaskForm, goBackToIndex} from './handleForm.js'
import {createTask, TaskDeleteAndEditForm}  from './tasks.js'
import { getProjName } from './projects.js'

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

const parentElemOfAddProj = document.querySelector('.tasks-and-projects')
parentElemOfAddProj.addEventListener('click', getProjName)

// What is left?
    // Addition of projects, each project can contain it's own tasks added by user.
// How do we go about it?
    // First the user creates a project and names it.
    // Then the user will have the same functionality they had in creating -
    // Tasks for today, but for each new project instead.
    // Main thing to consider is how to implement it so that, each project will -
    // contain it's own set of tasks that the user creates.
    // Also figure out how we can re-use the code we created till now for it,
    // without having to create new files and shit.


