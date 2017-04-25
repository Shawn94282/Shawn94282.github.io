var pjs = new PointJS('2D', 800, 600); // 16:9
//pjs.system.initFullPage(); // for Full Page mode
// pjs.system.initFullScreen(); // for Full Screen mode (only Desctop)

var log    = pjs.system.log;     // log = console.log;
var game   = pjs.game;           // Game Manager
var point  = pjs.vector.point;   // Constructor for Point
var camera = pjs.camera;         // Camera Manager
var brush  = pjs.brush;          // Brush, used for simple drawing
var OOP    = pjs.OOP;            // Object's manager
var math   = pjs.math;           // More Math-methods
var p = pjs.vector.point;         // Vector point

//var touch = pjs.touchControl.initTouchControl();
var m = pjs.mouseControl.initMouseControl();
var key = pjs.keyControl.initKeyControl();

var width = game.getWH().w;
var height = game.getWH().h;
//var r = game.getResolution();

var Game = function() { // Simple - #b6db66 | Dark - #a7c85d
	var player = game.newImageObject({
		file: 'tiles/ship_none.png',
		w: 96, h: 66,
		x: 100, y: 100,
		userData : {
			speed: 3
		}
	});

	var s = 50, x, y, fon=[]; {
		for(x = 0; x < 50; x++) {
			for(y = 0; y < 50; y++) {
				fon.push(
					game.newRectObject({
						fillColor: '#2E9AFE',
						w: s-1, h: s-1,
						x: x*s, y: y*s
					})
				);
			};
		};
	};

	this.update = function() {
		game.clear();
		game.fill('#2E9AFR');

		for(var i in fon){
			if(fon[i].isInCamera())
				fon[i].draw();
		};

		player.draw();
		player.rotate(m.getPosition());
		camera.setPositionC(player.getPositionC(1));

		player.moveTimeC(m.getPosition(), 60);

	};
	this.entry = function() {

	};
};

game.newLoopFromClassObject('game', new Game());
game.startLoop('game');