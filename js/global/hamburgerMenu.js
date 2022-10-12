
export default function hamburgerMenu() {

  const btnMobile = document.querySelector('#btn-mobile')
  const nav = document.querySelector('nav')
   
  function toggleMenu() {
    nav.classList.toggle('active')
  }
  btnMobile.addEventListener('click', toggleMenu)
  
  
  function resizeScreen() {
    const screen = matchMedia('(min-width: 1000px)').matches
    if (screen) {
        if (nav.classList.contains('active')) {
          nav.classList.remove('active')
  
        }
    }
  }
  
  window.addEventListener('resize', resizeScreen)
  
  function toggleBtnMobile() {
  
        btnMobile.classList.toggle('open')
  
  }
  
  btnMobile.addEventListener('click', toggleBtnMobile)
}

