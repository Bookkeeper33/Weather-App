import { format } from "date-fns";
import DOM from "./dom";

const card = (weatherData) => {
    // Switcher
    let inCelsius = true;

    const onHandleUnits = () => {
        if (!weatherData) return;

        inCelsius = !inCelsius;

        if (!inCelsius) {
            DOM.temp.textContent = `${weatherData.temp_f} °F`;
            DOM.feelsLikeTemp.textContent = `${weatherData.feelslike_f} °F`;
        } else {
            DOM.temp.textContent = `${weatherData.temp_c} ℃`;
            DOM.feelsLikeTemp.textContent = `${weatherData.feelslike_c} ℃`;
        }

        DOM.btn.textContent = inCelsius
            ? "Switch to Fahrenheit"
            : "Switch to Celsius";
    };

    const assignWeatherData = () => {
        if (!weatherData) return;

        DOM.location.textContent = `${weatherData.name}, ${weatherData.country}`;
        DOM.date.textContent = `${format(
            new Date(weatherData.localtime),
            "ccc, MMM dd"
        )}`;
        DOM.weatherImg.src = weatherData.icon;
        DOM.overcast.textContent = weatherData.text;
        DOM.temp.textContent = `${weatherData.temp_c} ℃`;
        DOM.feelsLikeTemp.textContent = `${weatherData.feelslike_c} ℃`;
        DOM.humidity.textContent = `${weatherData.humidity} %`;
        DOM.wind.textContent = `${weatherData.wind_kph} km/h`;
        DOM.pressure.textContent = `${weatherData.pressure_mb} mb`;
        DOM.btn.textContent = "Switch to Fahrenheit";
    };

    DOM.btn.addEventListener("click", onHandleUnits);

    return { assignWeatherData };
};

export default card;
