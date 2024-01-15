const DOM = (() => {
    const spinnerElement = document.getElementById("spinner");
    const cardElement = document.querySelector(".card");
    const error = document.querySelector(".error");
    const location = document.querySelector(".card-top h2");
    const date = document.querySelector(".card-top p");
    const weatherImg = document.querySelector(".weather-icon img");
    const temp = document.querySelector(".weather h2");
    const overcast = document.querySelector(".weather p");
    const feelsLikeTemp = document.querySelector(".feels-like .results");
    const humidity = document.querySelector(".humidity .results");
    const wind = document.querySelector(".wind .results");
    const pressure = document.querySelector(".pressure .results");
    const btn = document.querySelector(".btn-switcher");

    return {
        spinnerElement,
        cardElement,
        location,
        date,
        weatherImg,
        temp,
        overcast,
        feelsLikeTemp,
        humidity,
        wind,
        pressure,
        btn,
        error,
    };
})();

export default DOM;
