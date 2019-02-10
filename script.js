var colorCircles = [];
var list = document.getElementById("list");
var targetColor = "blue";
var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext("2d");

colorCircles[0] = document.getElementById("white");
colorCircles[1] = document.getElementById("black");
colorCircles[2] = document.getElementById("blue");
colorCircles[3] = document.getElementById("green");
colorCircles[4] = document.getElementById("yellow");
colorCircles[5] = document.getElementById("cyan");
colorCircles[6] = document.getElementById("red");

function pickColor(e) {
	console.log(e.target.tagName);
	if (e.target.tagName == "LI") {

		if (e.target.id == "white") {
			targetColor = "white";
		}
		if (e.target.id == "black") {
			targetColor = "black";
		}
		if (e.target.id == "blue") {
			targetColor = "blue";
		}
		if (e.target.id == "green") {
			targetColor = "green";
		}
		if (e.target.id == "yellow") {
			targetColor = "yellow";
		}
		if (e.target.id == "cyan") {
			targetColor = "cyan";
		}
		if (e.target.id == "red") {
			targetColor = "red";
		}

		for (var i = 0; i<=6; i++) {
			colorCircles[i].style.height="50px";
			colorCircles[i].style.width="50px";
		}
		e.target.style.height = "80px";
		e.target.style.width = "80px";
	}
}

function drawOnCanvas(e){
	if (e.which == 1) {
		canvasContext.fillStyle=targetColor;
		canvasContext.beginPath();
		canvasContext.arc(e.offsetX, e.offsetY, 20, 0, Math.PI*2);
		canvasContext.fill();
	}
}


list.addEventListener("click", pickColor);
canvas.addEventListener("mousemove", drawOnCanvas);