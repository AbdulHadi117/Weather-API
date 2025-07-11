const apiKey = process.env.key;

const form = document.getElementById("location-form");
const input = document.getElementById("location-input");
const weatherDisplay = document.getElementById("weather-display");
const locationName = document.getElementById("location-name");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const wind = document.getElementById("wind");
const rain = document.getElementById("rain");
const refreshBtn = document.getElementById("refresh-btn");

let currentLocation = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = input.value.trim();
  if (location) {
    fetchWeather(location);
    currentLocation = location;
  }
});

refreshBtn.addEventListener("click", () => {
  if (currentLocation) {
    fetchWeather(currentLocation);
  }
});

async function fetchWeather(location) {
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error("Location not found");
    const data = await response.json();

    const temp = data.main.temp;
    const windSpeed = data.wind.speed;
    const desc = data.weather[0].description;
    const rainChance = data.rain ? "Yes" : "No"; 

    locationName.textContent = data.name;
    temperature.textContent = `${temp} °C`;
    description.textContent = desc;
    wind.textContent = `${windSpeed} m/s`;
    rain.textContent = rainChance;

    weatherDisplay.classList.remove("hidden");

  } catch (error) {
    alert("Error fetching weather: " + error.message);
    weatherDisplay.classList.add("hidden");
  }
}