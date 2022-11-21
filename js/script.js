import hamburgerMenu from './global/hamburgerMenu.js'

import menuCourses from './sections/menuCourses.js'

import gallery from './sections/gallery.js'

import questionCard from './sections/questions.js'

import scrollSuave from './global/scrollSuave.js'

import effects from './global/effects.js'

import animeScroll from './global/animeScroll.js'



// Global
hamburgerMenu()
scrollSuave()
effects(null)

// Sections 

menuCourses()
gallery()
questionCard()


//Animation

if (window.SimpleAnime) {

  new SimpleAnime()
}

animeScroll()