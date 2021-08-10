"use strict";
const input = document.querySelector("#font-size-control");
input.setAttribute("min", "10");

//получаем элемент id =text
const getText = () => document.querySelector("#text");
/// изменяем инлайн св-во font-size элемента text
const changefontSize = (text) => {
  text.style.fontSize = `${input.value}px`;
};

changefontSize(getText());
//
input.addEventListener("input", () => {
  changefontSize(getText());
});
