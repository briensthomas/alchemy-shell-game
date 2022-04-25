const button1 = document.getElementById('button1');
console.log(button1)

const correctSpan = document.getElementById('correctSpan');
const incorrectSpan = document.getElementById('incorrectSpan');
const totalSpan = document.getElementById('totalSpan');

let correct = 0;
let incorrect = 0;

button1.addEventListener('click', () => {
    console.log('clicked button');

    const randomShell = Math.ceil(Math.random() * 3);
    console.log('The random shell is ', randomShell);
// if randomShell = 1, increase the win counter
    if (randomShell === 1) {
        correct++;
    } else if (randomShell === 2) {
        incorrect++;
    } else {
        incorrect++;
    }
    correctSpan.textContent = correct;
    incorrectSpan.textContent = incorrect;
    totalSpan.textContent = correct + incorrect;
});