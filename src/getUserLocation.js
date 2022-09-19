import { weatherBrain } from './weatherBrain';

function loadPosition() {
  return new Promise((accept, reject) => {
    navigator.geolocation.getCurrentPosition(accept, reject);
  });
}

export default async function getPosition() {
  const position = await loadPosition();
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  weatherBrain.currentLocation.lat = lat;
  weatherBrain.currentLocation.lon = lon;
  return { lat, lon };
}
