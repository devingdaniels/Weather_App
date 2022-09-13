import { paintUI, getWeatherData } from './weatherAPI';

const search = document.getElementById('search');

search.addEventListener('click', () => {
  const city = document.getElementById('cityInput').value;
  getWeatherData(city)
    .then((response) => paintUI(response));
});
