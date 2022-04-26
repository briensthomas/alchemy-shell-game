const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

const shell1 = document.getElementById('shell-1');
const shell2 = document.getElementById('shell-2');
const shell3 = document.getElementById('shell-3');

const correctSpan = document.getElementById('correctSpan');
const incorrectSpan = document.getElementById('incorrectSpan');
const totalSpan = document.getElementById('totalSpan');

let correct = 0;
let incorrect = 0;

button1.addEventListener('click', () => {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');

    const randomShell = Math.ceil(Math.random() * 3);
// if randomShell = 1, increase the correct counter
    if (randomShell === 1) {
        shell1.classList.add('reveal');
        correct++;
// else increase the incorrect counter
    } else if (randomShell === 2) {
        shell2.classList.add('reveal');
        incorrect++;
    } else {
        shell3.classList.add('reveal');
        incorrect++;
    }
//sets counter to "hide" the ball after 3 seconds
    setTimeout(() => {
        shell1.classList.remove('reveal');
        shell2.classList.remove('reveal');
        shell3.classList.remove('reveal');
    }, 3000);
// updates the results counter based on the increment
//totals are a derived state based on the other numbers
    correctSpan.textContent = correct;
    incorrectSpan.textContent = incorrect;
    totalSpan.textContent = correct + incorrect;
});

button2.addEventListener('click', () => {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');

    const randomShell = Math.ceil(Math.random() * 3);
// if randomShell = 2, increase the correct counter
    if (randomShell === 1) {
        shell1.classList.add('reveal');
        incorrect++;
    } else if (randomShell === 2) {
        shell2.classList.add('reveal');
        correct++;
    } else {
        shell3.classList.add('reveal');
        incorrect++;
    }
    setTimeout(() => {
        shell1.classList.remove('reveal');
        shell2.classList.remove('reveal');
        shell3.classList.remove('reveal');
    }, 3000);
    correctSpan.textContent = correct;
    incorrectSpan.textContent = incorrect;
    totalSpan.textContent = correct + incorrect;
});

button3.addEventListener('click', () => {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');

    const randomShell = Math.ceil(Math.random () * 3);
    // if randomShell = 3, increase correct guess counter
    if (randomShell === 1) {
        shell1.classList.add('reveal');
        incorrect++;
    } else if (randomShell === 2) {
        shell2.classList.add('reveal');
        incorrect++;
    } else {
        shell3.classList.add('reveal');
        correct++;
    }
    setTimeout(() => {
        shell1.classList.remove('reveal');
        shell2.classList.remove('reveal');
        shell3.classList.remove('reveal');
    }, 3000);
    correctSpan.textContent = correct;
    incorrectSpan.textContent = incorrect;
    totalSpan.textContent = correct + incorrect;
});