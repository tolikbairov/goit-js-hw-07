"use strict";
const input = document.querySelector("#name-input");
const spanOutput = document.querySelector("#name-output");
//Получаем значение input
const getInput = () => input.value;
//Изменяем значение output
const setInput = () => {
  const newInput = getInput();
  if (newInput.length === 0 || !newInput.trim()) {
    spanOutput.textContent = "незнакомец";
    return;
  }
  spanOutput.textContent = newInput;
};

// const inputObj = {
//   input,
//   spanOutput,
//   getInputText() { return this.input.value },
//   setOutputText() {
//     let newInput = this.getInputText();
//     if (newInput.length === 0 || !newInput.trim()) {
//       this.spanOutput.textContent = 'незнакомец';
//       return;  }
//     this.spanOutput.textContent = newInput;
//   }
// };

// inputObj.setInput.bind(inputObj)
/////
input.addEventListener("input", setInput);
