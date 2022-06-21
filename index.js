let lengthConversion = document.getElementById("length-conversion")
let massConversion = document.getElementById("mass-conversion")
let volumeConversion = document.getElementById("volume-conversion")

let num = 20

//let num =0

//function getVal() {
//  let num = document.getElementById("number-el").value
//  document.getElementById("number-to-convert").innerHTML = num
//  lenght(num)
//}

function lenght(){
    let meters = (num * 3.28084).toFixed(3)
    let feet = (num * 0.3048).toFixed(3)
    
    let conversionStr = "20 meters = " + meters + " feet" + " | " + "20 feet = " + feet + " meters"
    lengthConversion.textContent += conversionStr
}

function volume(){
    let liters = (num * 0.264172).toFixed(3)
    let gallons = (num * 3.78541).toFixed(3)

    let conversionStr = "20 liters = " + liters + " gallons" + " | " + "20 gallons = " + gallons + " liters"
    volumeConversion.textContent += conversionStr
}

function mass(){
    let kilos = (num * 2.20462).toFixed(3)
    let pounds = (num * 0.453592).toFixed(3)

    let conversionStr = "20 kilos = " + kilos + " pounds" + " | " + "20 pounds = " + pounds + " kilos"
    massConversion.textContent += conversionStr
}

lenght()
volume()
mass()

// 0 liters = 0.000 gallons | 0 gallons = 0.000 liters
