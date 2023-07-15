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

    // Resets fields for each search
    day1.innerHTML = " ";
    day2.innerHTML = " ";
    day3.innerHTML = " ";
    day4.innerHTML = " ";
    day5.innerHTML = " ";
    currentCard.innerHTML = " ";

    searchHistory();
    event.preventDefault();

};
// search button event
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
    
    function clickHistory() {
        searchFormEl.reset();
        // city = historyDisplay
        // console.log(city)
        // appendCity(city)
    }
    cityBtn.addEventListener("click", clickHistory)

    
    appendCity()
}




// function that searches the city name within city name API URL
function appendCity(city) {
    // user inputs city it goes into cityURL
    city = document.querySelector('#city-input').value
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
            console.log(lat);
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
            var weatherIconData = 'https://openweathermap.org/img/wn/' + (data.daily[0].weather[0].icon) + '@2x.png';
            var tempData = (data.daily[0].temp.day);
            var windData = (data.daily[0].wind_speed);
            var humidityData = (data.daily[0].humidity)
            // console.log(timestamp)
            console.log(weatherIconData);
            // console.log(tempData);
            // console.log(windData);
            // console.log(humidityData);

            renderCurrentDate(timestamp, weatherIconData, tempData, windData, humidityData);

            // day 1 data
            var timestamp1 = (data.daily[1].dt);
            var weatherIconData1 = 'https://openweathermap.org/img/wn/' + (data.daily[1].weather[0].icon) + '@2x.png';
            var tempData1 = (data.daily[1].temp.day);
            var windData1 = (data.daily[1].wind_speed);
            var humidityData1 = (data.daily[1].humidity)
            console.log(weatherIconData1)
            
            renderDay1(timestamp1, weatherIconData1, tempData1, windData1, humidityData1)

            // day 2 data
            var timestamp2 = (data.daily[2].dt);
            var weatherIconData2 = 'https://openweathermap.org/img/wn/' + (data.daily[2].weather[0].icon) + '@2x.png';
            var tempData2 = (data.daily[2].temp.day);
            var windData2 = (data.daily[2].wind_speed);
            var humidityData2 = (data.daily[2].humidity)
            
            renderDay2(timestamp2, weatherIconData2, tempData2, windData2, humidityData2)


            // day 3 data
            var timestamp3 = (data.daily[3].dt);
            var weatherIconData3 = 'https://openweathermap.org/img/wn/' + (data.daily[3].weather[0].icon) + '@2x.png';
            var tempData3 = (data.daily[3].temp.day);
            var windData3 = (data.daily[3].wind_speed);
            var humidityData3 = (data.daily[3].humidity)
            
            renderDay3(timestamp3, weatherIconData3, tempData3, windData3, humidityData3);

            // day 4 data
            var timestamp4 = (data.daily[4].dt);
            var weatherIconData4 = 'https://openweathermap.org/img/wn/' + (data.daily[4].weather[0].icon) + '@2x.png';
            var tempData4 = (data.daily[4].temp.day);
            var windData4 = (data.daily[4].wind_speed);
            var humidityData4 = (data.daily[4].humidity)
            
            renderDay4(timestamp4, weatherIconData4, tempData4, windData4, humidityData4);

            // day 5 data
            var timestamp5 = (data.daily[5].dt);
            var weatherIconData5 = 'https://openweathermap.org/img/wn/' + (data.daily[5].weather[0].icon) + '@2x.png';
            var tempData5 = (data.daily[5].temp.day);
            var windData5 = (data.daily[5].wind_speed);
            var humidityData5 = (data.daily[5].humidity)

            
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
    var weatherIcon = document.querySelector("#weather-emoji");
    weatherIcon.setAttribute("src", weatherIconData)
    var temp = document.createElement('li');
    temp.setAttribute("class", "fs-4");
    var wind = document.createElement('li');
    var humidity = document.createElement('li');

    currentCard.append(temp, wind, humidity);
    
    givenDate.textContent = "Today: " + date;
    // weatherIcon.textContent = weatherIconData;
    temp.textContent = "Temperature: " + Math.round(tempData)  + '\u00B0' +"F";
    wind.textContent = "Wind Speeds: " + windData + " MPH";
    humidity.textContent = "Humidity: " + humidityData + "%";
    
}


