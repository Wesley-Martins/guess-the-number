import { secretNumber, minValue, maxValue } from "./generateNumber.js";

const resultMessages = {
    'NaN': 'Valor inválido, não é um número',
    'tooLow': 'O número secreto é maior <i class="fa-solid fa-arrow-up"></i>',
    'tooHigh': 'O número secreto é menor <i class="fa-solid fa-arrow-down"></i>',
    'outOfRange': `Número inválido, tente um número entre ${minValue} e ${maxValue}`,
    'rightAnswer': `
        <h1>Você acertou</h1>
        <h3>O número secreto era ${secretNumber}</h3>
        <button id="play-again-btn">Jogar novamente</button>
    `,
    'secret': '<div id="secret">👽</div>'
}

function validatedNumber(number) {
    return number = number.replaceAll(' ', '').replace('menos', '-');
}

function createResultMessage(number) {
    switch(true) {
        case number === 'segredinho':
            return resultMessages.secret;

        case isNaN(number):
            return resultMessages.NaN;

        case number < minValue || number > maxValue:
            return resultMessages.outOfRange;

        case number < secretNumber:
            return resultMessages.tooLow;

        case number > secretNumber:
            return resultMessages.tooHigh;
        
        case number == secretNumber:
            return resultMessages.rightAnswer
    }
}

export { validatedNumber, createResultMessage, resultMessages };
