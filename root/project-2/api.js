

const apiKey = "e011851732e39843d44a5db598983b1b";
const weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=manila";

async function checkWeather() {
    const response = await fetch(weatherApiUrl + `&appid=${apiKey}`);
    let data = await response.json();
}

checkWeather();