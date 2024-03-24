'use strict';

const dateInputEl = document.getElementById('birthday');
const buttonEl = document.querySelector('.calculate-age');
const calculatedAgeEl = document.querySelector('.calculated-age');

buttonEl.addEventListener('click', function () {
  const selectedDate = dateInputEl.value;
});

function calculateAge() {
  const birthdayCalc = dateInputEl.value;
  const age = getAge(birthdayCalc);
  calculatedAgeEl.textContent = `Your age is ${age} years old`;
}

function getAge(birthday) {
  const todayDate = new Date();
  const birthdayDate = new Date(birthday);
  let age = todayDate.getFullYear() - birthdayDate.getFullYear();
  return age;
}

buttonEl.addEventListener('click', calculateAge);
