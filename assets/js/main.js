/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_16o1nnh','template_73jr6yo','contact-form','7FZ0e_hX5Zh43UQrJ')
    .then(() => {
        // Show sent message
        contactMessage.textContent = 'Message sent successfully!'

        // Remove message after five seconds
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

        // Clear input fields
        contactForm.reset()
    }, () =>{
        // Show error message
        contactMessage.textContent = 'Message not sent, try again!'
    })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__perfil, .about__image, .contact__mail`, {origin: 'right'})
sr.reveal(`.home__name, .home__info, .about__container, .section__title-1, .about__info, .contact__social, .contact__data`, {origin: 'left'})
sr.reveal(`.projects__card`, {interval: 100})

/*=============== POP UP TRIAL ===============*/ 
// Get the project popup elements
const projectPopup = document.getElementById('project-popup');
const projectPopupContent = document.querySelector('.project-popup-content');
const projectPopupClose = document.querySelector('.project-popup-close');
const projectButtons = document.querySelectorAll('.projects__button');

// Add click event listener to each project button
projectButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Populate the popup content
    document.querySelector('.project-popup-title').textContent = projectData[index].title;
    document.querySelector('.project-popup-description').innerHTML = projectData[index].description;

    // Add project images to the popup
    const projectImagesContainer = document.querySelector('.project-popup-images');
    projectImagesContainer.innerHTML = '';
    projectData[index].images.forEach(image => {
      const img = document.createElement('img');
      img.src = image;
      projectImagesContainer.appendChild(img);
    });

    // Show the popup
    projectPopup.style.display = 'block';
  });
});

// Close the popup when the close button is clicked
projectPopupClose.addEventListener('click', () => {
  projectPopup.style.display = 'none';
});

// Close the popup when the user clicks outside of it
window.addEventListener('click', (event) => {
  if (event.target == projectPopup) {
    projectPopup.style.display = 'none';
  }
});

// Project data
const projectData = [
  {
    title: 'Scroll Seeker App',
    description: 'This is a CLI development project that helps you find the best scrolling positions on web pages.',
    images: ['assets/img/project-1.jpg', 'assets/img/project-2.jpg', 'assets/img/project-3.jpg']
  },
  {
    title: 'Personal Portfolio',
    description: 'This is my personal portfolio website, showcasing my skills and projects.',
    images: ['assets/img/project-2.jpg', 'assets/img/project-1.jpg', 'assets/img/project-3.jpg']
  },
  {
    title: 'Health+',
    description: 'This is a prototyping project for a health-focused mobile application.',
    images: ['assets/img/project-3.jpg', 'assets/img/project-1.jpg', 'assets/img/project-2.jpg']
  },
  {
    title: 'Dreamworld River Rapids Disaster',
    description: 'This is a design solution project for a case study on the Dreamworld River Rapids Disaster.',
    images: ['assets/img/project-1.jpg', 'assets/img/project-2.jpg', 'assets/img/project-3.jpg']
  }
];