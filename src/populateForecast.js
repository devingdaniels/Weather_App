import { todayWeatherIcon, firstCharSentenceUpper, formatForecastTime } from './helperFunctions';

function clearCarousel() {
  const panelOne = document.getElementById('carousel-panel-one');
  const panelTwo = document.getElementById('carousel-panel-two');
  const panelThree = document.getElementById('carousel-panel-three');
  panelOne.innerHTML = '';
  panelTwo.innerHTML = '';
  panelThree.innerHTML = '';
}

function createForecastCard(data) {
  const container = document.createElement('div');
  container.classList.add('forecastContainer');
  // Image
  const img = document.createElement('img');
  img.classList.add('forecastIcon');
  img.src = todayWeatherIcon(data.id, data.lat, data.lon);
  // Temperature
  const temp = document.createElement('h5');
  temp.innerHTML = data.temp;
  // Description
  const description = document.createElement('h5');
  description.innerHTML = firstCharSentenceUpper(data.description);
  description.style.fontStyle = 'italic';
  // Get parsed formatted date and time object from formateForecastTime
  const dateTime = formatForecastTime(data.time);
  const time = document.createElement('h5');
  time.innerHTML = dateTime.time;
  const date = document.createElement('h5');
  date.innerHTML = dateTime.date;
  container.append(img);
  container.append(temp);
  container.append(description);
  container.append(time);
  container.append(date);
  return container;
}

export default function populateForecastWeatherData(data) {
  clearCarousel();
  data.forEach((item, index) => {
    if (index < 4) {
      document.getElementById('carousel-panel-one').append(createForecastCard(item));
    } else if (index >= 4 && index < 8) {
      document.getElementById('carousel-panel-two').append(createForecastCard(item));
    } else {
      document.getElementById('carousel-panel-three').append(createForecastCard(item));
    }
  });
}
