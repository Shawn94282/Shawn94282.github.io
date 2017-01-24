/*var cursorLaser = function() {
	document.body.style.cursor = "url('img/laserRed08.png'), auto";
}

var cursorDefaul = function() {
	document.body.style.cursor = "url('img/cursor.png'), auto";
}*/

var width = 1000, height = 750;
var js = new PointJS('2d', width, height, {
	backgroundColor: '#989898'
});
js.system.initFullScale();

var game = js.game;
var m = js.mouseControl.initMouseControl();
var key = js.keyControl.initKeyControl();
var p = js.vector.point;
var brush = js.brush;
var OOP = js.OOP;
var math = js.math;
var size = js.vector.size;	
var rand = js.math.random;
var rc = js.colors.randomColor;
var log = js.system.log;
var width = js.game.getWH().w;
var height = js.game.getWH().h;
var camera = js.camera;
var GUI = js.GUI;
var r = game.getResolution();
var dial = js.dialogs;
var tersBlue = 1;
var tersRed = 1;
var timeRound = 390;
var going = true;
var numberRound = 1;

var bg = game.newRectObject({
	w: width, h: height,
	x: 0, y: 0,
	fillColor: '#3d4f65'
});

var logo = game.newImageObject({
	file: 'img/logo.png',
	w: 254, h: 257,
	scale: 0.5,
	x: 430, y: 10
});

var drawHUDBlue = function() {
	var rectZadBlue = game.newRectObject({
		w: 275, h: 98,
		x: 0, y: 0,
		fillColor: '#46a9e0'
	});

	var hudBlue = game.newImageObject({
		file: 'img/blue_hud.png',
		w: 275, h: 98,
		x: 0, y: 0
	});

	var polZadBlue = game.newRectObject({
		w: tersBlue*1.53, h: 7,
		x: 105, y: 65,
		fillColor: '#46a9e0'
	});

	var polZadFonBlue = game.newRectObject({
		w: 150, h: 7,
		x: 105, y: 65,
		fillColor: '#3d4f65'
	});

	rectZadBlue.draw();
	hudBlue.draw();
	polZadFonBlue.draw();
	polZadBlue.draw();
};

var drawHUDRed = function() {
	var rectZadRed = game.newRectObject({
		w: 275, h: 98,
		x: 725, y: 0,
		fillColor: '#ed6454'
	});
		
	var hudRed = game.newImageObject({
		file: 'img/red_hud.png',
		w: 275, h: 98,
		x: 725, y: 0
	});

	var polZadRed = game.newRectObject({
		w: 150, h: 7,
		x: 745, y: 65,
		fillColor: '#ed6454'
	});

	var widthPol = 150 - (tersRed*1.5);

	var polZadFonRed = game.newRectObject({
		w: widthPol, h: 7,
		x: 745, y: 65,
		fillColor: '#3d4f65'
	});

	rectZadRed.draw();
	hudRed.draw();
	polZadRed.draw();
	polZadFonRed.draw();
};

var drawHUDRound = function() {
	var rectZad = game.newRectObject({
		w: 435, h: 81,
		x: 282, y: 10,
		fillColor: 'white'
	});

	var goingT = '';
	if(going == true) {
		goingT = ' синий';
		rectTimeColor = '#46a9e0';
	} else {
		goingT = ' красный'
		rectTimeColor = '#ed6454';
	};

	var goingText = game.newTextObject({
		text: 'Раунд ' + numberRound + ': ходит' + goingT,
		color: 'white',
		size: 28,
		font: 'Arial Black',
		x: 290, y: 14,
		strokeColorText: '#3d4f65',
		strokeWidthText: 2
	});

	var rectTimeZad = game.newRectObject({
		w: 392, h: 20,
		x: 300, y: 60,
		fillColor: 'white',
		strokeColor: '#3d4f65',
		strokeWidth: 5 
	});
	
	timeRound = timeRound - 5;
	if(timeRound == 0) { // 18 сек = 390
 		timeRound = 390;
 		numberRound++;

		if(going == true) {
			going = false;
		} else {
			going = true;
		};
	};

	var rectTime = game.newRectObject({
		w: timeRound, h: 16,
		x: 305, y: 64,
		fillColor: rectTimeColor
	});

	rectZad.draw();
	goingText.draw();
	rectTimeZad.draw();
	rectTime.draw();
};