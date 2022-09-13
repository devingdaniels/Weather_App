function todayWeatherCard(data) {
// An array for collecting container components
  const components = [];
  // Section container
  const container = document.createElement('div');
  // Add styling class
  container.classList.add('weatherTodayCard');
  // Section elements

  // Call function that returns weather icon

  const city = document.createElement('h1');
  components.push(city);
  const temp = document.createElement('h3');
  components.push(temp);
  const humidity = document.createElement('h3');
  components.push(humidity);
  const description = document.createElement('h3');
  components.push(description);

  city.innerHTML = data.city;
  temp.innerHTML = data.temp;
  humidity.innerHTML = data.humidity;
  description.innerHTML = data.description;

  // Add components to container
  components.forEach((el) => {
    container.append(el);
  });

  return container;
}

function renderImage(image, alt) {
  const img = new Image();
  img.src = image;
  img.alt = alt;
  img.classList.add('weatherIcon');
  return img;
}

export { todayWeatherCard };
