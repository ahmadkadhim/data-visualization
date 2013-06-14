$(document).ready(function() {
	
//Drawing the canvas of related artists with images

var canvasElement;
var drawingContext;
var pattern;

var canvasWidth = 900;
var canvasHeight = 900;
var fitFactor = 180;
var widthFactor = canvasWidth/fitFactor;
var heightFactor = canvasHeight/fitFactor;
var hexagonBoxSide = 100*widthFactor;

console.log(startingArtist)

var startingArtist = $("#0link").text();
var firstArtist = $("#1link").text();
var secondArtist = $("#2link").text();
var thirdArtist = $("#3link").text();
var fourthArtist = $("#4link").text();
var fifthArtist = $("#5link").text();
var sixthArtist = $("#6link").text();

console.log(startingArtist);

//var startingImage = $("#0image");
var startingImage = new Image();
startingImage.src = $("#0image").attr("src");
var firstImage = new Image();
firstImage.src = $("#1image").attr("src");
var secondImage = new Image();
secondImage.src = $("#2image").attr("src");
var thirdImage = new Image();
thirdImage.src = $("#3image").attr("src");
var fourthImage = new Image();
fourthImage.src = $("#4image").attr("src");
var fifthImage = new Image();
fifthImage.src = $("#5image").attr("src");
var sixthImage = new Image();
sixthImage.src = $("#6image").attr("src");

var imageWidth = 100;
var imageHeight = 100;

var startingPointX = canvasWidth/2;
var startingPointY = canvasWidth/2;
var firstPointX = (canvasWidth-hexagonBoxSide)/2;
var firstPointY = (canvasHeight-hexagonBoxSide)/2+(hexagonBoxSide*.21325);
var secondPointX = (canvasWidth-hexagonBoxSide)/2;
var secondPointY = (canvasHeight-hexagonBoxSide)/2+(hexagonBoxSide*.78675);
var thirdPointX = canvasWidth/2;
var thirdPointY = (canvasHeight-hexagonBoxSide)/2+(hexagonBoxSide);
var fourthPointX = (canvasWidth-hexagonBoxSide)/2+(hexagonBoxSide);
var fourthPointY = (canvasHeight-hexagonBoxSide)/2+(hexagonBoxSide*.78675);
var fifthPointX = (canvasWidth-hexagonBoxSide)/2+(hexagonBoxSide);
var fifthPointY = (canvasHeight-hexagonBoxSide)/2+(hexagonBoxSide*.21325)
var sixthPointX = canvasWidth/2;
var sixthPointY = (canvasHeight-hexagonBoxSide)/2

var offset = 0;

runner();

function addCanvas () {
	canvasElement = document.createElement("canvas");

	document.body.appendChild(canvasElement);
	canvasElement.width = canvasWidth;
	canvasElement.height = canvasHeight;
	context = canvasElement.getContext("2d");
	var centerX = canvasWidth/2;
	var centerY = canvasHeight/2;
	context.beginPath();
	context.arc(centerX,centerY,400,0,Math.PI*2,false);
	context.fillStyle = "#999";
	context.fill();	
}

function drawGrid () {
	context.beginPath();

	for (var x = 0.5; x < canvasWidth; x += 20) {
 	  context.moveTo(x, 0);
 	  context.lineTo(x, canvasWidth);
	}

	for (var y = 0.5; y < canvasHeight; y += 20) {
 	  context.moveTo(0, y);
  	  context.lineTo(canvasHeight, y);
	}

	context.lineWidth = 1;
	context.strokeStyle = "eee";
	context.stroke();

}


function drawHexagon () {
	
	context.beginPath();

	context.moveTo(firstPointX,firstPointY);
	context.lineTo(secondPointX,secondPointY);
	context.moveTo(secondPointX,secondPointY);
	context.lineTo(thirdPointX,thirdPointY);
	context.moveTo(thirdPointX,thirdPointY);
	context.lineTo(fourthPointX,fourthPointY);
	context.moveTo(fourthPointX,fourthPointY);
	context.lineTo(fifthPointX,fifthPointY);
	context.moveTo(fifthPointX,fifthPointY);
	context.lineTo(sixthPointX,sixthPointY);
	context.moveTo(sixthPointX,sixthPointY);
	context.lineTo(firstPointX,firstPointY);
	context.lineWidth = 4;
	context.strokeStyle = "#ccc";
	context.stroke();
	context.closePath();
}

function writeText (artist, x, y) {

	context.font = "22px Helvetica Neue, Arial";
	if(artist.length < 6) {
		context.font = "32px Helvetica Neue, Arial";
	}
	if(artist.length < 12) {
		context.font = "28px Helvetica Neue, Arial";
	}
	if(artist.length > 20) {
		context.font = "16px Helvetica Neue, Arial";
	}
	context.textBaseline = "middle";
	context.textAlign = "center";
	context.fillStyle = "#FFF";
	context.fillText(artist,x+1,y+offset+1);
	context.shadowColor = "#222";
	context.shadowOffsetX = 2;
	context.shadowOffsetY = 2;
	context.shadowBlur = 5;
	context.fillStyle = "#F6F4F4";
	context.fillText(artist, x, y+offset)

}

function runner () {
	addCanvas();
	drawGrid();
	drawHexagon();
}

	//context.drawImage(startingImage, 20, 40);
	// context.drawImage(firstImage, 0, 0);
	// context.drawImage(secondImage, 0, 0);
	// context.drawImage(thirdImage, 0, 0);
	// context.drawImage(fourthImage, 0, 0);
	// context.drawImage(fifthImage, 0, 0);
	// context.drawImage(sixthImage, 0, 0);


	context.save()
	context.strokeStyle = "#475c78"
	context.lineWidth = 8

	startingImage.onload = function() {
		context.save();
		context.arc(startingPointX,startingPointY,(40*heightFactor)/2,0,Math.PI*2,true);
		context.clip();
		context.drawImage(startingImage, startingPointX-(20*widthFactor), startingPointY-(20*heightFactor),40*widthFactor,40*heightFactor);
		writeText(startingArtist, startingPointX, startingPointY);
		context.restore();
		context.shadowColor = "#CCC";
		context.shadowOffsetX = 0;
		context.shadowOffsetY = 0;
		context.shadowBlur = 4;
		context.beginPath();
		context.arc(startingPointX,startingPointY,(40*heightFactor)/2,0,Math.PI*2,true);
		context.stroke();
	}

	firstImage.onload = function() {
		context.save();
		context.arc(firstPointX,firstPointY,(40*heightFactor)/2,0,Math.PI*2,true);
		context.clip();
		context.drawImage(firstImage, firstPointX-(20*widthFactor), firstPointY-(20*heightFactor),40*widthFactor,40*heightFactor);
		writeText(firstArtist, firstPointX-offset, firstPointY-offset);
		context.restore();
		context.beginPath();
		context.arc(firstPointX,firstPointY,(40*heightFactor)/2,0,Math.PI*2,true);
		context.stroke();
	}
	secondImage.onload = function() {
		context.save();
		context.arc(secondPointX,secondPointY,(40*heightFactor)/2,0,Math.PI*2,true);
		context.clip();
		context.drawImage(secondImage, secondPointX-(20*widthFactor), secondPointY-(20*heightFactor),40*widthFactor,40*heightFactor);
		writeText(secondArtist, secondPointX-offset, secondPointY-offset);
		context.restore();
		context.beginPath();
		context.arc(secondPointX,secondPointY,(40*heightFactor)/2,0,Math.PI*2,true);
		context.stroke();
	}
	thirdImage.onload = function() {
		context.save();
		context.arc(thirdPointX,thirdPointY,(40*heightFactor)/2,0,Math.PI*2,true);
		context.clip();
		context.drawImage(thirdImage, thirdPointX-(20*widthFactor), thirdPointY-(20*heightFactor),40*widthFactor,40*heightFactor);
		writeText(thirdArtist, thirdPointX-offset, thirdPointY-offset);
		context.restore();
		context.beginPath();
		context.arc(thirdPointX,thirdPointY,(40*heightFactor)/2,0,Math.PI*2,true);
		context.stroke();
	}
	fourthImage.onload = function() {
		context.save();
		context.arc(fourthPointX,fourthPointY,(40*heightFactor)/2,0,Math.PI*2,true);
		context.clip();
		context.drawImage(fourthImage, fourthPointX-(20*widthFactor), fourthPointY-(20*heightFactor),40*widthFactor,40*heightFactor);
		writeText(fourthArtist, fourthPointX-offset, fourthPointY-offset);
		context.restore();
		context.beginPath();
		context.arc(fourthPointX,fourthPointY,(40*heightFactor)/2,0,Math.PI*2,true);
		context.stroke();
	}
	fifthImage.onload = function() {
		context.save();
		context.arc(fifthPointX,fifthPointY,(40*heightFactor)/2,0,Math.PI*2,true);
		context.clip();
		context.drawImage(fifthImage, fifthPointX-(20*widthFactor), fifthPointY-(20*heightFactor),40*widthFactor,40*heightFactor);
		writeText(fifthArtist, fifthPointX-offset, fifthPointY-offset);
		context.restore();
		context.beginPath();
		context.arc(fifthPointX,fifthPointY,(40*heightFactor)/2,0,Math.PI*2,true);
		context.stroke();
	}
	sixthImage.onload = function() {
		context.save();
		context.arc(sixthPointX,sixthPointY,(40*heightFactor)/2,0,Math.PI*2,true);
		context.clip();
		context.drawImage(sixthImage, sixthPointX-(20*widthFactor), sixthPointY-(20*heightFactor),40*widthFactor,40*heightFactor);
		writeText(sixthArtist, sixthPointX-offset, sixthPointY-offset);
		context.restore();
		context.beginPath();
		context.arc(sixthPointX,sixthPointY,(40*heightFactor)/2,0,Math.PI*2,true);
		context.stroke();
	}

	// writeText(startingArtist, startingPointX,startingPointY);
	// writeText(firstArtist, firstPointX-offset, firstPointY-offset);
	writeText(secondArtist, secondPointX-offset, secondPointY+offset);
	writeText(thirdArtist, thirdPointX, thirdPointY+offset);
	writeText(fourthArtist, fourthPointX+offset, fourthPointY+offset);
	writeText(fifthArtist, fifthPointX+offset, fifthPointY-offset);
	writeText(sixthArtist, sixthPointX, sixthPointY-offset);

})


