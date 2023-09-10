

const apiKey = "e011851732e39843d44a5db598983b1b";
const weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=tokyo";

async function checkWeather() {
    const response = await fetch(weatherApiUrl + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);
    document.querySelector('.js-city-name').textContent = data.name;
    document.querySelector('.js-temperature').textContent = Math.round(data.main.temp);
    document.querySelector('.humidity').textContent = data.main.humidity + `%`;
    document.querySelector('.wind-speed').textContent = data.wind.speed + ` km/h`;
}

checkWeather();