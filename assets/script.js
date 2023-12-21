const inputElement = document.querySelector("#search-1");
const submitBtn = document.querySelector("#submit-search-1");
const resultsElement = document.querySelector("section");
const todayWeather = document.querySelector('#result-1');
console.log(todayWeather);
let searchCity = null
let lat = null;
let lon = null;

let apiKey = "81de0a25e101e669923b3eb2ce22b22e";
let apiURL = "https://";

function getCurrentWeather(lat, lon) {
  let currentWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    // now let's make the fetch request
    fetch(currentWeather).then( response => {
      // let's just console .log it for now
      console.log('Results are ', response);
      // extract the information I want from the body
      return response.json();
    }).then( currentWeatherData => {
      // console log it again
      console.log(currentWeatherData);
      var card = document.createElement("div");
      var heading = document.createElement("h2");
      var weatherImg = document.createElement("img");
      var tempPar=document.createElement("p");
      var windSpeed=document.createElement("p");
      var humidity=document.createElement("p");
      var teperature=currentWeatherData.main.temp;
      var windDisplay=currentWeatherData.wind;
      var humidityDisplay=currentWeatherData.main.humidity;
      var cityName=currentWeatherData.name;
      console.log(cityName);
      var date=new Date();
      console.log(date);
      heading.textContent= cityName;
      todayWeather.appendChild(heading);
      // assign the values from your geocode data to your lat and long variables that were declared up top
      // and pass those variables into your next api call.
    })
  console.log("Get Current Weather");
}

function getWeatherForecast(params) {
  console.log("Get Forecast");
}

function displayCurrentWeather(params) {
    const currentWeather= getCurrentWeather()
    console.log("Current Weather", currentWeather)
}

submitBtn.addEventListener("click", (event) => {
    //event.preventDefault();
    //console.log( event );
    //console.log("Search Submitted")
    searchCity = inputElement.value
    //console.log(searchCity)

    // now that we have the user input value, let's pass that into 
    // the call to our API endpoint. Let's think about how to construct the
    // full API endpoint url.

    // but first let's make the call to our GEcoding API to get the latitude and longitude values
    // which we are then going to pass into our onecall API endpoint

    let geocodeUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&appid=${apiKey}`;
    // now let's make the fetch request
    fetch(geocodeUrl).then( response => {
      // let's just console .log it for now
      console.log('Results are ', response);
      // extract the information I want from the body
      return response.json();
    }).then( myGecodeData => {
      // console log it again
      console.log(myGecodeData);
      lat = myGecodeData[0]["lat"];
      lon = myGecodeData[0]["lon"];
      console.log('lat value is ', lat);
      getCurrentWeather(lat, lon)
      // assign the values from your geocode data to your lat and long variables that were declared up top
      // and pass those variables into your next api call.
    })
});
