
  export default function effects() {

    const menuHeader = document.querySelector('.menu-container')

    function scrollListener(event) {
      let position = window.scrollY + 200


      if (position > 300) {

        menuHeader.classList.add('fixed-top')

      } else {

        menuHeader.classList.remove('fixed-top')
      }
    }

    window.addEventListener('scroll', scrollListener)

  }