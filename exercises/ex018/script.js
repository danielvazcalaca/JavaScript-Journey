function soma(valor1 = 0, valor2 = 0) {
  const resultado = valor1 + valor2
  return resultado
}

console.log(soma(2, 7))

const abobora = function (valor = 0) {
  return valor ** 0.5
}

console.log(abobora(9))
console.log(abobora(16))
console.log(abobora(21))

const limao = (valor) => {
  return valor * 3
}

const limao1 = (valor) => valor * 3

console.log(limao1(3))
