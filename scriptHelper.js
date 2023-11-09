// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    
// Here is the HTML formatting for our mission target div.id="missionTarget"
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
    if (validateInput(pilot) == "Empty" || validateInput(copilot) == "Empty" || validateInput(fuelLevel) == "Empty" || validateInput(cargoLevel) == "Empty") {
        alert("All fields are required")
    } else {
        list.setAttribute('style', 'visibility: ""')
        let finalPilotStatus = document.getElementById("pilotStatus")
        let finalCopilotStatus = document.getElementById("copilotStatus")
        finalPilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
        finalCopilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`
    }

    if (fuelLevel >= 10000 && cargoLevel <=10000) {
        let greenH2LaunchStatus = document.getElementById("launchStatus")
        greenH2LaunchStatus.innerHTML = "Shuttle is Ready for Launch"
        greenH2LaunchStatus.style.color = "green"
    } else {
        if (fuelLevel < 10000 || cargoLevel > 10000) {
            let redH2LaunchStatus = document.getElementById("launchStatus")
            redH2LaunchStatus.innerHTML = "Shuttle Not Ready for Launch"
            redH2LaunchStatus.style.color = "red"
        }
    }

    if (validateInput(fuelLevel) == "Is a Number") {
        if (fuelLevel < 10000) {
            let lowFuelStatus = document.getElementById("fuelStatus")
            lowFuelStatus.innerHTML = "Fuel level too low for launch"
        } else {
            if (fuelLevel >=10000) {
                let fuelStatusOk = document.getElementById("fuelStatus")
                fuelStatusOk.innerHTML = "Fuel level high enough for launch"
            }
        }
    } else {
        alert("Please enter the correct input type")
    }

    if (validateInput(cargoLevel) == "Is a Number") {
        if (cargoLevel > 10000) {
            let overCargolevel = document.getElementById("cargoStatus")
            overCargolevel.innerHTML = "Cargo mass too heavy for launch"
        } else {
            if (cargoLevel <= 10000) {
                let underCargoLevel = document.getElementById("cargoStatus")
                underCargoLevel.innerHTML = "Cargo mass low enough for launch"
            } 
        }
    } else {
        alert("Please enter the correct input type")
    }

} 


async function myFetch() {
    const url = "https://handlers.education.launchcode.org/static/planets.json"
    const fetchResponse = await fetch(url)
    const planetsReturned = fetchResponse.json()

    return planetsReturned;
}

// async function myFetch() {
// let planetsReturned;

// planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
//     response.json().then(function(json) {
//         console.log(json)
//     })
// });

// return planetsReturned;

// }

function pickPlanet(planets) {
    //create function that randomly selects a planet from the json objects
    let randomPlanet = Math.floor(Math.random() * 6)
    return randomPlanet
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;