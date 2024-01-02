import { getFormTaskInfo } from "./handleForm"

function createTask() {
    // Info from form
    let formInfo = getFormTaskInfo()

    // The list which the task will be appended to.
    const listOfTasks = document.querySelector('.list-of-tasks')

    // The task itself.
    const task = document.createElement('div')
    task.className = 'task'

    // title, desc & date of task.
    const titleDescDate = document.createElement('div')
    titleDescDate.className = 'title-desc-date'

    const taskTitle = document.createElement('h2')
    taskTitle.className = 'task-name'
    taskTitle.innerHTML = formInfo.title

    const taskDesc = document.createElement('h3')
    taskDesc.className = 'task-desc'
    taskDesc.innerHTML = formInfo.desc

    const taskDate = document.createElement('p')
    taskDate.className = 'task-due-date'
    taskDate.innerHTML = `Due ${formInfo.date}`

    titleDescDate.append(
        taskTitle,
        taskDesc,
        taskDate
    )

    // Checkbox, priority & deletion of task.
    const checkPriorDel = document.createElement('div')
    checkPriorDel.className = 'checkbox-priority-del'

    // For checbox
    const checkboxDiv = document.createElement('div')
    checkboxDiv.className = 'checkbox-div'

    const checkboxInput = document.createElement('input')
    checkboxInput.type = 'checkbox'
    checkboxDiv.name = 'checkbox'
    checkboxDiv.id = 'checkbox'

    const labelForCheckbox = document.createElement('label')
    labelForCheckbox.innerHTML = 'Done'
    labelForCheckbox.htmlFor = 'checkbox'

    checkboxDiv.append(
        checkboxInput,
        labelForCheckbox
    )

    // Priority level
    const priorityLvl = document.createElement('p')
    priorityLvl.className = 'priority-level'
    priorityLvl.innerHTML = `${formInfo.priority} priority`

    // Delete button for task
    const taskDelBtn = document.createElement('button')
    taskDelBtn.className = 'del-task-btn'
    taskDelBtn.innerHTML = 'Delete'

    // Edit button for task
    const taskEditBtn = document.createElement('button')
    taskEditBtn.className = 'edit-task-btn'
    taskEditBtn.innerHTML = 'Edit'

    checkPriorDel.append(
        checkboxDiv,
        priorityLvl,
        taskDelBtn,
        taskEditBtn
    )

    task.append(
        titleDescDate,
        checkPriorDel
    )

    listOfTasks.append(
        task
    )
}

// Function to handle the delete button click
function TaskDeleteAndEditForm(e) {
    // Box in main content area.
    const addTaskAndListBox = document.querySelector('.add-task-and-list')
    // Form to fill the task information.
    const editTaskInfo = document.querySelector('.edit-task-info')
    // Closes task item to clicked target.
    const taskItem = e.target.closest('.task');

    // Deletion of task.
    if(e.target.className == 'del-task-btn') {
        taskItem.remove();
    }

    // Editing of task.
    if(e.target.className == 'edit-task-btn') {

        let prevTaskInfo = retrievePrevTaskInfo(taskItem)

        // Putting old vals into editing form
        // Title
        const inputTitle = document.getElementById('editedTitle')
        inputTitle.value = prevTaskInfo.taskTitle
        // Description
        const inputDesc = document.getElementById('editedDesc')
        inputDesc.value = prevTaskInfo.taskDesc
        // Date
        const inputDate = document.getElementById('editedDate')
        inputDate.value = prevTaskInfo.taskDueDate.slice(4)
        // Priority
        const inputPriority = document.getElementById('editedPriority')

        if(prevTaskInfo.taskPriority.slice(0, 3) == 'low') {
            inputPriority.value = prevTaskInfo.taskPriority.slice(0, 3)
        } else if(prevTaskInfo.taskPriority.slice(0, 6) == 'medium') {
            inputPriority.value = prevTaskInfo.taskPriority.slice(0, 6)
        } else if(prevTaskInfo.taskPriority.slice(0, 4) == 'high') {
            inputPriority.value = prevTaskInfo.taskPriority.slice(0, 4)
        }

        // The finishing edit button for task
        const finishEditBtn = document.querySelector('.edit-task-submit-btn')
        finishEditBtn.addEventListener('click', () => {
            if(inputTitle.value && inputDesc.value && 
                inputDate.value && inputPriority.value) {
                 setEditedTaskInfo(inputTitle, inputDesc, inputDate, inputPriority, taskItem)
             }
            addTaskAndListBox.style.display = 'grid'
            editTaskInfo.style.display = 'none'
        })

        addTaskAndListBox.style.display = 'none'
        editTaskInfo.style.display = 'flex'
    }
}

function setEditedTaskInfo(editedTitle, editedDesc, editedDate, editedPriority, taskItem) {
    // Task Title
    const title = taskItem.querySelector('.task-name')
    // Task desc
    const desc = taskItem.querySelector('.task-desc')
    // Task due date
    const date = taskItem.querySelector('.task-due-date')
    // Task priority
    const priority = taskItem.querySelector('.priority-level')

    // Now updating newly edited info.
    title.innerHTML = editedTitle.value
    desc.innerHTML = editedDesc.value
    date.innerHTML = `Due ${editedDate.value}`
    priority.innerHTML = `${editedPriority.value} priority`
}

function retrievePrevTaskInfo(taskItem) {
    // Getting previous information
    // Task Title
    const taskTitle = taskItem.querySelector('.task-name').innerHTML
    // Task desc
    const taskDesc = taskItem.querySelector('.task-desc').innerHTML
    // Task due date
    const taskDueDate = taskItem.querySelector('.task-due-date').innerHTML
    // Task priority
    const taskPriority = taskItem.querySelector('.priority-level').innerHTML

    return {taskTitle, taskDesc, taskDueDate, taskPriority}
}

export {createTask, TaskDeleteAndEditForm}