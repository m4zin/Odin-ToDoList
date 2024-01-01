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
    
    checkPriorDel.append(
        checkboxDiv,
        priorityLvl,
        taskDelBtn
    )

    task.append(
        titleDescDate,
        checkPriorDel
    )

    listOfTasks.append(
        task
    )
}

// function addTaskContent() {
//     let formInfo = getFormTaskInfo()

//     // Task name, desc, due date, and priority value.
//     document.querySelector('.task-name').innerHTML = formInfo.title
//     document.querySelector('.task-desc').innerHTML = formInfo.desc
//     document.querySelector('.priority-level').innerHTML = `${formInfo.priority} priority.`
//     document.querySelector('.task-due-date').innerHTML = `Due ${formInfo.date}`
// }

export {createTask}