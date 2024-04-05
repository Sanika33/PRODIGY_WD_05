document.getElementById('location-form').addEventListener('submit', getWeather);

function getWeather(e) {
  e.preventDefault();

  const locationInput = document.getElementById('location-input').value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=YOUR_API_KEY&units=metric`)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weather-info');
      weatherInfo.innerHTML = `
        <h2>Weather in ${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Condition: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
      `;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      const weatherInfo = document.getElementById('weather-info');
      weatherInfo.innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
    });
}