// day 1 display data
function renderDay1(timestamp1, weatherIconData1, tempData1, windData1, humidityData1) {

    var dateFormat = new Date(timestamp1 * 1000);
    var date = dateFormat.toLocaleDateString();
    console.log(date);

    var dayDate = document.querySelector('#date-1')
    var weatherIcon = document.querySelector("#weather-emoji-1");
    weatherIcon.setAttribute("src", weatherIconData1)
    var temp = document.createElement('li');
    var wind = document.createElement('li');
    var humidity = document.createElement('li');
    
    day1.append(temp, wind, humidity);
    
    dayDate.textContent = date;
    // weatherIcon.textContent = weatherIconData1;
    temp.textContent = "Temperature: " + Math.round(tempData1) + '\u00B0' +"F";
    wind.textContent = "Wind Speeds: " + windData1 + " MPH";
    humidity.textContent = "Humidity: " + humidityData1 + "%";
}


// day 2 display data
function renderDay2(timestamp2, weatherIconData2, tempData2, windData2, humidityData2) {
    
    var dateFormat = new Date(timestamp2 * 1000);
    var date = dateFormat.toLocaleDateString();
    console.log(date);

    var dayDate = document.querySelector('#date-2')
    var weatherIcon = document.querySelector("#weather-emoji-2");
    weatherIcon.setAttribute("src", weatherIconData2)
    var temp = document.createElement('li');
    var wind = document.createElement('li');
    var humidity = document.createElement('li');

    day2.append(temp, wind, humidity);

    dayDate.textContent = date
    // weatherIcon.textContent = weatherIconData2;
    temp.textContent = "Temperature: " + Math.round(tempData2) + '\u00B0' +"F";
    wind.textContent = "Wind Speeds: " + windData2 + " MPH";
    humidity.textContent = "Humidity: " + humidityData2 + "%";
}

// Day 3 display data
function renderDay3(timestamp3, weatherIconData3, tempData3, windData3, humidityData3) {

    var dateFormat = new Date(timestamp3 * 1000);
    var date = dateFormat.toLocaleDateString();
    console.log(date);

    var dayDate = document.querySelector('#date-3')
    var weatherIcon = document.querySelector("#weather-emoji-3");
    weatherIcon.setAttribute("src", weatherIconData3)
    var temp = document.createElement('li');
    var wind = document.createElement('li');
    var humidity = document.createElement('li');

    day3.append(temp, wind, humidity);

    dayDate.textContent = date
    // weatherIcon.textContent = weatherIconData3;
    temp.textContent = "Temperature: " + Math.round(tempData3) + '\u00B0' +"F";
    wind.textContent = "Wind Speeds: " + windData3 + " MPH";
    humidity.textContent = "Humidity: " + humidityData3 + "%";
}

// day 4 render data function
function renderDay4(timestamp4, weatherIconData4, tempData4, windData4, humidityData4) {

    var dateFormat = new Date(timestamp4 * 1000);
    var date = dateFormat.toLocaleDateString();
    console.log(date);

    var dayDate = document.querySelector('#date-4')
    var weatherIcon = document.querySelector("#weather-emoji-4");
    weatherIcon.setAttribute("src", weatherIconData4)
    var temp = document.createElement('li');
    var wind = document.createElement('li');
    var humidity = document.createElement('li');

    day4.append(temp, wind, humidity);

    dayDate.textContent = date
    // weatherIcon.textContent = weatherIconData4;
    temp.textContent = "Temperature: " + Math.round(tempData4) + '\u00B0' +"F";
    wind.textContent = "Wind Speeds: " + windData4 + " MPH";
    humidity.textContent = "Humidity: " + humidityData4 + "%";
}

// day 5 render data function
function renderDay5(timestamp5, weatherIconData5, tempData5, windData5, humidityData5) {
    
    var dateFormat = new Date(timestamp5 * 1000);
    var date = dateFormat.toLocaleDateString();
    console.log(date);

    var dayDate = document.querySelector('#date-5');
    var weatherIcon = document.querySelector("#weather-emoji-5");
    weatherIcon.setAttribute("src", weatherIconData5)
    var temp = document.createElement('li');
    var wind = document.createElement('li');
    var humidity = document.createElement('li');

    day5.append(temp, wind, humidity);

    dayDate.textContent = date;
    // weatherIcon.textContent = weatherIconData5;
    temp.textContent = "Temperature: " + Math.round(tempData5) + '\u00B0' +"F";
    wind.textContent = "Wind Speeds: " + windData5 + " MPH";
    humidity.textContent = "Humidity: " + humidityData5 + "%";

};
