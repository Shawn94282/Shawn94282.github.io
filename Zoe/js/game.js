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

				// if(h.working == false && h.moving == false){
				// 	// var hrandpos1 = pjs.math.random(1, 12);
				// 	// var hrandpos2 = pjs.math.random(1, 12);

				// 	// if(hrandpos1 == 1){
				// 	// 	randHumanPosTo1 = randpos1;
				// 	// }
				// 	// if(hrandpos1 == 2){
				// 	// 	randHumanPosTo1 = randpos2;
				// 	// }
				// 	// if(hrandpos1 == 3){
				// 	// 	randHumanPosTo1 = randpos3;
				// 	// }
				// 	// if(hrandpos1 == 4){
				// 	// 	randHumanPosTo1 = randpos4;
				// 	// }
				// 	// if(hrandpos1 == 5){
				// 	// 	randHumanPosTo1 = randpos5;
				// 	// }
				// 	// if(hrandpos1 == 6){
				// 	// 	randHumanPosTo1 = randpos6;
				// 	// }
				// 	// if(hrandpos1 == 7){
				// 	// 	randHumanPosTo1 = randpos7;
				// 	// }
				// 	// if(hrandpos1 == 8){
				// 	// 	randHumanPosTo1 = randpos8;
				// 	// }
				// 	// if(hrandpos1 == 9){
				// 	// 	randHumanPosTo1 = randpos9;
				// 	// }
				// 	// if(hrandpos1 == 10){
				// 	// 	randHumanPosTo1 = randpos10
				// 	// }
				// 	// if(hrandpos1 == 11){
				// 	// 	randHumanPosTo1 = randpos11
				// 	// }
				// 	// if(hrandpos1 == 12){
				// 	// 	randHumanPosTo1 = randpos12;
				// 	// }


				// 	// if(hrandpos2 == 1){
				// 	// 	randHumanPosTo2 = randpos1;
				// 	// }
				// 	// if(hrandpos2 == 2){
				// 	// 	randHumanPosTo2 = randpos2;
				// 	// }
				// 	// if(hrandpos2 == 3){
				// 	// 	randHumanPosTo2 = randpos3;
				// 	// }
				// 	// if(hrandpos2 == 4){
				// 	// 	randHumanPosTo2 = randpos4;
				// 	// }
				// 	// if(hrandpos2 == 5){
				// 	// 	randHumanPosTo2 = randpos5;
				// 	// }
				// 	// if(hrandpos2 == 6){
				// 	// 	randHumanPosTo2 = randpos6;
				// 	// }
				// 	// if(hrandpos2 == 7){
				// 	// 	randHumanPosTo2 = randpos7;
				// 	// }
				// 	// if(hrandpos2 == 8){
				// 	// 	randHumanPosTo2 = randpos8;
				// 	// }
				// 	// if(hrandpos2 == 9){
				// 	// 	randHumanPosTo2 = randpos9;
				// 	// }
				// 	// if(hrandpos2 == 10){
				// 	// 	randHumanPosTo2 = randpos10;
				// 	// }
				// 	// if(hrandpos2 == 11){
				// 	// 	randHumanPosTo2 = randpos11;
				// 	// }
				// 	// if(hrandpos2 == 12){
				// 	// 	randHumanPosTo2 = randpos12;
				// 	// }

				// 	// var randangle = pjs.math.random(1,4);
				// 	// if(randangle == 1){ // right
				// 	// 	h.moveTo = point(h.x + 10, h.y);
				// 	// 	h.moving = true;
				// 	// }
				// 	// if(randangle == 2){ // left
				// 	// 	h.moveTo = point(h.x - 10, h.y);
				// 	// 	h.moving = true;
				// 	// }
				// 	// if(randangle == 3){ // up
				// 	// 	h.moveTo = point(h.x, h.y - 10);
				// 	// 	h.moving = true;
				// 	// }
				// 	// if(randangle == 4){ // down
				// 	// 	h.moveTo = point(h.x, h.y + 10);
				// 	// 	h.moving = true;
				// 	// }
				// } else if(h.moving == true){
				// 	setInterval(function(){
				// 		h.moveTo = null;
				// 		h.moving = false;
				// 	}, 10000);
				// }

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
								// needsPanel.innerHTML = `
								// 	<div class="back-black-03" style="padding: 12px;">
								// 		Здания без энергии!
								// 	</div>
								// `;
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
								// needsPanel.innerHTML = `
								// 	<div class="back-black-03" style="padding: 12px;">
								// 		Здания без воды!
								// 	</div>
								// `;
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
				n.draw();
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