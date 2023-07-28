function slideInNav() {
    document.getElementById("mainNav").classList.add("slideIn");
  }
  
  window.onload = slideInNav;
  
  // JavaScript to detect scroll direction
  let prevScrollpos = window.pageYOffset;
  let fadingSection = null; // Store the section that is currently fading out
  const fadingThreshold = 600; // Adjust this value to set the distance from the top before fading out
  
  window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    const scrollingUp = currentScrollPos < prevScrollpos;
  
    if (scrollingUp) {
        fadeBackIn();
    } else {
        fadeOutSections();
    }
  
    prevScrollpos = currentScrollPos;
  };
  
  // JavaScript to fade out sections
  function fadeOutSections() {
    if (fadingSection === null) {
        const sections = document.querySelectorAll('.section');
        for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            const sectionTop = section.getBoundingClientRect().top;
  
            // Check if the section is partially visible (below the fadingThreshold)
            if (sectionTop < window.innerHeight - fadingThreshold && sectionTop > -section.offsetHeight) {
                section.classList.add('faded-out');
                fadingSection = section;
                break;
            }
        }
    }
  }
  
  // JavaScript to fade in the section when scrolled to the top
  function fadeBackIn() {
    if (fadingSection !== null && window.pageYOffset <= fadingThreshold) {
        fadingSection.classList.remove('faded-out');
        fadingSection = null;
    }
  }
  
  function toggleNavMenu() {
    const menu = document.getElementById("menuItems");
    menu.classList.toggle("show-mobile-menu");
  }
  
  