import './style.css';

export default async function getWeatherData(cityName, units) {
  let unit = units;
  if (unit === '' || typeof unit === 'undefined') {
    unit = 'imperial';
  }
  // The key for the Weather API
  const apiKey = 'fd553c93063c3987982ce1a5cc2cc71b';
  // Get a response (returns a promise) for the requested data from OpenWeather
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unit}&appid=${apiKey}`, { mode: 'cors' });
  // Get data object we're are interested in
  const weatherData = await response.json();
  // Create object for storing relevant weather data
  console.log(weatherData);
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
  };
  // save data
  data.id = weatherData.weather[0].id;
  data.mainWeather = weatherData.weather[0].main;
  data.city = weatherData.name;
  data.temp = weatherData.main.temp;
  data.description = weatherData.weather[0].description;
  data.humidity = weatherData.main.humidity;
  data.windSpeed = weatherData.wind.speed;
  data.feelsLike = weatherData.main.feels_like;
  data.lat = weatherData.coord.lat;
  data.lon = weatherData.coord.lon;
  // Return weather data object
  console.log(data);
  return data;
}
