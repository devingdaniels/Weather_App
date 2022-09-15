import { createForecastCard } from './helperFunctions';

function clearCarousel() {
  const panelOne = document.getElementById('carousel-panel-one');
  const panelTwo = document.getElementById('carousel-panel-two');
  const panelThree = document.getElementById('carousel-panel-three');
  panelOne.innerHTML = '';
  panelTwo.innerHTML = '';
  panelThree.innerHTML = '';
}

export default function populateForecastWeatherData(data) {
  clearCarousel();
  data.forEach((item, index) => {
    if (index < 4) {
      document.getElementById('carousel-panel-one').append(createForecastCard(item));
    } else if (index > 4 && index < 9) {
      document.getElementById('carousel-panel-two').append(createForecastCard(item));
    } else {
      document.getElementById('carousel-panel-three').append(createForecastCard(item));
    }
  });
}
