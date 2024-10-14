const titleNumber = document.getElementById('titleNumber')
const textDiv = document.getElementById('textDiv')

const number = Number(prompt('Digite um numero'))

titleNumber.innerHTML = number

textDiv.innerHTML = ''
textDiv.innerHTML += `<p>Raiz quadrada: ${number ** 0.5}</p>`
textDiv.innerHTML += `<p>${number} é inteiro: ${Number.isInteger(number)}</p>`
textDiv.innerHTML += `<p>é NaN: ${Number.isNaN(number)}</p>`
textDiv.innerHTML += `<p>Arredondado para baixo: ${Math.floor(number)}</p>`
textDiv.innerHTML += `<p>Arredondado para cima: ${Math.ceil(number)}</p>`
textDiv.innerHTML += `<p>Com duas casas decimais: ${number.toFixed(2)} </p>`
