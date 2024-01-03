function addProjToSideBar(projName) {
    // Parent to append the project to
    const parentProjList = document.querySelector('.added-projects')

    if(parentProjList.childElementCount == 10) {
        return
    }

    // The new project
    const newProj = document.createElement('button')
    newProj.className = 'Project'
    newProj.innerHTML = projName

    parentProjList.appendChild(newProj)
}

function getProjName(e) {
    // inputting project name.
    const addProjInSide = document.querySelector('.type-proj-name')

    // Check number of projects length.
    const parentProjList = document.querySelector('.added-projects')

    if(parentProjList.childElementCount == 10) {
        const outputError = document.querySelector('.output-error')
        outputError.style.display = 'block'
        return
    }
    
    // Display input for enterin project name.
    if(e.target.className == 'add-proj-btn') {   
        addProjInSide.style.display = 'flex'
    }

    // Getting project name.
    if(e.target.className == 'submit-btn-proj') {
        const projName = document.getElementById('projName').value
        addProjInSide.style.display = 'none'
        addProjToSideBar(projName)
    }

}

export {getProjName}