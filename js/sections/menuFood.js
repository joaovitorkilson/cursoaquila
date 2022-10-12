export default function menuFood() {

  const buttonAll = document.querySelector('[data-button="all"]')
  const buttonSpeciality = document.querySelector('[data-button="speciality"]')
  const buttonSalad = document.querySelector('[data-button="salad"]')
  const buttonStarter = document.querySelector('[data-button="starter"]')

  const allButtons = [buttonAll, buttonSpeciality, buttonSalad, buttonStarter]

  const allItems = document.querySelectorAll('.food-menu-list li')
  
  const starter = document.querySelectorAll('.starter')
  const salads = document.querySelectorAll('.salad')
  const speciality = document.querySelectorAll('.speciality')


  // Active all items
    allItems.forEach(item => {
      item.classList.add('active-item')
    })

  // All Button
  function handleButtonAll() {

    allButtons.forEach(item => {
      item.classList.remove('activeButton')
    })

    allButtons[0].classList.add('activeButton')

    allItems.forEach(item => {
      item.classList.add('active-item')
    })
  }

  // Starter Button
  function handleStarterButton() {

    allButtons.forEach(item => {
      item.classList.remove('activeButton')
    })

    allButtons[3].classList.add('activeButton')

    allItems.forEach(item => {
      item.classList.remove('active-item')
    })

    starter.forEach(item => {
      item.classList.add('active-item')
    }) 
  }

  // Salad Button
  function handleSaladButton() {

    allButtons.forEach(item => {
      item.classList.remove('activeButton')
    })

    allButtons[2].classList.add('activeButton')

    allItems.forEach(item => {
      item.classList.remove('active-item')
    })

    salads.forEach(item => {
      item.classList.add('active-item')
    }) 
  }

  // Speciality Button
  function handleSpecialityButton() {

    allButtons.forEach(item => {
      item.classList.remove('activeButton')
    })

    allButtons[1].classList.add('activeButton')

    allItems.forEach(item => {
      item.classList.remove('active-item')
    })

    speciality.forEach(item => {
      item.classList.add('active-item')
    }) 
  }



  buttonStarter.addEventListener('click', handleStarterButton)
  buttonSalad.addEventListener('click', handleSaladButton)
  buttonSpeciality.addEventListener('click', handleSpecialityButton)
  buttonAll.addEventListener('click', handleButtonAll)




}

