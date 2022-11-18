// clock
let myVar = setInterval(function () {
    myTimer();
}, 1000);

function myTimer() {
    let d = new Date();
    document.getElementById("clock").innerHTML = d.toLocaleTimeString();
    document.getElementById("clock1").innerHTML = d.toLocaleTimeString();
    document.getElementById("clock2").innerHTML = d.toLocaleTimeString();
}
//   date
let options = { weekday: 'long', month: 'long', day: 'numeric' };
let today = new Date();
let date = today.toLocaleDateString("en-US", options);

document.getElementById("date").innerHTML = date;
document.getElementById("date2").innerHTML = date;

// buttons
const btnPower = document.querySelector(".power-button");
const btnHome = document.querySelector(".home-button");
const btnWheatherIcon = document.querySelector(".wheather-icon");
const btnSearchCity = document.querySelector(".plus");
const btnChangeCity = document.querySelector(".change");

// pages
const homeScreen = document.querySelector(".home");
const weatherScreen = document.querySelector(".weather");
const lockScreen = document.querySelector(".lock");
const searchPage = document.querySelector(".search-input");
const weatherPage = document.querySelector(".show-weather");

// other
const iconchangeCity = document.querySelector(".change-city");
const iconchange = document.querySelector(".change");

// function
btnPower.onclick = function () {
    homeScreen.style.display = 'none';
    weatherScreen.style.display = 'none';
    lockScreen.style.display = 'block';
}
btnHome.onclick = function () {
    homeScreen.style.display = 'block';
    weatherScreen.style.display = 'none';
    lockScreen.style.display = 'none';
}
btnWheatherIcon.onclick = function () {
    homeScreen.style.display = 'none';
    weatherScreen.style.display = 'block';
    lockScreen.style.display = 'none';
}

btnSearchCity.onclick = function () {
    let cityName = document.querySelector(".search-city").value;
    if (cityName == "") {
        alert("Type your City");
    }
    else {
        searchPage.style.display = 'none';
        weatherPage.style.display = 'flex';
        iconchangeCity.style.display = 'flex';

    fetch(`http://api.weatherapi.com/v1/current.json?key=b387aea5193e49c59a8142534221711&q=${cityName}`)
        .then(res => res.json())
        .then(data =>
            weatherPage.innerHTML = `
                <p class="city">${data.location.name}</p>
                <P class="country">${data.location.country}</p>
                <p class="cloud">${data.current.condition.text}</p>
                <img src="${data.current.condition.icon}" class="weather-icon" alt="">
                <p class="deg">${data.current.temp_c} °C</p>
                <P class="uv">UV Index  :</p>
                <p class="uv-num">${data.current.uv}</P>
                <p class="wind">Wind Speed  :</p>
                <p class="wind-num">${data.current.wind_kph} kph</p>
                <div class="cloud-p">Cloud  :</div>
                <div class="cloud-num">${data.current.wind_kph} %</div>`

        )

    fetch(`http://api.weatherapi.com/v1/current.json?key=b387aea5193e49c59a8142534221711&q=${cityName}`)
        .then(res => res.json())
        .then(data => {

             if (data.current.is_day == 0) {
                weatherScreen.style.backgroundImage = 'linear-gradient(#d7798b,black)';
                weatherScreen.style.color = 'white';
                iconchange.style.color = 'white';
            }

            else if (data.current.is_day == 1) {
                weatherScreen.style.backgroundImage = 'linear-gradient(yellow,white)';
                iconchange.style.color = 'black';
            }

        }
        )


}    }

btnChangeCity.onclick = function () {
    weatherPage.style.display = 'none';
    searchPage.style.display = 'block';
    iconchangeCity.style.display = 'none';
    weatherScreen.style.backgroundImage = 'linear-gradient(#00eee0,  #000000 )';
    weatherScreen.style.color = 'black';
    cityName = hi ;
}