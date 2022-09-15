// Methods
import { firstCharSentenceUpper, todayWeatherIcon } from './helperFunctions';
// Images
import Fahrenheit from './assets/fahrenheit.svg';
import Celsius from './assets/celsius.svg';
import City from './assets/city.svg';
import Location from './assets/location.svg';
import Thermostat from './assets/thermostat.svg';
import Wind from './assets/conditions/wind.svg';
import Speed from './assets/speed.svg';
import Humidity from './assets/conditions/humidity.svg';
import Clock from './assets/clock.svg';

function createWeatherWidget(img, heading, data, unitImg) {
  const container = document.createElement('div');
  container.classList.add('topRightItemContainer');
  const image = new Image();
  image.src = img;
  image.classList.add('todayWeatherItemImage');

  const infoContainer = document.createElement('div');
  if (heading !== '') {
    const title = document.createElement('p');
    title.classList.add('todayInfoLabel');
    title.innerHTML = heading;
    infoContainer.append(title);
  }

  // Data with unit image
  const dataUnitContainer = document.createElement('div');
  dataUnitContainer.classList.add('dataInfoAndUnit');
  // The text
  const dataInfo = document.createElement('h3');
  dataInfo.innerHTML = data;
  dataUnitContainer.append(dataInfo);
  // The image
  if (unitImg !== '') {
    const unit = document.createElement('div');
    unit.style.filter = 'invert(1)';
    const unitImage = new Image();
    unitImage.src = unitImg;
    // Appends
    unit.append(unitImage);
    dataUnitContainer.append(unit);
  }
  infoContainer.append(dataUnitContainer);
  container.append(image);
  container.append(infoContainer);

  return container;
}
function createCityItem(cityName) {
  // Container for city name and city image
  const el = document.createElement('div');
  // Create image
  const img = new Image();
  img.src = City;
  img.alt = 'Icon representing a city';
  img.classList.add('todayWeatherItemImage');
  el.append(img);
  const name = document.createElement('h1');
  name.innerHTML = cityName;
  el.append(name);
  return el;
}

function createLatLonItem(lat, lon) {
  // Create image
  const el = document.createElement('div');
  el.classList.add('todayWeatherItemContainer');
  // Create image
  const img = new Image();
  img.src = Location;
  img.alt = 'Icon representing a drop location';
  img.classList.add('todayWeatherItemImage');
  el.append(img);
  const coor = document.createElement('h3');
  coor.innerHTML = `${lat}, ${lon}`;
  el.append(coor);
  return el;
}
function createLocalTime(time) {
  // Container for time name and time image
  const el = document.createElement('div');
  // Create image
  const img = new Image();
  img.src = Clock;
  img.alt = 'Icon representing a city';
  img.classList.add('todayWeatherItemImage');
  el.append(img);
  const name = document.createElement('h3');
  name.innerHTML = time;
  el.append(name);
  return el;
}

function populateLeftSection(data) {
  // DOM element anchors
  const city = document.getElementById('city');
  const latitudeLongitude = document.getElementById('lat-lon');
  const currentTime = document.getElementById('current-time');
  // DOM appends
  city.append(createCityItem(data.city));
  latitudeLongitude.append(createLatLonItem(data.lat, data.lon));
  currentTime.append(createLocalTime(data.currentTime));
}

function populateRightSection(data) {
  const todayFeelsLike = document.getElementById('today-feels-like');
  const todayWindSpeed = document.getElementById('today-wind-speed');
  const todayHumidity = document.getElementById('today-humidity');
  todayFeelsLike.append(createWeatherWidget(Thermostat, 'Feels Like', data.feelsLike, Fahrenheit));
  todayWindSpeed.append(createWeatherWidget(Wind, 'Wind Speed', data.windSpeed, Speed));
  todayHumidity.append(createWeatherWidget(Humidity, 'Humidity', data.humidity, ''));
}

function populateMiddleSection(data) {
// Middle section
  const todayIcon = document.getElementById('today-icon');
  const todayTemp = document.getElementById('today-temp');
  const unit = document.getElementById('unit');
  const todayDescription = document.getElementById('today-description');
  todayIcon.src = todayWeatherIcon(data.id);
  // Set current tempature
  todayTemp.innerHTML = data.temp;
  // Display temp with current unit
  if (data.unit === 'imperial') {
    // eslint-disable-next-line no-param-reassign
    unit.src = Fahrenheit;
  } else {
    unit.src = Celsius;
  }
  todayDescription.innerHTML = firstCharSentenceUpper(data.description);
}

function clearPreviousData() {
  const todayIcon = document.getElementById('today-icon');
  const todayTemp = document.getElementById('today-temp');
  const unit = document.getElementById('unit');
  const todayDescription = document.getElementById('today-description');
  const todayFeelsLike = document.getElementById('today-feels-like');
  const todayWindSpeed = document.getElementById('today-wind-speed');
  const todayHumidity = document.getElementById('today-humidity');
  const city = document.getElementById('city');
  const latitudeLongitude = document.getElementById('lat-lon');
  const currentTime = document.getElementById('current-time');

  const array = [];
  array.push(todayIcon);
  array.push(todayTemp);
  array.push(unit);
  array.push(todayDescription);
  array.push(todayFeelsLike);
  array.push(todayFeelsLike);
  array.push(todayWindSpeed);
  array.push(todayHumidity);
  array.push(city);
  array.push(latitudeLongitude);
  array.push(currentTime);

  array.forEach((el) => {
    // eslint-disable-next-line no-param-reassign
    el.innerHTML = '';
  });
}

export default function populateTodayWeatherData(data) {
  clearPreviousData();
  populateLeftSection(data);
  populateRightSection(data);
  populateMiddleSection(data);
}
