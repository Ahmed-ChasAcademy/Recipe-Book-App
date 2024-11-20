const API_KEY = "dbf2a189ae9f42dc8c2bea40d8b92660";
const recipeListEl = document.getElementById("recipe-list");


function displayRecipes(recipies) {
    recipeListEl.innerHTML = "";
    recipies.forEach((recipe) => {
      const recipeItemEl = document.createElement("li");
      recipeItemEl.classList.add("recipe-item");
      recipeImageEL = document.createElement("img");
      recipeImageEL.src = recipe.recipe;
      recipeImageEL.alt = "recipe image";
  
      recipeItemEl.appendChild(recipieImageEL);
      recipeListEl.appendChild(recipeitemEL);
    });
  }

async function getRecipies() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
  );
  const data = await response.json();

  return data.recipes;
}



async function init() {
  const recipes = await getRecipies();
  displayRecipes(recipies);
}

init();
