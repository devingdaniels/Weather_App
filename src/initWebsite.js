import { getTodayMainWeatherData, getTodayHourlyData } from './weatherAPI';
import getCityFromLatLon from './getCityFromLatLon';
import getPosition from './getUserLocation';
import { weatherBrain } from './weatherBrain';
import populateForecastWeatherData from './populateForecast';
import populateTodayWeatherData from './populateTodayWeather';

export default async function initWebsite() {
  // Get location of user
  try {
    const latLon = await getPosition();
    const cityName = await getCityFromLatLon(latLon.lat, latLon.lon);
    weatherBrain.currentLocation.cityName = cityName;
  } catch {
    // eslint-disable-next-line no-alert
    alert('Location services denied...loading default city.');
  }

  let mainWeatherData;
  let todayHourlyData;
  if (weatherBrain.currentLocation.cityName !== '') {
    mainWeatherData = await getTodayMainWeatherData(weatherBrain.currentLocation.cityName);
    todayHourlyData = await getTodayHourlyData(weatherBrain.currentLocation.cityName);
  } else {
    const defaultCity = 'New York';
    mainWeatherData = await getTodayMainWeatherData(defaultCity);
    todayHourlyData = await getTodayHourlyData(defaultCity);
  }

  weatherBrain.hourlyForecastData = todayHourlyData;
  weatherBrain.todayForecastData = mainWeatherData;
  populateTodayWeatherData(mainWeatherData);
  populateForecastWeatherData(todayHourlyData);
}
