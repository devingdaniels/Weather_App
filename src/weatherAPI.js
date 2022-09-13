import './style.css';

const getWeatherData = async (city) => {
  const apiKey = 'fd553c93063c3987982ce1a5cc2cc71b';
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`, { mode: 'cors' });
  const weatherData = await response.json();
  return weatherData;
};

function paintUI(response) {
  console.log(response);
  // Data
  const city = response.name;
  const { temp } = response.main;
  const { description } = response.weather[0];
  // Appends
  document.getElementById('weatherIcon').classList.add('fa-solid', 'fa-clouds');
  document.getElementById('city').innerHTML = city;
  document.getElementById('temp').innerHTML = temp;
  document.getElementById('description').innerHTML = description;
}

export {
  paintUI,
  getWeatherData,
};
