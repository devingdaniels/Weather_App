import Search from './assets/search.svg';
import ThunderStorm from './assets/conditions/thunderstorm.svg';
import Drizzle from './assets/conditions/drizzle.svg';
import HeavyRain from './assets/conditions/heavy-rain.svg';
import Snow from './assets/conditions/snow-flake.svg';
import Sun from './assets/conditions/sun.svg';

function todayWeatherIcon(val) {
  const value = Number(val);
  if (value >= 200 && value <= 232) {
    return ThunderStorm;
  }
  if (value >= 300 && value <= 321) {
    return Drizzle;
  }
  if (value >= 500 && value <= 531) {
    return HeavyRain;
  }
  if (value >= 600 && value <= 622) {
    return Snow;
  }
  if (value === 800) {
    // This is for clear sky
    // Add code here
    // If it is night, pass in moon
    // else pass in sun
    return Sun;
  }
  // default case
  return Sun;
}

function addSearchIcon() {
  const search = document.getElementById('searchIcon');
  let img = new Image();
  img = Search;
  search.src = img;
  search.alt = 'Image of search icon';
}

function firstCharSentenceUpper(string) {
  const words = string.split(' ');

  let result = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < words.length; i++) {
    result += words[i][0].toUpperCase();
    result += words[i].substr(1);
    result += ' ';
  }
  return result;
}

function createForecastCard(data) {
  const container = document.createElement('div');
  container.classList.add('forecastContainer');
  // Image
  const img = document.createElement('img');
  img.classList.add('forecastIcon');
  img.src = todayWeatherIcon(data.id);
  // Temperature
  const temp = document.createElement('h5');
  temp.innerHTML = data.temp;
  // Description
  const description = document.createElement('h5');
  description.innerHTML = firstCharSentenceUpper(data.description);
  description.style.fontStyle = 'italic';
  // Sea level
  // const seaLevel = document.createElement('h3');
  // seaLevel.innerHTML = data.seaLevel;
  // Time
  const time = document.createElement('h5');
  time.innerHTML = data.time;
  container.append(img);
  container.append(temp);
  container.append(description);
  // container.append(seaLevel);
  container.append(time);
  return container;
}

export {
  addSearchIcon,
  firstCharSentenceUpper,
  createForecastCard,
  todayWeatherIcon,
};
