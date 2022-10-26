import './style.css';
import initWebsite from './initWebsite';
import { getTodayMainWeatherData, getTodayHourlyData } from './weatherAPI';
import { weatherBrain } from './weatherBrain';
import populateForecastWeatherData from './populateForecast';
import populateTodayWeatherData from './populateTodayWeather';

window.onload = () => {
  initWebsite();
};

async function getWeather() {
  const cityName = document.getElementById('city-input').value;
  let mainWeatherData;
  let todayHourlyData;
  try {
    mainWeatherData = await getTodayMainWeatherData(cityName);
    todayHourlyData = await getTodayHourlyData(cityName);
  } catch {
    alert('Error searching for city, please retry.');
  }

  weatherBrain.hourlyForecastData = todayHourlyData;
  weatherBrain.todayForecastData = mainWeatherData;
  populateTodayWeatherData(mainWeatherData);
  populateForecastWeatherData(todayHourlyData);
}

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', getWeather);
