window.addEventListener('DOMContentLoaded', (event) => {
  // preload images so the hover effect doesnt have blink effect
  if (document.images) {
    img1 = new Image();
    img1.src = "/wp-content/uploads/2023/12/01R.jpg";
    img2 = new Image();
    img2.src = "/wp-content/uploads/2023/12/02R.png";
    img3 = new Image();
    img3.src = "/wp-content/uploads/2023/12/03R.jpg";
    img4 = new Image();
    img4.src = "/wp-content/uploads/2023/12/04R.jpg";
    img5 = new Image();
    img5.src = "/wp-content/uploads/2023/12/05R.jpg";
    img6 = new Image();
    img6.src = "/wp-content/uploads/2023/12/06R.jpg";
    img7 = new Image();
    img7.src = "/wp-content/uploads/2023/12/07R.jpg";
    img8 = new Image();
    img8.src = "/wp-content/uploads/2023/12/08R.jpg";
    img9 = new Image();
    img9.src = "/wp-content/uploads/2023/12/09R.jpg";
    img10 = new Image();
    img10.src = "/wp-content/uploads/2023/12/10R.jpg";
    img11 = new Image();
    img11.src = "/wp-content/uploads/2024/01/flash-masterclass-hover-image.png";
    img12 = new Image();
    img12.src = "/wp-content/uploads/2024/01/photo-editing-masterclass-hover-image.png";
  }

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
  if(document.querySelector('.about-follow-us')) { initMobileSlider('.about-follow-us .images-wrapper') }
  
  const header = document.querySelector('header');
  const sections = document.querySelectorAll('.section');

  let headerBtn = document.querySelector('.btn-header-menu')
  let headerMenu = document.querySelector('.header-menu')

  if(header) {
    headerBtn.addEventListener('click', () => {
      header.classList.add('header-fixed')
      if(headerMenu.classList.contains('active')) {
        headerMenu.classList.add('close-animation')
        headerMenu.classList.remove('active')
        header.classList.remove('header-fixed')
        headerBtn.innerHTML = 'Menu';
      }
      else {
        headerMenu.classList.add('active')
        headerBtn.innerHTML = 'Close';
      }

      setTimeout( () => {headerMenu.classList.remove('close-animation')}, 1000);
    })
  }
  
  // Attach the event listener to the window's scroll event
  let lastScrollTop = 0;
  window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      // Scrolling down
      document.querySelector("header").style.transform = "translateY(-100%)";
    } else {
      // Scrolling up
      document.querySelector("header").style.transform = "translateY(0)";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  }, false);

  // Get all elements with the 'animated' class
  var animatedElements = document.querySelectorAll('.animated');

  // Function to handle the intersection change
  function handleIntersection(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // If the element is in the viewport, add the 'active' class
        entry.target.classList.add('active');
      }
      // You can optionally handle the case when the element is not in the viewport,
      // but for this example, we're not removing the 'active' class when leaving the viewport.
    });
  }

  // Set up the Intersection Observer for each animated element
  var options = {
    root: null, // Use the viewport as the root
    threshold: 0.5 // Trigger when 50% of the element is visible
  };

  animatedElements.forEach(function (element) {
    var observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(element);
  });

  const stagesWrapper = document.querySelector('.stages-wrapper');
  const nextBtns = document.querySelectorAll('.next-stage-btn');
  const backBtns = document.querySelectorAll('.back-stage-btn');

  if(stagesWrapper) {
    nextBtns.forEach(btn => {
      btn.addEventListener('click', function() {
          showNextStage(this);
      });
  });

  backBtns.forEach(btn => {
      btn.addEventListener('click', function() {
          showPreviousStage(this);
      });
  });

  function showNextStage(button) {
      const currentStage = button.closest('.stage-item');
      const nextStage = currentStage.nextElementSibling;

      if (nextStage) {
          transitionStages(currentStage, nextStage);
      }
  }

  function showPreviousStage(button) {
      const currentStage = button.closest('.stage-item');
      const prevStage = currentStage.previousElementSibling;

      if (prevStage) {
          transitionStages(currentStage, prevStage);
      }
  }

  function transitionStages(current, target) {
      current.style.transition = 'opacity 0.5s ease';
      target.style.transition = 'opacity 0.5s ease';

      current.style.opacity = 0;
      current.style.pointerEvents = 'none';

      setTimeout(() => {
          current.style.display = 'none';
          current.classList.remove('active');
          current.style.pointerEvents = 'auto';
          
          target.style.opacity = 0;
          target.style.display = 'block';

          setTimeout(() => {
              target.style.opacity = 1;
              target.classList.add('active');
          }, 25);
      }, 50);
    }
  }

  // const stageItems = document.querySelectorAll('.stage-item');
  // let currentSlide = 0;
  // let isScrolling = false;

  // function scrollToSlide(index) {
  //     if (index >= 0 && index < stageItems.length) {
  //         isScrolling = true;
  //         stagesWrapper.scrollTo({
  //             left: stageItems[index].offsetLeft - 60,
  //             behavior: 'smooth'
  //         });
  //         currentSlide = index;
  //         setTimeout(() => {
  //             isScrolling = false;
  //         }, 800); // Adjust the duration of scrolling animation
  //     }

  //     if(window.matchMedia("(max-width: 1280px)").matches) {
  //       stagesWrapper.scrollTo({
  //         left: stageItems[index].offsetLeft - 20,
  //         behavior: 'smooth'
  //       });
  //     }
  // }

  // if(stagesWrapper) {
  //   stagesWrapper.addEventListener('wheel', (event) => {
  //     if ((currentSlide === 0 && event.deltaY < 0) || (currentSlide === stageItems.length - 1 && event.deltaY > 0)) {
  //       // If on the last slide and scrolling down, allow default behavior
  //       return;
  //     }

  //     event.preventDefault(); // Prevent default scroll behavior
  //     event.stopPropagation(); // Stop event propagation

  //       if (!isScrolling) {
  //           if (event.deltaY > 0) {
  //               scrollToSlide(currentSlide + 1);
  //           } else {
  //               scrollToSlide(currentSlide - 1);
  //           }
  //       }
  //   });
  // }

  // const nextButtons = document.querySelectorAll('.next-stage-btn');

  // nextButtons.forEach((button, index) => {
  //     button.addEventListener('click', () => {
  //         scrollToSlide(index + 1);
  //     });
  // });

  if(document.querySelector('.accordion-hover-img')) {

    let accordionItems = document.querySelectorAll('.accordion-wrapper .item')

    accordionItems.forEach(item => {
      const img = item.querySelector('img');

      item.addEventListener('mouseover', () => {
        const activeImg = document.querySelector('.item img.active');
        if (activeImg) {
          activeImg.classList.add('fadeout-rotate');
          activeImg.classList.remove('active');
        }

        if(!item.classList.contains('active')) {
          img.classList.add('active');
        }
      
        });

      // item.addEventListener('mouseleave', () => {
      //   img.classList.remove('active');
      // });
    });

  }

  window.addEventListener("load", function() {
    if (document.querySelector('.slider-holder')) {
      const slider = document.querySelector(".slider-holder");
      const slides = document.querySelectorAll(".slider-holder img");
      const slideWidth = slides[0].offsetWidth + 10; // Slide width plus 10px space
      const slidesToShow = 3;
      const totalSlides = slides.length;
      let isDragging = false;
      let startPosition = 0;
      let initialPosition = 0;
      let currentPosition = 0;
      const sensitivity = 3.5; // Adjust this value to increase/decrease sensitivity

      function moveSlide() {
          let maxPosition = totalSlides - slidesToShow;
          if (currentPosition > maxPosition) {
              currentPosition = maxPosition;
          } else if (currentPosition < 0) {
              currentPosition = 0;
          }
          slider.style.transform = `translateX(-${currentPosition * slideWidth}px)`;
      }

      function startDrag(e) {
          isDragging = true;
          startPosition = e.clientX || e.touches[0].clientX;
          initialPosition = currentPosition;
          e.preventDefault(); // Prevent default drag behavior
      }

      function endDrag() {
          isDragging = false;
          moveSlide();
      }

      function drag(e) {
          if (isDragging) {
              const clientX = e.clientX || e.touches[0].clientX;
              const deltaX = (clientX - startPosition) * sensitivity;
              currentPosition = initialPosition - Math.round(deltaX / slideWidth);
              moveSlide();
              e.preventDefault(); // Prevent default scrolling on touch devices
          }
      }

      function slideLeft() {
          if (currentPosition > 0) {
              currentPosition--;
              moveSlide();
          }
      }

      function slideRight() {
          if (currentPosition < totalSlides - slidesToShow) {
              currentPosition++;
              moveSlide();
          }
      }

      document.querySelector(".left-arrow").addEventListener("click", slideLeft);
      document.querySelector(".right-arrow").addEventListener("click", slideRight);

      // Add drag event listeners for both desktop and mobile
      slider.addEventListener("mousedown", startDrag);
      window.addEventListener("mouseup", endDrag);
      window.addEventListener("mousemove", drag);

      // Add touch event listeners for mobile
      slider.addEventListener("touchstart", startDrag);
      window.addEventListener("touchend", endDrag);
      window.addEventListener("touchmove", drag);
    }
  })

  let playBtn = document.querySelector('#playVideo')
  let courseVideo = document.querySelector('.video-holder video')
  let videoHolder = document.querySelector('.video-holder')

  let mouseMoved = false;
  let timeout;

  // Function to hide the play button
  const hidePlayButton = () => {
    playBtn.classList.add('hide');
  };

  // Function to show the play button
  const showPlayButton = () => {
    playBtn.classList.remove('hide');
  };

  if(playBtn) {

    // Event listeners for mouse movement
    videoHolder.addEventListener('mousemove', () => {
      mouseMoved = true;

      // If the play button is hidden, show it
      if (playBtn.classList.contains('hide')) {
        showPlayButton();
      }

    // Clear the timeout and reset it
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (!courseVideo.paused && !courseVideo.querySelector(':hover')) {
        hidePlayButton();
      }
    }, 1000);
    });

    // Event listener for when the mouse is over the video
    courseVideo.addEventListener('mouseover', () => {
      if (!mouseMoved) {
        showPlayButton();
      }
    });

    // Event listener for when the mouse leaves the video
    courseVideo.addEventListener('mouseout', () => {
      if (!courseVideo.paused && !courseVideo.querySelector(':hover')) {
        hidePlayButton();
      }
    });

    playBtn.addEventListener('click', () => {
      if(courseVideo.paused) {
        courseVideo.play();
        playBtn.innerHTML = '<svg class="pauseBtn" xmlns="http://www.w3.org/2000/svg" width="248" height="248" viewBox="0 0 248 248" fill="none"><g clip-path="url(#clip0_1251_42)"><path d="M124 247.5C192.207 247.5 247.5 192.207 247.5 124C247.5 55.7928 192.207 0.5 124 0.5C55.7928 0.5 0.5 55.7928 0.5 124C0.5 192.207 55.7928 247.5 124 247.5Z" stroke="white"/><path d="M111.5 72V176" stroke="white"/><path d="M137.5 72V176" stroke="white"/></g><defs><clipPath id="clip0_1251_42"><rect width="248" height="248" fill="white"/></clipPath></defs></svg>';
      }
      else {
        courseVideo.pause();
        playBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="248" height="248" viewBox="0 0 248 248" fill="none"><circle cx="124" cy="124" r="110.5" stroke="white"/><g filter="url(#filter0_d_66_184)"><path d="M94 72.0385L184 124L94 175.962L94 72.0385Z" stroke="white" shape-rendering="crispEdges"/></g><defs><filter id="filter0_d_66_184" x="89.5" y="71.1725" width="99.5" height="113.655" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_66_184"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_66_184" result="shape"/></filter></defs></svg>';
      }
      // let isPaused = courseVideo.paused;
      // courseVideo[isPaused ? "play" : "pause"]();
      playBtn.classList.toggle('hide');
    })
  }

