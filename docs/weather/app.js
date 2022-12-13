// clock
let myVar = setInterval(function () {
    myTimer();
}, 1000);

function myTimer() {
    let d = new Date();
    document.getElementById("clock").innerHTML = d.toLocaleTimeString();
    document.getElementById("clock1").innerHTML = d.toLocaleTimeString();
}

// clock 2

function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";

    if (hh === 0) {
        hh = 12;
    }
    if (hh > 12) {
        hh = hh - 12;
        session = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss + " " + session;

    document.getElementById("clock2").innerText = time;
    let t = setTimeout(function () { currentTime() }, 1000);
}

currentTime();

let clock = document.getElementById("clock2").innerText;

//   date
let options = { weekday: 'long', month: 'long', day: 'numeric' };
let today = new Date();
let date = today.toLocaleDateString("en-US", options);

document.getElementById("date").innerHTML = date;
document.getElementById("date2").innerHTML = date;

// buttons
const btnPower = document.querySelector(".power-button");
const btnHome = document.querySelector(".home-button");
const btnWheatherIcon = document.querySelector(".weather-icon");
const btnSearchCity = document.querySelector(".plus");
const btnChangeCity = document.querySelector(".change");
const btnRemoveInputValue = document.querySelector(".remove-input-value");
const btnGetLocation = document.querySelector(".loc-btn");
const btnGoBackk = document.querySelector(".go-backk");

// pages
const homeScreen = document.querySelector(".home");
const weatherScreen = document.querySelector(".weather");
const lockScreen = document.querySelector(".lock");
const searchPage = document.querySelector(".search-input");
const weatherPage = document.querySelector(".show-weather");
const pageMap = document.querySelector(".back-map");
const pageMoreBtns = document.querySelector(".more-btns");

// other
const iconchangeCity = document.querySelector(".change-city");
const iconchange = document.querySelector(".change");

// alerts
const alertempty = document.querySelector(".alert-empty")
const btnok = document.querySelector(".alert-btn1");

// function
btnPower.onclick = function () {
    homeScreen.style.display = 'none';
    weatherScreen.style.display = 'none';
    lockScreen.style.display = 'block';
    pageMap.style.display = 'none';
    pageMoreBtns.style.display = 'none';
}
btnHome.onclick = function () {
    homeScreen.style.display = 'block';
    weatherScreen.style.display = 'none';
    lockScreen.style.display = 'none';
    pageMap.style.display = 'none';
    pageMoreBtns.style.display = 'none';

}
btnWheatherIcon.onclick = function () {
    homeScreen.style.display = 'none';
    weatherScreen.style.display = 'block';
    lockScreen.style.display = 'none';
    pageMoreBtns.style.display = 'none';
    pageMap.style.display = 'none';
    weatherPage.style.display = 'flex';
}

// remove input value
let cityName3 = document.querySelector(".search-city");
btnRemoveInputValue.onclick = function () {
    cityName3.value = "";
}

