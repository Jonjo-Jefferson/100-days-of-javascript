'use strict';
const weightKgEl = document.getElementById('weight-kg');
const inputEl = document.getElementById('weight-input');

function convertWeight() {
  weightKgEl.textContent = (+inputEl.value / 2.2).toFixed(2);
}

inputEl.addEventListener('input', convertWeight);
