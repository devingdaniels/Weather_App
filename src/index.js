import './style.css';
import { getTodayMainWeatherData, getTodayHourlyData } from './weatherAPI';
import populateTodayWeatherData from './populateTodayWeather';
import populateForecastWeatherData from './populateForecastWeather';
import getLocation from './getUserLocation';

const cityInput = document.getElementById('city-input').value;
const searchButton = document.getElementById('search-button');

function initWebSite() {
  const UNCODETHISCITY = 'New York';
  // Get today weather data from the weather API module
  getTodayMainWeatherData(UNCODETHISCITY)
    .then((data) => {
      // Pass array of weather forecast objects, paint UI
      populateTodayWeatherData(data);
    });
  // Get forecast data from the weather API module
  getTodayHourlyData(UNCODETHISCITY, 'imperial')
  // Pass array of weather forecast objects, paint UI
    .then((data) => {
      populateForecastWeatherData(data);
    });
}

window.onload = () => {
  // Try to get location of user to
  // const userLocation = getLocation();
  // if (userLocation.isValid){
  // Use the coordinates to get a city name
  // Pass the city name to API calls
  // }
  // else {
  // Pass in a default city, ie New York
  // }

  initWebSite();
// if (userLocation.isGood) {
//   // call weather api's with user coordinates
// } else {
//   // If they deny location services, load default
// }
};
