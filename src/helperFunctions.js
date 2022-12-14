import Search from './assets/search.svg';
import ThunderStorm from './assets/conditions/thunderstorm.svg';
import Sun from './assets/conditions/sun.svg';
import LightRain from './assets/conditions/light-rain.svg';
import ModerateRain from './assets/conditions/moderate-rain.svg';
import HeavyRain from './assets/conditions/heavy-rain.svg';
import Drizzle from './assets/conditions/drizzle.svg';
import LightSnow from './assets/conditions/light-snow.svg';
import SnowRain from './assets/conditions/snow-and-rain.svg';
import HeavySnow from './assets/conditions/heavy-snow.svg';
import Smoke from './assets/conditions/smoke.svg';
import Haze from './assets/conditions/haze.svg';
import Fog from './assets/conditions/fog.svg';
import Tornado from './assets/conditions/tornado.svg';
import Mist from './assets/conditions/mist.svg';
import FewClouds from './assets/conditions/few-clouds.svg';
import ScatteredClouds from './assets/conditions/scattered-clouds.svg';
import BrokenClouds from './assets/conditions/broken-clouds.svg';
import OvercastClouds from './assets/conditions/overcast-clouds.svg';
import Cat from './assets/conditions/cat.svg';

function formatDate(date) {
  // Input: 2022-09-19
  // Output: 9/19/2022
  const string = String(date);
  const year = string.slice(0, 4);
  const month = string.slice(6, 7);
  const day = string.slice(8, 10);
  const result = `${month}/${day}/${year}`;
  return result;
}

function formatForecastTime(string) {
  // Input: 2022-09-18 00:00:00
  // Output:{ 00:00:00, 9/18/2022 }
  const time = string.substr(10);
  const temp = string.slice(0, 10);
  const date = formatDate(temp);
  return { time, date };
}

function todayWeatherIcon(val) {
  const value = Number(val);
  if (value >= 200 && value <= 232) {
    return ThunderStorm;
  }
  // Rain values
  if (value >= 300 && value <= 321) {
    return Drizzle;
  }
  if (value === 500) {
    return LightRain;
  }
  if (value === 501) {
    return ModerateRain;
  }
  if (value >= 503 && value <= 531) {
    return HeavyRain;
  }
  // Snow values
  if (value === 600 || value === 601) {
    return LightSnow;
  }
  if (value === 615 || value === 616) {
    return SnowRain;
  }
  if (value >= 600 && value <= 622) {
    return HeavySnow;
  }
  // Atmosphere values
  if (value === 711) {
    return Smoke;
  }
  if (value === 721) {
    return Haze;
  }
  if (value === 741) {
    return Fog;
  }
  if (value === 781) {
    return Tornado;
  }
  if (value >= 701 && value <= 781) {
    return Mist;
  }
  // Cloud conditions
  if (value === 801) {
    return FewClouds;
  }
  if (value === 802) {
    return ScatteredClouds;
  }
  if (value === 803) {
    return BrokenClouds;
  }
  if (value === 804) {
    return OvercastClouds;
  }
  if (value === 800) {
    return Sun;
  }
  // Lazy coder, return cat
  return Cat;
}

function addSearchIcon() {
  const search = document.getElementById('searchIcon');
  let img = new Image();
  img = Search;
  search.src = img;
  search.alt = 'Image of search icon';
}
function firstCharSentenceUpper(string) {
  // Input:'this is a string'
  // Output: 'This Is A String'
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

export {
  addSearchIcon,
  firstCharSentenceUpper,
  todayWeatherIcon,
  formatForecastTime,
};
