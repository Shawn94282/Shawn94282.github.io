var cursorLaser = function() {
	document.body.style.cursor = "url('img/laserRed08.png'), auto";
}

var cursorDefaul = function() {
	document.body.style.cursor = "url('img/cursor.png'), auto";
}

var width = 1000, height = 750;
var js = new PointJS('2d', width, height, {
	backgroundColor: '#ABABAB'
});
js.system.initFullScale();

var game = js.game;
var m = js.mouseControl.initMouseControl();
//var key = js.keyControl.initKeyControl();
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

var bg = game.newImageObject({
	file: 'img/bg.jpg',
	w: width, h: height,
	x: 0, y: 0
});

var logo = game.newImageObject({
	file: 'img/logo.png',
	positionC: p(width/2, 80),
	w: 198, h: 131
});

var zad_bl = game.newRectObject({
	positionC: p(width/2, height/2),
	w: 500, h: 50,
	fillColor: '#236da0',
	alpha: 0.4
});

var zag_bl = game.newRectObject({
	x: 250, y: 350,
	w: 10, h: 50,
	fillColor: '#236da0'
});

var loadingT = game.newTextObject({
	text: 'Loading',
	positionC: p(width/2, height/2-50),
	size: 30,
	font: 'font1',
	color: 'white'
});

var copyright = game.newTextObject({
	text: '2016 - 2017 © Дмитрий Вансович',
	positionC: p(width/2-165, height/2+350),
	size: 30,
	font: 'Arial',
	style: 'bold',
	color: 'white'
});

var Loading = function() {
	this.update = function() {
		cursorDefaul();

		bg.draw();
		logo.draw();
		copyright.draw();
		zad_bl.draw();
		zag_bl.draw();
		loadingT.draw();

		if(zag_bl.w < 500)
			zag_bl.w = zag_bl.w + rand(1,5);
		if(zag_bl.w > 499)
			game.setLoop('menu');
	};
};

var zatemn = game.newRectObject({
	x: 0, y: 0,
	w: width, h: height,
	fillColor: '#236da0',
	alpha: 0.8
});

var play = game.newImageObject({
	file: 'img/play.png',
	x: 430, y: 175
});

var shop = game.newImageObject({
	file: 'img/shop.png',
	x: 340, y: 320
});

var news = game.newImageObject({
	file: 'img/news.png',
	x: 515, y: 320
});

var faq = game.newImageObject({
	file: 'img/faq.png',
	x: 460, y: 455
});

var Menu = function() {
	this.update = function() {
		cursorDefaul();

		bg.draw();
		zatemn.draw();
		logo.draw();
		copyright.draw();

		play.draw();
		shop.draw();
		news.draw();
		faq.draw();

		if(m.isPeekObject('LEFT', play))
			game.setLoop('game');
	};
};

var n=100, x, y, fon=[];
for(x=0; x<15; x++) {
	for(y=0; y<15; y++) {
		fon.push(
			game.newImageObject({
				file: 'img/bg_purple.png',
				x: x*n, y: y*n,
				w: 256, h: 256
			})
		);
	};
};

var pl = game.newImageObject({
	file: 'img/playerShip1_orange.png',
	x: rand(0, 1500), y: rand(0, 1500),
	w: 75, h: 99
});

var meteor1=[];
for(m1=0; m1<3; m1++) {
	meteor1.push(
		game.newImageObject({
			file: 'img/Meteors/meteorGrey_big1.png',
			x: rand(0, 1500), y: rand(0, 1500),
			w: 101, h: 84 
		})
	);
}

var meteor2=[];
for(m2=0; m2<3; m2++) {
	meteor2.push(
		game.newImageObject({
			file: 'img/Meteors/meteorBrown_big1.png',
			x: rand(0, 1500), y: rand(0, 1500),
			w: 101, h: 84 
		})
	);
}

var meteor3=[];
for(m3=0; m3<5; m3++) {
	meteor1.push(
		game.newImageObject({
			file: 'img/Meteors/meteorGrey_small1.png',
			x: rand(0, 1500), y: rand(0, 1500),
			w: 28, h: 28 
		})
	);
}

var meteor4=[];
for(m4=0; m4<5; m4++) {
	meteor2.push(
		game.newImageObject({
			file: 'img/Meteors/meteorBrown_med1.png',
			x: rand(0, 1500), y: rand(0, 1500),
			w: 43, h: 43 
		})
	);
}

