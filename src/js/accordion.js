window.addEventListener('DOMContentLoaded', (event) => {

    let accordionWrapper = document.querySelector('.accordion-wrapper')
    let accordion = document.querySelectorAll('.accordion-wrapper > .item')
    
    for(let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', () => {
            if(!accordionWrapper.classList.contains('disabled')) {
                accordion[i].classList.toggle('active')
                accordion[i].querySelector('img').classList.remove('active')
            }
        })
    }

});