var pjs = new PointJS(840, 480, {
	backgroundColor : '#4b4843'
});
// pjs.system.initFullPage(); // for Full Page mode
// pjs.system.initFullScreen(); // for Full Screen mode (only Desctop)

var log    = pjs.system.log;
var game   = pjs.game;
var point  = pjs.vector.point;
var camera = pjs.camera;
var brush  = pjs.brush;
var OOP    = pjs.OOP;
var math   = pjs.math;

var key   = pjs.keyControl.initKeyControl();
var mouse = pjs.mouseControl.initMouseControl();
// var touch = pjs.touchControl.initTouchControl();
// var act   = pjs.actionControl.initActionControl();

var width  = game.getWH().w;
var height = game.getWH().h;

pjs.system.initFPSCheck();

var dialogMenu = pjs.system.newDOM('div', true);
dialogMenu.className = "dialogMenu";
var loseTable = pjs.system.newDOM('div', true);
loseTable.className = "loseTable";

var dialog = function(head,body,button1,function1){
	dialogMenu.innerHTML = `
		<div class="container">
			<div class="back-black" style="text-align:left;">
				<h1>`+head+`</h1>
			</div>
			<div class="scoll back-white" style="text-align:left;">
				<h1>`+body+`</h1>
			</div>
			<button id="dialogButton1" class="btn-green right" onclick="`+function1+`;">`+button1+`</button>
		</div>
	`;
}

