const canvas = document.querySelector(".canvas");
const dif = canvas.getBoundingClientRect();
const ctx = canvas.getContext("2d");

const canvasWidth = parseInt(canvas.getAttribute("width"));
const canvasHeight = parseInt(canvas.getAttribute("height"));

let deleter = document.querySelector(".trash");
let rubberButton = document.querySelector(".rubber");
let colorPicker = document.querySelector(".color");
let bucket = document.querySelector(".bucket");
let color, lineWidth, painting, difX, difY;
let rubber = false;

canvas.addEventListener("mousedown", e => {
    difX = e.clientX - dif.left;
    difY = e.clientY - dif.top;
    painting = true;
    lineWidth = document.querySelector(".range").value;
    ctx.beginPath();
    color = colorPicker.value;
    if (rubber) {
        color = '#fff';
    }
});

canvas.addEventListener("mousemove", e => {
    if (painting) {
        draw(difX, difY, e.clientX - dif.left, e.clientY - dif.top);
        difX = e.clientX - difX.left;
        difY = e.clientY - difY.top;
    }
});

canvas.addEventListener("mouseup", () => {
    ctx.closePath();
    painting = false;
});

deleter.addEventListener("click", () => {
    ctx.clearRect(0, 0, 700, 700);
    rubber = false;
});

rubberButton.addEventListener("click", () => {
    rubber = true;
});

colorPicker.addEventListener("click", () => {
    rubber = false;
})

const paintBackground = () => {
    for (let i = 0; i < canvasWidth; i++) {
        draw(0, i, canvasWidth, i);
    }
};

bucket.addEventListener("click", () => {
    rubber = false;
    paintBackground();
});

const draw = (x1, y1, x2, y2) => {
    ctx.strokeStyle = colorPicker.value;
    if (rubber) ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
};