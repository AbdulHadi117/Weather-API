# Weather App

A **clean, minimal, and responsive weather app** built with **HTML, CSS, and JavaScript** using the **OpenWeatherMap API** to fetch and display real-time weather data.

This app allows users to:

* Enter any location to fetch and display current weather information.
* View temperature, weather description, wind speed, and rain likelihood.
* Refresh weather data for the current location without retyping it.

---

## Features

✅ Fetches live weather data using OpenWeatherMap API.
✅ Displays location, temperature, weather condition, wind speed, and rain likelihood clearly.
✅ Refresh button for re-fetching the current location's weather.
✅ Responsive and clean UI with a simple, gradient background.
✅ Error handling for invalid locations with user alerts.

---

## Technologies Used

* **HTML5** (structure)
* **CSS3** (styling)
* **Vanilla JavaScript** (logic and API fetch)
* **OpenWeatherMap API** (data source)

---

## Setup Instructions

Follow these steps to run the project locally:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/AbdulHadi117/weather-app.git
cd weather-app
```

### 2️⃣ OpenWeatherMap API Key

* Sign up at [OpenWeatherMap](https://openweathermap.org/) (free) and get your API key.
* Replace the `apiKey` variable in `script.js` with your API key:

```js
const apiKey = "YOUR_API_KEY_HERE";
```

### 3️⃣ Run Locally

* You can simply open `index.html` in your browser.
* Alternatively, you can use **Live Server** in VS Code for auto-refresh.

---

## Project Structure

```
weather-app/
│
├── index.html          # Main HTML structure
├── style.css           # Styling for the app
└── script.js           # Weather fetching and rendering logic
```

---

## Usage

1. Enter a city name (e.g., `Lahore`, `New York`, `London`) in the input field.
2. Click on **Get Weather**.
3. The app will display:

   * Location name
   * Temperature in °C
   * Weather description (e.g., "clear sky")
   * Wind speed in m/s
   * Rain likelihood (`Yes` if rain data is present, otherwise `No`)
4. Click **Refresh** to update the weather data for the same location.

---

## Customization

✅ You can extend this app further by:

* Adding weather icons from OpenWeatherMap.
* Displaying humidity and pressure.
* Adding 5-day forecast support.
* Adding location autocomplete using Google Places API.
* Converting temperature units between °C and °F.
* Adding localStorage to save the last searched location.

---

## License

This project is licensed under the **MIT License** - feel free to use it in your own projects.

---

## Credits

* Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
* Project developed by **[ABDUL HADI](https://github.com/AbdulHadi117)**

---
