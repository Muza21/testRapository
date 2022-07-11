<<<<<<< HEAD
const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click',() =>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
=======
const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click',() =>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
>>>>>>> 4066c4165e78cbc91e7e66e4567d72fde173e71f
}