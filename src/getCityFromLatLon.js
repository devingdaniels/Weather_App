export default async function getCityFromLatLon(lat, lon) {
  // Google Maps API Key
  const apiKey = 'AIzaSyAFIYFe32hp97dIG58SXLczpBUqC8fC95U';
  // Fetch
  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${apiKey}`, { mode: 'cors' });

  // Make usable
  const data = await response.json();
  const cityName = data.results[0].address_components[3].long_name;

  return cityName;
}
