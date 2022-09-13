import './style.css';

export default async function getWeatherData(cityName) {
  // The key for the Weather API
  const apiKey = 'fd553c93063c3987982ce1a5cc2cc71b';
  // Get a response (returns a promise) for the requested data from OpenWeather
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`, { mode: 'cors' });
  // Get data object we're are interested in
  const weatherData = await response.json();
  // Create object for storing relevant weather data
  const data = {
    city: '',
    temp: '',
    humidity: '',
    description: '',
  };
  // save data
  data.city = weatherData.name;
  data.temp = weatherData.main.temp;
  data.humidity = weatherData.main.humidity;
  data.description = weatherData.weather[0].description;
  // Return weather data object
  return data;
}
