var width = 1000, height = 750;
var js = new PointJS('2d', width, height, {
	backgroundColor: '#000000'
});
js.system.initFullScale();

var game = js.game;
var m = js.mouseControl.initMouseControl();
var key = js.keyControl.initKeyControl();
var point = js.vector.point;
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

//BG: #1f0836

var bg = game.newImageObject({
	file: 'img/bg.jpg',
	w: 1000, h: 750,
	x: 0, y: 0
});

var stars = [];
OOP.forInt(1000, function () {
  var size = math.random(1, 2);
  stars.push(game.newRectObject({
    x: math.random(0, game.getWH().w)+0.0001,
    y: math.random(0, game.getWH().h)+0.0001,
    w: size, h: size,
    fillColor: js.colors.randomColor(200, 255),
    userData : {
      dx: math.random(-20, -2),
      dy: math.random(-2, 2) / 2
    }
  }));
});
var camX = 0;

var enemy = [], oldEnemy = false;		
var addEnemy = function() {
	var dX = oldEnemy ? oldEnemy.enemy1.x + 1000 : width;

	var e = game.newImageObject({
		file: 'img/enemy_ship.png',
		x: dX, y: rand(50, 700),
		w: 108, h: 70,
		userData : {
			life: 1
		}
	});

	var obj = {
		'enemy1' : e
	}

	oldEnemy = obj;
	enemy.push(obj);
};
var drawEnemy = function () {
	OOP.forArr(enemy, function(el) {
		el.enemy1.draw();
		el.enemy1.move(point(-5.5, 0));

		if(el.enemy1.x + el.enemy1.y < 0) {
			el.enemy1.x = oldEnemy.enemy1.x + oldEnemy.enemy1.w + 1000;
			oldEnemy = el;
		};

		if(el.enemy1.isInCamera()) {
			if(el.enemy1.isIntersect(player_1)) {
				game.stop();												
			};
		};

		if(el.enemy1.isInCamera()) {
			if(el.enemy1.isIntersect(buls)) {
				game.stop();									
			};
		};
	});
};

var player_1 = game.newImageObject({
	file: 'img/ship_1.png',
	w: 122, h: 102,
	positionC: point(100, 375)
});

var buls = [], oldBul = false;
var addBul = function() {
	var dX = oldEnemy ? oldEnemy.enemy1.x + 1000 : width;

	var bul = game.newRectObject({
		x: player_1.getPositionC().x, y: player_1.getPositionC().y,
		w: 10, h: 3,
		fillColor: 'red',
		userData : {
			life : 1
		},
		angle: player_1.getAngle()
	});

	var obj = {
		'b' : bul
	}

	oldBul = bul;
	buls.push(obj);
};