'uses strict';
const categoriesList = document.querySelector('#categories');
const categoriesCount = categoriesList.childElementCount;
// console.log(categoriesList);
console.log(`В списке ${categoriesCount} категории.`);

/////
const categoryChildList = [...categoriesList.children];

let categoryName;
let categorySubCount;
categoryChildList.forEach(item => {
  categoryName = item.querySelector('h2').textContent;
  console.log(`Категория: ${categoryName}`);
  categorySubCount = item.querySelector('ul').childElementCount;
  console.log(`Количество элементов: ${categorySubCount}`);

});
// const arr = ['1', '2', '3'];
// arr.forEach(element => { console.log(element)})