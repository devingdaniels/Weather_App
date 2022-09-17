/* eslint-disable no-unused-expressions */
class Forecast {
  constructor(id, temp, description, seaLevel, time) {
    this.id = id;
    this.temp = temp;
    this.description = description;
    this.seaLevel = seaLevel;
    this.time = time;
  }
}
Forecast.prototype.createForecastCard = () => {
  const el = document.createElement('div');
  el.innerHTML = 'HOLAAA';
  return el;
};

export default async function parseForecastData(data) {
  const array = [];
  // 12 because only need 12 3 hour increments
  for (let i = 0; i < 12; i++) {
    const iconId = data.list[i].weather[0].id;
    const { temp } = data.list[i].main;
    const { description } = data.list[i].weather[0];
    const seaLevel = data.list[i].main.sea_level;
    const time = data.list[i].dt_txt; // time
    array.push(new Forecast(iconId, temp, description, seaLevel, time));
  }
  return array;
}
