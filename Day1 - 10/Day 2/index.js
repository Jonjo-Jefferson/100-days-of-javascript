'use strict';
const weightKgEl = document.getElementById('weight-kg');
const inputEl = document.getElementById('weight-input');

function convertWeight() {
  weightKgEl.textContent = (+inputEl.value / 2.2).toFixed(2);
  const number = 12;
  console.log(number);
}

inputEl.addEventListener('input', convertWeight);

const number1 = 10;
const number2 = 12;
