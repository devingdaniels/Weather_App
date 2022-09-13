import getWeatherData from './weatherAPI';
import { todayWeatherCard } from './createWeatherCards';

const searchButton = document.getElementById('searchForm');

function handle(data) {
  const weatherContainer = todayWeatherCard(data);
  const anchor = document.getElementById('current-weather-anchor');
  // Remove the previous data
  anchor.innerHTML = '';
  anchor.append(weatherContainer);
}

searchButton.onclick = () => {
  // Prevent default form behavior
  const city = document.getElementById('cityInput').value;
  getWeatherData(city, 'metric')
    .then((data) => {
      handle(data);
    });
};

function initWebSite() {
  getWeatherData('eugene')
    .then((data) => {
      handle(data);
    });
}

initWebSite();
