
async function start()
{
    const weatherPromise = await fetch("https://api.weather.gov/gridpoints/SGX/40,60/forecast");
    const weatherData = await weatherPromise.json();
    const ourTemperature = weatherData.properties.periods[0].temperature;
    document.querySelector("#temperature-output").textContent = ourTemperature;
}

start();

async function petsArea()
{
    const eventsPromise = await fetch("https://richardguo24.github.io/ClubEventData/clubevents.json");
    const eventsData = await eventsPromise.json();
    eventsData.forEach(function (pet)
    {
        console.log(pet.name);
    })
    console.log(eventsData)
}

petsArea()