let counter = 0;

let count = Number(localStorage.getItem('count')) || 0;

counter = count;


const displayCounter = document.getElementById('value');
const buttonPlus = document.getElementById('plus');
const buttonMinus = document.getElementById('minus');
const buttonReset = document.getElementById('reset');

function updateDisplay() {
    displayCounter.textContent = counter;

    localStorage.setItem('count', counter);

    displayCounter.classList.remove("positif", "negatif", "zero");

  if (counter > 0) {
    displayCounter.classList.add("positif");
  } else if (counter < 0) {
    displayCounter.classList.add("negatif");
  } else {
    displayCounter.classList.add("zero");
  }
}

buttonPlus.addEventListener('click', () => {
    counter++;
    updateDisplay();
});

buttonMinus.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        updateDisplay();
    }
});

buttonReset.addEventListener('click', () => {
    counter = 0;
    updateDisplay();
});


