import getWeatherData from './weatherAPI';
import populateTodayWeatherData from './populateTodayWeather';
import Search from './assets/search.svg';

const searchButton = document.getElementById('searchForm');

function handle(data) {
  populateTodayWeatherData(data);
}

searchButton.onclick = () => {
  // Prevent default form behavior
  const city = document.getElementById('cityInput').value;
  getWeatherData(city, 'imperial')
    .then((data) => {
      handle(data);
    });
};

function initWebSite() {
  addSearchIcon();
  getWeatherData('Medellin')
    .then((data) => {
      handle(data);
    });
}

function addSearchIcon() {
  const search = document.getElementById('searchIcon');
  let img = new Image();
  img = Search;
  search.src = img;
  search.alt = 'Image of search icon';
}

initWebSite();
