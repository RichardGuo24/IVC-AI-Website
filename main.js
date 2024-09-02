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
        clone.querySelector(".event-description").textContent = events.description
        clone.querySelector(".event-date").textContent = events.date
        if (!events.photo)
        {
            events.photo = "images/fallback.jpg"
        }
        clone.querySelector(".event-card-photo img").src = events.photo
        clone.querySelector(".event-card-photo img").alt = `A photo of the ${events.name}`
        wrapper.appendChild(clone)
    })

    document.querySelector(".list-of-events").appendChild(wrapper)
}

petsArea()

const allButtons = document.querySelectorAll(".event-filter button")

//Pet Filter Button Code
allButtons.forEach(function (el)
{
    el.addEventListener("click", handleButtonClick)
})

function handleButtonClick(e)
{
    //remove active class
    allButtons.forEach(function (el)
    {
        el.classList.remove("active")
    })
    //add active class to specific button that just got clicked
    e.target.classList.add("active")
    //actually filter the events below
}