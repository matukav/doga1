/*
* File: app.js
* Author: Viola Máté
* Copyright: 2024, Viola Máté
* Group: I/2/N
* Date: 2024-04-03
* Github: https://github.com/matukav/
* Licenc: GNU GPL
*/

const sidesInput = document.querySelector("#sidesInput")
const calcButton = document.querySelector("#calcButton")
const tOutput = document.querySelector("#tOutput")

calcButton.addEventListener('click', () => {
    startCalc()
})

function startCalc(){
    var sides = Number(sidesInput.value)
    var t = calcT(sides)
    tOutput.value = t 
}

function calcT(sides){
    return 4 * Math.pow(sides, 2) * (Math.cos(Math.PI /16) / Math.sin(Math.PI /16))
}

