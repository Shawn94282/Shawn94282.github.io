var Loading = function () {
	this.update = function () {
		bg.draw();

		brush.drawText({
			text: 'загрузка',
			font: 'Arial',
			style: 'black',
			size: 24,
			color: '#FFFFFF',
			positionC: point(500, 375)
		});	
	};
};