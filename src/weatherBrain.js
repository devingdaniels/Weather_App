class Brain {
  constructor() {
    this.todayForecastData = '';
    this.hourlyForecastData = '';
    this.currentLocation = {
      lat: '',
      lon: '',
      cityName: '',
    };
  }
}

const weatherBrain = new Brain();

export default weatherBrain;
