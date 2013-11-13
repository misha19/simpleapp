/**
 * @author Misha
 */

//alert("this is another javaScript");
/*
function saySome (name) {
	console.log ("I said something to write in the console" ,name);
	
}


saySome(" james Madison ");
*/

var x = 0;
var y = 0;
var frame;

$(function () {
    frame = setInterval("draw()", 25);
});

function draw() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    if(x <= canvas.width) {
        context.clearRect(0, 0, 400, 400);
        context.strokeStyle = "rgb(139,0,0)";
        context.lineWidth = 8;
        context.beginPath();
        context.moveTo(x += 10, y += 10);
        context.lineTo(x += 10, y += 10);
        context.stroke();

    }
    else{
        clearInterval(frame);
        alert("Animation is ended here.");

    }
}

document.getUserData


