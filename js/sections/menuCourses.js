export default function menuCourses() {

  const buttonAll = document.querySelector('[data-button="all"]')
  const buttonMilitar = document.querySelector('[data-button="militar"]')
  const buttonPolicia = document.querySelector('[data-button="policia"]')
  const buttonConcurso = document.querySelector('[data-button="concurso"]')
  const buttonVestibular = document.querySelector('[data-button="vestibular"]')
  const buttonCursos = document.querySelector('[data-button="cursos"]')

  const allButtons = [buttonMilitar, buttonPolicia, buttonConcurso, buttonVestibular, buttonCursos]

  // Categories
  const militar = document.querySelectorAll('.militar')
  const policia = document.querySelectorAll('.policia')
  const concurso = document.querySelectorAll('.concurso')
  const vestibular = document.querySelectorAll('.vestibular')
  const cursos = document.querySelectorAll('.cursos')

 
  
  const allItems = [militar, policia, concurso, vestibular, cursos]


  // Active all items
    allItems.forEach((item) => {
      item.forEach(element => {
        element.classList.add('active-item')
      })
    })

  // All Button
  function handleButtonAll() {

    allButtons.forEach(item => {
      item.classList.remove('activeButton')
    })


    allItems.forEach(item => {
      item.forEach(element => {
        element.classList.add('active-item')
      })
    })
  }

  // Militar Button
  function handleMilitarButton() {

    allButtons.forEach(item => {
      item.classList.remove('activeButton')
    })

    allButtons[0].classList.add('activeButton')
    
    allItems.forEach(item => {
      item.forEach(element => {
        element.classList.remove('active-item')
      })
    })

    militar.forEach(item => {
      item.classList.add('active-item')
    }) 
  }

  // Policia Button
  function handlePoliciaButton() {

    allButtons.forEach(item => {
      item.classList.remove('activeButton')
    })

    allButtons[1].classList.add('activeButton')

    allItems.forEach(item => {
      item.forEach(element => {
        element.classList.remove('active-item')
      })
    })

    policia.forEach(item => {
      item.classList.add('active-item')
    }) 
  }

  // Concurso Button
  function handleConcursoButton() {

    allButtons.forEach(item => {
      item.classList.remove('activeButton')
    })

    allButtons[2].classList.add('activeButton')

    allItems.forEach(item => {
      item.forEach(element => {
        element.classList.remove('active-item')
      })
    })

    concurso.forEach(item => {
      item.classList.add('active-item')
    }) 
  }

    // Vestibular Button
    function handleVestibularButton() {

      allButtons.forEach(item => {
        item.classList.remove('activeButton')
      })
  
      allButtons[3].classList.add('activeButton')
  
      allItems.forEach(item => {
        item.forEach(element => {
          element.classList.remove('active-item')
        })
      })
  
      vestibular.forEach(item => {
        item.classList.add('active-item')
      }) 
    }

       // Cursos Button
       function handleCursosButton() {

        allButtons.forEach(item => {
          item.classList.remove('activeButton')
        })
    
        allButtons[4].classList.add('activeButton')
    
        allItems.forEach(item => {
          item.forEach(element => {
            element.classList.remove('active-item')
          })
        })
    
        cursos.forEach(item => {
          item.classList.add('active-item')
        }) 
      }
  


  buttonMilitar.addEventListener('click', handleMilitarButton)
  buttonPolicia.addEventListener('click', handlePoliciaButton)
  buttonConcurso.addEventListener('click', handleConcursoButton)
  buttonVestibular.addEventListener('click', handleVestibularButton)
  buttonCursos.addEventListener('click', handleCursosButton)
  buttonAll.addEventListener('click', handleButtonAll)

}

