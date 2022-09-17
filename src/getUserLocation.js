/*
position.coords.latitude;
position.coords.longitude;
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
*/
class UserLocation {
  constructor(lat, lon, isValid) {
    this.lat = lat;
    this.lon = lon;
    this.isValid = isValid;
  }
}
const userLocation = new UserLocation();

async function showPosition(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  userLocation.lat = lat;
  userLocation.lon = lon;
  userLocation.isValid = true;
}

async function determineCoordinates() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      resolve();
      navigator.geolocation.getCurrentPosition(showPosition);
    }
    reject();
  });
}

export default async function getLocation() {
  await determineCoordinates();
  return userLocation;
}
