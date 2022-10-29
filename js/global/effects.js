
  export default function effects() {

    const menuHeader = document.querySelector('.menu-container')

    function scrollListener(event) {
      let position = window.scrollY + 200


      if (position > 300) {

        menuHeader.classList.add('fixed-top')
        menuHeader.style.borderBottom = "1px solid #b4984e"

      } else {

        menuHeader.classList.remove('fixed-top')
        menuHeader.style.borderBottom = ""
      }
    }

    window.addEventListener('scroll', scrollListener)

  }