const listCategories = document.querySelector("#categories");

const numberOfElement = listCategories.querySelectorAll(".item").length;

console.log(`Number of categories: ${numberOfElement}`);

const firstCategorie =
  listCategories.firstElementChild.querySelector("h2").textContent;
console.log(`Categorie: ${firstCategorie}`);

const numFirstCategorie =
  listCategories.firstElementChild.querySelectorAll("li").length;
console.log(`Elements: ${numFirstCategorie}`);

const secondCategorie =
  listCategories.firstElementChild.nextElementSibling.querySelector(
    "h2"
  ).textContent;
console.log(`Categorie: ${secondCategorie}`);

const numSecondCategorie =
  listCategories.firstElementChild.nextElementSibling.querySelectorAll(
    "li"
  ).length;
console.log(`Elements: ${numSecondCategorie}`);

const lastCategorie =
  listCategories.lastElementChild.querySelector("h2").textContent;
console.log(`Categorie: ${lastCategorie}`);

const numLastCategorie =
  listCategories.lastElementChild.querySelectorAll("li").length;
console.log(`Elements: ${numLastCategorie}`);