game.newLoopFromConstructor('training', function(){
	var pPos;

	var world = [];
	var deadBlock = [];
	var triangleBlock = [];
	var platformBlock = [];
	var winBlocks = [];
	var moneyBlocks = [];

	var level_finished = false;

	pjs.levels.forStringArray({w: 40, h: 40, source: [
		'                                      000000000000',
		'                                                  ',
		'                                  G               ',
		'          P     T        TT              TTTTTT   ',
		'000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
		'000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
		'000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
		'000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
		'000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
		'000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
		'000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
		'000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
	]}, function(S, X, Y, W, H){
		if (S === "0"){
			world.push(game.newRectObject({
				x: X, y: Y,
				w: W, h: H,
				fillColor: '#bcbcbc'
			}));
		} else if(S === "P"){
			pPos = point(X, Y);
		} else if(S === "D"){
			deadBlock.push(game.newRectObject({
				x: X, y: Y,
				w: W, h: H,
				fillColor: 'red',
				alpha: 0.3
			}));	
		} else if(S === "T"){
			triangleBlock.push(game.newTriangleObject({
				x: X+W/4, y: Y+H/2,
				w: W/2, h: H/2,
				fillColor: '#bcbcbc'
			}));	
		} else if(S === "U"){
			triangleBlock.push(game.newTriangleObject({
				x: X+W/4, y: Y,
				w: W/2, h: H/2,
				angle: 180,
				fillColor: '#bcbcbc'
			}));	
		} else if(S === "-"){
			platformBlock.push(game.newRectObject({
				x: X, y: Y+H-H/4,
				w: W, h: H/4,
				fillColor: '#bcbcbc'
			}));	
		} else if(S === "W"){
			winBlocks.push(game.newRectObject({
				x: X, y: Y,
				w: W, h: H,
				fillColor: '#79aa58',
				alpha: 0.3
			}));	
		} else if(level_finished == false && S === "G"){
			moneyBlocks.push(game.newImageObject({
				w: W/2, h: H/2,
				x: X+(W/2)/2, y: Y+H/1.2,
				file: 'img/coin_24.png'
			}));	
		}
	});
	
	var pl = game.newRectObject({
		x: pPos.x, y: pPos.y,
		w: 30, h: 30,
		//file: 'img/player/'+pjs.math.random(1, 6)+'.jpg'
		fillColor: 'white'
	})

	var speed = point();
	var jump = false;
	var score = 0;
	var money = 0;
	var scoreText;

	var scoreMenu = pjs.system.newDOM('div', true);
	scoreMenu.className = "scoreMenu";
	var statsMenu = pjs.system.newDOM('div', true);
	statsMenu.className = "statsMenu";

	scoreMenu.innerHTML = `
		<div class="back-black"><h1><img src="img/coin_16.png" class="coin"> `+money+`<h1></div><div class="back-white"><h1>Счет: `+score+`</div>
	`;

	statsMenu.innerHTML = `
		<button class="btn-green" onclick="menu();">Меню</button>	
	`;

	var lose = function(){
		var margintop = 16;
		var marginleft = width/2 - 142/2;

		loseTable.innerHTML = `
			<div class="back-white" style="margin-top: `+margintop+`px; margin-left: `+marginleft+`px;"><h1>ВЫ ПРОИГРАЛИ</h1><hr><h1>Счет: `+score+`</h1><h1>Монеты: `+money+`</h1><div style="display:block;padding:5px;"><div class="left"><button type="submit" onclick="restart('training');" id="restart" class="btn-black">Рестарт</button></div><div class="right"><button onlick="menu();" type="submit" id="menu" class="btn-green">Меню</button></div></div></div>
		`;
	}

	var win = function(){
		var margintop = 16;
		var marginleft = width/2 - 142/2;

		loseTable.innerHTML = `
			<div class="back-black" style="margin-top: `+margintop+`px; margin-left: `+marginleft+`px;"><h1>ВЫ ВЫИГРАЛИ</h1><hr><h1>Счет: `+score+`</h1><h1>Монеты: `+money+`</h1><div style="display:block;padding:5px;"><div class="left"><button type="submit" onclick="restart('training');" id="restart" class="btn-white">Рестарт</button></div><div class="right"><button onlick="menu();" type="submit" id="menu" class="btn-green">Меню</button></div></div></div>
		`;
	}

	this.update = function () {
		game.clear();

		if (speed.x < 5) speed.y += 0.13;
		else if(speed.x > 4) speed.y += 0.13;
		if (jump == false){
			if (key.isPress('W') || key.isPress('UP') || key.isPress('SPACE') || mouse.isPress('LEFT')){
				jump = true;
				speed.y = -4;
			}
		}

		pl.draw();

		var collisionBlocks = [];
		var drawBlocks = [];

		OOP.forArr(world, function(w, idW){
			if (w.isInCameraStatic()){
				drawBlocks.push(w);
			}
		});

		OOP.forArr(drawBlocks, function(d){
			d.setAlpha(1 - pl.getDistanceC(d.getPositionC()) / 200);

			d.draw();
			speed.x = 2;

			if (pl.getDistanceC(d.getPositionC()) < 100){
				collisionBlocks.push(d);
			}

			if (pl.isStaticIntersect(d)){
				jump = false;
			}
		});

		OOP.forArr(deadBlock, function(l){
			l.setAlpha(1 - pl.getDistanceC(l.getPositionC()) / 200);
			if (l.isInCameraStatic()) l.draw();

			if (pl.isStaticIntersect(l)){
				gamestopped = true;
				dialogMenu.innerHTML = '';
				lose();
			}
		});

		OOP.forArr(winBlocks, function(w){
			w.setAlpha(1 - pl.getDistanceC(w.getPositionC()) / 200);
			if (w.isInCameraStatic()) w.draw();

			if (pl.isStaticIntersect(w)){
				gamestopped = true;
				level_finished = true;
				dialogMenu.innerHTML = '';
				win();
			}
		});

		OOP.forArr(moneyBlocks, function(m, mId){
			m.setAlpha(1 - pl.getDistanceC(m.getPositionC()) / 200);
			if (m.isInCameraStatic()) m.draw();

			if (pl.isStaticIntersect(m)){
				money++;
				moneyBlocks.splice(mId, 1);

				scoreMenu.innerHTML = `
					<div class="back-black"><h1><img src="img/coin_16.png" class="coin"> `+money+`<h1></div><div class="back-white"><h1>Счет: `+score+`</div>
				`;
			}
		});

		OOP.forArr(triangleBlock, function(t){
			t.setAlpha(1 - pl.getDistanceC(t.getPositionC()) / 200);
			if (t.isInCameraStatic()) t.draw();

			if (pl.getDistanceC(t.getPositionC()) < 100){
				collisionBlocks.push(t);
			}

			if (pl.isStaticIntersect(t)){
				gamestopped = true;
				dialogMenu.innerHTML = '';
				lose();
			}
		});

		OOP.forArr(platformBlock, function(p){
			p.setAlpha(1 - pl.getDistanceC(p.getPositionC()) / 200);
			if (p.isInCameraStatic()) p.draw();

			if (pl.getDistanceC(p.getPositionC()) < 100){
				collisionBlocks.push(p);
			}

			if (pl.isStaticIntersect(p)){
				jump = false;
			}
		});

		pjs.vector.moveCollision(pl, collisionBlocks, speed);

		camera.follow(pl, 10);

		if(gamestopped == false){
			game.resume();
			score += 1;
			scoreMenu.innerHTML = `
				<div class="back-black"><h1><img src="img/coin_16.png" class="coin"> `+money+`<h1></div><div class="back-white"><h1>Счет: `+score+`</h1></div>
			`;
		} else {
			game.stop();
		}
	};

	this.entry = function () {
		score = 0;
		pl.x = pPos.x;
		pl.y = pPos.y;
		gamestopped = true;
		speed.y = 0.13;

		dialog('Добро пожаловать!', 'Добро пожаловать в squaredash!<br><br>В этой игре Вам необходимо проходить уровни. Уровни могут быть как сложными, так и легкими. В каждом уровне Вы можете найти несколько монет, за которые Вы сможете купить скины, бусты и открывать другие уровни.', 'Далее', 'training1()');
	};

	this.exit = function () {
		// game is stopped
	};

});

