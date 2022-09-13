import getWeatherData from './weatherAPI';
import { todayWeatherCard } from './createWeatherCards';

const searchButton = document.getElementById('search');

function handle(data) {
  console.log(data);
  const weatherContainer = todayWeatherCard(data);
  const anchor = document.getElementById('weather-today');
  anchor.append(weatherContainer);
}

searchButton.addEventListener('click', () => {
  const city = document.getElementById('cityInput').value;
  getWeatherData(city)
    .then((data) => {
      handle(data);
    });
});

// function renderImage(image, alt) {
//   const img = new Image();
//   img.src = image;
//   img.alt = alt;
//   img.classList.add('weatherIcon');
//   return img;
// }