var enemles=[], i, count = 1;
for(i=0; i<count; i++) {
	enemles.push(
		game.newImageObject({
			file: 'img/Enemies/enemyBlack1.png',
			x: rand(0, 1500), y: rand(0, 1500),
			w: 93, h: 84,
			userData : {
				hp: 0
			} 
		})
	);
}
var enemles1=[], i, count = 1;
for(i=0; i<count; i++) {
	enemles1.push(
		game.newImageObject({
			file: 'img/Enemies/enemyBlue1.png',
			x: rand(0, 1500), y: rand(0, 1500),
			w: 93, h: 84,
			userData : {
				hp: 0
			} 
		})
	);
}
var enemles2=[], i, count = 1;
for(i=0; i<count; i++) {
	enemles2.push(
		game.newImageObject({
			file: 'img/Enemies/enemyGreen1.png',
			x: rand(0, 1500), y: rand(0, 1500),
			w: 93, h: 84,
			userData : {
				hp: 0
			} 
		})
	);
}
var enemles3=[], i, count = 1;
for(i=0; i<count; i++) {
	enemles3.push(
		game.newImageObject({
			file: 'img/Enemies/enemyRed1.png',
			x: rand(0, 1500), y: rand(0, 1500),
			w: 93, h: 84,
			userData : {
				hp: 0
			} 
		})
	);
}

var hpup=[], i, count = 3;
for(i=0; i<count; i++) {
	hpup.push(
		game.newImageObject({
			file: 'img/pill_green.png',
			x: rand(0, 1500), y: rand(0, 1500),
			w: 22, h: 21,
			userData : {
				hp: 0
			} 
		})
	);
}

var map = game.newRectObject({
	w: 200, h: 200,
	fillColor: 'balck',
	alpha: 0.4
});

var cell = game.newCircleObject({
	radius: 2,
	fillColor: 'white'
});

var score = 0;
var scoreT = game.newTextObject({
	text: '' + score,
	font: 'font1',
	size: 35,
	color: 'white'
});

var lifes = 3;
var lifesImg = game.newImageObject({
	file: 'img/playerLife1_orange.png',
	x: 20, y: 20,
	w: 33, h: 26
});
var x = game.newImageObject({
	file: 'img/numeralX.png',
	x: 60, y: 20,
	w: 17, h: 17
});
var l0 = game.newImageObject({
	file: 'img/numeral0.png',
	x: 60, y: 20,
	w: 20, h: 20
});
var l1 = game.newImageObject({
	file: 'img/numeral1.png',
	x: 60, y: 20,
	w: 20, h: 20
});
var l2 = game.newImageObject({
	file: 'img/numeral2.png',
	x: 60, y: 20,
	w: 20, h: 20
});
var l3 = game.newImageObject({
	file: 'img/numeral3.png',
	x: 60, y: 20,
	w: 20, h: 20
});

var buls = [];
var kills = 0;

var endScore = 0
var endKills = 0

