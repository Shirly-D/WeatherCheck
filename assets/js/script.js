// hamburger menu

var menu = document.querySelector('.menu');
var bar = document.querySelector('.bar');
var navUl = menu.querySelector('ul');
menu.addEventListener('click', function(e){
    menu.classList.toggle('active');
    bar.classList.toggle('ham-active');
    navUl.classList.toggle('active');
})

// Active nav links
$(function() {
    if ((location.pathname.split("/")[1]) !== ""){
        $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
    }
});


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
        console.log(data);
    })
})

function weatherData(w) {
    day.innerHTML = new Date();
    console.log(day);
    // date.getDate();
    // date.getMonth()+1;
    // date.innerHTML = new Date().toUTCString();
    var celcius = Math.round(parseFloat(w.main.temp)-273.15);
    var fahrenheit = Math.round(((parseFloat(w.main.temp)-273.15)*1.8)+32);
    temperature.innerHTML = celcius + '&deg;';
    document.querySelector('.city-name').innerHTML =  w.name;
    humidity.innerHTML = w.main.humidity;
    windSpeed.innerHTML = w.wind.speed;
    compass.innerHTML = w.wind.deg;
} 