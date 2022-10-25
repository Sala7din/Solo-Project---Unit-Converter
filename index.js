/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/




let lenght = document.getElementById("length-conv")
let volume = document.getElementById("volume-conv")
let mass = document.getElementById("mass-conv")
const convBtn = document.getElementById("conv-btn")

convBtn.addEventListener("click", function(){

let input = document.getElementById("input-box").value

let MtoF = input * 3.281
let LtoG = input * 0.264
let KtoP = input * 2.204

let FtoM = input / 3.281
let GtoL = input / 0.264
let PtoK = input / 2.204

lenght.innerHTML = `${Number(input)} meters = ${Number(MtoF).toFixed(3)}  feet | ${Number(input)} feet = ${Number(FtoM).toFixed(3)} meters`
volume.innerHTML = `${Number(input)} liters = ${Number(LtoG).toFixed(3)} gallons | ${Number(input)}  gallons = ${Number(GtoL).toFixed(3)} liters`
mass.innerHTML = `${Number(input)} kilos = ${Number(KtoP).toFixed(3)} pounds | ${Number(input)}  pounds = ${Number(PtoK).toFixed(3)} kilos`





});