game.newLoopFromConstructor('level1', function () {
	var pPos;

	var world = [];
	var deadBlock = [];
	var triangleBlock = [];
	var platformBlock = [];
	var winBlocks = [];
	var moneyBlocks = [];

	var level_finished = false;

	pjs.levels.forStringArray({w: 40, h: 40, source: [
		'                                                                                                           G   ',
		'     P                                                                                       -T  --  --  ---       ',
		'     -                                                                  --  -T  --  --    -- U0                                                                                                               WWW',
		'      -                                                              -- UU  U0  UU  UU --                                                                                                                     WWW',
		'       -    D           T      T   T   T   T        -             -- UU                UU           TT    T       TT                                 -      -                                        T        WWW',
		'    0000000000000  0000000000000000000000000000000TTTTT000     -- TTTTTTTTTTTTTTTTTTTTTTT000000000000000000000000000000000000 -  -  -  -  -  - 0000TTTTT00TTTTT0                                   --00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
		'    0000000000000  0000000UUUUUU   U   U   U   UU0000000    -- UU 00000000000000000000000000000000000000000000000000000000000 U  U  U  U  U  U 00000000000000000 --                             -- UUU0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
		'    0000000000000  0000000                       UUUUUG  -- UU    00000000000000000000000000000000000000000000000000000000000                  00000000000000000 UU --                       -- UU    0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
		'    0000000000000  GU    U     --  --  --  --  --------- UU       00000000000000000000000000000000000000000000000000000000000          G  TT   00000000000000000    UU --                 -- UU       0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
		'    0000000000000      T   T-- UU  UU  UU  UU  UUUUUUUUU          00000000000000000000000000000000000000000000000000000000000  TT         00   UUUU                    UU              -- UU          0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
		'    0000000000000TT000000000TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT00000000000000000000000000000000000000000000000000000000000  00                                                   -- UU             0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
		'    0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000                           --       -              --  UU                0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
		'    0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000                      T   TTT      TTT   T    T--  UU                    0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
		'    0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000- -- -- -- -- -- -0000000000000000000000000000000TTTTTTTTTTTTTTTTTTTTTTT00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
		'    0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000U UU UU UU UU UU U00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
		'    0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000                  00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
		'    0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000TTTTTTTTTTTTTTTTTT00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
		'    000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
		'    000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
		'    000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
		'    000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
	]}, function(S, X, Y, W, H){
		if (S === "0"){
			world.push(game.newRectObject({
				x: X, y: Y,
				w: W, h: H,
				fillColor: '#bcbcbc'
			}));
		} else if(S === "P"){
			pPos = point(X, Y);
		} else if(S === "D"){
			deadBlock.push(game.newRectObject({
				x: X, y: Y,
				w: W, h: H,
				fillColor: 'red',
				alpha: 0.3
			}));	
		} else if(S === "T"){
			triangleBlock.push(game.newTriangleObject({
				x: X+W/4, y: Y+H/2,
				w: W/2, h: H/2,
				fillColor: '#bcbcbc'
			}));	
		} else if(S === "U"){
			triangleBlock.push(game.newTriangleObject({
				x: X+W/4, y: Y,
				w: W/2, h: H/2,
				angle: 180,
				fillColor: '#bcbcbc'
			}));	
		} else if(S === "-"){
			platformBlock.push(game.newRectObject({
				x: X, y: Y+H-H/4,
				w: W, h: H/4,
				fillColor: '#bcbcbc'
			}));	
		} else if(S === "W"){
			winBlocks.push(game.newRectObject({
				x: X, y: Y,
				w: W, h: H,
				fillColor: '#79aa58',
				alpha: 0.3
			}));	
		} else if(level_finished == false && S === "G"){
			moneyBlocks.push(game.newImageObject({
				w: W/2, h: H/2,
				x: X+(W/2)/2, y: Y+H/1.2,
				file: 'img/coin_24.png'
			}));	
		}
	});
	
	var pl = game.newRectObject({
		x: pPos.x, y: pPos.y,
		w: 30, h: 30,
		//file: 'img/player/'+pjs.math.random(1, 6)+'.jpg'
		fillColor: 'white'
	})

	var speed = point();
	var jump = false;
	var score = 0;
	var money = 0;
	var scoreText;

	var scoreMenu = pjs.system.newDOM('div', true);
	scoreMenu.className = "scoreMenu";
	var statsMenu = pjs.system.newDOM('div', true);
	statsMenu.className = "statsMenu";
	var loseTable = pjs.system.newDOM('div', true);
	loseTable.className = "loseTable";

	scoreMenu.innerHTML = `
		<div class="back-black"><h1><img src="img/coin_16.png" class="coin"> `+money+`<h1></div><div class="back-white"><h1>Счет: `+score+`</div>
	`;

	statsMenu.innerHTML = `
		<button class="btn-green" onclick="menu();">Меню</button>	
	`;

	var lose = function(){
		var margintop = 16;
		var marginleft = width/2 - 142/2;

		loseTable.innerHTML = `
			<div class="back-white" style="margin-top: `+margintop+`px; margin-left: `+marginleft+`px;"><h1>ВЫ ПРОИГРАЛИ</h1><hr><h1>Счет: `+score+`</h1><h1>Монеты: `+money+`</h1><div style="display:block;padding:5px;"><div class="left"><button type="submit" onclick="restart('level1');" id="restart" class="btn-black">Рестарт</button></div><div class="right"><button onlick="menu();" type="submit" id="menu" class="btn-green">Меню</button></div></div></div>
		`;
	}

	var win = function(){
		var margintop = 16;
		var marginleft = width/2 - 142/2;

		loseTable.innerHTML = `
			<div class="back-black" style="margin-top: `+margintop+`px; margin-left: `+marginleft+`px;"><h1>ВЫ ВЫИГРАЛИ</h1><hr><h1>Счет: `+score+`</h1><h1>Монеты: `+money+`</h1><div style="display:block;padding:5px;"><div class="left"><button type="submit" onclick="restart('level1');" id="restart" class="btn-white">Рестарт</button></div><div class="right"><button onlick="menu();" type="submit" id="menu" class="btn-green">Меню</button></div></div></div>
		`;
	}

	this.update = function () {
		game.clear();

		if (speed.x < 5) speed.y += 0.13;
		else if(speed.x > 4) speed.y += 0.13;
		if (jump == false){
			if (key.isPress('W') || key.isPress('UP') || key.isPress('SPACE') || mouse.isPress('LEFT')){
				jump = true;
				speed.y = -4;
			}
		}

		pl.draw();

		var collisionBlocks = [];
		var drawBlocks = [];

		OOP.forArr(world, function(w, idW){
			if (w.isInCameraStatic()){
				drawBlocks.push(w);
			}
		});

		OOP.forArr(drawBlocks, function(d){
			d.setAlpha(1 - pl.getDistanceC(d.getPositionC()) / 200);

			d.draw();
			speed.x = 2;

			if (pl.getDistanceC(d.getPositionC()) < 100){
				collisionBlocks.push(d);
			}

			if (pl.isStaticIntersect(d)){
				jump = false;
			}
		});

		OOP.forArr(deadBlock, function(l){
			l.setAlpha(1 - pl.getDistanceC(l.getPositionC()) / 200);
			if (l.isInCameraStatic()) l.draw();

			if (pl.isStaticIntersect(l)){
				gamestopped = true;
				dialogMenu.innerHTML = '';
				lose();
			}
		});

		OOP.forArr(winBlocks, function(w){
			w.setAlpha(1 - pl.getDistanceC(w.getPositionC()) / 200);
			if (w.isInCameraStatic()) w.draw();

			if (pl.isStaticIntersect(w)){
				gamestopped = true;
				level_finished = true;
				dialogMenu.innerHTML = '';
				win();
			}
		});

		OOP.forArr(moneyBlocks, function(m, mId){
			m.setAlpha(1 - pl.getDistanceC(m.getPositionC()) / 200);
			if (m.isInCameraStatic()) m.draw();

			if (pl.isStaticIntersect(m)){
				money++;
				moneyBlocks.splice(mId, 1);

				scoreMenu.innerHTML = `
					<div class="back-black"><h1><img src="img/coin_16.png" class="coin"> `+money+`<h1></div><div class="back-white"><h1>Счет: `+score+`</div>
				`;
			}
		});

		OOP.forArr(triangleBlock, function(t){
			t.setAlpha(1 - pl.getDistanceC(t.getPositionC()) / 200);
			if (t.isInCameraStatic()) t.draw();

			if (pl.getDistanceC(t.getPositionC()) < 100){
				collisionBlocks.push(t);
			}

			if (pl.isStaticIntersect(t)){
				gamestopped = true;
				dialogMenu.innerHTML = '';
				lose();
			}
		});

		OOP.forArr(platformBlock, function(p){
			p.setAlpha(1 - pl.getDistanceC(p.getPositionC()) / 200);
			if (p.isInCameraStatic()) p.draw();

			if (pl.getDistanceC(p.getPositionC()) < 100){
				collisionBlocks.push(p);
			}

			if (pl.isStaticIntersect(p)){
				jump = false;
			}
		});

		pjs.vector.moveCollision(pl, collisionBlocks, speed);

		camera.follow(pl, 10);

		if(gamestopped == false){
			game.resume();
			score += 1;
			scoreMenu.innerHTML = `
				<div class="back-black"><h1><img src="img/coin_16.png" class="coin"> `+money+`<h1></div><div class="back-white"><h1>Счет: `+score+`</h1></div>
			`;
		} else {
			game.stop();
		}
	};

	this.entry = function () {
		score = 0;
		pl.x = pPos.x;
		pl.y = pPos.y;
		gamestopped = false;
		speed.y = 0.13;
		loseTable.innerHTML = ``;
	};

	this.exit = function () {
		// game is stopped
	};

});

