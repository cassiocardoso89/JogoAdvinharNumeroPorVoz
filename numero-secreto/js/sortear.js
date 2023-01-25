const menorValor = 1
const maiorValor = 100

const numeroSecreto = parseInt(Math.random() * maiorValor + 1)

document.getElementById('menor-valor').innerHTML = menorValor
document.getElementById('maior-valor').innerHTML = maiorValor

console.log(numeroSecreto)