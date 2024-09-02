const template = document.querySelector("#event-card-template")
const wrapper = document.createDocumentFragment()

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
    eventsData.forEach(function (events)
    {
        const clone = template.content.cloneNode(true)
        clone.querySelector("h3").textContent = events.name
        wrapper.appendChild(clone)
    })

    document.querySelector(".list-of-events").appendChild(wrapper)
}

petsArea()