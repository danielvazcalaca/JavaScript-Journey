const form = document.querySelector('form')
const h3 = document.querySelector('h3')

form.addEventListener('submit', (e) => {
  const nome = form.inNome.value
  h3.innerText = `Ola ${nome}`
  e.preventDefault()
})
