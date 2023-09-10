

const apiKey = "e011851732e39843d44a5db598983b1b";
const weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector('.js-input')
    searchInput.addEventListener('keydown', (event) => handleUserInput(event));
const searchBtn = document.querySelector('.js-search-btn')
    .addEventListener('click', () => checkWeather(searchInput.value));

function handleUserInput(event) {
    if(event.key === 'Enter') checkWeather(searchInput.value);
}

async function checkWeather(cityName) {
    const response = await fetch(weatherApiUrl + cityName + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);
    document.querySelector('.js-city-name').textContent = data.name;
    document.querySelector('.js-temperature').textContent = Math.round(data.main.temp);
    document.querySelector('.humidity').textContent = data.main.humidity + `%`;
    document.querySelector('.wind-speed').textContent = data.wind.speed + ` km/h`;
}

checkWeather("tokyo");