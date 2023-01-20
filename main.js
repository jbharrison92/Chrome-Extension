let startPos;

let geolocation = function(position) {
    startPos = position;

let latitude = position.coords.latitude;
let longitude = position.coords.longitude;


// let longitude: e
// let latitude:
const api_url = "https://api.openweathermap.org/data/2.5/weather?q=Atlanta&APPID=a16eabac5b6d42eda97655c75cd8ecc8"

fetch(api_url)
    .then(data => data.json())

    .then(jsonData => {
        console.log(jsonData.name)
        console.log(Math.round(1.8*((jsonData.main.temp)-273) + 32) + "°" + " " + "F")
        console.log(jsonData.weather[0].main)
        console.log(jsonData.weather[0].description)


        document.getElementById("specific-location").innerHTML = jsonData.name
        document.getElementById("temperature").innerHTML = Math.round(1.8*((jsonData.main.temp)-273) + 32) + "°" + " " + "F"
        document.getElementById("weather").innerHTML = jsonData.weather[0].main
        document.getElementById("description").innerHTML = jsonData.weather[0].description

    })
    navigator.geolocation.getCurrentPosition(geoSuccess);
}







    