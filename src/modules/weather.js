import DOM from "./dom";

function convertData(data) {
    if (!data) return;

    const { country, name, localtime } = data.location;
    const {
        humidity,
        temp_c,
        temp_f,
        feelslike_c,
        feelslike_f,
        wind_kph,
        pressure_mb,
    } = data.current;
    const { text, icon } = data.current.condition;

    return {
        country,
        name,
        localtime,
        humidity,
        temp_c,
        temp_f,
        feelslike_c,
        feelslike_f,
        text,
        icon,
        wind_kph,
        pressure_mb,
    };
}

function toggleSpinnerAndCard(show) {
    DOM.spinnerElement.style.display = show ? "block" : "none";
    DOM.cardElement.style.display = show ? "none" : "flex";
}

function showError(show, msg = "") {
    DOM.error.style.display = show ? "block" : "none";
    DOM.error.textContent = msg;
}

const handleError = (status) => {
    let errMsg;

    switch (status) {
        case 401:
            errMsg = "API key not provided or invalid.";
            break;
        case 400:
            errMsg = "Location not found";
            break;
        case 403:
            errMsg = "API key has been disabled.";
            break;
        default:
            errMsg = "An error occurred!";
            break;
    }

    return errMsg;
};

async function fetchWeatherData(location) {
    const key = "726a1ddcb6314158a94154253241001";
    const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`;

    toggleSpinnerAndCard(true);

    try {
        const response = await fetch(url, { mode: "cors" });

        if (!response.ok) throw new Error(handleError(response.status));

        const data = convertData(await response.json());

        toggleSpinnerAndCard(false);
        showError(false);

        return data;
    } catch (err) {
        toggleSpinnerAndCard(false);

        DOM.cardElement.style.display = "none";
        showError(true, err);

        return null;
    }
}

export default fetchWeatherData;
