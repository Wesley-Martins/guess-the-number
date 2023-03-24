const minValue = 1;
const maxValue = 1000;

const minValueElement = document.getElementById('min-value');
const maxValueElement = document.getElementById('max-value');

minValueElement.innerHTML = minValue;
maxValueElement.innerHTML = maxValue;

const secretNumber = generateNumber(minValue, maxValue);


function generateNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(secretNumber);

export { secretNumber, minValue, maxValue };
