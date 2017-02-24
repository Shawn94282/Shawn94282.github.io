// Advanced Game Loop
var About = function () {
	// Constructor Game Loop

	this.update = function () {
		// Update function

		game.fill('#232B2B');

		brush.drawTextLines({
			x : width / 2, y : height / 2 - sizeText,
			lines : ['Numbers - это игра без жанра,',
					 'в которой вам нужно просто',
				     'решать простые математические',
					 'примеры за короткое время.',
	        ],
			size : 38 * r,
			color : '#E3AE57',
			align : 'center'
		});

		if (touch.isPress()) {
			game.setLoop('menu');
		}

	};

};