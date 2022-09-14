import Fahrenheit from './assets/fahrenheit.svg';
import ThunderStorm from './assets/thunderstorm.svg';
import Drizzle from './assets/drizzle.svg';
import HeavyRain from './assets/heavy-rain.svg';
import Snow from './assets/snow-flake.svg';
import Sun from './assets/sun.svg';

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
    // Add code here
    // If it is night, pass in moon
    // else pass in sun
    return Sun;
  }
  // default case
  return Sun;
}

function addTodayWeather(data) {
  // DOM elements
  const city = document.getElementById('city');
  const latitude = document.getElementById('lat');
  const longitude = document.getElementById('lon');

  const todayIcon = document.getElementById('today-icon');
  const todayTemp = document.getElementById('today-temp');
  const units = document.querySelectorAll('.units');
  const todayDescription = document.getElementById('today-description');
  const todayFeelsLike = document.getElementById('today-feels-like');
  const todayWindSpeed = document.getElementById('today-wind-speed');

  city.innerHTML = data.city;
  latitude.innerHTML = data.lat;
  longitude.innerHTML = data.lon;
  todayDescription.innerHTML = data.description;
  todayFeelsLike.innerHTML = data.feelsLike;
  todayWindSpeed.innerHTML = data.windSpeed;

  // Set current weather icon
  todayIcon.src = todayWeatherIcon(data.id);
  // Set current tempature
  todayTemp.innerHTML = data.temp;
  // Display temp with current unit
  units.forEach((el) => {
    if (data.unit === 'imperial') {
      // eslint-disable-next-line no-param-reassign
      el.src = Fahrenheit;
    }
  });
}

export { addTodayWeather };
