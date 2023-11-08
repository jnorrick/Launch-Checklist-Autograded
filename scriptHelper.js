// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
// Here is the HTML formatting for our mission target div.
/*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
*/
}

function validateInput(testInput) {
    //input or textarea will always return a string
    let result = "";
    if (testInput === "") {
        result = "Empty"
    } else if (isNaN(testInput)) {
        result = "Not a Number"
    } else {
        result = "Is a Number"
    } 
    return result
} 

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let form = document.querySelector("form")
    form.addEventListener("submit", function(event) {
        console.log("Button Clicked!")
    })
}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;