var pjs = new PointJS('2D', 1000, 750); // 16:9
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

var Menu = function() {
	var logotype = game.newImageObject({
		file: 'logo.png',
		w: 372, h: 117,
		positionC: p(504, 100),
		//scale: 0.7,
		strokeColor: 'black',
		strokeWidth: 3
	});
	var left_backgroud = game.newRectObject({
		w: 500, h: 750,
		x: 0, y: 0,
		fillColor: '#3498db'
	});
	var right_backgroud = game.newRectObject({
		w: 500, h: 750,
		x: 500, y: 0,
		fillColor: '#e74c3c'
	});

	var menu_box_one = game.newRectObject({
		fillColor: 'black',
		w: 300, h: 50,
		positionC: p(500, 300)
	})

	this.update = function() {
		game.clear();
		//game.fill('black');

		left_backgroud.draw();
		right_backgroud.draw();
		logotype.draw();

		menu_box_one.draw();
	}
}

var Game_level_1 = function() {
	var debug_mod = true;
	var double_jump = false;
	var player_freeze = false;

	var map = {
		width: 50,
		height: 50,
		sourse : [
			'1111111111111111111111111111111111111111111111',
			'1                                            1',
			'1   P                                        1',
			'1   00000 0000  00  00000  0000000 0    00   1',
			'1   0   0 0  0 0  0 0   0     0    0   0 0   1',
			'1   0   0 000  0  0 0         0    0  0  0   1',
			'1   0   0 0    0  0 0   0     0    0 0   0   1',
			'1   0   0 0     00  00000     0    00    0   1',
			'1                                            1',
			'1                                            1',
			'1111111111111111111111111111111111111111111111',
		]
	};

	var plStartPosition;
	var walls_red = [];
	var walls_blue = [];
	var board = [];

	OOP.forArr(map.sourse, function (string, Y) {
		OOP.forArr(string, function(symbol, X) {
			if(!symbol || symbol == ' ') return;

			if(symbol == 'P') {
				plStartPosition = p(map.width*X, map.height*Y);
			};

			if(symbol == '0') {
				walls_red.push(game.newRectObject({
					w: map.width+1, h: map.height+1,
					x: map.width*X, y: map.height*Y,
					fillColor: '#e74c3c'
				}));
			};
			if(symbol == '1') {
				walls_blue.push(game.newRectObject({
					w: map.width+1, h: map.height+1,
					x: map.width*X, y: map.height*Y,
					fillColor: '#3498db'
				}));
			};	
			if(symbol == 'B') {
				board.push(game.newRectObject({
					w: map.width+1, h: map.height+1,
					x: map.width*X, y: map.height*Y,
					fillColor: '#f1f1f1'
				}));
			};						
		});
	});

	var player = game.newImageObject({
		file: 'panda.png',
		w: 50, h: 50,
		position: plStartPosition
	});
	player.gr = 0.5;
	player.speed = p(0, 0);

	this.update = function() {
		game.clear();
		game.fill('#f1f1f1');

		player.draw();
		player.speed.y += player.gr;
		if(player_freeze == false) {
			if(key.isDown('RIGHT'))
				player.speed.x = 6;
			else if(key.isDown('LEFT'))
				player.speed.x = -6;
			else
				player.speed.x = 0;
		};

		player.turn(player.speed.x/2);

		OOP.drawArr(walls_red, function(wall) {
			if(wall.isInCameraStatic()) {
				//wall.drawStaticBox();
				if(wall.isStaticIntersect(player)) {
					if(player.x + player.w > wall.x + wall.w/4 && player.x < wall.x + wall.w - wall.w/4) {
						if(player.speed.y > 0 && player.y + player.h < wall.y + wall.h/2) {
							if(key.isDown('UP') || key.isDown('W') || m.isDown('LEFT') || key.isDown('SPACE')) {
								if(double_jump == false) {
									player.speed.y = -12;
								} else {
									player.speed.y = -24;
								}
							} else {
								player.y = wall.y - player.h;
								player.speed.y *= -0.2;
								if(player.speed.y > -0.3)
									player.speed.y = 0;
							}
						} else if(player.speed.y < 0 && player.y > wall.y + wall.h/2) {
							player.y = wall.y + wall.h;
							player.speed.y *= -0.1;
						};
					};

					if(player.y + player.h > wall.y + wall.h/4 && player.y < wall.y + wall.h - wall.h/4) {
						if(player.speed.x > 0 && player.x < wall.x + wall.w/2) {
							player.x = player.x;
							player.speed.x = 0;
						}

						if(player.speed.x < 0 && player.x > wall.x + wall.w/2) {
							player.x = wall.w + wall.x;
							player.speed.x = 0;
						}						
					};
				};
			};
		});
		OOP.drawArr(walls_blue, function(wall) {
			if(wall.isInCameraStatic()) {
				//wall.drawStaticBox();
				if(wall.isStaticIntersect(player)) {
					if(player.x + player.w > wall.x + wall.w/4 && player.x < wall.x + wall.w - wall.w/4) {
						if(player.speed.y > 0 && player.y + player.h < wall.y + wall.h/2) {
							if(key.isDown('UP') || key.isDown('W') || m.isDown('LEFT') || key.isDown('SPACE')) {
								if(double_jump == false) {
									player.speed.y = -12;
								} else {
									player.speed.y = -24;
								}
							} else {
								player.y = wall.y - player.h;
								player.speed.y *= -0.2;
								if(player.speed.y > -0.3)
									player.speed.y = 0;
							}
						} else if(player.speed.y < 0 && player.y > wall.y + wall.h/2) {
							player.y = wall.y + wall.h;
							player.speed.y *= -0.1;
						};
					};

					if(player.y + player.h > wall.y + wall.h/4 && player.y < wall.y + wall.h - wall.h/4) {
						if(player.speed.x > 0 && player.x < wall.x + wall.w/2) {
							player.x = player.x;
							player.speed.x = 0;
						}

						if(player.speed.x < 0 && player.x > wall.x + wall.w/2) {
							player.x = wall.w + wall.x;
							player.speed.x = 0;
						}						
					};
				};
			};
		});

		OOP.drawArr(board, function(board) {
			if(board.isInCameraStatic()) {
				if(board.isStaticIntersect(player)) {
					player.x = 3800;
					player.y = -100;
				}
			};
		});

		if(player.speed.y) {
			player.y += player.speed.y;
		};

		if(player.speed.x) {
			player.x += player.speed.x;
		};

		if(key.isDown('J')) {
			if(key.isDown('K')) {
				debug_mod = true;
			};
		};
		if(key.isDown('U')) {
			if(key.isDown('I')) {
				debug_mod = false;
			};
		};
		if(key.isDown('1')) {
			if(debug_mod == true) {
				double_jump = true;
			};
		};
		if(key.isDown('2')) {
			if(debug_mod == true) {
				double_jump = false;
			};
		};
		if(key.isDown('3')) {
			if(debug_mod == true) {
				player_freeze = true;
			};
		};
		if(key.isDown('4')) {
			if(debug_mod == true) {
				player_freeze = false;
			};
		};

		camera.follow(player, 50);

		var debug_mod_text;
		if(debug_mod == true) {
			debug_mod_text = 'включен';
		} else {
			debug_mod_text = 'выключен';
		};
		var debugText = game.newTextObject({
			text: 'Режим разработчика - ' + debug_mod_text,
			size: 24,
			color: 'black'
		});
		posx = player.x;
		posy = player.y;
		var posText = game.newTextObject({
			text: 'X: ' + posx + ' | Y: ' + posy,
			size: 24,
			color: 'black'
		});
		var double_jump_text;
		if(double_jump == true) {
			double_jump_text = 'включен';
		} else {
			double_jump_text = 'выключен';
		};		
		var double_jumpText = game.newTextObject({
			text: 'Двойной прыжок: ' + double_jump_text,
			size: 24,
			color: 'black'
		});		
		var player_freeze_text;
		if(player_freeze == true) {
			player_freeze_text = 'заморожен';
		} else {
			player_freeze_text = 'может двигаться';
		};		
		var player_freezeText = game.newTextObject({
			text: 'Игрок: ' + player_freeze_text,
			size: 24,
			color: 'black'
		});	
		var player_angleText = game.newTextObject({
			text: 'Угол разворота: ' + player.angle,
			size: 24,
			color: 'black'
		});	
		var player_classText = game.newTextObject({
			text: 'Персонаж: panda',
			size: 24,
			color: 'black'
		});	

		debugText.setPositionS(p(10,  10));
		debugText.draw();
		if(debug_mod == true) {
			posText.setPositionS(p(10,  34));
			posText.draw();

			double_jumpText.setPositionS(p(10,  58));
			double_jumpText.draw();

			player_freezeText.setPositionS(p(10,  82));
			player_freezeText.draw();	

			player_angleText.setPositionS(p(10,  104));
			player_angleText.draw();

			player_classText.setPositionS(p(10,  128));
			player_classText.draw();									
		};		
	};
	this.entry = function() {

	};
};

game.newLoopFromClassObject('menu', new Menu());
game.newLoopFromClassObject('glvl1', new Game_level_1());
game.startLoop('glvl1');
