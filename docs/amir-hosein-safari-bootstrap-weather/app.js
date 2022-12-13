fetch(`https://api.openweathermap.org/data/2.5/weather?q=tehran&lang=en&appid=df8966aa8d5b81347a627faa28eb4239&units=metric`)
.then(res => res.json())
.then(data => {
console.log(data)
})
// buttons
const btnEenglishLang = document.querySelector("#English");
const btnPersianLang = document.querySelector("#persian");

const btnClearAll = document.querySelector("#clear-all");

const btnDeleteValue1 = document.querySelector(".delete-value");
const btnDeleteValue2 = document.querySelector(".val-1");
const btnDeleteValue3 = document.querySelector(".val-2");

const btnAdd1city = document.querySelector("#btn-add-City");
const btnAddToOther = document.querySelector("#btn-add-other-City");

const btnAdd1city2 = document.querySelector("#btn-add-City2");
const btnAddToOther2 = document.querySelector("#btn-add-other-City2");

const btnCity = document.querySelector("#btncity");
const btnCoord = document.querySelector("#btncoord");

const btnChangeCity = document.querySelector("#btn-chnage-to-city");
const btnChangeCoord = document.querySelector("#btn-chnage-to-coord");

const btnGetLocation = document.querySelector("#current-location");
const btnGetCity = document.querySelector("#current-city");

// Pages
const pageShowEnglish = document.querySelector("#english-page");
const pageShowPersisan = document.querySelector("#persian-page");

const pageButtonS = document.querySelector("#buttons");

const pageCity = document.querySelector("#back-search-city");
const pageCoord = document.querySelector("#back-search-coord");

const pageWeatherBack = document.querySelector("#weather-back");

const pageBackMethod  = document.querySelector("#search-method22");

// other
const inputCity3 = document.querySelector("#input-add-City");
const inputLon3 = document.querySelector("#input-lon");
const inputLat3 = document.querySelector("#input-lat");

// alerts
const alertEmptyCity = document.querySelector(".alert-empty-city");
const alertEmptyGeo = document.querySelector(".alert-empty-geo");
const alertDellAll = document.querySelector(".del-all");

// btn alerts
const alertCityEmptyOK = document.querySelector(".alert-btn1");
const alertGeoEmptyOK = document.querySelector(".alert-btn2");
const alertDellAllCANCEL = document.querySelector(".alert-btn3");
const alertDellAllYES = document.querySelector(".alert-btn4");

// functions

// show english
btnEenglishLang.onclick = function () {
    pageShowEnglish.style.display = 'block';
    pageShowPersisan.style.display = 'none';
}

// show persian
btnPersianLang.onclick = function () {
    pageShowEnglish.style.display = 'none';
    pageShowPersisan.style.display = 'block';
}

// clear all 
btnClearAll.onclick = function () {

        alertDellAll.style.display = 'flex';

        alertDellAllCANCEL.onclick = function () {
            alertDellAll.style.display = 'none';
        }

        alertDellAllYES.onclick = function () {
            alertDellAll.style.display = 'none';

            pageShowEnglish.innerHTML = "";
            pageShowPersisan.innerHTML = "";
            pageButtonS.style.display = 'none'; 
            pageWeatherBack.style.display = 'none';
        }
}
// clear value inputs
btnDeleteValue1.onclick = function () {
    inputCity3.value = "" ;
}

btnDeleteValue2.onclick = function () {
    inputLon3.value = "" ;
}
btnDeleteValue3.onclick = function () {
    inputLat3.value = "" ;
}

// method
btnCity.onclick = function () {
    pageCoord.style.display = 'none'; 
    pageCity.style.display = 'block';
    pageBackMethod.style.display = 'none'; 
}

btnCoord.onclick = function () {
    pageCoord.style.display = 'block'; 
    pageCity.style.display = 'none';
    pageBackMethod.style.display = 'none'; 
}

// change method
btnChangeCity.onclick = function () {
    pageCoord.style.display = 'none'; 
    pageCity.style.display = 'block';
}

