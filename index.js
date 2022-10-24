/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/



let input = document.getElementById("input-box").value
let lenght = document.getElementById("length-conv")
let volume = document.getElementById("volume-conv")
let mass = document.getElementById("mass-conv")
const convBtn = document.getElementById("conv-btn")

convBtn.addEventListener("click", function(a, b){

let conversionLenght = Math.floor(input.value * 3.281)
let conversionVolume = Math.floor(input.value * 0.264)
let conversionMass = Math.floor(input.value * 2.204)

lenght.innerHTML = `${input.value} meters =  feet | ${input.value} feet = ${conversionLenght} meters`
volume.innerHTML = `${input.value} liters =  gallons | ${input.value}  gallons = ${conversionVolume} liters`
mass.innerHTML = `${input.value} kilos =  pounds | ${input.value}  pounds = ${conversionMass} kilos`





});

