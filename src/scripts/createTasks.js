import { getFormTaskInfo } from "./handleForm";

function addTaskToList() {
    let newTask = getFormTaskInfo()
    const formAddBtn = document.querySelector('.task-submit-btn')

    formAddBtn.addEventListener('click', () => {
        // The list which the task will be appended to.
        const listOfTasks = document.querySelector('.list-of-tasks')

        // The task itself.
        const task = document.createElement('div')
        task.className = 'task'

        // title, desc & date of task.
        const titleDescDate = document.createElement('div')
        titleDescDate.className = 'title-desc-date'

        const taskTitle = document.createElement('h2')
        const taskDesc = document.createElement('h2')
        const taskdDate = document.createElement('p')

        // Checkbox and priority of task.
        const checkAndPrior = document.createElement('div')
        checkAndPrior.className = 'checkbox-and-priority'

    })
}

export {addTaskToList}