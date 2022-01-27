const panels = document.querySelectorAll('.panel')


//so basicaly you create an function to take off the active class 
//before you execute the class that make them active
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}