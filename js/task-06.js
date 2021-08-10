"use strict";
const input = document.querySelector("#validation-input");
// input.classList.add("invalid");

// Изменяем цвет рамки в зависимости от введенных символов
const changeBorderColor = () => {
  //Соответствует ли необходимое кол-во символов введенным
  if (Number(input.getAttribute("data-length")) === input.value.length) {
    //если содержит класс  invalid заменяет его на valid
    if (input.classList.replace("invalid", "valid")) {
      return;
    }
    input.classList.add("valid");
    return;
  }
  //если содержит класс  valid заменяет его на invalid
  if (input.classList.replace("valid", "invalid")) {
    return;
  }
  input.classList.add("invalid");
  // console.log(input.classList);
};

// console.log(input.classList);
input.addEventListener("change", changeBorderColor);
