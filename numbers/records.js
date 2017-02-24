// Advanced Game Loop
var Records = function () {
	// Constructor Game Loop

	var record = 0;

	this.entry = function () {
		record = pjs.memory.local.load('record', record) || 0;
	};

	this.update = function () {
		// Update function

		game.fill('#232B2B');

		brush.drawText({
			x : width / 2, y : height / 2 - sizeText,
			text : 'Рекорд: ' + record,
			size : sizeText,
			color : '#E3AE57',
			align : 'center'
		});

		if (m.isPress('LEFT')) {
			game.setLoop('menu');
		}

	};

};