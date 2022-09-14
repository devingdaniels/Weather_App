// import Fahrenheit from './assets/fahrenheit.svg';
// import Celsius from './assets/celsius.svg';
// import ThunderStorm from './assets/thunderstorm.svg';
// import Drizzle from './assets/drizzle.svg';
// import HeavyRain from './assets/heavy-rain.svg';
// import Snow from './assets/snow-flake.svg';
// import Sun from './assets/sun.svg';
import City from './assets/city.svg';
import Location from './assets/location.svg';

// function todayWeatherIcon(val) {
//   const value = Number(val);
//   if (value >= 200 && value <= 232) {
//     return ThunderStorm;
//   }
//   if (value >= 300 && value <= 321) {
//     return Drizzle;
//   }
//   if (value >= 500 && value <= 531) {
//     return HeavyRain;
//   }
//   if (value >= 600 && value <= 622) {
//     return Snow;
//   }
//   if (value === 800) {
//     // This is for clear sky
//     // Add code here
//     // If it is night, pass in moon
//     // else pass in sun
//     return Sun;
//   }
//   // default case
//   return Sun;
// }

// function weatherDataItem(img, heading, data) {
//   const container = document.createElement('div');
//   container.classList.add('todayWeatherItemContainer');
//   const image = new Image();
//   image.src = img;
//   image.classList.add('todayWeatherItemImage');

//   const infoContainer = document.createElement('div');
//   infoContainer.classList.add('todayWeatherItemInfo');
//   if (heading !== '') {
//     const title = document.createElement('p');
//     title.innerHTML = heading;
//     infoContainer.append(title);
//   }
//   const dataInfo = document.createElement('h3');
//   dataInfo.innerHTML = data;
//   infoContainer.append(dataInfo);

//   container.append(image);
//   container.append(infoContainer);

//   return container;
// }
function createCityItem(cityName) {
  // Container for city name and city image
  const el = document.createElement('div');
  el.classList.add('todayWeatherItemContainer');
  // Create image
  const img = new Image();
  img.src = City;
  img.alt = 'Icon representing a city';
  img.classList.add('todayWeatherItemImage');
  el.append(img);
  const name = document.createElement('h1');
  name.classList.add('itemInfo');
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
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('itemInfo');
  const latEl = document.createElement('h3');
  const lonEl = document.createElement('h3');
  latEl.innerHTML = `Latitude: ${lat}`;
  lonEl.innerHTML = `Longitude: ${lon}`;
  infoContainer.append(latEl);
  infoContainer.append(lonEl);
  el.append(infoContainer);
  return el;
}

function populateLeftSection(data) {
  // DOM element anchors
  const city = document.getElementById('city');
  const latitudeLongitude = document.getElementById('lat-lon');
  // DOM appends
  city.append(createCityItem(data.city));
  latitudeLongitude.append(createLatLonItem(data.lat, data.lon));
}

export default function populateTodayWeatherData(data) {
  populateLeftSection(data);
}

// function populateRightSection() {
//   // Right section
//   const todayFeelsLike = document.getElementById('today-feels-like');
//   const todayWindSpeed = document.getElementById('today-wind-speed');
//   const todayHumidity = document.getElementById('today-humidity');
// }
// function populateMiddleSection(data) {
// // Middle section
//   const todayIcon = document.getElementById('today-icon');
//   const todayTemp = document.getElementById('today-temp');
//   const unit = document.getElementById('unit');
//   const todayDescription = document.getElementById('today-description');
//   todayIcon.src = todayWeatherIcon(data.id);
//   // Set current tempature
//   todayTemp.innerHTML = data.temp;
//   // Display temp with current unit
//   if (data.unit === 'imperial') {
//     // eslint-disable-next-line no-param-reassign
//     unit.src = Fahrenheit;
//   } else {
//     unit.src = Celsius;
//   }
//   todayDescription.innerHTML = data.description;
// }
