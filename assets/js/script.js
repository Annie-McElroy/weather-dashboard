// variables for search form input, and  button
var searchFormEl = document.querySelector('#search-form');
var searchBtn = document.querySelector("#search-button");
var savedCities = document.querySelector('#saved-list');
var cityInput = document.querySelector('#city-input');
var currentCard = document.querySelector('#current-day')


// empty variable for the saved city to local storage
var userSearch = [];
// var for the key
var APIKey = "dba807256a5277a928e9bb4daa57671f";

// "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}"

// var for the city name api URL with parameters q (for the city variable) and appid (for the api key)
// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
// Possible example: var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;




// var for city to collect whatever user inputs


// search button click event listener
function searchCity(event) {
    event.preventDefault();
    
    var cityInputVal = cityInput.value;
    userSearch.push(cityInputVal);
    
    if (!cityInputVal) {
        var errorMsg = document.querySelector('#error-msg')
        errorMsg.textContent = "You must enter a city name!";

        return;
    }
    
    // function to save user search to local storage
    localStorage.setItem("City", JSON.stringify(userSearch));
    console.log(userSearch);
    searchHistory()
    
}
// searchBtn 
searchFormEl.addEventListener('submit', searchCity);

// function for displaying history

function searchHistory() {
    var savedPlaces = JSON.parse(localStorage.getItem("City"));

    if (savedPlaces !== null) {
        userSearch = savedPlaces;
    }

    for (i = 0; i < savedPlaces.length; i++) {
        var historyDisplay = savedPlaces[i];
        var cityBtn = document.createElement("button");
    }
    
    cityBtn.textContent = historyDisplay;
    cityBtn.setAttribute("data-index", i);
    savedCities.appendChild(cityBtn);

    appendCity()
}

// function that searches the city name within city name API URL



function appendCity() {
    // user inputs city it goes into cityURL
    var city = document.querySelector('#city-input').value
    var cityURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + APIKey;
    
    console.log(city)
    console.log(cityURL)
    fetch (cityURL)
        .then(function (response){
            if (!response.ok) {
                throw response.json();
            }
            
            return response.json();
        })
        // from cityURL we'll take the lat and long with variable
        .then(function (data) {
            console.log('Fetch Response \n-------------');
            console.log(data);
            var lat = (data[0].lat);
            var lon = (data[0].lon);
            console.log (lat);
            console.log(lon);
            searchApi(lat, lon);
        });
}







// Search function for the API
function searchApi(lat, lon) {
    // var link lat and long
    var queryURL = "https://api.openweathermap.org/data/3.0/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + APIKey;
    
    // fetch function to get API
    fetch(queryURL)
        .then (function (response) {
            if (!response.ok) {
                throw response.json();
            }
            
            return response.json();
        })
        
        .then (function (data) {
            console.log(data);
            // for (var i = 0; i < data.daily.length; i++) {

            // }
            var timestamp = (data.daily[0].dt);
            var weatherIconData = (data.daily[0].weather[0].id)
            var tempData = (data.daily[0].temp.day);
            var windData = (data.daily[0].wind_speed);
            var humidityData = (data.daily[0].humidity)
            console.log(weatherIconData);
            console.log(tempData);
            console.log(windData);
            console.log(humidityData);
            
            var dateFormat = new Date(timestamp);
            var dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
            var date = new Intl.DateTimeFormat('en-US', dateOptions).format(dateFormat);
            console.log(date);
            
            var givenCity = document.querySelector("#city-header");
            var weatherIcon = document.createElement('li');
            var temp = document.createElement('li');
            var wind = document.createElement('li');
            var humidity = document.createElement('li');

            currentCard.append(weatherIcon, temp, wind, humidity);
            
            givenCity.textContent = date;
            weatherIcon.textContent = weatherIconData;
            temp.textContent = tempData;
            wind.textContent = windData;
            humidity.textContent = humidityData;
        })
}


// function to render it to the page