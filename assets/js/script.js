// variables for search button
var searchFormEl = document.querySelector('#search-form')
var searchBtn = document.querySelector("#search-button")

// var for the key and api URL (with the lat and long )
var APIKey = "dba807256a5277a928e9bb4daa57671f"

// "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}"

// var for the city name api URL with parameters q (for the city variable) and appid (for the api key)
// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
// Possible example: var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;


// var cityURL 


// variable for city
// var for city to collect whatever user inputs


// search button click event listener
function searchCity(event) {
    event.preventDefault();
    
    var cityInputVal = document.querySelector('#city-input').value;
    
    if (!cityInputVal) {
        var errorMsg = document.querySelector('#error-msg')
        errorMsg.textContent = "You must enter a city name!"
        return;
    }
    
    localStorage.setItem("City", cityInputVal)
    // console.log(cityInputVal)
    
}

// searchBtn 
searchFormEl.addEventListener('submit', searchCity);


// function that searches the city name within city name API URL

// grab city from localstorage and put it into city URL
// user inputs city it goes into cityURL
// from cityURL we'll take the lat and long with variable for document.location.lat

function appendCity() {
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

    var city = localStorage.getItem("City", cityInputVal)

}





    // fetch function to get API
    // We'll want to get the cities lat and log

    // function to save user search to local storage
    
    // api link for each city
    
    // var link lat and long
    
    
    
// Search function for the API
// function searchApi(query) {
//     var queryURL = 'api.openweathermap.org/data/2.5/forecast?'

//     if 
// }


// function to render it to the page
// dayjs to render weather by date/time accuracy on the page