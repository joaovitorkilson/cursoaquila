
  export default function effects() {

    const menuHeader = document.querySelector('.menu-container')
    const body = document.querySelector("#body")
    const preMenu = document.querySelector('.pre-menu')

    function scrollListener(event) {
      let position = window.scrollY + 200
      // console.log(position)

      if (position > 300) {

        menuHeader.classList.add('fixed-top')

      } else {

        menuHeader.classList.remove('fixed-top')
      }
    }

    window.addEventListener('scroll', scrollListener)

  }