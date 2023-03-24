import { validatedNumber, createResultMessage, resultMessages } from "./handleSpokenNumber.js";

const guessElement = document.getElementById('guess-container');

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';

let spokenNumber;
let numberOfAttempts = 0;

function displayResultMessage(spokenNumber) {
  const resultMessage = createResultMessage(spokenNumber);

  if(resultMessage === resultMessages.rightAnswer || resultMessage === resultMessages.secret) {
    document.body.innerHTML = resultMessage;
    return;
  }

  guessElement.innerHTML = `
    <span class="message__label">Você disse:</span>
    <div class="message__box">${parseInt(spokenNumber)}</div>
    <div class="message__result">${resultMessage}</div>
    <span class="message__attempts">Tentativas: ${numberOfAttempts}</span>
  `;
}

recognition.start();
recognition.addEventListener('end', () => { recognition.start() });

document.body.addEventListener('click', (event) => {
  if(event.target.id === 'play-again-btn') {
    window.location.reload();
  }
})

recognition.onresult = (event) => {
  spokenNumber = event.results[event.resultIndex][0].transcript;
  spokenNumber = validatedNumber(spokenNumber);

  numberOfAttempts += 1;
  displayResultMessage(spokenNumber);
}
