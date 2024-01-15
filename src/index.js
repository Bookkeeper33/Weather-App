import "./style.css";

import card from "./modules/card";
import fetchWeatherData from "./modules/weather";

const form = document.getElementById("myForm");
const input = document.getElementById("search");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!input.value) return;

    const data = await fetchWeatherData(input.value);

    card(data).assignWeatherData();

    form.reset();
});