var Game = function () {
	this.update = function () {
		game.clear();
		cursorLaser();
		var mPos = m.getPosition();
		var plPos = pl.getPositionC();

		for(var i in fon) {
			if(fon[i].isInCamera())
				fon[i].draw();
		};

		for(var m1 in meteor1) {
			if(meteor1[m1].isInCamera())
				meteor1[m1].draw();
				if(pl.isIntersect(meteor1[m1])) {
					lifes--;
					meteor1[m1].moveTimeC(1000000000, 1);
				}
		};

		for(var m2 in meteor2) {
			if(meteor2[m2].isInCamera())
				meteor2[m2].draw();
				if(pl.isIntersect(meteor2[m2])) {
					lifes--;
					meteor2[m2].moveTimeC(1000000000, 1);
				}
		};				

		for(var m3 in meteor3) {
			if(meteor3[m3].isInCamera())
				meteor3[m3].draw();
				if(pl.isIntersect(meteor3[m3])) {
					lifes--;
					meteor3[m3].moveTimeC(1000000000, 1);
				}
		};

		for(var m4 in meteor4) {
			if(meteor4[m4].isInCamera())
				meteor4[m4].draw();
				if(pl.isIntersect(meteor4[m4])) {
					lifes--;
					meteor4[m4].moveTimeC(1000000000, 1);				
				}
		};

		for(i in enemles) {
			if(enemles[i].isInCamera()) {
				enemles[i].draw();
				enemles[i].rotate(plPos);
				enemles[i].moveTimeC(plPos, 60);
				if(pl.isIntersect(enemles[i])) {
					lifes--;
					enemles[i].moveTimeC(1000000000, 1);				
				}
			}
		};
		for(i in enemles1) {
			if(enemles1[i].isInCamera()) {
				enemles1[i].draw();
				enemles1[i].rotate(plPos);
				enemles1[i].moveTimeC(plPos, 60);
				if(pl.isIntersect(enemles1[i])) {
					lifes--;
					enemles1[i].moveTimeC(1000000000, 1);				
				}
			}
		};
		for(i in enemles2) {
			if(enemles2[i].isInCamera()) {
				enemles2[i].draw();
				enemles2[i].rotate(plPos);
				enemles2[i].moveTimeC(plPos, 60);
				if(pl.isIntersect(enemles2[i])) {
					lifes--;
					enemles2[i].moveTimeC(1000000000, 1);				
				}
			}
		};
		for(i in enemles3) {
			if(enemles3[i].isInCamera()) {
				enemles3[i].draw();
				enemles3[i].rotate(plPos);
				enemles3[i].moveTimeC(plPos, 60);
				if(pl.isIntersect(enemles3[i])) {
					lifes--;
					enemles3[i].moveTimeC(1000000000, 1);				
				}
			}
		};			

		for(i in hpup) {
			if(hpup[i].isInCamera()) {
				hpup[i].draw();
				if(lifes < 3) {
					if(pl.isIntersect(hpup[i])) {
						lifes++;
						hpup[i].moveTimeC(1000000000, 1);				
					}
				}
			}
		};

		OOP.forArr(buls, function(el) {
			if(el.life) {
				el.draw();
				el.moveAngle(30);
			}
			if(el.x < 0) {
				el.life = 0;
			}
			if(el.y < 0) {
				el.life = 0;
			}
			if(el.x > 1600) {
				el.life = 0;
			}
			if(el.y > 1610) {
				el.life = 0;
			}
			for(i in enemles) {
				if(enemles[i].isInCamera()) {
					if(el.isIntersect(enemles[i])) {
						el.life = 0;
						enemles[i].moveTimeC(1000000000, 1);
						score = score + 10;
						kills = kills + 1;
						endKills = kills;
						endScore = score;
					}
				}
			};
			for(i in enemles1) {
				if(enemles1[i].isInCamera()) {
					if(el.isIntersect(enemles1[i])) {
						el.life = 0;
						enemles1[i].moveTimeC(1000000000, 1);
						score = score + 10;
						kills = kills + 1;
						endKills = kills;
						endScore = score;
					}
				}
			};
			for(i in enemles2) {
				if(enemles2[i].isInCamera()) {
					if(el.isIntersect(enemles2[i])) {
						el.life = 0;
						enemles2[i].moveTimeC(1000000000, 1);
						score = score + 10;
						kills = kills + 1;
						endKills = kills;
						endScore = score;
					}
				}
			};
			for(i in enemles3) {
				if(enemles3[i].isInCamera()) {
					if(el.isIntersect(enemles3[i])) {
						el.life = 0;
						enemles3[i].moveTimeC(1000000000, 1);
						score = score + 10;
						kills = kills + 1;
						endKills = kills;
						endScore = score;
					}
				}
			};
			for(var m1 in meteor1) {
				if(meteor1[m1].isInCamera()) {
					if(el.isIntersect(meteor1[m1])) {
						el.life = 0;
					}
				}
			};
			for(var m2 in meteor2) {
				if(meteor2[m2].isInCamera()) {
					if(el.isIntersect(meteor2[m2])) {
						el.life = 0;
					}
				}
			};
			for(var m3 in meteor3) {
				if(meteor3[m3].isInCamera()) {
					if(el.isIntersect(meteor3[m3])) {
						el.life = 0;
					}
				}
			};
			for(var m4 in meteor4) {
				if(meteor4[m4].isInCamera()) {
					if(el.isIntersect(meteor4[m4])) {
						el.life = 0;
					}
				}
			};
		});

		if(m.isPress('LEFT')) {
			var bul = game.newImageObject({
				file: 'img/laserBlue01.png',
				w: 54, h: 9,
				userData: {
					life : 1
				},
				angle: pl.getAngle()
			});
			bul.setPositionC(plPos);
			buls.push(bul);
		}

		pl.draw();
		pl.rotate(mPos);
		pl.moveTimeC(m.getPosition(), 60);
		camera.setPositionC(pl.getPosition(1));

		map.setPositionS(p(width - 210,  height - 210));
		map.draw();

		cell.setPositionS(p(width - 210,  height - 210));
		cell.move(p(pl.getPosition(1).x/8.5, pl.getPosition(1).y/8.5));
		cell.draw();

		scoreT.setPositionS(p(880, 20));
		scoreT.draw();

		scoreT.reStyle({
			text: '' + score
		});


		lifesImg.setPositionS(p(20, 20));
		lifesImg.draw();
		x.setPositionS(p(55, 23));
		x.draw();
		if(lifes == 0) {
			l0.setPositionS(p(75, 21));
			l0.draw();
			game.setLoop('gameOver');
		}
		if(lifes == 1) {
			l1.setPositionS(p(75, 21));
			l1.draw();
		}
		if(lifes == 2) {
			l2.setPositionS(p(75, 21));
			l2.draw();
		}
		if(lifes == 3) {
			l3.setPositionS(p(75, 21));
			l3.draw();
		}

		if(kills == 4) {
			if(lifes == 3)
				endScore = endScore + 30;
			if(lifes == 2)
				endScore = endScore + 20;
			if(lifes == 1)
				endScore= endScore + 10;
			game.setLoop('gameOver');
		}

		if(pl.x < 0)
			pl.x = 0;
		if(pl.y < 0)
			pl.y = 0;
		if(pl.x > 1580)
			pl.x = 1580;
		if(pl.y > 1570)
			pl.y = 1570;

		if(lifes == 0) {
			game.setLoop('gameOver');
		}
	};
	this.entry = function () {
		lifes = 3;
		score = 0;
		kills = 0;
		pl.setPositionC(p(rand(0,1500), rand(0,1500)));
	};
};