btnChangeCoord.onclick = function () {
    pageCoord.style.display = 'block'; 
    pageCity.style.display = 'none';

}
// get location and add to input value
// add in geo coord
btnGetLocation.onclick = function () {
    navigator.geolocation.getCurrentPosition(function (position) {

        var lat = position.coords.latitude;
        var lon = position.coords.longitude;

        const inputLon2 = document.querySelector("#input-lon");
        const inputLat2 = document.querySelector("#input-lat");

        inputLon2.value = lon;
        inputLat2.value = lat;
    })
} 
// add in city input
btnGetCity.onclick = function () {
    navigator.geolocation.getCurrentPosition(function (position) {

        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=en&appid=df8966aa8d5b81347a627faa28eb4239&units=metric`)
    .then(res => res.json())
    .then(data => {
        const inputCity = document.querySelector("#input-add-City");
        inputCity.value = data.name;
    })
})
} 


// search
btnAdd1city.onclick = function () {
    const inputCity = document.querySelector("#input-add-City").value;

    if (inputCity == "" ) {
        alertEmptyCity.style.display = 'flex';

        alertCityEmptyOK.onclick = function () {
            alertEmptyCity.style.display = 'none';
        }
    }

    else {
        pageButtonS.style.display = 'block';
        pageWeatherBack.style.display = 'block';

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&lang=en&appid=df8966aa8d5b81347a627faa28eb4239&units=metric`)
        .then(res => res.json())
        .then(data => {
            pageShowEnglish.innerHTML = ` 
            <div class="card-header fs-5 bg-info">
            ${data.name}
            </div>
            <div class="card-body">
                <h1 class="card-title">${data.name} . <span class="fs-5">${data.sys.country}</span></h1>
                <img id="icon-img" src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png">
                <p class="card-text">${data.weather[0].main} , ${data.weather[0].description}</p>
                <h2 class="card-title"> ${data.main.temp} °C</h2>
                <p class="card-text">Feels Temperature: ${data.main.feels_like} °C</p>
                <p class="card-text">Max: ${data.main.temp_max} °C , Min: ${data.main.temp_min} °C</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item fs-5">wind:   Speed: ${data.wind.speed} , Deg: ${data.wind.deg} °</li>
                <li class="list-group-item fs-5">Clouds: ${data.clouds.all} %</li>
                <li class="list-group-item fs-5">pressure: ${data.main.pressure} hPa</li>
                <li class="list-group-item fs-5">Humidity: ${data.main.humidity} %</li>
                <li class="list-group-item fs-5">Visibility: ${data.visibility} m</li>
            </ul>
            <div class="card-footer text-muted bg-warning mb-3">
                <span class="fs-5 text-danger">Geographical Coordinates:</span>
                <br>
                lon: ${data.coord.lon} , lat: ${data.coord.lat}
            </div>
            `;  })


        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&lang=fa&appid=df8966aa8d5b81347a627faa28eb4239&units=metric`)
            .then(res => res.json())
            .then(data => {
            pageShowPersisan.innerHTML = `
            <div class="card-header fs-5 bg-info">
                ${data.name} 
            </div>
            <div class="card-body">
                <h1 class="card-title">${data.name} . <span class="fs-5">${data.sys.country}</span></h1>
                <img id="icon-img" src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png">                
                <p class="card-text">${data.weather[0].description}</p>
                <h2 class="card-title"> ${data.main.temp} °C</h2>
                <p class="card-text">دمای محسوس:  °C ${data.main.feels_like}</p>
                <p class="card-text">بیشترین: °C ${data.main.temp_max}  , کمترین: °C ${data.main.temp_min}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item fs-5">سرعت باد: ${data.wind.speed} , درجه وزش: ${data.wind.deg} </li>
                <li class="list-group-item fs-5">میزان ابر: % ${data.clouds.all} </li>
                <li class="list-group-item fs-5">فشار هوا: hPa ${data.main.pressure}</li>
                <li class="list-group-item fs-5">رطوبت: % ${data.main.humidity}</li>
                <li class="list-group-item fs-5">دید: ${data.visibility} متر </li>
            </ul>
            <div class="card-footer text-muted bg-warning mb-3">
                <span class="fs-5 text-danger">:مختصات جغرافیایی</span>
                <br>
            طول: ${data.coord.lon} , عرض:  ${data.coord.lat}
            </div>
            `;
        })

        const inputCity2 = document.querySelector("#input-add-City");
        inputCity2.value = "" ;
    }}



btnAdd1city2.onclick = function () {
    
    const inputLon = document.querySelector("#input-lon").value;
    const inputLat = document.querySelector("#input-lat").value;

    if (inputLon == "" ) {
        alertEmptyGeo.style.display = 'flex';

        alertGeoEmptyOK.onclick = function () {
            alertEmptyGeo.style.display = 'none';
        }
    }

  else  if (inputLat == "" ) {
    alertEmptyGeo.style.display = 'flex';

    alertGeoEmptyOK.onclick = function () {
        alertEmptyGeo.style.display = 'none';
    }
    }

    else {
        pageButtonS.style.display = 'block';
        pageWeatherBack.style.display = 'block';

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${inputLat}&lon=${inputLon}&lang=en&appid=df8966aa8d5b81347a627faa28eb4239&units=metric`)
        .then(res => res.json())
        .then(data => {
            pageShowEnglish.innerHTML = ` 
            <div class="card-header fs-5 bg-info">
            ${data.name}
            </div>
            <div class="card-body">
                <h1 class="card-title">${data.name} . <span class="fs-5">${data.sys.country}</span></h1>
                <img id="icon-img" src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png">
                <p class="card-text">${data.weather[0].main} , ${data.weather[0].description}</p>
                <h2 class="card-title"> ${data.main.temp} °C</h2>
                <p class="card-text">Feels Temperature: ${data.main.feels_like} °C</p>
                <p class="card-text">Max: ${data.main.temp_max} °C , Min: ${data.main.temp_min} °C</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item fs-5">wind:   Speed: ${data.wind.speed} , Deg: ${data.wind.deg} °</li>
                <li class="list-group-item fs-5">Clouds: ${data.clouds.all} %</li>
                <li class="list-group-item fs-5">pressure: ${data.main.pressure} hPa</li>
                <li class="list-group-item fs-5">Humidity: ${data.main.humidity} %</li>
                <li class="list-group-item fs-5">Visibility: ${data.visibility} m</li>
            </ul>
            <div class="card-footer text-muted bg-warning mb-3">
                <span class="fs-5 text-danger">Geographical Coordinates:</span>
                <br>
                lon: ${data.coord.lon} , lat: ${data.coord.lat}
            </div>
            `;  })


            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${inputLat}&lon=${inputLon}&lang=fa&appid=df8966aa8d5b81347a627faa28eb4239&units=metric`)
            .then(res => res.json())
            .then(data => {
            pageShowPersisan.innerHTML = `
            <div class="card-header fs-5 bg-info">
                ${data.name} 
            </div>
            <div class="card-body">
                <h1 class="card-title">${data.name} . <span class="fs-5">${data.sys.country}</span></h1>
                <img id="icon-img" src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png">
                <p class="card-text">${data.weather[0].description}</p>
                <h2 class="card-title"> ${data.main.temp} °C</h2>
                <p class="card-text">دمای محسوس:  °C ${data.main.feels_like}</p>
                <p class="card-text">بیشترین: °C ${data.main.temp_max}  , کمترین: °C ${data.main.temp_min}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item fs-5">سرعت باد: ${data.wind.speed} , درجه وزش: ${data.wind.deg} </li>
                <li class="list-group-item fs-5">میزان ابر: % ${data.clouds.all} </li>
                <li class="list-group-item fs-5">فشار هوا: hPa ${data.main.pressure}</li>
                <li class="list-group-item fs-5">رطوبت: % ${data.main.humidity}</li>
                <li class="list-group-item fs-5">دید: ${data.visibility} متر </li>
            </ul>
            <div class="card-footer text-muted bg-warning mb-3">
                <span class="fs-5 text-danger">:مختصات جغرافیایی</span>
                <br>
            طول: ${data.coord.lon} , عرض:  ${data.coord.lat}
            </div>
            `;

            const inputLon2 = document.querySelector("#input-lon");
            const inputLat2 = document.querySelector("#input-lat");
            inputLon2.value = "" ;
            inputLat2.value = "" ;
      })}}



btnAddToOther.onclick = function () {
    const inputCity = document.querySelector("#input-add-City").value;

    if (inputCity == "" ) {
        alertEmptyCity.style.display = 'flex';

        alertCityEmptyOK.onclick = function () {
            alertEmptyCity.style.display = 'none';
        }
    }

    else {
        pageButtonS.style.display = 'block';
        pageWeatherBack.style.display = 'block';

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&lang=en&appid=df8966aa8d5b81347a627faa28eb4239&units=metric`)
        .then(res => res.json())
        .then(data => {
            pageShowEnglish.innerHTML += ` 
            <div class="card-header fs-5 bg-info">
            ${data.name} 
            </div>
            <div class="card-body">
                <h1 class="card-title">${data.name} . <span class="fs-5">${data.sys.country}</span></h1>
                <img id="icon-img" src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png">
                <p class="card-text">${data.weather[0].main} , ${data.weather[0].description}</p>
                <h2 class="card-title"> ${data.main.temp} °C</h2>
                <p class="card-text">Feels Temperature: ${data.main.feels_like} °C</p>
                <p class="card-text">Max: ${data.main.temp_max} °C , Min: ${data.main.temp_min} °C</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item fs-5">wind:   Speed: ${data.wind.speed} , Deg: ${data.wind.deg} °</li>
                <li class="list-group-item fs-5">Clouds: ${data.clouds.all} %</li>
                <li class="list-group-item fs-5">pressure: ${data.main.pressure} hPa</li>
                <li class="list-group-item fs-5">Humidity: ${data.main.humidity} %</li>
                <li class="list-group-item fs-5">Visibility: ${data.visibility} m</li>
            </ul>
            <div class="card-footer text-muted bg-warning mb-3">
                <span class="fs-5 text-danger">Geographical Coordinates:</span>
                <br>
                lon: ${data.coord.lon} , lat: ${data.coord.lat}
            </div>
            `;  
        })


            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&lang=fa&appid=df8966aa8d5b81347a627faa28eb4239&units=metric`)
            .then(res => res.json())
            .then(data => {
            pageShowPersisan.innerHTML += `
            <div class="card-header fs-5 bg-info">
                ${data.name} 
            </div>
            <div class="card-body">
                <h1 class="card-title">${data.name} . <span class="fs-5">${data.sys.country}</span></h1>
                <img id="icon-img" src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png">
                <p class="card-text">${data.weather[0].description}</p>
                <h2 class="card-title"> ${data.main.temp} °C</h2>
                <p class="card-text">دمای محسوس:  °C ${data.main.feels_like}</p>
                <p class="card-text">بیشترین: °C ${data.main.temp_max}  , کمترین: °C ${data.main.temp_min}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item fs-5">سرعت باد: ${data.wind.speed} , درجه وزش: ${data.wind.deg} </li>
                <li class="list-group-item fs-5">میزان ابر: % ${data.clouds.all} </li>
                <li class="list-group-item fs-5">فشار هوا: hPa ${data.main.pressure}</li>
                <li class="list-group-item fs-5">رطوبت: % ${data.main.humidity}</li>
                <li class="list-group-item fs-5">دید: ${data.visibility} متر </li>
            </ul>
            <div class="card-footer text-muted bg-warning mb-3">
                <span class="fs-5 text-danger">:مختصات جغرافیایی</span>
                <br>
            طول: ${data.coord.lon} , عرض:  ${data.coord.lat}
            </div>
            `;
        })
    }
    const inputCity2 = document.querySelector("#input-add-City");
    inputCity2.value = "" ;
}


btnAddToOther2.onclick = function () {
    
    const inputLon = document.querySelector("#input-lon").value;
    const inputLat = document.querySelector("#input-lat").value;

    if (inputLon == "" ) {
        alertEmptyGeo.style.display = 'flex';

        alertGeoEmptyOK.onclick = function () {
            alertEmptyGeo.style.display = 'none';
        }
    }

  else  if (inputLat == "" ) {
    alertEmptyGeo.style.display = 'flex';

    alertGeoEmptyOK.onclick = function () {
        alertEmptyGeo.style.display = 'none';
    }
    }


    else {
        pageButtonS.style.display = 'block';
        pageWeatherBack.style.display = 'block';

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${inputLat}&lon=${inputLon}&lang=en&appid=df8966aa8d5b81347a627faa28eb4239&units=metric`)
        .then(res => res.json())
        .then(data => {
            pageShowEnglish.innerHTML += ` 
            <div class="card-header fs-5 bg-info">
            ${data.name}
            </div>
            <div class="card-body">
                <h1 class="card-title">${data.name} . <span class="fs-5">${data.sys.country}</span></h1>
                <img id="icon-img" src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png">
                <p class="card-text">${data.weather[0].main} , ${data.weather[0].description}</p>
                <h2 class="card-title"> ${data.main.temp} °C</h2>
                <p class="card-text">Feels Temperature: ${data.main.feels_like} °C</p>
                <p class="card-text">Max: ${data.main.temp_max} °C , Min: ${data.main.temp_min} °C</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item fs-5">wind:   Speed: ${data.wind.speed} , Deg: ${data.wind.deg} °</li>
                <li class="list-group-item fs-5">Clouds: ${data.clouds.all} %</li>
                <li class="list-group-item fs-5">pressure: ${data.main.pressure} hPa</li>
                <li class="list-group-item fs-5">Humidity: ${data.main.humidity} %</li>
                <li class="list-group-item fs-5">Visibility: ${data.visibility} m</li>
            </ul>
            <div class="card-footer text-muted bg-warning mb-3">
                <span class="fs-5 text-danger">Geographical Coordinates:</span>
                <br>
                lon: ${data.coord.lon} , lat: ${data.coord.lat}
            </div>
            `;  })


            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${inputLat}&lon=${inputLon}&lang=fa&appid=df8966aa8d5b81347a627faa28eb4239&units=metric`)
            .then(res => res.json())
            .then(data => {
            pageShowPersisan.innerHTML += `
            <div class="card-header fs-5 bg-info">
                ${data.name} 
            </div>
            <div class="card-body">
                <h1 class="card-title">${data.name} . <span class="fs-5">${data.sys.country}</span></h1>
                <img id="icon-img" src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png">
                <p class="card-text">${data.weather[0].description}</p>
                <h2 class="card-title"> ${data.main.temp} °C</h2>
                <p class="card-text">دمای محسوس:  °C ${data.main.feels_like}</p>
                <p class="card-text">بیشترین: °C ${data.main.temp_max}  , کمترین: °C ${data.main.temp_min}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item fs-5">سرعت باد: ${data.wind.speed} , درجه وزش: ${data.wind.deg} </li>
                <li class="list-group-item fs-5">میزان ابر: % ${data.clouds.all} </li>
                <li class="list-group-item fs-5">فشار هوا: hPa ${data.main.pressure}</li>
                <li class="list-group-item fs-5">رطوبت: % ${data.main.humidity}</li>
                <li class="list-group-item fs-5">دید: ${data.visibility} متر </li>
            </ul>
            <div class="card-footer text-muted bg-warning mb-3">
                <span class="fs-5 text-danger">:مختصات جغرافیایی</span>
                <br>
            طول: ${data.coord.lon} , عرض:  ${data.coord.lat}
            </div>
            `;

            const inputLon2 = document.querySelector("#input-lon");
            const inputLat2 = document.querySelector("#input-lat");
            inputLon2.value = "" ;
            inputLat2.value = "" ;
      })}
    }
