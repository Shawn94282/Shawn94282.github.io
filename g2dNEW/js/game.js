/*var cursorLaser = function() {
	document.body.style.cursor = "url('img/laserRed08.png'), auto";
}

var cursorDefaul = function() {
	document.body.style.cursor = "url('img/cursor.png'), auto";
}*/

var width = 1000, height = 750;
var js = new PointJS('2d', width, height, {
	backgroundColor: '#6EC4ED'
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

var money = 151512354;

//========================================[ROAD]=============================================
var drawRoad = function() {
	var road1 = game.newImageObject({
		file: 'img/town/road.jpg',
		w: 250, h: 250,
		x: 150, y: 0
	});
	var road2 = game.newImageObject({
		file: 'img/town/road.jpg',
		w: 250, h: 250,
		x: 150, y: 250
	});
	var road3 = game.newImageObject({
		file: 'img/town/road.jpg',
		w: 250, h: 250,
		x: 150, y: 500
	});
	var road4 = game.newImageObject({
		file: 'img/town/road.jpg',
		w: 250, h: 250,
		x: 366.5, y: 500,
		angle: 90
	});

	road1.draw();
	road2.draw();
	road3.draw();
	road4.draw();
};
//===========================================================================================
//
// Красный - #D30321 
// Зеленый - #59eda7
// Желтый - #f5d95e
// Голубой - #6EC4ED
// Серый - #4A4A4A
//
//====================================[HUD]==================================================
var speedF;

var drawHud = function() {

	var moneyText = game.newTextObject({
		text:  money + '$',
		color: '#59eda7',
		font: 'font1',
		strokeColorText: '#000000',
		strokeWidthText: 1,
		size: 30,
		alpha: 0.9
	});

	var arboxZ = game.newRectObject({
		w: 100, h: 15,
		fillColor: '#FFFFFF',
		alpha: 0.5
	});

	var arbox = game.newRectObject({
		w: man.armour, h: 15,
		fillColor: '#FFFFFF'
	});

	var artext = game.newTextObject({
		text:  man.armour,
		color: '#FFFFFF',
		font: 'font1',
		strokeColorText: '#000000',
		strokeWidthText: 1,
		size: 15,
	});

	var hpboxZ = game.newRectObject({
		w: 100, h: 15,
		fillColor: '#D30321',
		alpha: 0.5
	});

	var hpbox = game.newRectObject({
		w: man.hp, h: 15,
		fillColor: '#D30321'
	});

	var hptext = game.newTextObject({
		text:  man.hp,
		color: '#FFFFFF',
		font: 'font1',
		strokeColorText: '#000000',
		strokeWidthText: 1,
		size: 15,
	});

	moneyText.setPositionCS(p(width - 80,  20));
	moneyText.draw();

	arboxZ.setPositionS(p(width - 115,  45));
	arboxZ.draw();
	hpboxZ.setPositionS(p(width - 115,  65));
	hpboxZ.draw();

	arbox.setPositionS(p(width - 115,  45));
	arbox.draw();
	hpbox.setPositionS(p(width - 115,  65));
	hpbox.draw();

	artext.setPositionCS(p(width - 65,  47));
	artext.draw();
	hptext.setPositionCS(p(width - 65,  67));
	hptext.draw();

	if(inCar) {
		if(speedW < 0.5 || speedS < 0.5) 
			speedF = 0;

		if(speedW > 0.5 || speedS > 0.5) 
			speedF = 1;

		if(speedW > 1 || speedS > 1) 
			speedF = 2;

		if(speedW > 2 || speedS > 2) 
			speedF = 3;

		if(speedW > 3 || speedS > 3) 
			speedF = 4;

		if(speedW > 4 || speedS > 4) 
			speedF = 5;

		if(speedW > 5 || speedS > 5) 
			speedF = 6;

		if(speedW > 6 || speedS > 6) 
			speedF = 7;

		if(speedW > 7 || speedS > 7) 
			speedF = 8;

		if(speedW > 8 || speedS > 8) 
			speedF = 9;

		if(speedW > 9 || speedS > 9) 
			speedF = 10;

		if(speedW > 10 || speedS > 10) 
			speedF = 11;

		if(speedW > 11 || speedS > 11) 
			speedF = 12;

		if(speedW > 12 || speedS > 12) 
			speedF = 13;

		if(speedW > 13 || speedS > 13) 
			speedF = 14;

		if(speedW > 14 || speedS > 14) 
			speedF = 15;

		if(speedW > 15 || speedS > 15) 
			speedF = 16;

		if(speedW > 16 || speedS > 16) 
			speedF = 17;

		if(speedW > 17 || speedS > 17) 
			speedF = 18;

		if(speedW > 18 || speedS > 18) 
			speedF = 19;

		if(speedW > 19 || speedS > 19) 
			speedF = 20;


		var rectSp1 = game.newRectObject({
			w: 170, h: 33,
			fillColor: '#000000',
			alpha: 0.3
		});

		var rectSp2 = game.newRectObject({
			w: 170, h: 33,
			fillColor: '#000000',
			alpha: 0.3
		});	

		var rectSp3 = game.newRectObject({
			w: 160, h: 23,
			fillColor: '#f5d95e'
		});	

		var speedT = game.newTextObject({
			text:  speedF + ' KM/H',
			color: '#FFFFFF',
			font: 'font1',
			strokeColorText: '#000000',
			strokeWidthText: 1,
			size: 30			
		});

		var nameA = game.newTextObject({
			text:  'taxi',
			color: '#FFFFFF',
			strokeColorText: '#000000',
			strokeWidthText: 1,
			font: 'font1',
			size: 20			
		});




		rectSp1.setPositionCS(p(width/2,  height-70));
		rectSp1.draw();		

		rectSp2.setPositionCS(p(width/2,  height-30));
		rectSp2.draw();	

		rectSp3.setPositionCS(p(width/2,  height-30));
		rectSp3.draw();	

		speedT.setPositionCS(p(width/2,  height-80));
		speedT.draw();	

		nameA.setPositionCS(p(width/2,  height-37));
		nameA.draw();

	};
};
//===========================================================================================

var t = game.newBackgroundObject({
	file: 'img/bg.jpg',
	w: 100, h: 100,
	countY: 100,
	countX: 100
});

var man = game.newImageObject({
	file: 'img/people/man.png',
	w: 44.5, h: 63.5,
	x: 10, y: 10,
	scale: 0.7,
	userData : {
		hp: 100,
		armour: 10
	}
});

var car_taxi1 = game.newImageObject({
	file: 'img/cars/taxi1.png',
	x: 10, y: 100,
	h: 69, w: 142,
	scale: 1.3,
	userData : {
		MAXspeedW: 7.9,
		MAXspeedS: 3.9,
		MAXturn: 5
	}
});

var inCar = false;
var speedW = 0;
var speedS = 0;
var turn = 0;
var startTurn = false;
var startEngine = false;
var last;

var Game = function() {
	this.update = function() {
		game.clear();
		t.draw();
		drawRoad();
		drawHelp();
		drawHud();
		var manPos = man.getPosition(0);
	
		//==========================[CAR]======================================
		car_taxi1.draw();
		car_taxi1.setBox({
			offset : p(3, 10), 
			size : size(-10, -20) 
		});
		//car_taxi1.drawDynamicBox('black');
		//=========================[MAN]=======================================
		//man.drawDynamicBox();
		man.setBox({
			offset : p(10, 10), 
			size : size(-20, -22) 
		});
		//=====================================================================
		var distCAR = man.getDistanceC(car_taxi1.getPosition(1));

		if(!inCar) {
			if(distCAR < 70) {
				if(key.isPress('F')) {
					inCar = true;
					startEngine = false;
					startTurn = false;
				};
			};

			camera.moveTimeC(manPos, 50);
			man.rotate(m.getPosition());
			man.draw();
			if(key.isDown('W')) {
				man.moveAngle(4);			
				if(man.isDynamicIntersect(car_taxi1.getDynamicBox())) {
					col = manPos;
					man.setPosition(col);
				};
			};
		} else {
			man.setPositionC(car_taxi1.getPosition());
			camera.moveTimeC(car_taxi1.getPosition(1), 10);
			if(key.isDown('W')) {
				last = false;
				if(speedW < car_taxi1.MAXspeedW) 
					startEngine = false;

				if(speedW > car_taxi1.MAXspeedW) 
					startEngine = true;

				if(!startEngine) {
					speedW = speedW + 0.1;
				};

				car_taxi1.moveAngle(speedW);
					
				if(key.isDown('A')) {
					if(turn < car_taxi1.MAXturn)
						startTurn = false;

					if(turn > car_taxi1.MAXturn)
						startTurn = true;

					if(!startTurn) {
						turn = turn + 0.1;
					};

					car_taxi1.turn(-turn);
				};
				if(key.isDown('D')) {
					if(turn < car_taxi1.MAXturn)
						startTurn = false;

					if(turn > car_taxi1.MAXturn)
						startTurn = true;

					if(!startTurn) {
						turn = turn + 0.1;
					};

					car_taxi1.turn(turn);
				};
			};
			if(key.isDown('S')) {
				last = true;
				if(speedS < car_taxi1.MAXspeedS) 
					startEngine = false;

				if(speedS > car_taxi1.MAXspeedS) 
					startEngine = true;


				if(!startEngine) {
					speedS = speedS + 0.1;
				};

				car_taxi1.moveAngle(-speedS);
				
				if(key.isDown('A')) {
					if(turn < car_taxi1.MAXturn)
						startTurn = false;

					if(turn > car_taxi1.MAXturn)
						startTurn = true;

					if(!startTurn) {
						turn = turn + 0.05;
					};

					car_taxi1.turn(turn);
				};
				if(key.isDown('D')) {
					if(turn < car_taxi1.MAXturn)
						startTurn = false;

					if(turn > car_taxi1.MAXturn)
						startTurn = true;

					if(!startTurn) {
						turn = turn + 0.05;
					};

					car_taxi1.turn(-turn);
				};
			};

			if(key.isDown('SPACE')) {
				if(speedW > 0.5)
					speedW = speedW - 0.5;

				if(speedS > 0.5)
					speedS = speedS - 0.5;
			}

			if(key.isPress('F')) {
				inCar = false;
				startEngine = false;
				startTurn = false;
			};

			if(!key.isDown('A') && !key.isDown('D')) {
				turn = 0;
			};

			if(!key.isDown('W') && !key.isDown('S')) {
				if(last == false) {
					if(speedW > 0.5) {
						speedW = speedW - 0.2;				
						car_taxi1.moveAngle(speedW);
					};
				};
				if(last == true) {
					if(speedS > 0.5) {
						speedS = speedS - 0.2;				
						car_taxi1.moveAngle(-speedS);
					};
				};
			};
		};
	};
};

//==========================================[HELPS]==========================================
var drawHelp = function() {
	var distCAR = man.getDistanceC(car_taxi1.getPosition(1));

	var blockF = game.newRectObject({
		w: 200, h: 55,
		fillColor: '#000000',
		alpha: 0.7
	});

	var helpF1 = game.newTextObject({
		text:  'Нажмите F что бы',
		color: '#FFFFFF',
		font: 'Arial',
		style: 'bold',
		size: 20,
		alpha: 0.9		
	});

	var helpF2 = game.newTextObject({
		text:  'сесть в авто',
		color: '#FFFFFF',
		font: 'Arial',
		style: 'bold',
		size: 20,
		alpha: 0.9		
	});

	/*var infoI = game.newImageObject({
		w: 16, h: 16,
		file: 'img/info.png'
	});

	var infoB = game.newCircleObject({
		radius: 13,
		fillColor: '#FFFFFF'
	});*/

	if(distCAR < 70) {
		blockF.setPositionS(p(20,  (height/2)-20));
		blockF.draw();

		helpF1.setPositionS(p(25,  (height/2)-15));
		helpF1.draw();
		helpF2.setPositionS(p(25,  (height/2)+5));
		helpF2.draw();	

		//infoB.setPositionS(p(0,  0));
		//infoB.draw();						
		//infoI.setPositionS(p(5,  5));
		//infoI.draw();
	};
};

//===========================================================================================
//
// Красный - #D30321 
// Зеленый - #59eda7
// Желтый - #f5d95e
// Голубой - #6EC4ED
// Серый - #4A4A4A
//

game.newLoopFromClassObject('game', new Game());
game.startLoop('game');
