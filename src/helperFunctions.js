import Search from './assets/search.svg';

export default function addSearchIcon() {
  const search = document.getElementById('searchIcon');
  let img = new Image();
  img = Search;
  search.src = img;
  search.alt = 'Image of search icon';
}
