"use strict";
const controls = document.querySelector("#controls");
const amountInput = controls.querySelector("input[type = number]");
const renderBtn = controls.querySelector('[data-action="render"]');
const destroyBtn = controls.querySelector('[data-action="destroy"]');

//Получаем родителя коллекции - boxes
const getBoxes = () => {
  return document.querySelector("#boxes");
};
//Получаем значение input
const getAmount = () => {
  return amountInput.value;
  // console.log(amount.value);
};
//Получаем случайное число [0;255]
const rand = () => {
  return Math.floor(Math.random() * 256);
};
//Создает и возращает строку в rgb формате с случайным цветом
const createRandColor = () => {
  return `rgb(${rand()},${rand()},${rand()})`;
};
//Создаем колекцию элементов
const createBoxes = (amount, boxes) => {
  // const boxes = document.querySelector("#boxes");
  let newElemArray = [];
  let width = 20;
  let height = 20;

  ///если элементы уже есть => продолжаем коллекцию
  let elementLast = boxes.lastElementChild;
  if (elementLast) {
    width = parseInt(elementLast.style.width);
    height = parseInt(elementLast.style.height);
    // console.log(width);
    // console.log(height);
  }

  // console.log(elementLast);
  for (let i = 0; i < amount; i += 1) {
    width += 10;
    height += 10;
    let div = document.createElement("div");
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.style.backgroundColor = createRandColor();
    newElemArray.push(div);
  }
  boxes.append(...newElemArray);
};
//Удаляет все дочерние элементы из родителя boxes
const destroyBoxes = (boxes) => {
  // const boxes = document.querySelector("#boxes");
  while (boxes.firstChild) {
    boxes.firstChild.remove();
  }
};
// const click = () => alert("aaa");

renderBtn.addEventListener("click", () => {
  createBoxes(getAmount(), getBoxes());
});
destroyBtn.addEventListener("click", () => {
  destroyBoxes(getBoxes());
});
