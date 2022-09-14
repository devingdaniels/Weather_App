import './style.css';
import { getTodayMainWeatherData } from './weatherAPI';
import populateTodayWeatherData from './populateTodayWeather';
import addSearchIcon from './helperFunctions';

const searchButton = document.getElementById('searchForm');

function handle(data) {
  populateTodayWeatherData(data);
}

searchButton.onclick = () => {
  // Prevent default form behavior
  const city = document.getElementById('cityInput').value;
  getTodayMainWeatherData(city, 'imperial')
    .then((data) => {
      handle(data);
    });
};

function initWebSite() {
  addSearchIcon();
  getTodayMainWeatherData('Medellin')
    .then((data) => {
      handle(data);
    });
}

initWebSite();
