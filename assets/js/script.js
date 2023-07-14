// variables for search form input, and  button
var searchFormEl = document.querySelector('#search-form');
var searchBtn = document.querySelector("#search-button");
var savedCities = document.querySelector('#saved-list');
var cityInput = document.querySelector('#city-input');
var currentCard = document.querySelector('#current-day')

// day cards
var day1 = document.querySelector('#day-1-list')
var day2 = document.querySelector('#day-2-list')
var day3 = document.querySelector('#day-3-list')
var day4 = document.querySelector('#day-4-list')
var day5 = document.querySelector('#day-5-list')

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

            // current date data
            var timestamp = (data.daily[0].dt);
            var weatherIconData = (data.daily[0].weather[0].id)
            var tempData = (data.daily[0].temp.day);
            var windData = (data.daily[0].wind_speed);
            var humidityData = (data.daily[0].humidity)
            console.log(timestamp)
            console.log(weatherIconData);
            console.log(tempData);
            console.log(windData);
            console.log(humidityData);

            renderCurrentDate(timestamp, weatherIconData, tempData, windData, humidityData);

            // day 1 data
            var timestamp1 = (data.daily[1].dt);
            var weatherIconData1 = (data.daily[1].weather[0].id)
            var tempData1 = (data.daily[1].temp.day);
            var windData1 = (data.daily[1].wind_speed);
            var humidityData1 = (data.daily[1].humidity)
            console.log(timestamp1)
            console.log(weatherIconData1);
            console.log(tempData1);
            console.log(windData1);
            console.log(humidityData1);
            
            renderDay1(timestamp1, weatherIconData1, tempData1, windData1, humidityData1)

            // day 2 data
            var timestamp2 = (data.daily[2].dt);
            var weatherIconData2 = (data.daily[2].weather[0].id)
            var tempData2 = (data.daily[2].temp.day);
            var windData2 = (data.daily[2].wind_speed);
            var humidityData2 = (data.daily[2].humidity)
            console.log(timestamp2)
            console.log(weatherIconData2);
            console.log(tempData2);
            console.log(windData2);
            console.log(humidityData2);
            
            renderDay2(timestamp2, weatherIconData2, tempData2, windData2, humidityData2)


            // day 3 data
            var timestamp3 = (data.daily[3].dt);
            var weatherIconData3 = (data.daily[3].weather[0].id)
            var tempData3 = (data.daily[3].temp.day);
            var windData3 = (data.daily[3].wind_speed);
            var humidityData3 = (data.daily[3].humidity)
            console.log(timestamp3)
            console.log(weatherIconData3);
            console.log(tempData3);
            console.log(windData3);
            console.log(humidityData3);
            
            renderDay3(timestamp3, weatherIconData3, tempData3, windData3, humidityData3);

            // day 4 data
            var timestamp4 = (data.daily[4].dt);
            var weatherIconData4 = (data.daily[4].weather[0].id)
            var tempData4 = (data.daily[4].temp.day);
            var windData4 = (data.daily[4].wind_speed);
            var humidityData4 = (data.daily[4].humidity)
            console.log(timestamp4)
            console.log(weatherIconData4);
            console.log(tempData4);
            console.log(windData4);
            console.log(humidityData4);
            
            renderDay4(timestamp4, weatherIconData4, tempData4, windData4, humidityData4);

            // day 5 data
            var timestamp5 = (data.daily[5].dt);
            var weatherIconData5 = (data.daily[5].weather[0].id)
            var tempData5 = (data.daily[5].temp.day);
            var windData5 = (data.daily[5].wind_speed);
            var humidityData5 = (data.daily[5].humidity)
            console.log(timestamp5)
            console.log(weatherIconData5);
            console.log(tempData5);
            console.log(windData5);
            console.log(humidityData5);
            
            renderDay5(timestamp5, weatherIconData5, tempData5, windData5, humidityData5);
            
        })
    };
    
