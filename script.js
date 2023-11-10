// Write your JavaScript code here!

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
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let randomPlanetObject = pickPlanet(listedPlanets)
        console.log(randomPlanetObject)
        
        console.log()

    })
    
});


// window.addEventListener("load", function(){
//     fetch("https://handlers.education.launchcode.org/static/astronauts.json")
//     .then(function(response) {
//         response.json()
//         .then(function(json){
//             for (let item in json) {
//                 let astronaut = json[item];
//                 let activeStatusAstronaut = astronaut.active ? "green" : "black"
//                 document.getElementById("container").innerHTML += 
//                 `
//                 <div class="astronaut">
//                 <div class="bio">
//                 <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
//                 <ul>
//                 <li>Hours in Space: ${astronaut.hoursInSpace}</li>
//                 <li style=color:${activeStatusAstronaut} id="status">Active: ${astronaut.active}</li>
//                 <li>Skills: ${astronaut.skills.map((item) => item = " " + item)}</li>
//                 </ul>
//                 </div>
//                 <img class="avatar" src=${astronaut.picture}>
//                 </div>
//                 `
                
//             }
            
//         })
//     })
// });