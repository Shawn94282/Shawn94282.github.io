var playRect = game.newImageObject({
	file: 'img/text-buttons/play.png',
	w: 489, h: 78,
	x: 255, y: 250
});

var shopRect = game.newImageObject({
	file: 'img/text-buttons/shop.png',
	w: 489, h: 78,
	x: 255, y: 365
});

var helpRect = game.newImageObject({
	file: 'img/text-buttons/help.png',
	w: 489, h: 78,
	x: 255, y: 480
});

var topRect = game.newImageObject({
	file: 'img/text-buttons/top.png',
	w: 489, h: 78,
	x: 255, y: 595
});

var playRect1 = game.newRoundRectObject({
	fillColor: '#3d4f65',
	radius: 15,
	strokeColor: 'white',
	strokeWidth: 5,
	w: 489, h: 78,
	x: 255, y: 245
});

var shopRect1 = game.newRoundRectObject({
	fillColor: '#3d4f65',
	radius: 15,
	strokeColor: 'white',
	strokeWidth: 5,
	w: 489, h: 78,
	x: 255, y: 360
});

var helpRect1 = game.newRoundRectObject({
	fillColor: '#3d4f65',
	radius: 15,
	strokeColor: 'white',
	strokeWidth: 5,
	w: 489, h: 78,
	x: 255, y: 475
});

var topRect1 = game.newRoundRectObject({
	fillColor: '#3d4f65',
	radius: 15,
	strokeColor: 'white',
	strokeWidth: 5,
	w: 489, h: 78,
	x: 255, y: 590
});

var Menu = function () {
	this.update = function () {
		game.clear();

		bg.draw();
		logo.draw();

		playRect1.draw();
		shopRect1.draw();
		helpRect1.draw();
		topRect1.draw();
		playRect.draw();
		shopRect.draw();
		helpRect.draw();
		topRect.draw();

		if(m.isInObject(playRect1)) {
			playRect1.fillColor = 'white';
		} else {
			playRect1.fillColor = '#3d4f65';
		}
		if(m.isInObject(shopRect1)) {
			shopRect1.fillColor = 'white';
		} else {
			shopRect1.fillColor = '#3d4f65';
		}
		if(m.isInObject(helpRect1)) {
			helpRect1.fillColor = 'white';
		} else {
			helpRect1.fillColor = '#3d4f65';
		}
		if(m.isInObject(topRect1)) {
			topRect1.fillColor = 'white';
		} else {
			topRect1.fillColor = '#3d4f65';
		}

		if(m.isPeekObject('LEFT', playRect)) {
			game.setLoop('game_settings');
		}

	};
	this.entry = function () {
		
	};
};

//==============================[СТОЛБЕЦ 1]======================================================

var q_1 = game.newImageObject({
	file: 'img/text-buttons/q_1.png',
	w: 737, h: 78,
	x: 100, y: 250,
	scale: 0.5
});

var q_2 = game.newImageObject({
	file: 'img/text-buttons/q_2.png',
	w: 737, h: 78,
	x: 100, y: 300,
	scale: 0.5,
	alpha: 0.2
});

var q_3 = game.newImageObject({
	file: 'img/text-buttons/q_3.png',
	w: 737, h: 78,
	x: 100, y: 350,
	scale: 0.5,
	alpha: 0.2
});

var q_4 = game.newImageObject({
	file: 'img/text-buttons/q_4.png',
	w: 737, h: 78,
	x: 100, y: 400,
	scale: 0.5,
	alpha: 0.2
});

var q_5 = game.newImageObject({
	file: 'img/text-buttons/q_5.png',
	w: 737, h: 78,
	x: 100, y: 450,
	scale: 0.5,
	alpha: 0.2
});

//==============================[СТОЛБЕЦ 2]======================================================

var q_6 = game.newImageObject({
	file: 'img/text-buttons/q_6.png',
	w: 737, h: 78,
	x: 504, y: 250,
	scale: 0.5,
	alpha: 0.2
});

var q_7 = game.newImageObject({
	file: 'img/text-buttons/q_7.png',
	w: 737, h: 78,
	x: 504, y: 300,
	scale: 0.5,
	alpha: 0.2
});

var q_8 = game.newImageObject({
	file: 'img/text-buttons/q_8.png',
	w: 737, h: 78,
	x: 504, y: 350,
	scale: 0.5,
	alpha: 0.2
});

var q_9 = game.newImageObject({
	file: 'img/text-buttons/q_9.png',
	w: 737, h: 78,
	x: 504, y: 400,
	scale: 0.5,
	alpha: 0.2
});

var q_10 = game.newImageObject({
	file: 'img/text-buttons/q_10.png',
	w: 737, h: 78,
	x: 504, y: 450,
	scale: 0.5,
	alpha: 0.2
});

var Game_settings = function () {
	this.update = function () {
		game.clear();

		//==============================[ОТРИСОВКА]======================================================

		bg.draw();
		logo.draw();

		q_1.draw();
		q_2.draw();
		q_3.draw();
		q_4.draw();
		q_5.draw();	

		q_6.draw();
		q_7.draw();
		q_8.draw();
		q_9.draw();
		q_10.draw();

		//======================================[CLICK]===================================================	

		if(m.isPeekObject('LEFT', q_1))
			game.setLoop('game_q_1');				
	};
	this.entry = function () {
		
	};
};

game.newLoopFromClassObject('menu', new Menu());
game.newLoopFromClassObject('game_settings', new Game_settings());
game.newLoopFromClassObject('game_q_1', new Game_q_1());

game.startLoop('menu');