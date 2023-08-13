function convertTemperature() {
    var celsiusInput = document.getElementById("celsiusInput");
    var celsius = parseFloat(celsiusInput.value);

    if (isNaN(celsius)) {
        alert("Please enter a valid number for Celsius temperature.");
        return;
    }

    var fahrenheit = (celsius * 9/5) + 32;
    var kelvin = celsius + 273.15;

    var result = celsius + "°C = " + fahrenheit.toFixed(2) + "°F = " + kelvin.toFixed(2) + "K";

    document.getElementById("result").innerHTML = result;
}
