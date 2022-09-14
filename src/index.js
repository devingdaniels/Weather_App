import './style.css';
import { getTodayMainWeatherData, getTodayHourlyData } from './weatherAPI';
import populateTodayWeatherData from './populateTodayWeather';
import populateForecastWeatherData from './populateForecastData';
import { addSearchIcon } from './helperFunctions';

const searchButton = document.getElementById('searchForm');

searchButton.onclick = () => {
  // Add code here for switching units of measure
  // Hard code for now
  const unit = 'imperial';
  // Save the current city
  const city = document.getElementById('cityInput').value;
  // Call API, get current data, pass data and populate current view
  getTodayMainWeatherData(city, unit)
    .then((data) => {
      populateTodayWeatherData(data);
    });// add code here to catch errors
  // Call API, get forecast data, pass data and populate forecast view
  getTodayHourlyData(city, unit)
    .then((data) => {
      populateForecastWeatherData(data);
    });
};

function initWebSite() {
  addSearchIcon();
  getTodayMainWeatherData('Medellin')
    .then((data) => {
      populateTodayWeatherData(data);
    });
  // Call API, get forecast data, pass data and populate forecast view
  getTodayHourlyData('Medellin', 'imperial')
    .then((data) => {
      populateForecastWeatherData(data);
    });
}

initWebSite();
