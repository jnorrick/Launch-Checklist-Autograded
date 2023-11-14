// Write your JavaScript code here!

// const { addDestinationInfo } = require("./scriptHelper");

// const { pickPlanet } = require("./scriptHelper");

// const { formSubmission } = require("./scriptHelper");

// const { validateInput } = require("./scriptHelper");

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault()
        let pilotInfo = document.querySelector("input[name=pilotName]").value
        let copilotInfo = document.querySelector("input[name=copilotName]").value
        let fuelLevelInfo = document.querySelector("input[name=fuelLevel]").value
        let cargoLevelInfo = document.querySelector("input[name=cargoMass]").value
        let listInfo = document.getElementById("faultyItems")
        //action
        formSubmission(document, listInfo, pilotInfo, copilotInfo, fuelLevelInfo, cargoLevelInfo)
        
    }) 
    
    
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse
    .then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let randomPlanetObject = pickPlanet(listedPlanets)
        
        // document, name, diameter, star, distance, moons, imageUrl)
        addDestinationInfo(document, randomPlanetObject.name, randomPlanetObject.diameter, randomPlanetObject.star, randomPlanetObject.distance, randomPlanetObject.moons, randomPlanetObject.image)
    })
});