import getLocaleTime from './getLocalTime';

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

async function getTodayHourlyData(city, units) {
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
  };
  // Determine the units of measure
  let unit = units;
  if (unit === '' || typeof unit === 'undefined') {
    unit = 'imperial';
  }
  // Save the units
  data.unit = unit;
  // The key for the Weather API
  const apiKey = '6afefd0acc02015759340d80dc5686e2';
  // Get a response (returns a promise) for the requested data from OpenWeather
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${apiKey}`, { mode: 'cors' });
  // Get data object we're are interested in
  const weatherData = await response.json();

  return weatherData;
}

export {
  getTodayMainWeatherData,
  getTodayHourlyData,
};