if(document.querySelector('.reviews-slider')) {

  const slider = document.querySelector('.reviews-slider');
  const slides = document.querySelectorAll('.slide');
  const lArrow = document.querySelector('.l-arrow');
  const rArrow = document.querySelector('.r-arrow');
  
  let isDragging = false;
  let startPos = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let animationID = 0;
  let slideIndex = 0;
  let slideWidth = parseFloat(getComputedStyle(slides[0]).width) + 50; // Slide width + gap between slides
  
  // Set initial slide width based on the number of visible slides
  slider.style.width = `${slides.length * slideWidth - 50}px`; // Adjust for the last slide's gap
  
  // Function to handle mouse/touch start
  function startDrag(event) {
    isDragging = true;
    startPos = getPositionX(event);
    animationID = requestAnimationFrame(animation);
    slider.style.transition = 'none';
  }
  
  // Function to handle mouse/touch move
  function drag(event) {
    if (isDragging) {
      const currentPosition = getPositionX(event) + 90;
      console.log(currentPosition)
      const distance = currentPosition - startPos;
      currentTranslate = prevTranslate + distance;
  
      // Set the translate directly without over-scroll prevention
      setTranslate();
    }
  }
  
  // Function to handle mouse/touch end
  function endDrag() {
    cancelAnimationFrame(animationID);
    isDragging = false;
    const movedBy = currentTranslate - prevTranslate;
  
    if (movedBy < -100 && slideIndex < slides.length - 1) {
      slideIndex++;
    } else if (movedBy > 100 && slideIndex > 0) {
      slideIndex--;
    }
  
    currentTranslate = slideIndex * slideWidth;
    prevTranslate = currentTranslate;
  
    slider.style.transition = 'transform 0.3s ease-in-out';
    slider.style.transform = `translateX(-${currentTranslate}px)`;
  }
  
  // Function for smooth dragging animation
  function animation() {
    setTranslate();
    if (isDragging) {
      animationID = requestAnimationFrame(animation);
    }
  }
  
  // Helper function to set the translation
  function setTranslate() {
    slider.style.transform = `translateX(-${currentTranslate}px)`;
  }
  
  // Helper function to get the current position
  function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
  }
  
  // Event listeners for mouse/touch events
  // slider.addEventListener('mousedown', startDrag);
  // slider.addEventListener('touchstart', startDrag);
  
  // slider.addEventListener('mousemove', drag);
  // slider.addEventListener('touchmove', drag);
  
  // slider.addEventListener('mouseup', endDrag);
  // slider.addEventListener('touchend', endDrag);
  // slider.addEventListener('mouseleave', endDrag);
  
  // Event listeners for arrow buttons
  lArrow.addEventListener('click', () => moveSlide('left'));
  rArrow.addEventListener('click', () => moveSlide('right'));
  
  // Function to move slides
  function moveSlide(direction) {
    slideWidth = parseFloat(getComputedStyle(slides[0]).width) + 50;
    if (direction === 'left' && slideIndex > 0) {
      slideIndex--;
    } else if (direction === 'right' && slideIndex < slides.length - 1) {
      slideIndex++;
    }
  
    currentTranslate = slideIndex * slideWidth;
    prevTranslate = currentTranslate;
  
    slider.style.transition = 'transform 0.3s ease-in-out';
    slider.style.transform = `translateX(-${currentTranslate}px)`;
  }

}

  // Popup modal functionality
  let popups = document.querySelectorAll('.popup')
  let tesitmonials = document.querySelectorAll('.real-results-wrapper .item')
  let closePopup = document.querySelectorAll('.close-popup')

  if(popups) {
    for(let i = 0; i < tesitmonials.length; i++) {
      tesitmonials[i].addEventListener('click', () => {
        console.log('clicked')
        if(!tesitmonials[i].classList.contains('active')) {
          tesitmonials[i].querySelector('.popup').classList.add('active')
        }
      })
    }

    for(let i = 0; i < closePopup.length; i++) {
      closePopup[i].addEventListener('click', (event) => {
        event.stopPropagation();
        closePopup[i].parentNode.classList.remove('active')
      })
    }

    // Close popup when clicking outside of the video
    document.addEventListener('click', (event) => {
      if (event.target.classList.contains('background-overlay')) {
        for (let i = 0; i < popups.length; i++) {
          popups[i].classList.remove('active');
        }
      }
    });
  }
});