// functions to render data to the page
function renderCurrentDate(timestamp, weatherIconData, tempData, windData, humidityData) {

    // current day
    var dateFormat = new Date(timestamp * 1000);
    var date = dateFormat.toLocaleDateString();
    console.log(date);
    
    // Write a variable to add input city to appear next to givenDate
    var givenDate = document.querySelector("#city-header");
    var weatherIcon = document.createElement('li');
    var temp = document.createElement('li');
    var wind = document.createElement('li');
    var humidity = document.createElement('li');

    currentCard.append(weatherIcon, temp, wind, humidity);
    
    givenDate.textContent = date;
    weatherIcon.textContent = weatherIconData;
    temp.textContent = tempData;
    wind.textContent = windData;
    humidity.textContent = humidityData;
    
}

// day 1 display data
// day 1 display data
// day 1 display data
// day 1 display data
function renderDay1(timestamp1, weatherIconData1, tempData1, windData1, humidityData1) {

    var dateFormat = new Date(timestamp1 * 1000);
    var date = dateFormat.toLocaleDateString();
    console.log(date);

    var dayDate = document.querySelector('#date-1')
    var weatherIcon = document.createElement('li');
    var temp = document.createElement('li');
    var wind = document.createElement('li');
    var humidity = document.createElement('li');
    
    day1.append(weatherIcon, temp, wind, humidity);
    
    dayDate.textContent = date
    weatherIcon.textContent = weatherIconData1;
    temp.textContent = tempData1;
    wind.textContent = windData1;
    humidity.textContent = humidityData1;
}


// day 2 display data
function renderDay2(timestamp2, weatherIconData2, tempData2, windData2, humidityData2) {
    
    var dateFormat = new Date(timestamp2 * 1000);
    var date = dateFormat.toLocaleDateString();
    console.log(date);

    var dayDate = document.querySelector('#date-2')
    var weatherIcon = document.createElement('li');
    var temp = document.createElement('li');
    var wind = document.createElement('li');
    var humidity = document.createElement('li');

    day2.append(weatherIcon, temp, wind, humidity);

    dayDate.textContent = date
    weatherIcon.textContent = weatherIconData2;
    temp.textContent = tempData2;
    wind.textContent = windData2;
    humidity.textContent = humidityData2;
}

// Day 3 display data
function renderDay3(timestamp3, weatherIconData3, tempData3, windData3, humidityData3) {

    var dateFormat = new Date(timestamp3 * 1000);
    var date = dateFormat.toLocaleDateString();
    console.log(date);

    var dayDate = document.querySelector('#date-3')
    var weatherIcon = document.createElement('li');
    var temp = document.createElement('li');
    var wind = document.createElement('li');
    var humidity = document.createElement('li');

    day3.append(weatherIcon, temp, wind, humidity);

    dayDate.textContent = date
    weatherIcon.textContent = weatherIconData3;
    temp.textContent = tempData3;
    wind.textContent = windData3;
    humidity.textContent = humidityData3;
}

// day 4 render data function
function renderDay4(timestamp4, weatherIconData4, tempData4, windData4, humidityData4) {

    var dateFormat = new Date(timestamp4 * 1000);
    var date = dateFormat.toLocaleDateString();
    console.log(date);

    var dayDate = document.querySelector('#date-4')
    var weatherIcon = document.createElement('li');
    var temp = document.createElement('li');
    var wind = document.createElement('li');
    var humidity = document.createElement('li');

    day4.append(weatherIcon, temp, wind, humidity);

    dayDate.textContent = date
    weatherIcon.textContent = weatherIconData4;
    temp.textContent = tempData4;
    wind.textContent = windData4;
    humidity.textContent = humidityData4;
}

// day 5 render data function
function renderDay5(timestamp5, weatherIconData5, tempData5, windData5, humidityData5) {
    
    var dateFormat = new Date(timestamp5 * 1000);
    var date = dateFormat.toLocaleDateString();
    console.log(date);

    var dayDate = document.querySelector('#date-5');
    var weatherIcon = document.createElement('li');
    var temp = document.createElement('li');
    var wind = document.createElement('li');
    var humidity = document.createElement('li');

    day5.append(weatherIcon, temp, wind, humidity);

    dayDate.textContent = date;
    weatherIcon.textContent = weatherIconData5;
    temp.textContent = tempData5;
    wind.textContent = windData5;
    humidity.textContent = humidityData5;

};
