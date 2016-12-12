var lvl1 = function () {
	this.update = function () {
		game.clear();
		var dt = game.getDT();
		var camPos = camera.getPosition();

		OOP.forArr(stars, function (el) {
			el.draw();
			el.move(point(el.dx*dt, el.dy*dt));
			if (el.x+el.w < camPos.x) el.x = camPos.x+width-el.w;
			if (el.x > camPos.x+width) el.x = camPos.x;

			if (el.y+el.h < camPos.y) el.y = camPos.y+height-el.h;
			if (el.y > camPos.y+height) el.y = camPos.y;
		});

		OOP.forArr(buls, function(el) {
			if(el.life) {
				el.draw();
				el.moveAngle(10);
			};
		});

		player_1.draw();
		if(key.isDown('W'))
			player_1.y -= 15;
		if(key.isDown('S'))
			player_1.y += 15;
		
		if(m.isPress('LEFT')) {	
			var bul = game.newRectObject({
				x: player_1.getPositionC().x, y: player_1.getPositionC().y,
				w: 10, h: 3,
				fillColor: 'red',
				userData : {
					life : 1
				},
				angle: player_1.getAngle()
			});				
			buls.push(bul);
		};

		drawEnemy();

		if(player_1.y < 0)
			player_1.y = 0;
		if(player_1.y + player_1.h > 750)
			player_1.y = 750 - player_1.h;
	};
	this.entry = function () {
		enemy = [], oldEnemy = false;

		OOP.forInt(3, function() {
			addEnemy();
		});

		//score = 0;
	};
};