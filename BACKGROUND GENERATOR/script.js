let button = document.querySelector(".button");
let background = document.querySelector(".background");
let newColor =  document.querySelector(".random-color");
let values = "123456789";

button.addEventListener("click", cambiarColor);

function cambiarColor() {
    let nuevoColor = " #";
    for (let i = 0; i < 6; i++) {
        nuevoColor += values[getRandomNumber()];
    }
    document.body.style.background = nuevoColor;
    newColor.innerHTML = nuevoColor;
    console.log(nuevoColor);
}

function getRandomNumber() {
    let number = Math.round(Math.random() * 10);
    if (number === 10) return number % 10;
    if (number === 9) return number - 1;
    return number; 
}