import {sendTaskForm, goBackToIndex, editFormVals} from './handleForm.js'
import {createTask, DeleteAndEditForm}  from './tasks.js'

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
// Doing it this way because delete button of task is not added yet,
// Until task is added.
const parentElemOfList = document.querySelector('.list-of-tasks')
parentElemOfList.addEventListener('click', DeleteAndEditForm)


// Once user clicks on edit
    // A form will be sent that will contain previous info of task.
    // This information can be edited and submitted.
    // The edited information will now be updated in the specific task.