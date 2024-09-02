
async function start()
{
    const weatherPromise = await fetch("https://api.weather.gov/gridpoints/SGX/40,60/forecast");
    const weatherData = await weatherPromise.json();
    const ourTemperature = weatherData.properties.periods[0].temperature;
    console.log(ourTemperature);
}

start();