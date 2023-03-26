const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');

const newList = ingredients.map(ingredient => {
  const ingredientElement = document.createElement('li')
  ingredientElement.textContent = ingredient;
  console.log(ingredientElement.textContent)
  ingredientElement.classList.add('item')

  return ingredientElement;
})
ingredientsList.append(...newList)


