const elementoChute = document.getElementById('chute')


window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition()
recognition.lang = 'pt-Br'
recognition.start()


recognition.addEventListener('result', OnSpeak)

function OnSpeak(e)
{
    chute = e.results[0][0].transcript
    ExibeChuteNaTela(chute)
}

function ExibeChuteNaTela(chute)
{
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    `
    Verifica(chute)
}
    recognition.addEventListener('end', () => recognition.start())

    document.body.addEventListener('click', e =>{
    if(e.target.id == 'btnRestartID')
    {
        window.location.reload() 
    }})
