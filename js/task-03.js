"use strict";
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const gallery = document.querySelector("#gallery");
gallery.classList.add("photo-list");
// let listItems = images.map(({ url, alt }) => {
//   let li = document.createElement("li");
//   li.classList.add("photo-item");
//   let imgString = `<img src="${url}" alt="${alt}" >`;
//   li.insertAdjacentHTML("afterbegin", imgString);

//   return li;
// });

//gallery.append(...listItems);

// let listItems = images.map(({ url, alt }) => {
//   // let li = document.createElement("li");
//   // li.classList.add("photo-item");
//   let liString = `<li class ="photo-item"><img src="${url}" alt="${alt}" ></li>`;
//   // li.insertAdjacentHTML("afterbegin", imgString);

//   return liString;
// });
// const listItemsString = listItems.join("");
let listItemsString = "";
images.forEach(({ url, alt }) => {
  listItemsString += `<li class ="photo-item"><img src="${url}" alt="${alt}" ></li>`;
});
gallery.insertAdjacentHTML("afterbegin", listItemsString);
