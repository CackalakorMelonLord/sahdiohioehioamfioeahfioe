var mouseevent = "empty";
var lastpositionofx, lastpositionofy;

canvas = document.getElementById('canvas1');

ctx = canvas.getContext("2d");

color = "black";

widthofline = 1;

radius = 5;

canvas.addEventListener("mousedown", myMouseDown);

function myMouseDown(e) {
    color = document.getElementById("color").value;

    widthofline = document.getElementById("widthofline").value;

    radius = document.getElementById("radius").value;

    mouseevent = "mouseDown";
}

canvas.addEventListener("mousemove", myMouseMove);

function myMouseMove(e) {
    currentpositionofx = e.clientX - canvas.offsetLeft;
    currentpositionofy = e.clientY - canvas.offsetTop;

    if (mouseevent == "mouseDown") {
        ctx.beginPath();

        ctx.strokeStyle = color;

        ctx.lineWidth = widthofline;

        console.log("last position of x and y = ");
        console.log("x = " + lastpositionofx + ", and the position of y is = " + lastpositionofy);

        console.log("current position of x and y = ");
        console.log("x = " + currentpositionofx + ", and the position of y is = " + currentpositionofy);

        ctx.arc(currentpositionofx, currentpositionofy, radius, 0, 2 * Math.PI);
        
        ctx.stroke();
    }

    lastpositionofx = currentpositionofx;
    lastpositionofy = currentpositionofy;


}

canvas.addEventListener("mouseup", myMouseUp);

function myMouseUp(e) {
    mouseevent = "mouseUp";
}

canvas.addEventListener("mouseleave", myMouseLeave);

function myMouseLeave(e) {
    mouseevent = "mouseLeave";
}

function cleararea() {
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
}