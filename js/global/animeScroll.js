


export default function animeScroll() {

  const sections = document.querySelectorAll('.js-scroll')
  

  if (sections.length) {
    function animaScroll() {
      const windowMetade = window.innerHeight * 0.6;
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0
       
        if(isSectionVisible) {
          section.classList.add('ativo')
        }
      })
    }
  
    window.addEventListener('scroll', animaScroll)
  }

  
}