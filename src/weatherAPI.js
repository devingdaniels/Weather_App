import getLocaleTime from './getLocalTime';

/* eslint-disable no-unused-expressions */
class Forecast {
  constructor(id, temp, description, time, lat, lon) {
    this.id = id;
    this.temp = temp;
    this.description = description;
    this.time = time;
    this.lat = lat;
    this.lon = lon;
  }
}

async function getTodayMainWeatherData(cityName, units) {
  // Create object for storing relevant weather data
  const data = {
    id: '',
    mainWeather: '',
    city: '',
    temp: '',
    description: '',
    humidity: '',
    windSpeed: '',
    feelsLike: '',
    lat: '',
    lon: '',
    unit: '',
    currentTime: 'u',
  };
  // Determine the units of measure
  let unit = units;
  if (unit === '' || typeof unit === 'undefined') {
    unit = 'imperial';
  }
  // Save the units
  data.unit = unit;
  // Make the API call
  // The key for the Weather API
  const apiKey = 'fd553c93063c3987982ce1a5cc2cc71b';
  // Get a response (returns a promise) for the requested data from OpenWeather
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unit}&appid=${apiKey}`, { mode: 'cors' });
  // Get data object we're are interested in
  const weatherData = await response.json();
  // save data
  data.id = weatherData.weather[0].id;
  data.mainWeather = weatherData.weather[0].main;
  data.city = weatherData.name;
  data.temp = Math.round(weatherData.main.temp);
  data.description = weatherData.weather[0].description;
  data.humidity = Math.round(weatherData.main.humidity);
  data.windSpeed = Math.round(weatherData.wind.speed);
  data.feelsLike = Math.round(weatherData.main.feels_like);
  data.lat = weatherData.coord.lat;
  data.lon = weatherData.coord.lon;
  // Get local time of city
  const time = await getLocaleTime(data.lat, data.lon);
  data.currentTime = time;
  // Return weather data object
  return data;
}

function parseHourlyForecastData(data) {
  const array = [];
  // 12 because only need 12 forecast cards for the carousel
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 12; i++) {
    const iconId = data.list[i].weather[0].id;
    const { temp } = data.list[i].main;
    const { description } = data.list[i].weather[0];
    const time = data.list[i].dt_txt; // time
    const { lat } = data.city.coord;
    const { lon } = data.city.coord;
    array.push(new Forecast(iconId, temp, description, time, lat, lon));
  }
  // Save the array in the brain
  return array;
}
async function getTodayHourlyData(city, units) {
  // Determine the units of measure
  let unit = units;
  if (unit === '' || typeof unit === 'undefined') {
    unit = 'imperial';
  }
  // The key for the Weather API
  const apiKey = '6afefd0acc02015759340d80dc5686e2';
  // Get a response (returns a promise) for the requested data from OpenWeather
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${apiKey}`, { mode: 'cors' });
  // Get data object we're are interested in
  const weatherData = await response.json();
  // Pass the weather object, return an array of forecast objects
  return parseHourlyForecastData(weatherData);
}

export {
  getTodayMainWeatherData,
  getTodayHourlyData,
};
