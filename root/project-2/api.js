

const apiKey = "e011851732e39843d44a5db598983b1b";
const weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector('.js-input')
    searchInput.addEventListener('keydown', (event) => handleUserInput(event));
const searchBtn = document.querySelector('.js-search-btn')
    .addEventListener('click', () => checkWeather(searchInput.value));

const weatherIcon = document.querySelector('.js-weather-icon');

async function checkWeather(cityName) {
    const response = await fetch(weatherApiUrl + cityName + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);
    document.querySelector('.js-city-name').textContent = data.name;
    document.querySelector('.js-temperature').textContent = Math.round(data.main.temp);
    document.querySelector('.humidity').textContent = data.main.humidity + `%`;
    document.querySelector('.wind-speed').textContent = data.wind.speed + ` km/h`;

    switch(data.weather[0].main) {
        case "Clear"  : 
            weatherIcon.src = "assets/clear.png";
            break;
        case "Clouds" : 
            weatherIcon.src = "assets/cloudy.png";
            break;
        case "Rain"   : 
            weatherIcon.src = "assets/rain.png";
            break;
        case "Drizzle": 
            weatherIcon.src = "assets/drizzle.png";
            break;
        case "Mist"   : 
            weatherIcon.src = "assets/mist.png";
            break;
        case "Snow"   : 
            weatherIcon.src = "assets/snow.png";
            break;
    }

    document.querySelector('.weather').style.display = "block";
}

function handleUserInput(event) {
    if(event.key === 'Enter') checkWeather(searchInput.value);
}

checkWeather();