var zad_block = game.newRectObject({
	positionC: p(width/2, height/2),
	w: 500, h: 400,
	fillColor: '#236da0',
	alpha: 0.4
});

var over_bl = game.newRectObject({
	x: 250, y: 175,
	w: 500, h: 75,
	fillColor: '#236da0'
});

var gameOverT = game.newTextObject({
	text: 'GAME OVER',
	positionC: p(width/2, height/2-165),
	size: 30,
	font: 'font1',
	color: 'white'
});

var endScoreT = game.newTextObject({
	text: 'Score: ' + endScore,
	x: 270, y: 270,
	size: 30,
	font: 'font1',
	color: 'white'
});

var endDamageT = game.newTextObject({
	text: 'Damage: +0',
	x: 540, y: 270,
	size: 30,
	font: 'font1',
	color: 'white'
});

var endKillsT = game.newTextObject({
	text: 'Kills: ' + endKills,
	x: 270, y: 310,
	size: 30,
	font: 'font1',
	color: 'white'
});

var endSpeedT = game.newTextObject({
	text: 'Speed: +0',
	x: 540, y: 310,
	size: 30,
	font: 'font1',
	color: 'white'
});

var endMoneydT = game.newTextObject({
	text: 'Money: +30$',
	x: 390, y: 370,
	size: 30,
	font: 'font1',
	color: 'white'
});

var shop_bl = game.newRoundRectObject({
	positionC: p(width/2, height/2+70),
	w: 300, h: 50,
	fillColor: '#236da0',
	radius: 10
});

var shopT = game.newTextObject({
	text: 'SHOP',
	positionC: p(width/2, height/2+70),
	size: 30,
	font: 'font1',
	color: 'white'
});

var menu_bl = game.newRoundRectObject({
	positionC: p(width/2, height/2+140),
	w: 300, h: 50,
	fillColor: '#236da0',
	radius: 10
});

var menuT = game.newTextObject({
	text: 'MENU',
	positionC: p(width/2, height/2+140),
	size: 30,
	font: 'font1',
	color: 'white'
});

var GameOver = function() {
	this.update = function() {
		cursorDefaul();

		bg.draw();
		logo.draw();
		copyright.draw();

		zad_block.draw();
		over_bl.draw();
		gameOverT.draw();
		endScoreT.draw();
		endKillsT.draw();
		endDamageT.draw();
		endSpeedT.draw();
		endMoneydT.draw();

		shop_bl.draw();
		shopT.draw();
		menu_bl.draw();
		menuT.draw();

		endScoreT.reStyle({
			text: 'Score: ' + endScore
		});
		endKillsT.reStyle({
			text: 'Kills: ' + endKills
		});		

		if(m.isPeekObject('LEFT', menu_bl)) {
			game.setLoop('menu');
			location.reload();
		}
	};
};

game.newLoopFromClassObject('game', new Game());
game.newLoopFromClassObject('loading', new Loading());
game.newLoopFromClassObject('gameOver', new GameOver());
game.newLoopFromClassObject('menu', new Menu());
game.startLoop('loading');
