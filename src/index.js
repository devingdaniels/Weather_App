import getWeatherData from './weatherAPI';
import { populateTodayWeatherData } from './populateTodayWeather';

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
  getWeatherData('Medellin')
    .then((data) => {
      handle(data);
    });
}

initWebSite();
