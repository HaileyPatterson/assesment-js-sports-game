
let goal = 0;
let shots = 0;
let reset = 0;
const shotsCount1 = document.querySelector("#teamone-numshots")
const goalCount1 = document.querySelector("#teamone-numgoals")
const shotsCount2 = document.querySelector("#teamtwo-numshots")
const goalCount2 = document.querySelector("#teamtwo-numgoals")
const resetCount = document.querySelector("#num-resets")



const shootButton1 = document.querySelector("#teamone-shoot-button")
    shootButton1.addEventListener("click", function() {
    const randomShot1 = Math.random() >= 0.5
    let shots = Number(shotsCount1.innerHTML) + 1
    let goal = Number(goalCount1.innerHTML) + 1
    if (randomShot1) {
        shotsCount1.innerHTML = shots
        goalCount1.innerHTML = goal

    } else {
        shotsCount1.innerHTML = shots
    }
})



 

const shootButton2 = document.querySelector("#teamtwo-shoot-button")
shootButton2.addEventListener("click", function () {
    const randomShot2 = Math.random() >= 0.5
    let goal = Number(goalCount2.innerHTML) + 1
    let shots = Number(shotsCount2.innerHTML) + 1
    if(randomShot2){
        shotsCount2.innerHTML = shots
        goalCount2.innerHTML = goal
    }
    else {
        shotsCount2.innerHTML = shots
    }
})



const resetButton = document.querySelector("#reset-button")
resetButton.addEventListener("click", function () {
    let reset = Number(resetCount.innerHTML) + 1;
    resetCount.innerHTML = reset;
    goalCount1.innerHTML = 0;
    goalCount2.innerHTML = 0;
    shotsCount1.innerHTML = 0;
    shotsCount2.innerHTML = 0;

})