game.startLoop('training');

var restart = function(loop){
	game.resume();
	loseTable.innerHTML = ``;
	game.setLoop(loop);
}

var training1 = function(){
	dialogMenu.innerHTML = ``;
	dialog('Обучение 1/3', 'Сначала попробуем прыгать. Сделать это можно нажав клавишу <span class="label label-black">W</span>, <span class="label label-black">SPACE</span> или нажатием <span class="label label-black">ЛКМ</span>.', 'Далее', 'training2()');
}

var training2 = function(){
	dialogMenu.innerHTML = ``;
	dialog('Обучение 1/3', 'Попробуйте перепрыгнуть колючку.', 'Далее', 'training3()');
	document.getElementById('dialogButton1').style.display = 'none';
	gamestopped = false;
	game.resume();
	setTimeout(function(){
		gamestopped = true;
		game.stop();
		document.getElementById('dialogButton1').style.display = 'block';
	}, 5000);
}

var training3 = function(){
	dialogMenu.innerHTML = ``;
	dialog('Обучение 2/3', 'В squaredash Ваш персонаж может использовать двойной прыжок. <br><br>Очень часто двойной прыжок может пригодится, когда Вы, например, падаете. <br><br>Двойной прыжок можно сделать с помощью двух нажатий клавиш <span class="label label-black">W</span>, <span class="label label-black">SPACE</span> или двойным нажатием <span class="label label-black">ЛКМ</span>', 'Далее', 'training4()');		
}

