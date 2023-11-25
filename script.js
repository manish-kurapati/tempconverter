function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;
    let convertedTemperature;
    let convertedUnit;

    if (unit === "celsius") {
        convertedTemperature = (temperatureInput - 32) * (5 / 9);
        convertedUnit = "Celsius";
    } else {
        convertedTemperature = (temperatureInput * (9 / 5)) + 32;
        convertedUnit = "Fahrenheit";
    }

    document.getElementById("result").textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
}