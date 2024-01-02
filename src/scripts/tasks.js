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
function DeleteAndEditForm(e) {
    // Box in main content area.
    const addTaskAndListBox = document.querySelector('.add-task-and-list')
    // Form to fill the task information.
    const editTaskInfo = document.querySelector('.edit-task-info')
    // Closes task item to clicked target.
    const taskItem = e.target.closest('.task');

    // Deletion of task.
    if(e.target.className == 'del-task-btn') {
        console.log(taskItem)
        taskItem.remove();
    }

    // Editing of task.
    if(e.target.className == 'edit-task-btn') {

        let prevTaskInfo = retrievePrevTaskInfo(taskItem)

        // Putting old vals into editing form
        const inputTitle = document.getElementById('editedTitle')
        inputTitle.value = prevTaskInfo.taskTitle
        const inputDesc = document.getElementById('editedDesc')
        inputDesc.value = prevTaskInfo.taskDesc

        // Debug why date and priority not showing up in editing form vals
            // const inputDate = document.getElementById('editedDate')
            // inputDate.value = prevTaskInfo.taskDueDate
            // const inputPriority = document.getElementById('editedPriority')
            // inputPriority.value = prevTaskInfo.taskPriority

        addTaskAndListBox.style.display = 'none'
        editTaskInfo.style.display = 'flex'
    }
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

export {createTask, DeleteAndEditForm}