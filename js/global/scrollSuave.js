

export default function scrollSuave() {
  
  const linksInternosMenu = document.querySelectorAll('a[href^="#"]')

  function removeColor() {
    linksInternosMenu.forEach(link => {
      link.classList.remove('menu-item-active')
    })
  }

  function scrollToSection(event) {
    removeColor()
    event.preventDefault()
    if (event.currentTarget.classList.contains('item-menu-top')) {
      event.currentTarget.classList.add('menu-item-active')
    }
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    const top = section.offsetTop
    
      window.scrollTo({
        top: top - 72,
        behavior: 'smooth'
      })

  }


  linksInternosMenu.forEach(link => {
    link.addEventListener('click', scrollToSection)
  })

}