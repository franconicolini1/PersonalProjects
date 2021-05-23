"use strict";

let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

function updateTime() {
    let futureMilliseconds = 1641006000000; // Miliseconds in 2022
    let nowMilliseconds = Date.now();
    let sub = futureMilliseconds - nowMilliseconds;
    let time = calculateTime(sub);
    days.textContent = `${time[0]}`;
    hours.textContent = `${time[1]}`;
    minutes.textContent = `${time[2]}`;
    seconds.textContent = `${time[3]}`;
}

function calculateTime(time) {
    let result = [];
    result[0] = Math.trunc(time / 86400000);
    result[1] = Math.trunc((time % 86400000) / 3600000);
    result[2] = Math.trunc((time % 86400000 % 3600000) / 60000);
    result[3] = Math.trunc((time % 86400000 % 3600000 % 60000) / 1000);
    return result;
}

updateTime();
setInterval(updateTime, 1000);