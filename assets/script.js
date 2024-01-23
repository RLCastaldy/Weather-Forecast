// variables for html elements
const inputElement = document.querySelector("#search-1");
const submitBtn = document.querySelector("#submit-search-1");
const resultsElement = document.querySelector("section");
const todayWeather = document.querySelector('#result-1');
const todayWeather2 = document.querySelector('#result-2');
const todayWeather3 = document.querySelector('#result-3');
const todayWeather4 = document.querySelector('#result-4');
const todayWeather5 = document.querySelector('#result-5');
const todayWeather6 = document.querySelector('#result-6');
// emty variables to be filled by api call
let searchCity = null;
let lat = null;
let lon = null;
// key from api to allow access to data
let apiKey = "81de0a25e101e669923b3eb2ce22b22e";
// api call for weather data
function getCurrentWeather(lat, lon) {
  let currentWeather = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    // now let's make the fetch request
    fetch(currentWeather).then( response => {
      // let's just console .log it for now
      console.log('Results are ', response);
      // extract the information I want from the body
      return response.json();
    }).then( currentWeatherData => {
      // console log it again
      console.log("DATA", currentWeatherData);

      // variables for data to apply to cards
      var card = document.createElement("div"); 
        card.setAttribute("class", "card");
      // variables to create html elements for data to display
      var heading = document.createElement("h2");
      var date= document.createElement("h3");
      var weatherImg = document.createElement("img");
      var tempPar=document.createElement("p");
      var windSpeed=document.createElement("p");
      var humidity=document.createElement("p");
      var icon = currentWeatherData.list[0].weather[0].icon;
      var iconURL=`https://openweathermap.org/img/w/${icon}.png`;
        weatherImg.setAttribute("src", iconURL);
      // applying data to display on card
      date.textContent=new Date();
      tempPar.textContent=currentWeatherData.list[0].main.temp;
      windSpeed.textContent=currentWeatherData.list[0].wind.speed;
      humidity.textContent=currentWeatherData.list[0].main.humidity;
      // append data to card variables and enable them to display on page
      card.append(heading, date, weatherImg, tempPar, windSpeed, humidity)
      var cityName=currentWeatherData.city.name;
      console.log(cityName);
      heading.textContent= cityName;
      todayWeather.appendChild(card);
      // assign the values from your geocode data to your lat and long variables that were declared up top
      // and pass those variables into your next api call.
      var card2 = document.createElement("div"); 
        card2.setAttribute("class", "card2");
      // repeat steps for each days weather
      var heading2=document.createElement("h2");
      var date2=document.createElement("h3");
      var weatherImg2=document.createElement("img");
      var tempPar2=document.createElement("p");
      var windSpeed2=document.createElement("p");
      var humidity2=document.createElement("p");
      var icon2=currentWeatherData.list[3].weather[0].icon;
      var iconURL2=`https://openweathermap.org/img/w/${icon2}.png`;
        weatherImg2.setAttribute("src", iconURL2);

      date2.textContent=currentWeatherData.list[3].dt_txt;
      tempPar2.textContent=currentWeatherData.list[3].main.temp;
      windSpeed2.textContent=currentWeatherData.list[3].wind.speed;
      humidity2.textContent=currentWeatherData.list[3].main.humidity;

      card2.append(heading2, date2, weatherImg2, tempPar2, windSpeed2, humidity2)
      var cityName2=currentWeatherData.city.name;
      console.log(cityName2);
      heading2.textContent= cityName2;
      todayWeather2.appendChild(card2);

      var card3 = document.createElement("div"); 
        card3.setAttribute("class", "card3");

      var heading3 = document.createElement("h2");
      var date3=document.createElement("h3");
      var weatherImg3 = document.createElement("img");
      var tempPar3=document.createElement("p");
      var windSpeed3=document.createElement("p");
      var humidity3=document.createElement("p");
      var icon3 = currentWeatherData.list[11].weather[0].icon;
      var iconURL3=`https://openweathermap.org/img/w/${icon3}.png`;
        weatherImg3.setAttribute("src", iconURL3);

      date3.textContent=currentWeatherData.list[11].dt_txt;
      tempPar3.textContent=currentWeatherData.list[11].main.temp;
      windSpeed3.textContent=currentWeatherData.list[11].wind.speed;
      humidity3.textContent=currentWeatherData.list[11].main.humidity;

      card3.append(heading3, date3, weatherImg3, tempPar3, windSpeed3, humidity3)
      var cityName3=currentWeatherData.city.name;
      console.log(cityName3);
      heading3.textContent= cityName3;
      todayWeather3.appendChild(card3);

      var card4 = document.createElement("div"); 
        card4.setAttribute("class", "card4");

      var heading4 = document.createElement("h2");
      var date4=document.createElement("h3");
      var weatherImg4 = document.createElement("img");
      var tempPar4=document.createElement("p");
      var windSpeed4=document.createElement("p");
      var humidity4=document.createElement("p");
      var icon4 = currentWeatherData.list[19].weather[0].icon;
      var iconURL4=`https://openweathermap.org/img/w/${icon4}.png`;
        weatherImg4.setAttribute("src", iconURL4);

      date4.textContent=currentWeatherData.list[19].dt_txt;
      tempPar4.textContent=currentWeatherData.list[19].main.temp;
      windSpeed4.textContent=currentWeatherData.list[19].wind.speed;
      humidity4.textContent=currentWeatherData.list[19].main.humidity;

      card4.append(heading4, date4, weatherImg4, tempPar4, windSpeed4, humidity4)
      var cityName4=currentWeatherData.city.name;
      console.log(cityName4);
      heading4.textContent= cityName4;
      todayWeather4.appendChild(card4);

      var card5 = document.createElement("div"); 
        card5.setAttribute("class", "card5");

      var heading5 = document.createElement("h2");
      var date5=document.createElement("h3");
      var weatherImg5 = document.createElement("img");
      var tempPar5=document.createElement("p");
      var windSpeed5=document.createElement("p");
      var humidity5=document.createElement("p");
      var icon5 = currentWeatherData.list[27].weather[0].icon;
      var iconURL5=`https://openweathermap.org/img/w/${icon5}.png`;
        weatherImg5.setAttribute("src", iconURL5);

      date5.textContent=currentWeatherData.list[27].dt_txt;
      tempPar5.textContent=currentWeatherData.list[27].main.temp;
      windSpeed5.textContent=currentWeatherData.list[27].wind.speed;
      humidity5.textContent=currentWeatherData.list[27].main.humidity;

      card5.append(heading5, date5, weatherImg5, tempPar5, windSpeed5, humidity5)
      var cityName5=currentWeatherData.city.name;
      console.log(cityName5);
      heading5.textContent= cityName5;
      todayWeather5.appendChild(card5);

      var card6 = document.createElement("div"); 
        card6.setAttribute("class", "card6");

      var heading6 = document.createElement("h2");
      var date6=document.createElement("h3");
      var weatherImg6 = document.createElement("img");
      var tempPar6=document.createElement("p");
      var windSpeed6=document.createElement("p");
      var humidity6=document.createElement("p");
      var icon6 = currentWeatherData.list[35].weather[0].icon;
      var iconURL6=`https://openweathermap.org/img/w/${icon6}.png`;
        weatherImg6.setAttribute("src", iconURL6);

      date6.textContent=currentWeatherData.list[35].dt_txt;
      tempPar6.textContent=currentWeatherData.list[35].main.temp;
      windSpeed6.textContent=currentWeatherData.list[35].wind.speed;
      humidity6.textContent=currentWeatherData.list[35].main.humidity;

      card6.append(heading6, date6, weatherImg6, tempPar6, windSpeed6, humidity6)
      var cityName6=currentWeatherData.city.name;
      console.log(cityName4);
      heading6.textContent= cityName6;
      todayWeather6.appendChild(card6);
    })
  console.log("Get Current Weather");
}
// end of cards for displaying weather data

// calls getWeatherForecast function
function getWeatherForecast(params) {
  console.log("Get Forecast");
}

// calls displayCurrentWeather function
function displayCurrentWeather(params) {
    const currentWeather= getCurrentWeather()
    console.log("Current Weather", currentWeather)
}

// adds functionality to buttons
submitBtn.addEventListener("click", (event) => {
    searchCity = inputElement.value;
    document.getElementById( 'searchElement' ).style.display = 'none';
    document.getElementById( 'tryAgain' ).style.display = 'flex';
  

// allows API data to be used   
const searchQuery = searchCity;
const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
searchHistory.push(searchQuery);
localStorage.setItem('searchHistory', JSON.stringify(searchHistory));


    

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
