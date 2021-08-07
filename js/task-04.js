'use strict';
const counter = document.querySelector('#counter');
const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');


const counterObj = {
  counterValue: counter.querySelector('#value'),
  // Получение текущего значения счетчика
  getCounterValue() {
    return Number(this.counterValue.textContent);
  },
  //изменение текущего значения счетчика
  setCounterValue(newValue) { this.counterValue.textContent = newValue; },
  //увеличение счетчика на 1
  increment() {

    let newValue = this.getCounterValue() + 1;
    this.setCounterValue(newValue);
  },
  //уменьшение счетчика на 1
  decrement() {
    let newValue = this.getCounterValue() - 1;
    this.setCounterValue(newValue);
  }
};


decBtn.addEventListener('click', counterObj.decrement.bind(counterObj));
incBtn.addEventListener('click', counterObj.increment.bind(counterObj));
