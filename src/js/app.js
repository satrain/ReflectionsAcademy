function initMobileSlider(className) {
    const ourStoryList = document.querySelector(className);
    let isDragging = false;
    let startX;
    let scrollLeft;

    ourStoryList.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.pageX - ourStoryList.offsetLeft;
        scrollLeft = ourStoryList.scrollLeft;
    });

    ourStoryList.addEventListener("mouseup", () => {
        isDragging = false;
    });

    ourStoryList.addEventListener("mouseleave", () => {
        isDragging = false;
    });

    ourStoryList.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - ourStoryList.offsetLeft;
        const walk = x - startX;
        ourStoryList.scrollLeft = scrollLeft - walk;
    });
}

if(document.querySelector('.our-story-list')) { initMobileSlider('.our-story-list') }
if(document.querySelector('.real-results-wrapper')) { initMobileSlider('.real-results-wrapper') }
if(document.querySelector('.instagram-posts-wrapper')) { initMobileSlider('.instagram-posts-wrapper') }

const header = document.querySelector('header');
const sections = document.querySelectorAll('.section');

// Function to check if an element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to toggle classes based on section visibility
function toggleClasses() {
  sections.forEach((section) => {
    const dataBackground = section.getAttribute('data-background');
    if (isElementInViewport(section) && section.getBoundingClientRect().top < 100) {
      if (dataBackground === 'dark') {
        header.classList.remove('dark');
        header.classList.add('light');
      } else if (dataBackground === 'light') {
        header.classList.remove('light');
        header.classList.add('dark');
      }
    }
  });
}

// Attach the event listener to the window's scroll event
window.addEventListener('scroll', toggleClasses);

// Initial check in case some section is already in the viewport on page load
toggleClasses();

const stagesWrapper = document.querySelector('.stages-wrapper');
const stageItems = document.querySelectorAll('.stage-item');
let currentSlide = 0;
let isScrolling = false;

function scrollToSlide(index) {
    if (index >= 0 && index < stageItems.length) {
        isScrolling = true;
        stagesWrapper.scrollTo({
            left: stageItems[index].offsetLeft - 60,
            behavior: 'smooth'
        });
        currentSlide = index;
        setTimeout(() => {
            isScrolling = false;
        }, 800); // Adjust the duration of scrolling animation
    }
}

stagesWrapper.addEventListener('wheel', (event) => {
  if ((currentSlide === 0 && event.deltaY < 0) || (currentSlide === stageItems.length - 1 && event.deltaY > 0)) {
    // If on the last slide and scrolling down, allow default behavior
    return;
  }

  event.preventDefault(); // Prevent default scroll behavior
  event.stopPropagation(); // Stop event propagation

    if (!isScrolling) {
        if (event.deltaY > 0) {
            scrollToSlide(currentSlide + 1);
        } else {
            scrollToSlide(currentSlide - 1);
        }
    }
});

const nextButtons = document.querySelectorAll('.next-stage-btn');

nextButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        scrollToSlide(index + 1);
    });
});