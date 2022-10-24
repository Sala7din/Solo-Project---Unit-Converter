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

convBtn.addEventListener("click", function(){

lenght.innerHTML = `meters =  feet |  feet =  meters`;
volume.innerHTML = ` liters =  gallons |  gallons =  liters`;
mass.innerHTML = ` kilos =  pounds |  pounds =  kilos`;





});

