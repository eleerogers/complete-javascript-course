import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
  elements.searchInput.value = '';
};

export const clearResults = () => {
  elements.searchResList.innerHTML = '';
};

const limitRecipeTitle = (title, limit = 21) => {
  if (title.length > limit) {
    title = title.slice(0, limit - 4);
    const lastSpaceIndex = title.lastIndexOf(' ');
    title = title.slice(0, lastSpaceIndex) + ' ...';
  }
  return title;
};

const renderRecipe = (recipe) => {
  const markup = `
    <li>
      <a class="results__link" href="#${recipe.recipe_id}">
        <figure class="results__fig">
          <img src="${recipe.image_url}" alt="${recipe.title}">
        </figure>
        <div class="results__data">
          <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
          <p class="results__author">${recipe.publisher}</p>
        </div>
      </a>
    </li>
  `;
  elements.searchResList.insertAdjacentHTML('beforeend', markup);
};

const createButton = (page, type) => `

`

const renderButtons = (page, numResults, resultsPerPage) => {
  const pages = Math.ceil(numResults / resultsPerPage);
  if (page === 1 && pages > 1) {

  } else if (page < pages) {

  } else if (page === pages && pages > 1) {

  }
};

export const renderResults = (recipes, page = 1, resPerPage = 10) => {
  const start = (page - 1) * resPerPage;
  const end = page * resPerPage;

  
  recipes.slice(start, end).forEach(renderRecipe);
};
