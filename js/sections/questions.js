


export default function questionCard() {
  const openButton = document.querySelectorAll('.open-questions-card')
  const openTitle = document.querySelectorAll('.question-card h5')


  function handleOpenButton(event) {
    event.target.classList.toggle('active')
    event.target.parentElement.nextElementSibling.classList.toggle("dd-active")
    event.target.parentElement.classList.toggle('dt-active')
  }

  function handleTitleOpenCard(event) {
    event.target.parentElement.nextElementSibling.classList.toggle('dd-active')
    event.target.parentElement.classList.toggle('dt-active')
    event.target.nextElementSibling.classList.toggle('active')
  }


  openButton.forEach(item => {
    item.addEventListener('click', handleOpenButton)
  })
  openTitle.forEach(item => {
    item.addEventListener('click', handleTitleOpenCard)
  })
  

}