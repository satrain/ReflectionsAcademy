window.addEventListener('DOMContentLoaded', (event) => {

    let accordion = document.querySelectorAll('.accordion-wrapper > .item')
    
    for(let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', () => {
            accordion[i].classList.toggle('active')
        })
    }

});