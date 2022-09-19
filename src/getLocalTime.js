export default async function getLocalTime(lat, lon) {
  // Google Maps API Key
  const apiKey = 'AIzaSyAFIYFe32hp97dIG58SXLczpBUqC8fC95U';
  // Fetch
  const response = await fetch(`https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lon}&timestamp=1331161200&key=${apiKey}`, { mode: 'cors' });
  // Make usable
  const data = await response.json();
  // Get the local time from the timezone used by the lat and lon fetch
  const result = new Date().toLocaleString('en-US', { timeZone: data.timeZoneId });
  // return the local time
  return result;
}
