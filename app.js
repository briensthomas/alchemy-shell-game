const button1 = document.getElementById('button1');
console.log(button1);

const button2 = document.getElementById('button2')
console.log(button2);

const button3 = document.getElementById('button3')
console.log(button3);

const correctSpan = document.getElementById('correctSpan');
const incorrectSpan = document.getElementById('incorrectSpan');
const totalSpan = document.getElementById('totalSpan');

let correct = 0;
let incorrect = 0;

button1.addEventListener('click', () => {
    console.log('clicked button 1');

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

button2.addEventListener('click', () => {
    console.log('clicked button 2');

    const randomShell = Math.ceil(Math.random() * 3);
// is randomShell = 2, increase the win counter
    if (randomShell === 1) {
        incorrect++;
    } else if (randomShell === 2) {
        correct++;
    } else {
        incorrect++;
    }
    correctSpan.textContent = correct;
    incorrectSpan.textContent = incorrect;
    totalSpan.textContent = correct + incorrect;
});