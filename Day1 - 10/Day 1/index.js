'use strict';
const billAmount = document.querySelector('.bill-amount');
const tipAmount = document.querySelector('.tip-amount');
const buttonEl = document.querySelector('.calculate');
const totalBill = document.querySelector('.total-bill');

function calculateTotal() {
  const billValue = billAmount.value;
  const tipValue = tipAmount.value;
  const totalAmount = parseFloat(billValue) + parseFloat(tipValue);
  totalBill.textContent = `£${totalAmount.toFixed(2)}`;
}

buttonEl.addEventListener('click', calculateTotal);
