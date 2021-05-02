let btnIncrease = document.querySelector(".increase");
let btnDecrease = document.querySelector(".decrease");
let btnReset = document.querySelector(".reset");
let number = document.querySelector(".number");

btnIncrease.addEventListener("click", increaseCounter);
btnDecrease.addEventListener("click", decreaseCounter);
btnReset.addEventListener("click", resetCounter);

function increaseCounter() {
    number.innerHTML = parseInt(number.innerHTML) + 1;
    if (parseInt(number.innerHTML) === 0) {
        number.style.color = "#000";
    } 
    if (parseInt(number.innerHTML) > 0) {
        number.style.color = "#0f0";
    } 
    console.log("hola");
}

function decreaseCounter() {
    number.innerHTML = parseInt(number.innerHTML) - 1;
    if (parseInt(number.innerHTML) === 0) {
        number.style.color = "#000";
    } 
    if (parseInt(number.innerHTML) < 0) {
        number.style.color = "#f00";
    } 
}

function resetCounter() {
    number.innerHTML = 0;
    number.style.color = "#000";
}
