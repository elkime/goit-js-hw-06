const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  let itemIng = document.createElement("li");
  itemIng.className = "item";
  itemIng.textContent = ingredient;
  ingredientsList.appendChild(itemIng);
});
