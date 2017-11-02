game.newLoopFromConstructor('game_planet', function () {
	var pPos;

	var world = [];
	var humans = [];
	var ships = [];
	var buildings = [];
	var startPos;

	var level_finished = false;

	pjs.levels.forStringArray({w: 40, h: 40, source: [
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111110000000111111111111111111111111',
		'11111111111111111111111111111100EEE00111111111111111111111111',
		'1111111111111111111111111111110W000G0111111111111111111111111',
		'1111111111111111111111111111110W0S0G0111111111111111111111111',
		'1111111111111111111111111111110W000G0111111111111111111111111',
		'11111111111111111111111111111100BBB00111111111111111111111111',
		'1111111111111111111111111111110000000111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		'1111111111111111111111111111111111111111111111111111111111111',
		]}, function(S, X, Y, W, H){
		if (S === "1"){
			var randTile = pjs.math.random(1,30);
			if(randTile > 20) randTile = 10;
			if(randTile > 10) randTile = 9;
			world.push(game.newImageObject({
				x: X, y: Y,
				w: W, h: H,
				file: 'img/Tile/tile'+randTile+'.png',
				userData : {
					tile: randTile
				}
			}));
		} else if(S === "E"){
			var human = 2;
			humans.push(game.newImageObject({
				x: X, y: Y,
				w: W, h: H,
				file: 'img/Unit/human'+human+'.png',
				userData : {
					humanType: human,
					hp: 100,
					moveTo: null
				}
			}));

			var randTile = pjs.math.random(9,10);
			world.push(game.newImageObject({
				x: X, y: Y,
				w: W, h: H,
				file: 'img/Tile/tile'+randTile+'.png',
				userData : {
					tile: randTile
				}
			}));
		} else if(S === "W"){
			var human = 1;
			humans.push(game.newImageObject({
				x: X, y: Y,
				w: W, h: H,
				file: 'img/Unit/human'+human+'.png',
				userData : {
					humanType: human,
					hp: 100,
					moveTo: null
				}
			}));

			var randTile = pjs.math.random(9,10);
			world.push(game.newImageObject({
				x: X, y: Y,
				w: W, h: H,
				file: 'img/Tile/tile'+randTile+'.png',
				userData : {
					tile: randTile
				}
			}));
		} else if(S === "G"){
			var human = 4;
			humans.push(game.newImageObject({
				x: X, y: Y,
				w: W, h: H,
				file: 'img/Unit/human'+human+'.png',
				userData : {
					humanType: human,
					hp: 100,
					moveTo: null
				}
			}));

			var randTile = pjs.math.random(9,10);
			world.push(game.newImageObject({
				x: X, y: Y,
				w: W, h: H,
				file: 'img/Tile/tile'+randTile+'.png',
				userData : {
					tile: randTile
				}
			}));
		} else if(S === "B"){
			var human = 3;
			humans.push(game.newImageObject({
				x: X, y: Y,
				w: W, h: H,
				file: 'img/Unit/human'+human+'.png',
				userData : {
					humanType: human,
					hp: 100,
					moveTo: null
				}
			}));

			var randTile = pjs.math.random(9,10);
			world.push(game.newImageObject({
				x: X, y: Y,
				w: W, h: H,
				file: 'img/Tile/tile'+randTile+'.png',
				userData : {
					tile: randTile
				}
			}));
		} else if(S === "0"){
			var randTile = pjs.math.random(9,10);
			var isHuman = pjs.math.random(1,10);
			world.push(game.newImageObject({
				x: X, y: Y,
				w: W, h: H,
				file: 'img/Tile/tile'+randTile+'.png',
				userData : {
					tile: randTile
				}
			}));
			bottomPanelUI.innerHTML = `
				<table>
					<tr class="bottomPanelUItr">
						<td onclick="UIStats()">
							Статистика
						</td>
						<td onclick="UIPopulation()">
							Население(`+humans.length+`)
						</td>
						<td onclick="UIRes()">
							Ресурсы
						</td>
						<td onclick="UIBuild()">
							Постройки
						</td>
					</tr>
				</table>
			`;
		} else if(S === "S"){
			startPos = point(X, Y);
			var randTile = pjs.math.random(9,10);
			world.push(game.newImageObject({
				x: X, y: Y,
				w: W, h: H,
				file: 'img/Tile/tile'+randTile+'.png',
				userData : {
					tile: randTile
				}
			}));
			var randShip = pjs.math.random(1,8);
			ships.push(game.newImageObject({
				x: X, y: Y,
				w: W, h: H,
				file: 'img/Ships/ship'+randShip+'.png',
				userData : {
					type: randShip
				}
			}));
		}
	});

	camera.moveTimeC(startPos, 10);

	this.update = function () {
		game.clear();

		if(key.isDown('A')) camera.move(point(-5, 0));
		if(key.isDown('D')) camera.move(point(5, 0));
		if(key.isDown('W')) camera.move(point(0, -5));
		if(key.isDown('S')) camera.move(point(0, 5));

		if(mouse.isWheel('UP')) camera.scaleC(point(1.1,1.1));
		if(mouse.isWheel('DOWN')) camera.scaleC(point(0.9,0.9));

		var selBlocks = [];

		OOP.forArr(world, function(w, idW){
			if (w.isInCameraStatic()){
				w.draw();

				if(mouse.isInStatic(w.getStaticBox())){
					selBlocks.push(w);

					if(w.tile != 9 && w.tile != 10){
						tileStats.innerHTML = `
							<div class="stats">
								<div class="tile" style="text-align:center;">
									<img width="50" height="50" src="img/Tile/tile`+w.tile+`.png">
								</div>
								<div class="info" style="margin-top:4px;text-align:center;">
									<p>X: `+w.x+`</p>
									<p>Y: `+w.y+`</p>
									<p>W: `+w.w+`</p>
									<p>H: `+w.h+`</p>
									<p>Tile: `+w.tile+`</p>
								</div>
								<div class="keys" style="margin-top: 4px;">
									<span class="label label-white">ЛКМ</span> - удалить
								</div>
							</div>
						`;
					} else {
						tileStats.innerHTML = ``;
					}

					if(mouse.isPress('LEFT')){
						if(!toBuild){
							if(w.tile != 10) {
								world.splice(idW, 1);
								var randTile = pjs.math.random(9,10);
								world.push(game.newImageObject({
									x: w.x, y: w.y,
									w: w.w, h: w.h,
									file: 'img/Tile/tile'+randTile+'.png',
									userData : {
										tile: randTile
									}
								}));
							}
						} else {
							world.splice(idW, 1);
							var randTile = pjs.math.random(9,10);
							world.push(game.newImageObject({
								x: w.x, y: w.y,
								w: w.w, h: w.h,
								file: 'img/Tile/tile'+randTile+'.png',
								userData : {
									tile: randTile
								}
							}));
							buildings.push(game.newImageObject({
								x: w.x, y: w.y,
								w: w.w, h: w.h,
								file: 'img/Structure/str9.png',
								userData : {
									building: toBuild,
									isBuild: false
								}
							}));
							for(var i in humans){
								if(humans[i].humanType == "2"){
									humans[i].moveTo = point(w.x, w.y);
									break;
								}
							}
							toBuild = null;
						}
					}
				}
			}
		});

		OOP.forArr(humans, function(h, idH){
			if (h.isInCameraStatic()){
				h.draw();
			}

			if(h.moveTo){
				h.moveTimeC(h.moveTo, 300);
			}
		});

		OOP.forArr(ships, function(s, idS){
			if (s.isInCameraStatic()){
				s.draw();
			}
		});

		OOP.forArr(buildings, function(b, idB){
			if (b.isInCameraStatic()){
				b.draw();
			}
			for(var i in humans){
				if(humans[i].isStaticIntersect(b)){
					if(b.isBuild == false){
						setTimeout(function(){
							var X = b.x;
								Y = b.y;
								W = b.w;
								H = b.h;
								bTobuild = b.building;
							buildings.splice(idB, 1);
							buildings.push(game.newImageObject({
								x: X, y: Y,
								w: W, h: H,
								file: 'img/Structure/'+bTobuild+'.png',
								userData : {
									building: bTobuild,
									isBuild: true
								}
							}));
							humans[i].moveTime(point(b.x+40,b.y+40), 300);
						}, 3000);
						break;
					}
				}
			}
		});

		OOP.forArr(selBlocks, function(s){
			if(!toBuild){
				brush.drawRect({
					x: s.x, y: s.y,
					w: s.w, h: s.h,
					fillColor: 'rgba(0,0,0,0.1)'
				});
			} else {
				brush.drawImage({
					x: s.x, y: s.y,
					w: s.w, h: s.h,
					file: 'img/Structure/'+toBuild+'.png'
				})
			}
		});
	};

	this.entry = function () {
		// start
	};

	this.exit = function () {
		// game is stopped
	};

});

game.startLoop('game_planet');