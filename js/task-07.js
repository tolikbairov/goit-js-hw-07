"use strict";
const input = document.querySelector("#font-size-control");
input.setAttribute("min", "10");

const text = document.querySelector("#text");
///
const setFontSize = () => {
  text.style.fontSize = `${input.value}px`;
};
setFontSize();
///
const changefontSize = () => {
  setFontSize();
};
input.addEventListener("input", changefontSize);
