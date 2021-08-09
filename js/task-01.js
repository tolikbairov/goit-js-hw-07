"use strict";
const categoriesList = document.querySelector("#categories");
const categoriesCount = categoriesList.childElementCount;
// console.log(categoriesList);
console.log(`В списке ${categoriesCount} категории.`);

/////
const categoryChildList = [...categoriesList.children];

categoryChildList.forEach((item) => {
  let categoryName = item.querySelector("h2").textContent;
  console.log(`Категория: ${categoryName}`);
  let categorySubCount = item.querySelector("ul").childElementCount;
  console.log(`Количество элементов: ${categorySubCount}`);
});
