import { DeleteAndEditForm } from "./tasks"

function sendTaskForm(e) {
    // Box in main content area.
    const addTaskAndListBox = document.querySelector('.add-task-and-list')
    // Form to fill the task information.
    const formInfoFill = document.querySelector('.add-task-form')

    // When add task is clicked, hide the box & display form.
    addTaskAndListBox.style.display = 'none'
    formInfoFill.style.display = 'flex'
}

function goBackToIndex() {
    const addTaskAndListBox = document.querySelector('.add-task-and-list')
    const formInfoFill = document.querySelector('.add-task-form')

    formInfoFill.style.display = 'none'
    addTaskAndListBox.style.display = 'grid'    
}

function createTask(title, desc, date, priority) {
    this.title = title;
    this.desc = desc;
    this.date = date;
    this.priority = priority;
}

function getFormTaskInfo() {
    let titleVal = document.getElementById('title').value
    let descVal = document.getElementById('description').value
    let dateVal = document.getElementById('date').value
    let priorityVal = document.getElementById('priority').value

    if(titleVal == '') {
        titleVal = 'Empty'
    } 
    
    if(descVal == '') {
        descVal = 'Empty'
    }

    if(dateVal == '') {
        dateVal = 'date not mentioned.'
    }

    const task = new createTask(
        titleVal,
        descVal,
        dateVal,
        priorityVal
    )

    return task
}

export {sendTaskForm, goBackToIndex, getFormTaskInfo}