let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let btnEl = document.getElementById("convert-btn")
let massEl = document.getElementById("mass-el")



const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

btnEl.addEventListener("click", function (){
    let baseValue = inputEl.value
    lengthEl.textContent = `${baseValue} meter = ${baseValue * meterToFeet} feet | ${baseValue} feet = ${baseValue * 0.3048} meter`
    volumeEl.textContent = `${baseValue} liters = ${baseValue * literToGallon} gallons | ${baseValue} gallons = ${baseValue * 3.78541} liters`
    massEl.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue * 0.453592).toFixed(3)} kilos`
})