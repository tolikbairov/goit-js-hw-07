'use strict'
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

//find list in httml doc
let list = document.querySelector('#ingredients');

//create array from ingredients array  
const listItems = ingredients.map(ingredient => {
  //create li element
  let li = document.createElement('li');
  li.textContent = ingredient;
  return li;
});
  
list.append(...listItems);
