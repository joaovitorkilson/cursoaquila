
export default function whyUsCard() {

  const whyUsCard = document.querySelectorAll('.card-list li')

  function handleHoverCard(event) { 
    event.currentTarget.classList.add('ativo')
  }
  
  function handleOutCard(event) {
    event.currentTarget.classList.remove('ativo')
  }
  
  whyUsCard.forEach(item => {
    item.addEventListener('mouseover', handleHoverCard)
    item.addEventListener('mouseleave', handleOutCard)
  })
  
}