// hamburger menu

var menu = document.querySelector('.menu');
var bar = document.querySelector('.bar');
var navUl = menu.querySelector('ul');
menu.addEventListener('click', function(e){
    menu.classList.toggle('active');
    bar.classList.toggle('ham-active');
    navUl.classList.toggle('active');
})


// weather check

var button = document.querySelector('.submit');
var input = document.querySelector('.location');
var day = document.querySelector('.display-day span');
var date = document.querySelector('.display-date-month');
var cityName = document.querySelector('.city-name');
var temperature = document.querySelector('.temperature');
var humidity = document.querySelector('.humidity');
var windSpeed = document.querySelector('.wind-speed');
var compass = document.querySelector('.compass');
var image = document.querySelector('.temp-image');
var display = document.querySelector('.display-city-temp');
 
button.addEventListener('click', function(e){
    e.preventDefault();
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=b170acb94d7928180c0896f62be0baf7')
    .then(function(response) 
    {
        return response.json()    //data converted to json
    })
    .then(function(data)
    {
        weatherData(data);
    })
});

function weatherData(weatherCheck) {
    var dateObject = new Date();
    var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    day.innerHTML = week[dateObject.getDay()]; 
    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    date.innerHTML = ""; 
    date.innerHTML += dateObject.getDate();
    date.innerHTML += " " + month[dateObject.getMonth()];
    var celcius = Math.round(parseFloat(weatherCheck.main.temp)-273.15);
    var fahrenheit = Math.round(((parseFloat(weatherCheck.main.temp)-273.15)*1.8)+32);
    temperature.innerHTML = celcius + '&deg;' + "C";
    cityName.innerHTML =  weatherCheck.name;
    humidity.innerHTML = weatherCheck.main.humidity + "%";
    windSpeed.innerHTML = weatherCheck.wind.speed + "m/sec";
    compass.innerHTML = weatherCheck.wind.deg + "&deg;";
    image = weatherCheck.weather[0].main;
    
    if (image === "Drizzle") {
        display.classList.add('drizzle');
    } else if (image === "Thunderstorm") {
        display.classList.add('thunderstorm');
    } else if (image === "Rain") {
        display.classList.add('rain');
    } else if (image === "Mist" || image === "Haze" || image === "Smoke") {
        display.classList.add('mist');
    } else if (image === "Clouds") {
        display.classList.add('cloud');
    } else if (image === "Broken clouds") {
        display.classList.add('broken-cloud');
    } else if (image === "Clear") {
        display.classList.add('clear');
    }  else {
        display.classList.add ('clear');
    }

} 

window.addEventListener('load', function(e) {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=b170acb94d7928180c0896f62be0baf7')
    .then(function(response){
    	return response.json()   //data converted to json
    }).then(function(data) 
    {
       weatherData(data);     
    });

})