var training4 = function(){
	dialogMenu.innerHTML = ``;
	dialog('Обучение 2/3', 'Попробуйте перепрыгнуть две колючки с помощью двойного прыжка.', 'Далее', 'training5()');
	document.getElementById('dialogButton1').style.display = 'none';
	gamestopped = false;
	game.resume();
	setTimeout(function(){
		gamestopped = true;
		game.stop();
		document.getElementById('dialogButton1').style.display = 'block';
	}, 5000);
}

var training5 = function(){
	dialogMenu.innerHTML = ``;
	dialog('Обучение 3/3', 'Так же, можно ходить по блокам, которые выше Вас.<br><br>Что бы ходить по блокам, которые выше Вас, необходимо часто нажимать на клавишу <span class="label label-black">W</span>, <span class="label label-black">SPACE</span> или же на <span class="label label-black">ЛКМ</span>', 'Далее', 'training6()');		
}

var training6 = function(){
	dialogMenu.innerHTML = ``;
	dialog('Обучение 3/3', 'Попробуйте идти по блокам, которые выше Вас.', 'Далее', 'training7()');
	document.getElementById('dialogButton1').style.display = 'none';
	gamestopped = false;
	game.resume();
	setTimeout(function(){
		gamestopped = true;
		game.stop();
		document.getElementById('dialogButton1').style.display = 'block';
	}, 15000);
}

var training7 = function(){
	dialogMenu.innerHTML = ``;
	dialog('Завершение', 'Обучение успешно пройдено!<br><br>Теперь вы можете начать проходить уровни, от легких, до самых сложных. <br><br>Удачи!', 'Меню', 'menu()');		
}