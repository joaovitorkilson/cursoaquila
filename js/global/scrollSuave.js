

export default function scrollSuave() {
  
  const linksInternosMenu = document.querySelectorAll('.js-menu ul a[href^="#"]')
  const contactButton = document.querySelector('#contact-button')
  const linksInternos = [...linksInternosMenu, contactButton]
  function removeColor() {
    linksInternos.forEach(link => {
      link.classList.remove('menu-item-active')
    })
  }

  function scrollToSection(event) {
    removeColor()
    event.preventDefault()
    event.currentTarget.classList.add('menu-item-active')
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    const top = section.offsetTop
    
      window.scrollTo({
        top: top - 72,
        behavior: 'smooth'
      })

  }


  linksInternos.forEach(link => {
    link.addEventListener('click', scrollToSection)
  })

}