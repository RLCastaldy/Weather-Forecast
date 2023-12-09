const searchFormElement = document.querySelector("form");
const searchSubmitElement = document.querySelector("#submit-search-1");
const resultsElement = document.querySelector("section");

let apiKey = "";
let apiURL = "https://";

function getCurrentWeather(params) {
  console.log("Get Current Weather");
}

function getWeatherForecast(params) {
  console.log("Get Forecast");
}

function displayCurrentWeather(params) {
    const currentWeather= getCurrentWeather()
    console.log("Current Weather", currentWeather)
}

searchSubmitElement.addEventListener("submit", (event) => {
    // event.preventDefault();
    console.log({ event });
    console.log("Search Submitted")
});
