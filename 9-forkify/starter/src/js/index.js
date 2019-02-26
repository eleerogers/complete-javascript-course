// Global app controller
import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';

// Global state of the app
const state = {};

async function controlSearch() {
  const query = searchView.getInput();
  if (query) {
    state.search = new Search(query);
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.SearchRes);
    await state.search.getResults();
    clearLoader();
    searchView.renderResults(state.search.result.recipes);
  }
}

document.querySelector('.search').addEventListener('submit', e => {
  e.preventDefault();
  controlSearch(e.target);
});

const search = new Search('pizza');



