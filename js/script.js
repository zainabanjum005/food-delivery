/*=============== SHOW MENU ===============*/
const showMenu =(navId, toggleId)=>{
    const nav =document.getElementById(navId),
          toggle = document.getElementById(toggleId)

    toggle.addEventListener('click' ,()=>{
        nav.classList.toggle('show-menu')
    })
}   
showMenu('nav-menu' , 'nav-toggle')

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== SWIPER REVIEWS ===============*/
const swiperReviews = new Swiper('.reviews_swiper', {
  loop: true,
  spaceBetween:16,
  grabCursor:true,
  speed:600,
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay:{
    delay:3000,
    disableOnInteraction:false,
  }
});

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-fill'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-fill' : 'ri-sun-fill'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-fill' ? 'add' : 'remove'](iconTheme)
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

const sr =ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:2000,
  Delay:300,
  reset:true,
})

sr.reveal(`.home_title , .home_description, .home_data, .button ,.footer_container`,{interval:100})
sr.reveal(`.home_image`, {delay:900})
sr.reveal(`.home_phone`, {origin:'left',delay:1500})
sr.reveal(`.home_comment`, {origin:'right',delay:1800})
sr.reveal(`.home_social`, {origin:'bottom',delay:2100})
sr.reveal(`.service_card , .service_title, .service_description`, {interval:100})
sr.reveal(`.menu_card`, {interval:100})
sr.reveal(`.reviews_content`, {origin:'right'})
sr.reveal(`.reviews_image`, {origin:'left',delay:600})

sr.reveal(`.app .section_subtitle , .app .section_title, .app_description, .app .button`,{interval:100})

sr.reveal(`.app_image`, {origin:'bottom',delay:900})
sr.reveal(`.reviews_image`, {origin:'left',delay:600})
