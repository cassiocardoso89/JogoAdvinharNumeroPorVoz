function Verifica(chute){
    const numero = chute

    if(chute == numeroSecreto){
        document.body.innerHTML = `
        <h1>Você acertou!!</h1>
        <h3>O número secreto é: <span class="numeroCerto">${numeroSecreto}</span></h3>
        <button class="btnRestart" id="btnRestartID">Jogar Novamente</button>
        `
    }
    if(Number.isNaN(numero) || numero > maiorValor || numero < menorValor){
        elementoChute.innerHTML += `<div>Valor inválido. Tente novamente.</div>`
    }
    if(numeroSecreto > chute){
        elementoChute.innerHTML += `<div>O numero secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    }
    if(numeroSecreto < chute){
        elementoChute.innerHTML += `<div>O numero secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    }
}

