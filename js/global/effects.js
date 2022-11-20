
  export default function effects(course) {
    const menuHeader = document.querySelector('.menu-container')

    if (course) {
      function scrollListener(event) {
        let position = window.scrollY + 200
  
  
        if (position > 300) {
  
          menuHeader.classList.add('fixed-top')
          
          menuHeader.style.borderBottom = "1px solid #b4984e"
  
        } else {
  
          menuHeader.classList.remove('fixed-top')
          
          menuHeader.style.borderBottom = ""
        }
        window.addEventListener('scroll', scrollListener)
      }
    } else {
      function scrollListener(event) {
        let position = window.scrollY + 200
  
  
        if (position > 300) {
  
          menuHeader.classList.add('fixed-top')
          menuHeader.classList.add('open-anime-menubar')
          menuHeader.style.borderBottom = "1px solid #b4984e"
  
        } else {
  
          menuHeader.classList.remove('fixed-top')
          menuHeader.classList.remove('anime-menuBar')
          menuHeader.style.borderBottom = ""
        }
      }
      window.addEventListener('scroll', scrollListener)
    }

   

    

  }