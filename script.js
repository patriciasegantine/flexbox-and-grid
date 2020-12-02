function scrollSmooth() {
  const internalLinks = document.querySelectorAll('.js-menu a[href^="#"]');
  if (internalLinks.length) {
    internalLinks.forEach((link) => {
      function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }

      link.addEventListener('click', scrollToSection);
    });
  }
}

scrollSmooth();

function initScrollSmooth() {
  const sectionsScroll = document.querySelectorAll('.js-scroll');
  const halfWindow = window.innerHeight * 0.7;

  if (sectionsScroll.length) {
    sectionsScroll[0].classList.add('active');
    
    function animaScroll() {
      sectionsScroll.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - halfWindow < 0;
        if (isSectionVisible) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    }

    window.addEventListener('scroll', animaScroll);
  }
}

initScrollSmooth();
