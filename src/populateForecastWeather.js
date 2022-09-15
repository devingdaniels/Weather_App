import { createForecastCard } from './helperFunctions';

export default function populateForecastWeatherData(data) {
  data.forEach((item) => {
    createForecastCard(item);
  });
}
