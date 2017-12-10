game.newLoopFromConstructor('game_planet', function () {
	var pPos;

	var world = [];
	var lakes = [];
	var humans = [];
	var ships = [];
	var buildings = [];
	var needs = [];
	var startPos;

	var energy = false;

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
			//var randIsLake = pjs.math.random(1,300);
			//var isLake = false;
			//if(randIsLake == 25) isLake = true;
			//if(isLake == false){
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
			//} else {
				// for(var i = 0; i <= 4; i++){
				// 	lakes.push(game.newImageObject({
				// 		x: X+(i*W), y: Y,
				// 		w: W, h: H,
				// 		file: 'img/Tile/tile11.png',
				// 		userData : {
				// 			tile: 11,
				// 			isLake: true
				// 		}
				// 	}));
				// 	lakes.push(game.newImageObject({
				// 		x: X+(i*W), y: Y+H,
				// 		w: W, h: H,
				// 		file: 'img/Tile/tile11.png',
				// 		userData : {
				// 			tile: 11,
				// 			isLake: true
				// 		}
				// 	}));
				// 	lakes.push(game.newImageObject({
				// 		x: X+(i*W), y: Y+H*2,
				// 		w: W, h: H,
				// 		file: 'img/Tile/tile11.png',
				// 		userData : {
				// 			tile: 11,
				// 			isLake: true
				// 		}
				// 	}));
				// }
			//}
		} else if(S === "E"){
			var human = 2;
			humans.push(game.newImageObject({
				x: X, y: Y,
				w: W, h: H,
				file: 'img/Unit/human'+human+'.png',
				userData : {
					humanType: human,
					hp: 100,
					moveTo: null,
					working: false,
					moving: false,
					humanTypeName: 'Инженер'
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
					moveTo: null,
					working: false,
					moving: false,
					humanTypeName: 'Рабочий'
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
					moveTo: null,
					working: false,
					moving: false,
					humanTypeName: 'Военный'
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
					moveTo: null,
					working: false,
					moving: false,
					humanTypeName: 'Биолог'
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

	var buildingsWithEnergy = false;
	var buildingsWithWater = false;

	this.update = function () {
		//game.clear();

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
							<div class="statsBack">
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
							</div>
						`;
					} else {
						tileStats.innerHTML = ``;
					}

					if(mouse.isPress('LEFT')){
						if(!toBuild && !w.isLake){
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
						} else if(!w.isLake){
							if(!w.building){
								for(var i in humans){
									if(humans[i].humanType == "2"){
										if(humans[i].working == false){
											humans[i].working = true;
											if(humans[i].moveTo){
												humans[i].moveTo = null;
											}
											world.splice(idW, 1);
											var randTile = pjs.math.random(9,10);
											world.push(game.newImageObject({
												x: w.x, y: w.y,
												w: w.w, h: w.h,
												file: 'img/Tile/tile'+randTile+'.png',
												userData : {
													tile: randTile,
													building: true
												}
											}));
											buildings.push(game.newImageObject({
												x: w.x, y: w.y,
												w: w.w, h: w.h,
												file: 'img/Structure/str9.png',
												userData : {
													building: toBuild,
													isBuild: false,
													isWorking: true,
													hided: false
												}
											}));
											humans[i].moveTo = point(w.x, w.y+35);
											toBuild = null;
											break;
										}
									}
								}
							}
						}
					}
				}
			}
		});

		OOP.forArr(humans, function(h, idH){
			if(h.isInCameraStatic()){
				h.draw();

				if(mouse.isInStatic(h.getStaticBox())){
					selBlocks.push(h);

					tileStats.innerHTML = `
						<div class="statsBack">
							<div class="stats">
								<div class="tile" style="text-align:center;">
									<img width="50" height="50" src="img/Unit/human`+h.humanType+`.png">
								</div>
								<div class="info" style="margin-top:4px;text-align:center;">
									<p>X: `+h.x+`</p>
									<p>Y: `+h.y+`</p>
									<p>W: `+h.w+`</p>
									<p>H: `+h.h+`</p>
									<p>Working: `+h.working+`</p>
									<p>Moving: `+h.moving+`</p>
									<p>Type: `+h.humanType+`</p>
									<p>TypeName: `+h.humanTypeName+`</p>
								</div>
							</div>
						</div>
					`;
				}
			}

			if(h.moveTo){
				h.moveTime(h.moveTo, 100);
			}
		});

		// OOP.forArr(lakes, function(l, idL){
		// 	if(l.isInCameraStatic()){
		// 		l.draw();
		// 	}
		// });

		OOP.forArr(ships, function(s, idS){
			if(s.isInCameraStatic()){
				s.draw();
			}
		});	

		OOP.forArr(buildings, function(b, idB){
			if(b.isInCameraStatic()){
				if(!b.hided){
					b.draw();
					if(b.isBuild == true){
						if(b.building == 'str2'){
							buildingsWithEnergy = true;
							return;
						} else if(b.building == 'str16'){
							buildingsWithWater = true;
							return;
						} else if(buildingsWithEnergy == true && buildingsWithWater == true){
							if(b.building == 'str6'){
								res3 = res3+0.0002;
							}
							if(b.building == 'str8'){
								res2 = res2+0.0002;
							}
							if(b.building == 'str5'){
								while(res3 > 1){
									res1 = res1 + 1;
									res3 = res3 - 1;
								}
							}
							return;
						} else {
							if(buildingsWithEnergy == false && b.isEnergy == false){
								needs.push(game.newImageObject({
									x: b.x+(b.w/3), y: b.y+(b.w/3),
									w: b.w/3, h: b.h/3,
									file: 'img/energy.png',
									userData : {
										type: 'energy'
									}
								}));
								b.isEnergy = true;
								return;
							} else if(buildingsWithWater == false && b.isWater == false && buildingsWithEnergy == true){
								OOP.clearArr(needs);
								needs.push(game.newImageObject({
									x: b.x+(b.w/3), y: b.y+(b.w/3),
									w: b.w/3, h: b.h/3,
									file: 'img/water.png',
									userData : {
										type: 'water'
									}
								}));
								b.isWater = true;
								return;
							} else if(buildingsWithEnergy == true && buildingsWithWater == true){
								needsPanel.innerHTML = ``;
								OOP.clearArr(needs);
								return;
							}
						}
					}
					if(b.isBuild == false){
						for(let i in humans){
							if(humans[i].humanType == "2"){
								if(humans[i].isStaticIntersect(b)){
									setTimeout(function(){
										var X = b.x;
											Y = b.y;
											W = b.w;
											H = b.h;
											bTobuild = b.building;
										b.hided = true;
										buildings.push(game.newImageObject({
											x: X, y: Y,
											w: W, h: H,
											file: 'img/Structure/'+bTobuild+'.png',
											userData : {
												building: bTobuild,
												isBuild: true,
												isEnergy: false,
												isWater: false
											}
										}));
										humans[i].working = false;
										return;
									}, 4000);
								}
							}
						}
					}
				}
			}
		});

		OOP.forArr(needs, function(n, idN){
			if(n.isInCameraStatic()){
				if(buildingsWithEnergy == false || buildingsWithWater == false){
					n.draw();
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
		topPanelUI.innerHTML = `
			<table>
				<tr class="topPanelUItr clearfix" style="width:840px;">
					<td class="day float-left" style="margin-top:5px;">
						День 1
					</td>
					<td class="time float-left">
						1 ноября 6912
						<div class="timeprogress-back">
						<div id="timeprogress" class="timeprogress" style="width:0px;">
						</div>
					</td>
					<td class="float-right hover mx-2" style="margin-top:5px;" onclick="UIRes()">
						<img class="res" width="20" height="20" src="img/icons/plus-circle.png">
					</td>
					<td class="float-right hover" style="margin-top:5px;">
						`+Math.round(res3)+` <img class="res" width="30" height="30" src="img/Environment/res3.png">
					</td>
					<td class="float-right hover" style="margin-top:5px;">
						`+Math.round(res2)+` <img class="res" width="30" height="30" src="img/Environment/res2.png">
					</td>
					<td class="float-right hover" style="margin-top:5px;">
						`+Math.round(res1)+` <img class="res" width="30" height="30" src="img/Environment/res1.png">
					</td>
				</tr>
			</table>
		`;
	};

	this.exit = function () {
		// game is stopped
	};

});

game.newLoopFromConstructor('menu', function () {
	this.update = function() {
		// update
	}
});

game.startLoop('menu');
