// function to handle the slider
/**
 * 
 * add following css style to make it work
 * .wrapper {
 *      overflow-x: auto;
        scroll-snap-type: x mandatory;
 * }
   .item {
        flex: 0 0 100%;
        scroll-snap-align: start;
   }
 */
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

initMobileSlider('.our-story-list')
initMobileSlider('.real-results-wrapper')
initMobileSlider('.instagram-posts-wrapper')


// const sliderContainer = document.querySelector(".brand-logos-wrapper");
// const slides = sliderContainer.querySelectorAll("img");

// let slideIndex = 0;
// const slideInterval = 3000; // Change slide every 3 seconds

// function nextSlide() {
//     slideIndex = (slideIndex + 1) % slides.length;
//     showSlide(slideIndex);
// }

// function showSlide(index) {
//     const offset = -index * 100; // Calculate the offset based on the slide index
//     sliderContainer.style.transform = `translateX(${offset}%)`;
// }

// function startAutoplay() {
//     showSlide(slideIndex);
//     setInterval(nextSlide, slideInterval);
// }

// startAutoplay();

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