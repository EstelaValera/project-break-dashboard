document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '5a780fa272ed411189a104554241707'; 
    const city = 'Valladolid';  

    async function fetchWeatherData() {
        try {
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            updateCurrentWeather(data);
            await fetchForecastData(city); 
        } catch (error) {
            console.error('Error fetching the weather data:', error);
        }
    }

    async function fetchForecastData(city) {
        try {
            const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=no&alerts=no`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            if (data.forecast && data.forecast.forecastday && data.forecast.forecastday[0]) {
                updateHourlyForecast(data.forecast.forecastday[0].hour);
            } else {
                throw new Error('Invalid forecast data structure');
            }
        } catch (error) {
            console.error('Error fetching the forecast data:', error);
        }
    }

    function updateCurrentWeather(data) {
        const location = document.getElementById('location');
        const condition = document.getElementById('condition');
        const icon = document.getElementById('icon');
        const temperature = document.getElementById('temperature');
        const precipitation = document.getElementById('precipitation');
        const humidity = document.getElementById('humidity');
        const wind = document.getElementById('wind');

        if (location && condition && icon && temperature && precipitation && humidity && wind) {
            location.textContent = `${data.location.name}, ${data.location.country}`;
            condition.textContent = data.current.condition.text;
            icon.src = `https:${data.current.condition.icon}`;
            temperature.textContent = `Temperatura: ${data.current.temp_c}°C`;
            precipitation.textContent = `Precipitaciones: ${data.current.precip_mm} mm`;
            humidity.textContent = `Humedad: ${data.current.humidity}%`;
            wind.textContent = `Viento: ${data.current.wind_kph} km/h`;
        } else {
            console.error('Uno o más elementos del DOM no fueron encontrados');
        }
    }

    function updateHourlyForecast(hours) {
        const forecastContainer = document.getElementById('forecast-container');
        if (forecastContainer) {
            forecastContainer.innerHTML = '';
            hours.forEach(hour => {
                const hourDiv = document.createElement('div');
                hourDiv.classList.add('forecast-hour');
                hourDiv.innerHTML = `
                    <p>${new Date(hour.time).getHours()}:00</p>
                    <img src="https:${hour.condition.icon}" alt="Weather Icon" class='icon-hour'>
                    <p>${hour.temp_c}°C</p>
                `;
                forecastContainer.appendChild(hourDiv);
            });
        } else {
            console.error('Elemento forecast-container no encontrado');
        }
    }

    fetchWeatherData();
});

