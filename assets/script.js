const inputElement = document.querySelector("#search-1");
const submitBtn = document.querySelector("#submit-search-1");
const resultsElement = document.querySelector("section");
let searchCity = null
let lat = null;
let lon = null;

let apiKey = "81de0a25e101e669923b3eb2ce22b22e";
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
      console.log('lat value is ', lat);
      // assign the values from your geocode data to your lat and long variables that were declared up top
      // and pass those variables into your next api call.
    })
});