// search city
btnSearchCity.onclick = function () {
    let cityName = document.querySelector(".search-city").value;
    if (cityName == "") {
        alertempty.style.display = 'flex';
        btnok.onclick = function () {
            alertempty.style.display = 'none';
        }
    }
    else {
        searchPage.style.display = 'none';
        weatherPage.style.display = 'flex';
        iconchangeCity.style.display = 'flex';
        pageMoreBtns.style.display = 'block';

        fetch(`http://api.weatherapi.com/v1/current.json?key=0b3dc0f4164a4b24bed171724220412&q=${cityName}&aqi=no`)
            .then(res => res.json())
            .then(data =>
                weatherPage.innerHTML = `
                <p class="last_updated">Last Updated: ${data.current.last_updated}</p>
                <p class="city">${data.location.name}</p>
                <P class="country">${data.location.country}</p>
                <p class="cloud">${data.current.condition.text}</p>
                <img src="${data.current.condition.icon}" class="weather-icon" alt="">
                <p class="deg">${data.current.temp_c} °C</p>
                <P class="uv">UV Index  :</p>
                <p class="uv-num">${data.current.uv}</P>
                <div class="cloud-p">Cloud  :</div>
                <div class="cloud-num">${data.current.cloud} %</div>
                <p class="wind">Wind Speed  :</p>
                <p class="wind-num">${data.current.wind_kph} km/h</p>
                <div class="wind_dir">Wind Dir  :</div>
                <div class="wind_dir-num">${data.current.wind_dir}</div>
                `
            );


        fetch(`http://api.weatherapi.com/v1/current.json?key=0b3dc0f4164a4b24bed171724220412&q=${cityName}&aqi=no`)
            .then(res => res.json())
            .then(data => {

                // read input value 
                speechSynthesis.speak(
                    new SpeechSynthesisUtterance(`city ${data.location.name}`))

                var readDtaile = document.querySelector(".read-detaile");

                readDtaile.onclick = function () {
                    speechSynthesis.speak(
                        new SpeechSynthesisUtterance(`city ${data.location.name} in ${data.location.country}`))

                    speechSynthesis.speak(
                        new SpeechSynthesisUtterance(`temperature ${data.current.temp_c} °C}`))

                    speechSynthesis.speak(
                        new SpeechSynthesisUtterance(`clouds ${data.current.condition.text}`))

                    speechSynthesis.speak(
                        new SpeechSynthesisUtterance(`wind speed ${data.current.wind_kph} km/h`))
                }

            })


        fetch(`http://api.weatherapi.com/v1/current.json?key=0b3dc0f4164a4b24bed171724220412&q=${cityName}`)
            .then(res => res.json())
            .then(data => {
                var DayNight = document.querySelector(".day-night");

                if (data.current.is_day == 0) {
                    DayNight.innerHTML = `<p class="night-text">Night</p>
                    <img src="pics/moon.png" class="night-icon" alt="">
                    `;
                }

                else if (data.current.is_day == 1) {
                    DayNight.innerHTML = `<p class="day-text">Day</p>
                    <img src="pics/sun.png" class="day-icon" alt="">
                    `;
                }

            })

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=en&appid=df8966aa8d5b81347a627faa28eb4239&units=metric`)
            .then(res => res.json())
            .then(data => {

                if (data.weather[0].main == "Thunderstorm") {

                    if (data.weather[0].icon == "11d") {
                        weatherScreen.style.backgroundImage = 'url("pics/pic-weather/11d.png")';

                        iconchange.style.color = 'black';
                        iconchange.style.border = '1px solid black';
                    }
                    else {
                        weatherScreen.style.backgroundImage = 'url("pics/pic-weather/11n.jpg")';

                        weatherScreen.style.color = 'white';
                        iconchange.style.color = 'white';
                        iconchange.style.border = '1px solid white';
                    }
                }

                else if (data.weather[0].main == "Drizzle") {

                    if (data.weather[0].icon == "09d") {
                        weatherScreen.style.backgroundImage = 'url("pics/pic-weather/09d.jpg")';

                        iconchange.style.color = 'black';
                        iconchange.style.border = '1px solid black';
                    }
                    else {
                        weatherScreen.style.backgroundImage = 'url("pics/pic-weather/09n.jpg")';
                        weatherScreen.style.color = 'white';
                        iconchange.style.color = 'white';
                        iconchange.style.border = '1px solid white';
                    }
                }

                else if (data.weather[0].main == "Rain") {

                    if (data.weather[0].icon == "10d") {
                        weatherScreen.style.backgroundImage = 'url("pics/pic-weather/10d.png")';

                        weatherScreen.style.color = 'white';
                        iconchange.style.color = 'white';
                        iconchange.style.border = '1px solid white';

                    }
                    else if (data.weather[0].icon == "10n") {
                        weatherScreen.style.backgroundImage = 'url("pics/pic-weather/10n.jpg")';

                        weatherScreen.style.color = 'white';
                        iconchange.style.color = 'white';
                        iconchange.style.border = '1px solid white';

                    }
                    else if (data.weather[0].icon == "13d") {
                        weatherScreen.style.backgroundImage = 'url("pics/pic-weather/13d.jpg")';

                        iconchange.style.color = 'black';
                        iconchange.style.border = '1px solid black';

                    }
                    else if (data.weather[0].icon == "13n") {
                        weatherScreen.style.backgroundImage = 'url("pics/pic-weather/13n.png")';

                        weatherScreen.style.color = 'white';
                        iconchange.style.color = 'white';
                        iconchange.style.border = '1px solid white';

                    }
                    else if (data.weather[0].icon == "09d") {
                        weatherScreen.style.backgroundImage = 'url("pics/pic-weather/09d.jpg")';

                        iconchange.style.color = 'black';
                        iconchange.style.border = '1px solid black';

                    }
                    else if (data.weather[0].icon == "09n") {
                        weatherScreen.style.backgroundImage = 'url("pics/pic-weather/09n.jpg")';

                        weatherScreen.style.color = 'white';
                        iconchange.style.color = 'white';
                        iconchange.style.border = '1px solid white';

                    }
                }

                else if (data.weather[0].main == "Snow") {

                    if (data.weather[0].icon == "13d") {
                        weatherScreen.style.backgroundImage = 'url("pics/pic-weather/13d.jpg")';

                        iconchange.style.color = 'black';
                        iconchange.style.border = '1px solid black';

                    }
                    else {
                        weatherScreen.style.backgroundImage = 'url("pics/pic-weather/13n.png")';

                        weatherScreen.style.color = 'white';
                        iconchange.style.color = 'white';
                        iconchange.style.border = '1px solid white';

                    }
                }

                else if (data.weather[0].main == "Mist") {

                    if (data.weather[0].icon == "50d") {
                        weatherScreen.style.backgroundImage = 'url("pics/pic-weather/mist-d.jpg")';

                        iconchange.style.color = 'black';
                        iconchange.style.border = '1px solid black';
                    }
                    else {
                        weatherScreen.style.backgroundImage = 'url("pics/pic-weather/mist-n.jpg")';

                        weatherScreen.style.color = 'white';
                        iconchange.style.color = 'white';
                        iconchange.style.border = '1px solid white';

                    }
                }

                else if (data.weather[0].main == "Smoke") {

                    if (data.weather[0].icon == "50d") {
                        weatherScreen.style.backgroundImage = 'url("pics/pic-weather/smoke-d.jpg")';

                        iconchange.style.color = 'black';
                        iconchange.style.border = '1px solid black';
                    }
                    else {
                        weatherScreen.style.backgroundImage = 'url("pics/pic-weather/smoke-n.jpg")';

                        weatherScreen.style.color = 'white';
                        iconchange.style.color = 'white';
                        iconchange.style.border = '1px solid white';
                    }
                }

                else if (data.weather[0].main == "Haze") {

                    if (data.weather[0].icon == "50d") {
                        weatherScreen.style.backgroundImage = 'url("pics/pic-weather/haze-d.jpg")';

                        iconchange.style.color = 'black';
                        iconchange.style.border = '1px solid black';

                    }
                    else {
                        weatherScreen.style.backgroundImage = 'url("pics/pic-weather/haze-n.jpg")';

                        weatherScreen.style.color = 'white';
                        iconchange.style.color = 'white';
                        iconchange.style.border = '1px solid white';

                    }
                }

                else if (data.weather[0].main == "Dust") {

                    if (data.weather[0].icon == "50d") {
                        weatherScreen.style.backgroundImage = 'url("pics/pic-weather/dust-d.jpg")';

                        iconchange.style.color = 'black';
                        iconchange.style.border = '1px solid black';
                    }
                    else {
                        weatherScreen.style.backgroundImage = 'url("pics/pic-weather/dust-n.jpg")';

                        weatherScreen.style.color = 'white';
                        iconchange.style.color = 'white';
                        iconchange.style.border = '1px solid white';
                    }
                }

                else if (data.weather[0].main == "Fog") {

                    if (data.weather[0].icon == "50d") {
                        weatherScreen.style.backgroundImage = 'url("pics/pic-weather/fog-d.jpg")';

                        iconchange.style.color = 'black';
                        iconchange.style.border = '1px solid black';
                    }
                    else {
                        weatherScreen.style.backgroundImage = 'url("pics/pic-weather/fog-n.jpg")';

                        weatherScreen.style.color = 'white';
                        iconchange.style.color = 'white';
                        iconchange.style.border = '1px solid white';
                    }
                }

                else if (data.weather[0].main == "Sand") {

                    if (data.weather[0].icon == "50d") {
                        weatherScreen.style.backgroundImage = 'url("pics/pic-weather/sand-d.jpg")';

                        iconchange.style.color = 'black';
                        iconchange.style.border = '1px solid black';
                    }
                    else {
                        weatherScreen.style.backgroundImage = 'url("pics/pic-weather/sand-n.png")';

                        weatherScreen.style.color = 'white';
                        iconchange.style.color = 'white';
                        iconchange.style.border = '1px solid white';
                    }
                }

                else if (data.weather[0].main == "Ash") {

                    if (data.weather[0].icon == "50d") {
                        weatherScreen.style.backgroundImage = 'url("pics/pic-weather/ash-d.jpg")';

                        iconchange.style.color = 'black';
                        iconchange.style.border = '1px solid black';
                    }
                    else {
                        weatherScreen.style.backgroundImage = 'url("pics/pic-weather/ash-n.jpg")';

                        weatherScreen.style.color = 'white';
                        iconchange.style.color = 'white';
                        iconchange.style.border = '1px solid white';
                    }
                }

                else if (data.weather[0].main == "Squall") {

                    if (data.weather[0].icon == "50d") {
                        weatherScreen.style.backgroundImage = 'url("pics/pic-weather/squall-d.jpg")';

                        iconchange.style.color = 'black';
                        iconchange.style.border = '1px solid black';
                    }
                    else {
                        weatherScreen.style.backgroundImage = 'url("pics/pic-weather/squall-n.jpg")';

                        weatherScreen.style.color = 'white';
                        iconchange.style.color = 'white';
                        iconchange.style.border = '1px solid white';
                    }
                }

                else if (data.weather[0].main == "Tornado") {
                    if (data.weather[0].icon == "50d") {
                        weatherScreen.style.backgroundImage = 'url("pics/pic-weather/Tornado-d.jpg")';

                        iconchange.style.color = 'black';
                        iconchange.style.border = '1px solid black';
                    }
                    else {
                        weatherScreen.style.backgroundImage = 'url("pics/pic-weather/Tornado-n.jpg")';

                        weatherScreen.style.color = 'white';
                        iconchange.style.color = 'white';
                        iconchange.style.border = '1px solid white';
                    }
                }

                else if (data.weather[0].main == "Clear") {
                    if (data.weather[0].icon == "01d") {
                        weatherScreen.style.backgroundImage = 'url("pics/pic-weather/01d.jpg")';

                        iconchange.style.color = 'black';
                        iconchange.style.border = '1px solid black';
                    }
                    else if (data.weather[0].icon == "01n") {
                        weatherScreen.style.backgroundImage = 'url("pics/pic-weather/01n.jpg")';

                        weatherScreen.style.color = 'white';
                        iconchange.style.color = 'white';
                        iconchange.style.border = '1px solid white';
                    }
                }

                else if (data.weather[0].main == "Clouds") {

                    if (data.weather[0].icon == "02d") {
                        weatherScreen.style.backgroundImage = 'url("pics/pic-weather/02.jpg")';

                        iconchange.style.color = 'black';
                        iconchange.style.border = '1px solid black';
                    }
                    else if (data.weather[0].icon == "02n") {
                        weatherScreen.style.backgroundImage = 'linear-gradient(rgba(102, 102, 102, 0.8),rgba(0, 0, 0, 0.8)) , url("pics/pic-weather/02.jpg")';

                        weatherScreen.style.color = 'white';
                        iconchange.style.color = 'white';
                        iconchange.style.border = '1px solid white';
                    }


                    else if (data.weather[0].icon == "03d") {
                        weatherScreen.style.backgroundImage = 'url("pics/pic-weather/03.jpg")';

                        iconchange.style.color = 'black';
                        iconchange.style.border = '1px solid black';
                    }
                    else if (data.weather[0].icon == "03n") {
                        weatherScreen.style.backgroundImage = 'linear-gradient(rgba(102, 102, 102, 0.8),rgba(0, 0, 0, 0.8)) , url("pics/pic-weather/03.jpg")';

                        weatherScreen.style.color = 'white';
                        iconchange.style.color = 'white';
                        iconchange.style.border = '1px solid white';

                    }


                    else if (data.weather[0].icon == "04d") {
                        weatherScreen.style.backgroundImage = 'url("pics/pic-weather/04.jpg")';

                        iconchange.style.color = 'black';
                        iconchange.style.border = '1px solid black';

                    }
                    else if (data.weather[0].icon == "04n") {
                        weatherScreen.style.backgroundImage = 'linear-gradient(rgba(102, 102, 102, 0.8),rgba(0, 0, 0, 0.8)) , url("pics/pic-weather/04.jpg")';

                        weatherScreen.style.color = 'white';
                        iconchange.style.color = 'white';
                        iconchange.style.border = '1px solid white';

                    }
                }

                else {
                    weatherScreen.style.backgroundImage = 'linear-gradient(yellow,white)';
                    iconchange.style.color = 'black';
                    iconchange.style.border = '1px solid black';
                }

                const btnMap = document.querySelector("#map-btn");
                btnMap.onclick = function () {

                    weatherPage.style.display = 'none';
                    searchPage.style.display = 'none';
                    iconchangeCity.style.display = 'none';
                    weatherScreen.style.display = 'none';
                    pageMap.style.display = 'block';

                    var map = L.map('map', {
                        center: [data.coord.lat, data.coord.lon],
                        zoom: 12
                    });

                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);


                    const marker1 = L.marker([data.coord.lat, data.coord.lon]).addTo(map);
                }
            })
        // clear value input
        const cityName2 = document.querySelector("#search-city-id");
        cityName2.value = "";
    }
}

//search with location 
btnGetLocation.onclick = function () {

    navigator.geolocation.getCurrentPosition(function (position) {

        var lat = position.coords.latitude;
        var lon = position.coords.longitude;

        // read lat and lon
        speechSynthesis.speak(
            new SpeechSynthesisUtterance(`lat${lat} and lon${lon}`));

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=en&appid=df8966aa8d5b81347a627faa28eb4239&units=metric`)
            .then(res => res.json())
            .then(data => {

                var citycity = data.name;

                // read city
                speechSynthesis.speak(
                    new SpeechSynthesisUtterance(`you are in ${citycity}`));



                fetch(`http://api.weatherapi.com/v1/current.json?key=0b3dc0f4164a4b24bed171724220412&q=${citycity}&aqi=no`)
                    .then(res => res.json())
                    .then(data =>
                        weatherPage.innerHTML = `
                            <p class="last_updated">Last Updated: ${data.current.last_updated}</p>
                            <p class="city">${data.location.name}</p>
                            <P class="country">${data.location.country}</p>
                            <p class="cloud">${data.current.condition.text}</p>
                            <img src="${data.current.condition.icon}" class="weather-icon" alt="">
                            <p class="deg">${data.current.temp_c} °C</p>
                            <P class="uv">UV Index  :</p>
                            <p class="uv-num">${data.current.uv}</P>
                            <div class="cloud-p">Cloud  :</div>
                            <div class="cloud-num">${data.current.cloud} %</div>
                            <p class="wind">Wind Speed  :</p>
                            <p class="wind-num">${data.current.wind_kph} km/h</p>
                            <div class="wind_dir">Wind Dir  :</div>
                            <div class="wind_dir-num">${data.current.wind_dir}</div>
                             `
                    );

                searchPage.style.display = 'none';
                weatherPage.style.display = 'flex';
                iconchangeCity.style.display = 'flex';
                pageMoreBtns.style.display = 'block';

                fetch(`http://api.weatherapi.com/v1/current.json?key=0b3dc0f4164a4b24bed171724220412&q=${citycity}&aqi=no`)
                    .then(res => res.json())
                    .then(data => {

                        var readDtaile = document.querySelector(".read-detaile");

                        readDtaile.onclick = function () {
                            speechSynthesis.speak(
                                new SpeechSynthesisUtterance(`city ${data.location.name} in ${data.location.country}`))

                            speechSynthesis.speak(
                                new SpeechSynthesisUtterance(`temperature ${data.current.temp_c} °C}`))

                            speechSynthesis.speak(
                                new SpeechSynthesisUtterance(`clouds ${data.current.condition.text}`))

                            speechSynthesis.speak(
                                new SpeechSynthesisUtterance(`wind speed ${data.current.wind_kph} km/h`))
                        }
                    })


                fetch(`http://api.weatherapi.com/v1/current.json?key=0b3dc0f4164a4b24bed171724220412&q=${citycity}`)
                    .then(res => res.json())
                    .then(data => {

                        var DayNight = document.querySelector(".day-night");

                        if (data.current.is_day == 0) {
                            DayNight.innerHTML = `<p class="night-text">Night</p>
                                <img src="pics/moon.png" class="night-icon" alt="">
                                `;
                        }

                        else if (data.current.is_day == 1) {
                            DayNight.innerHTML = `<p class="day-text">Day</p>
                                <img src="pics/sun.png" class="day-icon" alt="">
                                `;
                        }

                    })

                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citycity}&lang=en&appid=df8966aa8d5b81347a627faa28eb4239&units=metric`)
                    .then(res => res.json())
                    .then(data => {

                        if (data.weather[0].main == "Thunderstorm") {

                            if (data.weather[0].icon == "11d") {
                                weatherScreen.style.backgroundImage = 'url("pics/pic-weather/11d.png")';

                                iconchange.style.color = 'black';
                                iconchange.style.border = '1px solid black';
                            }
                            else {
                                weatherScreen.style.backgroundImage = 'url("pics/pic-weather/11n.jpg")';

                                weatherScreen.style.color = 'white';
                                iconchange.style.color = 'white';
                                iconchange.style.border = '1px solid white';
                            }
                        }

                        else if (data.weather[0].main == "Drizzle") {

                            if (data.weather[0].icon == "09d") {
                                weatherScreen.style.backgroundImage = 'url("pics/pic-weather/09d.jpg")';

                                iconchange.style.color = 'black';
                                iconchange.style.border = '1px solid black';
                            }
                            else {
                                weatherScreen.style.backgroundImage = 'url("pics/pic-weather/09n.jpg")';
                                weatherScreen.style.color = 'white';
                                iconchange.style.color = 'white';
                                iconchange.style.border = '1px solid white';
                            }
                        }

                        else if (data.weather[0].main == "Rain") {

                            if (data.weather[0].icon == "10d") {
                                weatherScreen.style.backgroundImage = 'url("pics/pic-weather/10d.png")';

                                weatherScreen.style.color = 'white';
                                iconchange.style.color = 'white';
                                iconchange.style.border = '1px solid white';

                            }
                            else if (data.weather[0].icon == "10n") {
                                weatherScreen.style.backgroundImage = 'url("pics/pic-weather/10n.jpg")';

                                weatherScreen.style.color = 'white';
                                iconchange.style.color = 'white';
                                iconchange.style.border = '1px solid white';

                            }
                            else if (data.weather[0].icon == "13d") {
                                weatherScreen.style.backgroundImage = 'url("pics/pic-weather/13d.jpg")';

                                iconchange.style.color = 'black';
                                iconchange.style.border = '1px solid black';

                            }
                            else if (data.weather[0].icon == "13n") {
                                weatherScreen.style.backgroundImage = 'url("pics/pic-weather/13n.png")';

                                weatherScreen.style.color = 'white';
                                iconchange.style.color = 'white';
                                iconchange.style.border = '1px solid white';

                            }
                            else if (data.weather[0].icon == "09d") {
                                weatherScreen.style.backgroundImage = 'url("pics/pic-weather/09d.jpg")';

                                iconchange.style.color = 'black';
                                iconchange.style.border = '1px solid black';

                            }
                            else if (data.weather[0].icon == "09n") {
                                weatherScreen.style.backgroundImage = 'url("pics/pic-weather/09n.jpg")';

                                weatherScreen.style.color = 'white';
                                iconchange.style.color = 'white';
                                iconchange.style.border = '1px solid white';

                            }
                        }

                        else if (data.weather[0].main == "Snow") {

                            if (data.weather[0].icon == "13d") {
                                weatherScreen.style.backgroundImage = 'url("pics/pic-weather/13d.jpg")';

                                iconchange.style.color = 'black';
                                iconchange.style.border = '1px solid black';

                            }
                            else {
                                weatherScreen.style.backgroundImage = 'url("pics/pic-weather/13n.png")';

                                weatherScreen.style.color = 'white';
                                iconchange.style.color = 'white';
                                iconchange.style.border = '1px solid white';

                            }
                        }

                        else if (data.weather[0].main == "Mist") {

                            if (data.weather[0].icon == "50d") {
                                weatherScreen.style.backgroundImage = 'url("pics/pic-weather/mist-d.jpg")';

                                iconchange.style.color = 'black';
                                iconchange.style.border = '1px solid black';
                            }
                            else {
                                weatherScreen.style.backgroundImage = 'url("pics/pic-weather/mist-n.jpg")';

                                weatherScreen.style.color = 'white';
                                iconchange.style.color = 'white';
                                iconchange.style.border = '1px solid white';

                            }
                        }

                        else if (data.weather[0].main == "Smoke") {

                            if (data.weather[0].icon == "50d") {
                                weatherScreen.style.backgroundImage = 'url("pics/pic-weather/smoke-d.jpg")';

                                iconchange.style.color = 'black';
                                iconchange.style.border = '1px solid black';
                            }
                            else {
                                weatherScreen.style.backgroundImage = 'url("pics/pic-weather/smoke-n.jpg")';

                                weatherScreen.style.color = 'white';
                                iconchange.style.color = 'white';
                                iconchange.style.border = '1px solid white';
                            }
                        }

                        else if (data.weather[0].main == "Haze") {

                            if (data.weather[0].icon == "50d") {
                                weatherScreen.style.backgroundImage = 'url("pics/pic-weather/haze-d.jpg")';

                                iconchange.style.color = 'black';
                                iconchange.style.border = '1px solid black';

                            }
                            else {
                                weatherScreen.style.backgroundImage = 'url("pics/pic-weather/haze-n.jpg")';

                                weatherScreen.style.color = 'white';
                                iconchange.style.color = 'white';
                                iconchange.style.border = '1px solid white';

                            }
                        }

                        else if (data.weather[0].main == "Dust") {

                            if (data.weather[0].icon == "50d") {
                                weatherScreen.style.backgroundImage = 'url("pics/pic-weather/dust-d.jpg")';

                                iconchange.style.color = 'black';
                                iconchange.style.border = '1px solid black';
                            }
                            else {
                                weatherScreen.style.backgroundImage = 'url("pics/pic-weather/dust-n.jpg")';

                                weatherScreen.style.color = 'white';
                                iconchange.style.color = 'white';
                                iconchange.style.border = '1px solid white';
                            }
                        }

                        else if (data.weather[0].main == "Fog") {

                            if (data.weather[0].icon == "50d") {
                                weatherScreen.style.backgroundImage = 'url("pics/pic-weather/fog-d.jpg")';

                                iconchange.style.color = 'black';
                                iconchange.style.border = '1px solid black';
                            }
                            else {
                                weatherScreen.style.backgroundImage = 'url("pics/pic-weather/fog-n.jpg")';

                                weatherScreen.style.color = 'white';
                                iconchange.style.color = 'white';
                                iconchange.style.border = '1px solid white';
                            }
                        }

                        else if (data.weather[0].main == "Sand") {

                            if (data.weather[0].icon == "50d") {
                                weatherScreen.style.backgroundImage = 'url("pics/pic-weather/sand-d.jpg")';

                                iconchange.style.color = 'black';
                                iconchange.style.border = '1px solid black';
                            }
                            else {
                                weatherScreen.style.backgroundImage = 'url("pics/pic-weather/sand-n.png")';

                                weatherScreen.style.color = 'white';
                                iconchange.style.color = 'white';
                                iconchange.style.border = '1px solid white';
                            }
                        }

                        else if (data.weather[0].main == "Ash") {

                            if (data.weather[0].icon == "50d") {
                                weatherScreen.style.backgroundImage = 'url("pics/pic-weather/ash-d.jpg")';

                                iconchange.style.color = 'black';
                                iconchange.style.border = '1px solid black';
                            }
                            else {
                                weatherScreen.style.backgroundImage = 'url("pics/pic-weather/ash-n.jpg")';

                                weatherScreen.style.color = 'white';
                                iconchange.style.color = 'white';
                                iconchange.style.border = '1px solid white';
                            }
                        }

                        else if (data.weather[0].main == "Squall") {

                            if (data.weather[0].icon == "50d") {
                                weatherScreen.style.backgroundImage = 'url("pics/pic-weather/squall-d.jpg")';

                                iconchange.style.color = 'black';
                                iconchange.style.border = '1px solid black';
                            }
                            else {
                                weatherScreen.style.backgroundImage = 'url("pics/pic-weather/squall-n.jpg")';

                                weatherScreen.style.color = 'white';
                                iconchange.style.color = 'white';
                                iconchange.style.border = '1px solid white';
                            }
                        }

                        else if (data.weather[0].main == "Tornado") {
                            if (data.weather[0].icon == "50d") {
                                weatherScreen.style.backgroundImage = 'url("pics/pic-weather/Tornado-d.jpg")';

                                iconchange.style.color = 'black';
                                iconchange.style.border = '1px solid black';
                            }
                            else {
                                weatherScreen.style.backgroundImage = 'url("pics/pic-weather/Tornado-n.jpg")';

                                weatherScreen.style.color = 'white';
                                iconchange.style.color = 'white';
                                iconchange.style.border = '1px solid white';
                            }
                        }

                        else if (data.weather[0].main == "Clear") {
                            if (data.weather[0].icon == "01d") {
                                weatherScreen.style.backgroundImage = 'url("pics/pic-weather/01d.jpg")';

                                iconchange.style.color = 'black';
                                iconchange.style.border = '1px solid black';
                            }
                            else if (data.weather[0].icon == "01n") {
                                weatherScreen.style.backgroundImage = 'url("pics/pic-weather/01n.jpg")';

                                weatherScreen.style.color = 'white';
                                iconchange.style.color = 'white';
                                iconchange.style.border = '1px solid white';
                            }
                        }

                        else if (data.weather[0].main == "Clouds") {

                            if (data.weather[0].icon == "02d") {
                                weatherScreen.style.backgroundImage = 'url("pics/pic-weather/02.jpg")';

                                iconchange.style.color = 'black';
                                iconchange.style.border = '1px solid black';
                            }
                            else if (data.weather[0].icon == "02n") {
                                weatherScreen.style.backgroundImage = 'linear-gradient(rgba(102, 102, 102, 0.8),rgba(0, 0, 0, 0.8)) , url("pics/pic-weather/02.jpg")';

                                weatherScreen.style.color = 'white';
                                iconchange.style.color = 'white';
                                iconchange.style.border = '1px solid white';
                            }


                            else if (data.weather[0].icon == "03d") {
                                weatherScreen.style.backgroundImage = 'url("pics/pic-weather/03.jpg")';

                                iconchange.style.color = 'black';
                                iconchange.style.border = '1px solid black';
                            }
                            else if (data.weather[0].icon == "03n") {
                                weatherScreen.style.backgroundImage = 'linear-gradient(rgba(102, 102, 102, 0.8),rgba(0, 0, 0, 0.8)) , url("pics/pic-weather/03.jpg")';

                                weatherScreen.style.color = 'white';
                                iconchange.style.color = 'white';
                                iconchange.style.border = '1px solid white';

                            }


                            else if (data.weather[0].icon == "04d") {
                                weatherScreen.style.backgroundImage = 'url("pics/pic-weather/04.jpg")';

                                iconchange.style.color = 'black';
                                iconchange.style.border = '1px solid black';

                            }
                            else if (data.weather[0].icon == "04n") {
                                weatherScreen.style.backgroundImage = 'linear-gradient(rgba(102, 102, 102, 0.8),rgba(0, 0, 0, 0.8)) , url("pics/pic-weather/04.jpg")';

                                weatherScreen.style.color = 'white';
                                iconchange.style.color = 'white';
                                iconchange.style.border = '1px solid white';

                            }
                        }

                        else {
                            weatherScreen.style.backgroundImage = 'linear-gradient(yellow,white)';
                            iconchange.style.color = 'black';
                            iconchange.style.border = '1px solid black';
                        }

                        const btnMap = document.querySelector("#map-btn");

                        btnMap.onclick = function () {

                            weatherPage.style.display = 'none';
                            searchPage.style.display = 'none';
                            iconchangeCity.style.display = 'none';
                            weatherScreen.style.display = 'none';
                            pageMap.style.display = 'block';

                            var map = L.map('map', {
                                center: [data.coord.lat, data.coord.lon],
                                zoom: 10
                            });

                            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);


                            const marker1 = L.marker([data.coord.lat, data.coord.lon]).addTo(map);

                            btnGoBackk.onclick = function () {
                                searchPage.style.display = 'none';
                                weatherPage.style.display = 'flex';
                                iconchangeCity.style.display = 'flex';
                                weatherScreen.style.display = 'block';
                                pageMap.style.display = 'none';
                            }
                        }
                    })
            })
    })
}

// change city
btnChangeCity.onclick = function () {
    window.location.reload();
}

btnGoBackk.onclick = function () {
    searchPage.style.display = 'none';
    weatherPage.style.display = 'flex';
    iconchangeCity.style.display = 'flex';
    weatherScreen.style.display = 'block';
    pageMap.style.display = 'none';
}