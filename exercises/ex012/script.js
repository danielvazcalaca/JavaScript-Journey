const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')
const resp3 = document.querySelector('#outResp3')

frm.addEventListener('submit', (e) => {
  const veiculo = frm.inVeiculo.value
  const preco = Number(frm.inPreco.value)

  const entrada = preco * 0.5
  const parcela = (preco * 0.5) / 12

  resp1.innerText = `Promocao: ${veiculo}`
  resp2.innerText = `Entrada de ${entrada.toFixed(2)}`
  resp3.innerText = `12x Parcelas de ${parcela.toFixed(2)}`

  e.preventDefault()
})
