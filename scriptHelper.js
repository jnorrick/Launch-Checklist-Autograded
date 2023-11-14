// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    document.getElementById("missionTarget").innerHTML =
        `<h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name} </li>
            <li>Diameter: ${diameter} </li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons} </li>
        </ol>
        <img src="${imageUrl}">`
            
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
    } 

    if (validateInput(fuelLevel) === "Is a Number") {
        if (fuelLevel < 10000) {
            let finalPilotStatus = document.getElementById("pilotStatus")
            let finalCopilotStatus = document.getElementById("copilotStatus")
            let lowFuelStatus = document.getElementById("fuelStatus")
            finalPilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
            finalCopilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`
            lowFuelStatus.innerHTML = "Fuel level too low for launch"
            document.getElementById("faultyItems").style.visibility = "visible"
        } else {
            if (fuelLevel >=10000) {
                let finalPilotStatus = document.getElementById("pilotStatus")
                let finalCopilotStatus = document.getElementById("copilotStatus")
                let fuelStatusOk = document.getElementById("fuelStatus")
                finalPilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
                finalCopilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`
                fuelStatusOk.innerHTML = "Fuel level high enough for launch"
                document.getElementById("faultyItems").style.visibility = "hidden"
            }
        }
    } else {
        alert("Please enter the correct input type")
    }


    if (validateInput(cargoLevel) === "Is a Number") {
        if (cargoLevel > 10000) {
            let finalPilotStatus = document.getElementById("pilotStatus")
            let finalCopilotStatus = document.getElementById("copilotStatus")
            let overCargolevel = document.getElementById("cargoStatus")
            finalPilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
            finalCopilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`
            overCargolevel.innerHTML = "Cargo mass too heavy for launch"
            document.getElementById("faultyItems").style.visibility = "visible"
        } else {
            if (cargoLevel <= 10000) {
                let finalPilotStatus = document.getElementById("pilotStatus")
                let finalCopilotStatus = document.getElementById("copilotStatus")
                let underCargoLevel = document.getElementById("cargoStatus")
                finalPilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
                finalCopilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`
                underCargoLevel.innerHTML = "Cargo mass low enough for launch"
                document.getElementById("faultyItems").style.visibility = "hidden"
            } 
        }
    } else {
        alert("Please enter the correct input type")
    }

    if (fuelLevel >= 10000 && cargoLevel <=10000) {
        let greenH2LaunchStatus = document.getElementById("launchStatus")
        greenH2LaunchStatus.innerHTML = "Shuttle is Ready for Launch"
        greenH2LaunchStatus.style.color = "green"
        document.getElementById("faultyItems").style.visibility = "visibile"
    } else {
        if (fuelLevel < 10000 || cargoLevel > 10000) {
            let finalPilotStatus = document.getElementById("pilotStatus")
            let finalCopilotStatus = document.getElementById("copilotStatus")
            let redH2LaunchStatus = document.getElementById("launchStatus")
            finalPilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
            finalCopilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`
            redH2LaunchStatus.innerHTML = "Shuttle Not Ready for Launch"
            redH2LaunchStatus.style.color = "red"
            document.getElementById("faultyItems").style.visibility = "visible"
        }
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
    let randomIndex = Math.floor(Math.random() * planets.length)
    let randomPlanetObject = planets[randomIndex]
    
    return randomPlanetObject
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;