var purple1x1capture = false;
var purple2x1capture = false;
var purple3x1capture = false;
var purple4x1capture = false;
var purple5x1capture = false;
var purple6x1capture = false;
var purple7x1capture = false;
var purple8x1capture = false;
var purple9x1capture = false;
var purple10x1capture = false;
var purple11x1capture = false;

var purple1x2capture = false;
var purple2x2capture = false;
var purple3x2capture = false;
var purple4x2capture = false;
var purple5x2capture = false;
var purple6x2capture = false;
var purple7x2capture = false;
var purple8x2capture = false;
var purple9x2capture = false;
var purple10x2capture = false;
var purple11x2capture = false;

var purple1x3capture = false;
var purple2x3capture = false;
var purple3x3capture = false;
var purple4x3capture = false;
var purple5x3capture = false;
var purple6x3capture = false;
var purple7x3capture = false;
var purple8x3capture = false;
var purple9x3capture = false;
var purple10x3capture = false;
var purple11x3capture = false;

var purple1x4capture = false;
var purple2x4capture = false;
var purple3x4capture = false;
var purple4x4capture = false;
var purple5x4capture = false;
var purple6x4capture = false;
var purple7x4capture = false;
var purple8x4capture = false;
var purple9x4capture = false;
var purple10x4capture = false;
var purple11x4capture = false;

var purple1x5capture = false;
var purple2x5capture = false;
var purple3x5capture = false;
var purple4x5capture = false;
var purple5x5capture = false;
var purple6x5capture = false;
var purple7x5capture = false;
var purple8x5capture = false;
var purple9x5capture = false;
var purple10x5capture = false;
var purple11x5capture = false;

var purple1x6capture = false;
var purple2x6capture = false;
var purple3x6capture = false;
var purple4x6capture = false;
var purple5x6capture = false;
var purple6x6capture = false;
var purple7x6capture = false;
var purple8x6capture = false;
var purple9x6capture = false;
var purple10x6capture = false;
var purple11x6capture = false;

var purple1x7capture = false;
var purple2x7capture = false;
var purple3x7capture = false;
var purple4x7capture = false;
var purple5x7capture = false;
var purple6x7capture = false;
var purple7x7capture = false;
var purple8x7capture = false;
var purple9x7capture = false;
var purple10x7capture = false;
var purple11x7capture = false;

var purple1x8capture = false;
var purple2x8capture = false;
var purple3x8capture = false;
var purple4x8capture = false;
var purple5x8capture = false;
var purple6x8capture = false;
var purple7x8capture = false;
var purple8x8capture = false;
var purple9x8capture = false;
var purple10x8capture = false;
var purple11x8capture = false;

var purple1x9capture = false;
var purple2x9capture = false;
var purple3x9capture = false;
var purple4x9capture = false;
var purple5x9capture = false;
var purple6x9capture = false;
var purple7x9capture = false;
var purple8x9capture = false;
var purple9x9capture = false;
var purple10x9capture = false;
var purple11x9capture = false;

var Game_q_1 = function () {
	this.update = function () {
		game.clear();
		
		var mPos = m.getPosition();
		//var plPos = pl.getPositionC();

		bg.draw();
		drawHUDBlue();
		drawHUDRed();
		drawHUDRound();

		//======================================================[СЛОЙ 1]=====================================================

		purple1x1.draw();
		purple2x1.draw();
		purple3x1.draw();
		purple4x1.draw();				
		purple5x1.draw();
		purple6x1.draw();
		purple7x1.draw();
		purple8x1.draw();
		purple9x1.draw();
		purple10x1.draw();
		purple11x1.draw();		

		if(going == true) {
			if(purple1x1capture == false) {
				if(m.isInObject(purple1x1)) {
					purple1x1.setImage('img/game-field/white/1x1.png');
				} else {
					purple1x1.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple2x1capture == false) {
				if(m.isInObject(purple2x1)) {
					purple2x1.setImage('img/game-field/white/1x1.png');
				} else {
					purple2x1.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple3x1capture == false) {
				if(m.isInObject(purple3x1)) {
					purple3x1.setImage('img/game-field/white/1x1.png');
				} else {
					purple3x1.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple4x1capture == false) {
				if(m.isInObject(purple4x1)) {
					purple4x1.setImage('img/game-field/white/1x1.png');
				} else {
					purple4x1.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple5x1capture == false) {
				if(m.isInObject(purple5x1)) {
					purple5x1.setImage('img/game-field/white/1x1.png');
				} else {
					purple5x1.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple6x1capture == false) {
				if(m.isInObject(purple6x1)) {
					purple6x1.setImage('img/game-field/white/1x1.png');
				} else {
					purple6x1.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple7x1capture == false) {
				if(m.isInObject(purple7x1)) {
					purple7x1.setImage('img/game-field/white/1x1.png');
				} else {
					purple7x1.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple8x1capture == false) {
				if(m.isInObject(purple8x1)) {
					purple8x1.setImage('img/game-field/white/1x1.png');
				} else {
					purple8x1.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple9x1capture == false) {
				if(m.isInObject(purple9x1)) {
					purple9x1.setImage('img/game-field/white/1x1.png');
				} else {
					purple9x1.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple10x1capture == false) {
				if(m.isInObject(purple10x1)) {
					purple10x1.setImage('img/game-field/white/1x1.png');
				} else {
					purple10x1.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple11x1capture == false) {
				if(m.isInObject(purple11x1)) {
					purple11x1.setImage('img/game-field/white/1x1.png');
				} else {
					purple11x1.setImage('img/game-field/purple/1x1.png');
				};
			};

			
			if(m.isPeekObject('LEFT', purple1x1)) {
				purple1x1.setImage('img/game-field/blue/1x1.png');
				purple1x1capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple2x1)) {
				purple2x1.setImage('img/game-field/blue/1x1.png');
				purple2x1capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple3x1)) {
				purple3x1.setImage('img/game-field/blue/1x1.png');
				purple3x1capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple4x1)) {
				purple4x1.setImage('img/game-field/blue/1x1.png');
				purple4x1capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple5x1)) {
				purple5x1.setImage('img/game-field/blue/1x1.png');
				purple5x1capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple6x1)) {
				purple6x1.setImage('img/game-field/blue/1x1.png');
				purple6x1capture = true;
				tersBlue++;
			}			

			if(m.isPeekObject('LEFT', purple7x1)) {
				purple7x1.setImage('img/game-field/blue/1x1.png');
				purple7x1capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple8x1)) {
				purple8x1.setImage('img/game-field/blue/1x1.png');
				purple8x1capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple9x1)) {
				purple9x1.setImage('img/game-field/blue/1x1.png');
				purple9x1capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple10x1)) {
				purple10x1.setImage('img/game-field/blue/1x1.png');
				purple10x1capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple11x1)) {
				purple11x1.setImage('img/game-field/blue/1x1.png');
				purple11x1capture = true;
				tersBlue++;
			}
		};

		//======================================================[СЛОЙ 2]=====================================================

		purple1x2.draw();
		purple2x2.draw();
		purple3x2.draw();
		purple4x2.draw();
		purple5x2.draw();
		purple6x2.draw();
		purple7x2.draw();
		purple8x2.draw();
		purple9x2.draw();
		purple10x2.draw();
		purple11x2.draw();

		if(going == true) {
			if(purple1x2capture == false) {
				if(m.isInObject(purple1x2)) {
					purple1x2.setImage('img/game-field/white/1x1.png');
				} else {
					purple1x2.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple2x2capture == false) {
				if(m.isInObject(purple2x2)) {
					purple2x2.setImage('img/game-field/white/1x1.png');
				} else {
					purple2x2.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple3x2capture == false) {
				if(m.isInObject(purple3x2)) {
					purple3x2.setImage('img/game-field/white/1x1.png');
				} else {
					purple3x2.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple4x2capture == false) {
				if(m.isInObject(purple4x2)) {
					purple4x2.setImage('img/game-field/white/1x1.png');
				} else {
					purple4x2.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple5x2capture == false) {
				if(m.isInObject(purple5x2)) {
					purple5x2.setImage('img/game-field/white/1x1.png');
				} else {
					purple5x2.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple6x2capture == false) {
				if(m.isInObject(purple6x2)) {
					purple6x2.setImage('img/game-field/white/1x1.png');
				} else {
					purple6x2.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple7x2capture == false) {
				if(m.isInObject(purple7x2)) {
					purple7x2.setImage('img/game-field/white/1x1.png');
				} else {
					purple7x2.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple8x2capture == false) {
				if(m.isInObject(purple8x2)) {
					purple8x2.setImage('img/game-field/white/1x1.png');
				} else {
					purple8x2.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple9x2capture == false) {
				if(m.isInObject(purple9x2)) {
					purple9x2.setImage('img/game-field/white/1x1.png');
				} else {
					purple9x2.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple10x2capture == false) {
				if(m.isInObject(purple10x2)) {
					purple10x2.setImage('img/game-field/white/1x1.png');
				} else {
					purple10x2.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple11x2capture == false) {
				if(m.isInObject(purple11x2)) {
					purple11x2.setImage('img/game-field/white/1x1.png');
				} else {
					purple11x2.setImage('img/game-field/purple/1x1.png');
				};
			};

			
			if(m.isPeekObject('LEFT', purple1x2)) {
				purple1x2.setImage('img/game-field/blue/1x1.png');
				purple1x2capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple2x2)) {
				purple2x2.setImage('img/game-field/blue/1x1.png');
				purple2x2capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple3x2)) {
				purple3x2.setImage('img/game-field/blue/1x1.png');
				purple3x2capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple4x2)) {
				purple4x2.setImage('img/game-field/blue/1x1.png');
				purple4x2capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple5x2)) {
				purple5x2.setImage('img/game-field/blue/1x1.png');
				purple5x2capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple6x2)) {
				purple6x2.setImage('img/game-field/blue/1x1.png');
				purple6x2capture = true;
				tersBlue++;
			}			

			if(m.isPeekObject('LEFT', purple7x2)) {
				purple7x2.setImage('img/game-field/blue/1x1.png');
				purple7x2capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple8x2)) {
				purple8x2.setImage('img/game-field/blue/1x1.png');
				purple8x2capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple9x2)) {
				purple9x2.setImage('img/game-field/blue/1x1.png');
				purple9x2capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple10x2)) {
				purple10x2.setImage('img/game-field/blue/1x1.png');
				purple10x2capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple11x2)) {
				purple11x2.setImage('img/game-field/blue/1x1.png');
				purple11x2capture = true;
				tersBlue++;
			}
		};

		//======================================================[СЛОЙ 3]=====================================================

		purple1x3.draw();
		purple2x3.draw();
		purple3x3.draw();
		purple4x3.draw();				
		purple5x3.draw();
		purple6x3.draw();
		purple7x3.draw();
		purple8x3.draw();
		purple9x3.draw();
		purple10x3.draw();
		purple11x3.draw();			

		if(going == true) {
			if(purple1x3capture == false) {
				if(m.isInObject(purple1x3)) {
					purple1x3.setImage('img/game-field/white/1x1.png');
				} else {
					purple1x3.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple2x3capture == false) {
				if(m.isInObject(purple2x3)) {
					purple2x3.setImage('img/game-field/white/1x1.png');
				} else {
					purple2x3.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple3x3capture == false) {
				if(m.isInObject(purple3x3)) {
					purple3x3.setImage('img/game-field/white/1x1.png');
				} else {
					purple3x3.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple4x3capture == false) {
				if(m.isInObject(purple4x3)) {
					purple4x3.setImage('img/game-field/white/1x1.png');
				} else {
					purple4x3.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple5x3capture == false) {
				if(m.isInObject(purple5x3)) {
					purple5x3.setImage('img/game-field/white/1x1.png');
				} else {
					purple5x3.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple6x3capture == false) {
				if(m.isInObject(purple6x3)) {
					purple6x3.setImage('img/game-field/white/1x1.png');
				} else {
					purple6x3.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple7x3capture == false) {
				if(m.isInObject(purple7x3)) {
					purple7x3.setImage('img/game-field/white/1x1.png');
				} else {
					purple7x3.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple8x3capture == false) {
				if(m.isInObject(purple8x3)) {
					purple8x3.setImage('img/game-field/white/1x1.png');
				} else {
					purple8x3.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple9x3capture == false) {
				if(m.isInObject(purple9x3)) {
					purple9x3.setImage('img/game-field/white/1x1.png');
				} else {
					purple9x3.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple10x3capture == false) {
				if(m.isInObject(purple10x3)) {
					purple10x3.setImage('img/game-field/white/1x1.png');
				} else {
					purple10x3.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple11x3capture == false) {
				if(m.isInObject(purple11x3)) {
					purple11x3.setImage('img/game-field/white/1x1.png');
				} else {
					purple11x3.setImage('img/game-field/purple/1x1.png');
				};
			};

			
			if(m.isPeekObject('LEFT', purple1x3)) {
				purple1x3.setImage('img/game-field/blue/1x1.png');
				purple1x3capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple2x3)) {
				purple2x3.setImage('img/game-field/blue/1x1.png');
				purple2x3capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple3x3)) {
				purple3x3.setImage('img/game-field/blue/1x1.png');
				purple3x3capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple4x3)) {
				purple4x3.setImage('img/game-field/blue/1x1.png');
				purple4x3capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple5x3)) {
				purple5x3.setImage('img/game-field/blue/1x1.png');
				purple5x3capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple6x3)) {
				purple6x3.setImage('img/game-field/blue/1x1.png');
				purple6x3capture = true;
				tersBlue++;				
			}			

			if(m.isPeekObject('LEFT', purple7x3)) {
				purple7x3.setImage('img/game-field/blue/1x1.png');
				purple7x3capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple8x3)) {
				purple8x3.setImage('img/game-field/blue/1x1.png');
				purple8x3capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple9x3)) {
				purple9x3.setImage('img/game-field/blue/1x1.png');
				purple9x3capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple10x3)) {
				purple10x3.setImage('img/game-field/blue/1x1.png');
				purple10x3capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple11x3)) {
				purple11x3.setImage('img/game-field/blue/1x1.png');
				purple11x3capture = true;
				tersBlue++;			
			}
		};
		//======================================================[СЛОЙ 4]=====================================================

		purple1x4.draw();
		purple2x4.draw();
		purple3x4.draw();
		purple4x4.draw();				
		purple5x4.draw();
		purple6x4.draw();
		purple7x4.draw();
		purple8x4.draw();
		purple9x4.draw();
		purple10x4.draw();
		purple11x4.draw();	

		if(going == true) {
			if(purple1x4capture == false) {
				if(m.isInObject(purple1x4)) {
					purple1x4.setImage('img/game-field/white/1x1.png');
				} else {
					purple1x4.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple2x4capture == false) {
				if(m.isInObject(purple2x4)) {
					purple2x4.setImage('img/game-field/white/1x1.png');
				} else {
					purple2x4.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple3x4capture == false) {
				if(m.isInObject(purple3x4)) {
					purple3x4.setImage('img/game-field/white/1x1.png');
				} else {
					purple3x4.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple4x4capture == false) {
				if(m.isInObject(purple4x4)) {
					purple4x4.setImage('img/game-field/white/1x1.png');
				} else {
					purple4x4.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple5x4capture == false) {
				if(m.isInObject(purple5x4)) {
					purple5x4.setImage('img/game-field/white/1x1.png');
				} else {
					purple5x4.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple6x4capture == false) {
				if(m.isInObject(purple6x4)) {
					purple6x4.setImage('img/game-field/white/1x1.png');
				} else {
					purple6x4.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple7x4capture == false) {
				if(m.isInObject(purple7x4)) {
					purple7x4.setImage('img/game-field/white/1x1.png');
				} else {
					purple7x4.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple8x4capture == false) {
				if(m.isInObject(purple8x4)) {
					purple8x4.setImage('img/game-field/white/1x1.png');
				} else {
					purple8x4.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple9x4capture == false) {
				if(m.isInObject(purple9x4)) {
					purple9x4.setImage('img/game-field/white/1x1.png');
				} else {
					purple9x4.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple10x4capture == false) {
				if(m.isInObject(purple10x4)) {
					purple10x4.setImage('img/game-field/white/1x1.png');
				} else {
					purple10x4.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple11x4capture == false) {
				if(m.isInObject(purple11x4)) {
					purple11x4.setImage('img/game-field/white/1x1.png');
				} else {
					purple11x4.setImage('img/game-field/purple/1x1.png');
				};
			};

			
			if(m.isPeekObject('LEFT', purple1x4)) {
				purple1x4.setImage('img/game-field/blue/1x1.png');
				purple1x4capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple2x4)) {
				purple2x4.setImage('img/game-field/blue/1x1.png');
				purple2x4capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple3x4)) {
				purple3x4.setImage('img/game-field/blue/1x1.png');
				purple3x4capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple4x4)) {
				purple4x4.setImage('img/game-field/blue/1x1.png');
				purple4x4capture = true;
				tersBlue++;				
			}

			if(m.isPeekObject('LEFT', purple5x4)) {
				purple5x4.setImage('img/game-field/blue/1x1.png');
				purple5x4capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple6x4)) {
				purple6x4.setImage('img/game-field/blue/1x1.png');
				purple6x4capture = true;
				tersBlue++;
			}			

			if(m.isPeekObject('LEFT', purple7x4)) {
				purple7x4.setImage('img/game-field/blue/1x1.png');
				purple7x4capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple8x4)) {
				purple8x4.setImage('img/game-field/blue/1x1.png');
				purple8x4capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple9x4)) {
				purple9x4.setImage('img/game-field/blue/1x1.png');
				purple9x4capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple10x4)) {
				purple10x4.setImage('img/game-field/blue/1x1.png');
				purple10x4capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple11x4)) {
				purple11x4.setImage('img/game-field/blue/1x1.png');
				purple11x4capture = true;
				tersBlue++;				
			}
		};


		//======================================================[СЛОЙ 5]=====================================================

		purple1x5.draw();
		purple2x5.draw();
		purple3x5.draw();
		purple4x5.draw();				
		purple5x5.draw();
		purple6x5.draw();
		purple7x5.draw();
		purple8x5.draw();
		purple9x5.draw();
		purple10x5.draw();
		purple11x5.draw();		

		if(going == true) {
			if(purple2x5capture == false) {
				if(m.isInObject(purple2x5)) {
					purple2x5.setImage('img/game-field/white/1x1.png');
				} else {
					purple2x5.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple3x5capture == false) {
				if(m.isInObject(purple3x5)) {
					purple3x5.setImage('img/game-field/white/1x1.png');
				} else {
					purple3x5.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple4x5capture == false) {
				if(m.isInObject(purple4x5)) {
					purple4x5.setImage('img/game-field/white/1x1.png');
				} else {
					purple4x5.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple5x5capture == false) {
				if(m.isInObject(purple5x5)) {
					purple5x5.setImage('img/game-field/white/1x1.png');
				} else {
					purple5x5.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple6x5capture == false) {
				if(m.isInObject(purple6x5)) {
					purple6x5.setImage('img/game-field/white/1x1.png');
				} else {
					purple6x5.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple7x5capture == false) {
				if(m.isInObject(purple7x5)) {
					purple7x5.setImage('img/game-field/white/1x1.png');
				} else {
					purple7x5.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple8x5capture == false) {
				if(m.isInObject(purple8x5)) {
					purple8x5.setImage('img/game-field/white/1x1.png');
				} else {
					purple8x5.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple9x5capture == false) {
				if(m.isInObject(purple9x5)) {
					purple9x5.setImage('img/game-field/white/1x1.png');
				} else {
					purple9x5.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple10x5capture == false) {
				if(m.isInObject(purple10x5)) {
					purple10x5.setImage('img/game-field/white/1x1.png');
				} else {
					purple10x5.setImage('img/game-field/purple/1x1.png');
				};
			};


			if(m.isPeekObject('LEFT', purple2x5)) {
				purple2x5.setImage('img/game-field/blue/1x1.png');
				purple2x5capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple3x5)) {
				purple3x5.setImage('img/game-field/blue/1x1.png');
				purple3x5capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple4x5)) {
				purple4x5.setImage('img/game-field/blue/1x1.png');
				purple4x5capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple5x5)) {
				purple5x5.setImage('img/game-field/blue/1x1.png');
				purple5x5capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple6x5)) {
				purple6x5.setImage('img/game-field/blue/1x1.png');
				purple6x5capture = true;
				tersBlue++;
			}			

			if(m.isPeekObject('LEFT', purple7x5)) {
				purple7x5.setImage('img/game-field/blue/1x1.png');
				purple7x5capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple8x5)) {
				purple8x5.setImage('img/game-field/blue/1x1.png');
				purple8x5capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple9x5)) {
				purple9x5.setImage('img/game-field/blue/1x1.png');
				purple9x5capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple10x5)) {
				purple10x5.setImage('img/game-field/blue/1x1.png');
				purple10x5capture = true;
				tersBlue++;
			}
		};

	
		//======================================================[СЛОЙ 6]=====================================================

		purple1x6.draw();
		purple2x6.draw();
		purple3x6.draw();
		purple4x6.draw();				
		purple5x6.draw();
		purple6x6.draw();
		purple7x6.draw();
		purple8x6.draw();
		purple9x6.draw();
		purple10x6.draw();
		purple11x6.draw();

		if(going == true) {
			if(purple1x6capture == false) {
				if(m.isInObject(purple1x6)) {
					purple1x6.setImage('img/game-field/white/1x1.png');
				} else {
					purple1x6.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple2x6capture == false) {
				if(m.isInObject(purple2x6)) {
					purple2x6.setImage('img/game-field/white/1x1.png');
				} else {
					purple2x6.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple3x6capture == false) {
				if(m.isInObject(purple3x6)) {
					purple3x6.setImage('img/game-field/white/1x1.png');
				} else {
					purple3x6.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple4x6capture == false) {
				if(m.isInObject(purple4x6)) {
					purple4x6.setImage('img/game-field/white/1x1.png');
				} else {
					purple4x6.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple5x6capture == false) {
				if(m.isInObject(purple5x6)) {
					purple5x6.setImage('img/game-field/white/1x1.png');
				} else {
					purple5x6.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple6x6capture == false) {
				if(m.isInObject(purple6x6)) {
					purple6x6.setImage('img/game-field/white/1x1.png');
				} else {
					purple6x6.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple7x6capture == false) {
				if(m.isInObject(purple7x6)) {
					purple7x6.setImage('img/game-field/white/1x1.png');
				} else {
					purple7x6.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple8x6capture == false) {
				if(m.isInObject(purple8x6)) {
					purple8x6.setImage('img/game-field/white/1x1.png');
				} else {
					purple8x6.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple9x6capture == false) {
				if(m.isInObject(purple9x6)) {
					purple9x6.setImage('img/game-field/white/1x1.png');
				} else {
					purple9x6.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple10x6capture == false) {
				if(m.isInObject(purple10x6)) {
					purple10x6.setImage('img/game-field/white/1x1.png');
				} else {
					purple10x6.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple11x6capture == false) {
				if(m.isInObject(purple11x6)) {
					purple11x6.setImage('img/game-field/white/1x1.png');
				} else {
					purple11x6.setImage('img/game-field/purple/1x1.png');
				};
			};

			
			if(m.isPeekObject('LEFT', purple1x6)) {
				purple1x6.setImage('img/game-field/blue/1x1.png');
				purple1x6capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple2x6)) {
				purple2x6.setImage('img/game-field/blue/1x1.png');
				purple2x6capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple3x6)) {
				purple3x6.setImage('img/game-field/blue/1x1.png');
				purple3x6capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple4x6)) {
				purple4x6.setImage('img/game-field/blue/1x1.png');
				purple4x6capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple5x6)) {
				purple5x6.setImage('img/game-field/blue/1x1.png');
				purple5x6capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple6x6)) {
				purple6x6.setImage('img/game-field/blue/1x1.png');
				purple6x6capture = true;
				tersBlue++;
			}			

			if(m.isPeekObject('LEFT', purple7x6)) {
				purple7x6.setImage('img/game-field/blue/1x1.png');
				purple7x6capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple8x6)) {
				purple8x6.setImage('img/game-field/blue/1x1.png');
				purple8x6capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple9x6)) {
				purple9x6.setImage('img/game-field/blue/1x1.png');
				purple9x6capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple10x6)) {
				purple10x6.setImage('img/game-field/blue/1x1.png');
				purple10x6capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple11x6)) {
				purple11x6.setImage('img/game-field/blue/1x1.png');
				purple11x6capture = true;
				tersBlue++;
			}
		};


		//======================================================[СЛОЙ 7]=====================================================

		purple1x7.draw();
		purple2x7.draw();
		purple3x7.draw();
		purple4x7.draw();				
		purple5x7.draw();
		purple6x7.draw();
		purple7x7.draw();
		purple8x7.draw();
		purple9x7.draw();
		purple10x7.draw();
		purple11x7.draw();

		if(going == true) {
			if(purple1x7capture == false) {
				if(m.isInObject(purple1x7)) {
					purple1x7.setImage('img/game-field/white/1x1.png');
				} else {
					purple1x7.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple2x7capture == false) {
				if(m.isInObject(purple2x7)) {
					purple2x7.setImage('img/game-field/white/1x1.png');
				} else {
					purple2x7.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple3x7capture == false) {
				if(m.isInObject(purple3x7)) {
					purple3x7.setImage('img/game-field/white/1x1.png');
				} else {
					purple3x7.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple4x7capture == false) {
				if(m.isInObject(purple4x7)) {
					purple4x7.setImage('img/game-field/white/1x1.png');
				} else {
					purple4x7.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple5x7capture == false) {
				if(m.isInObject(purple5x7)) {
					purple5x7.setImage('img/game-field/white/1x1.png');
				} else {
					purple5x7.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple6x7capture == false) {
				if(m.isInObject(purple6x7)) {
					purple6x7.setImage('img/game-field/white/1x1.png');
				} else {
					purple6x7.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple7x7capture == false) {
				if(m.isInObject(purple7x7)) {
					purple7x7.setImage('img/game-field/white/1x1.png');
				} else {
					purple7x7.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple8x7capture == false) {
				if(m.isInObject(purple8x7)) {
					purple8x7.setImage('img/game-field/white/1x1.png');
				} else {
					purple8x7.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple9x7capture == false) {
				if(m.isInObject(purple9x7)) {
					purple9x7.setImage('img/game-field/white/1x1.png');
				} else {
					purple9x7.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple10x7capture == false) {
				if(m.isInObject(purple10x7)) {
					purple10x7.setImage('img/game-field/white/1x1.png');
				} else {
					purple10x7.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple11x7capture == false) {
				if(m.isInObject(purple11x7)) {
					purple11x7.setImage('img/game-field/white/1x1.png');
				} else {
					purple11x7.setImage('img/game-field/purple/1x1.png');
				};
			};

			
			if(m.isPeekObject('LEFT', purple1x7)) {
				purple1x7.setImage('img/game-field/blue/1x1.png');
				purple1x7capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple2x7)) {
				purple2x7.setImage('img/game-field/blue/1x1.png');
				purple2x7capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple3x7)) {
				purple3x7.setImage('img/game-field/blue/1x1.png');
				purple3x7capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple4x7)) {
				purple4x7.setImage('img/game-field/blue/1x1.png');
				purple4x7capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple5x7)) {
				purple5x7.setImage('img/game-field/blue/1x1.png');
				purple5x7capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple6x7)) {
				purple6x7.setImage('img/game-field/blue/1x1.png');
				purple6x7capture = true;
				tersBlue++;
			}			

			if(m.isPeekObject('LEFT', purple7x7)) {
				purple7x7.setImage('img/game-field/blue/1x1.png');
				purple7x7capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple8x7)) {
				purple8x7.setImage('img/game-field/blue/1x1.png');
				purple8x7capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple9x7)) {
				purple9x7.setImage('img/game-field/blue/1x1.png');
				purple9x7capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple10x7)) {
				purple10x7.setImage('img/game-field/blue/1x1.png');
				purple10x7capture = true;
				tersBlue++;
			}

			if(m.isPeekObject('LEFT', purple11x7)) {
				purple11x7.setImage('img/game-field/blue/1x1.png');
				purple11x7capture = true;
				tersBlue++;
			}
		};


		//======================================================[СЛОЙ 8]=====================================================

		purple1x8.draw();
		purple2x8.draw();
		purple3x8.draw();
		purple4x8.draw();				
		purple5x8.draw();
		purple6x8.draw();
		purple7x8.draw();
		purple8x8.draw();
		purple9x8.draw();
		purple10x8.draw();
		purple11x8.draw();

		if(going == true) {
			if(purple1x8capture == false) {
				if(m.isInObject(purple1x8)) {
					purple1x8.setImage('img/game-field/white/1x1.png');
				} else {
					purple1x8.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple2x8capture == false) {
				if(m.isInObject(purple2x8)) {
					purple2x8.setImage('img/game-field/white/1x1.png');
				} else {
					purple2x8.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple3x8capture == false) {
				if(m.isInObject(purple3x8)) {
					purple3x8.setImage('img/game-field/white/1x1.png');
				} else {
					purple3x8.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple4x8capture == false) {
				if(m.isInObject(purple4x8)) {
					purple4x8.setImage('img/game-field/white/1x1.png');
				} else {
					purple4x8.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple5x8capture == false) {
				if(m.isInObject(purple5x8)) {
					purple5x8.setImage('img/game-field/white/1x1.png');
				} else {
					purple5x8.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple6x8capture == false) {
				if(m.isInObject(purple6x8)) {
					purple6x8.setImage('img/game-field/white/1x1.png');
				} else {
					purple6x8.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple7x8capture == false) {
				if(m.isInObject(purple7x8)) {
					purple7x8.setImage('img/game-field/white/1x1.png');
				} else {
					purple7x8.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple8x8capture == false) {
				if(m.isInObject(purple8x8)) {
					purple8x8.setImage('img/game-field/white/1x1.png');
				} else {
					purple8x8.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple9x8capture == false) {
				if(m.isInObject(purple9x8)) {
					purple9x8.setImage('img/game-field/white/1x1.png');
				} else {
					purple9x8.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple10x8capture == false) {
				if(m.isInObject(purple10x8)) {
					purple10x8.setImage('img/game-field/white/1x1.png');
				} else {
					purple10x8.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple11x8capture == false) {
				if(m.isInObject(purple11x8)) {
					purple11x8.setImage('img/game-field/white/1x1.png');
				} else {
					purple11x8.setImage('img/game-field/purple/1x1.png');
				};
			};

			
			if(m.isPeekObject('LEFT', purple1x8)) {
				purple1x8.setImage('img/game-field/blue/1x1.png');
				purple1x8capture = true;
				tersBlue++;			
			}

			if(m.isPeekObject('LEFT', purple2x8)) {
				purple2x8.setImage('img/game-field/blue/1x1.png');
				purple2x8capture = true;
				tersBlue++;			
			}

			if(m.isPeekObject('LEFT', purple3x8)) {
				purple3x8.setImage('img/game-field/blue/1x1.png');
				purple3x8capture = true;
				tersBlue++;			
			}

			if(m.isPeekObject('LEFT', purple4x8)) {
				purple4x8.setImage('img/game-field/blue/1x1.png');
				purple4x8capture = true;
				tersBlue++;			
			}

			if(m.isPeekObject('LEFT', purple5x8)) {
				purple5x8.setImage('img/game-field/blue/1x1.png');
				purple5x8capture = true;
				tersBlue++;			
			}

			if(m.isPeekObject('LEFT', purple6x8)) {
				purple6x8.setImage('img/game-field/blue/1x1.png');
				purple6x8capture = true;
				tersBlue++;			
			}			

			if(m.isPeekObject('LEFT', purple7x8)) {
				purple7x8.setImage('img/game-field/blue/1x1.png');
				purple7x8capture = true;
				tersBlue++;			
			}

			if(m.isPeekObject('LEFT', purple8x8)) {
				purple8x8.setImage('img/game-field/blue/1x1.png');
				purple8x8capture = true;
				tersBlue++;			
			}

			if(m.isPeekObject('LEFT', purple9x8)) {
				purple9x8.setImage('img/game-field/blue/1x1.png');
				purple9x8capture = true;
				tersBlue++;			
			}

			if(m.isPeekObject('LEFT', purple10x8)) {
				purple10x8.setImage('img/game-field/blue/1x1.png');
				purple10x8capture = true;
				tersBlue++;			
			}

			if(m.isPeekObject('LEFT', purple11x8)) {
				purple11x8.setImage('img/game-field/blue/1x1.png');
				purple11x8capture = true;
				tersBlue++;			
			}
		};


		//======================================================[СЛОЙ 9]=====================================================

		purple1x9.draw();
		purple2x9.draw();
		purple3x9.draw();
		purple4x9.draw();				
		purple5x9.draw();
		purple6x9.draw();
		purple7x9.draw();
		purple8x9.draw();
		purple9x9.draw();
		purple10x9.draw();
		purple11x9.draw();

		if(going == true) {
			if(purple1x9capture == false) {
				if(m.isInObject(purple1x9)) {
					purple1x9.setImage('img/game-field/white/1x1.png');
				} else {
					purple1x9.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple2x9capture == false) {
				if(m.isInObject(purple2x9)) {
					purple2x9.setImage('img/game-field/white/1x1.png');
				} else {
					purple2x9.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple3x9capture == false) {
				if(m.isInObject(purple3x9)) {
					purple3x9.setImage('img/game-field/white/1x1.png');
				} else {
					purple3x9.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple4x9capture == false) {
				if(m.isInObject(purple4x9)) {
					purple4x9.setImage('img/game-field/white/1x1.png');
				} else {
					purple4x9.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple5x9capture == false) {
				if(m.isInObject(purple5x9)) {
					purple5x9.setImage('img/game-field/white/1x1.png');
				} else {
					purple5x9.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple6x9capture == false) {
				if(m.isInObject(purple6x9)) {
					purple6x9.setImage('img/game-field/white/1x1.png');
				} else {
					purple6x9.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple7x9capture == false) {
				if(m.isInObject(purple7x9)) {
					purple7x9.setImage('img/game-field/white/1x1.png');
				} else {
					purple7x9.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple8x9capture == false) {
				if(m.isInObject(purple8x9)) {
					purple8x9.setImage('img/game-field/white/1x1.png');
				} else {
					purple8x9.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple9x9capture == false) {
				if(m.isInObject(purple9x9)) {
					purple9x9.setImage('img/game-field/white/1x1.png');
				} else {
					purple9x9.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple10x9capture == false) {
				if(m.isInObject(purple10x9)) {
					purple10x9.setImage('img/game-field/white/1x1.png');
				} else {
					purple10x9.setImage('img/game-field/purple/1x1.png');
				};
			};

			if(purple11x9capture == false) {
				if(m.isInObject(purple11x9)) {
					purple11x9.setImage('img/game-field/white/1x1.png');
				} else {
					purple11x9.setImage('img/game-field/purple/1x1.png');
				};
			};

			
			if(m.isPeekObject('LEFT', purple1x9)) {
				purple1x9.setImage('img/game-field/blue/1x1.png');
				purple1x9capture = true;
				tersBlue++;			
			}

			if(m.isPeekObject('LEFT', purple2x9)) {
				purple2x9.setImage('img/game-field/blue/1x1.png');
				purple2x9capture = true;
				tersBlue++;			
			}

			if(m.isPeekObject('LEFT', purple3x9)) {
				purple3x9.setImage('img/game-field/blue/1x1.png');
				purple3x9capture = true;
				tersBlue++;			
			}

			if(m.isPeekObject('LEFT', purple4x9)) {
				purple4x9.setImage('img/game-field/blue/1x1.png');
				purple4x9capture = true;
				tersBlue++;			
			}

			if(m.isPeekObject('LEFT', purple5x9)) {
				purple5x9.setImage('img/game-field/blue/1x1.png');
				purple5x9capture = true;
				tersBlue++;			
			}

			if(m.isPeekObject('LEFT', purple6x9)) {
				purple6x9.setImage('img/game-field/blue/1x1.png');
				purple6x9capture = true;
				tersBlue++;			
			}			

			if(m.isPeekObject('LEFT', purple7x9)) {
				purple7x9.setImage('img/game-field/blue/1x1.png');
				purple7x9capture = true;
				tersBlue++;			
			}

			if(m.isPeekObject('LEFT', purple8x9)) {
				purple8x9.setImage('img/game-field/blue/1x1.png');
				purple8x9capture = true;
				tersBlue++;			
			}

			if(m.isPeekObject('LEFT', purple9x9)) {
				purple9x9.setImage('img/game-field/blue/1x1.png');
				purple9x9capture = true;
				tersBlue++;			
			}

			if(m.isPeekObject('LEFT', purple10x9)) {
				purple10x9.setImage('img/game-field/blue/1x1.png');
				purple10x9capture = true;
				tersBlue++;			
			}

			if(m.isPeekObject('LEFT', purple11x9)) {
				purple11x9.setImage('img/game-field/blue/1x1.png');
				purple11x9capture = true;
				tersBlue++;			
			}
		};

		//===================================================================================================================

		if(going == false) {
			if(purple1x1capture == false)
				purple1x1.setImage('img/game-field/purple/1x1.png');
			if(purple2x1capture == false)
				purple2x1.setImage('img/game-field/purple/1x1.png');
			if(purple3x1capture == false)
				purple3x1.setImage('img/game-field/purple/1x1.png');
			if(purple4x1capture == false)
				purple4x1.setImage('img/game-field/purple/1x1.png');
			if(purple5x1capture == false)
				purple5x1.setImage('img/game-field/purple/1x1.png');
			if(purple6x1capture == false)
				purple6x1.setImage('img/game-field/purple/1x1.png');
			if(purple7x1capture == false)
				purple7x1.setImage('img/game-field/purple/1x1.png');
			if(purple8x1capture == false)
				purple8x1.setImage('img/game-field/purple/1x1.png');
			if(purple9x1capture == false)
				purple9x1.setImage('img/game-field/purple/1x1.png');
			if(purple10x1capture == false)
				purple10x1.setImage('img/game-field/purple/1x1.png');
			if(purple11x1capture == false)
				purple11x1.setImage('img/game-field/purple/1x1.png');			

			if(purple1x2capture == false)
				purple1x2.setImage('img/game-field/purple/1x1.png');
			if(purple2x2capture == false)
				purple2x2.setImage('img/game-field/purple/1x1.png');
			if(purple3x2capture == false)
				purple3x2.setImage('img/game-field/purple/1x1.png');
			if(purple4x2capture == false)
				purple4x2.setImage('img/game-field/purple/1x1.png');
			if(purple5x2capture == false)
				purple5x2.setImage('img/game-field/purple/1x1.png');
			if(purple6x2capture == false)
				purple6x2.setImage('img/game-field/purple/1x1.png');
			if(purple7x2capture == false)
				purple7x2.setImage('img/game-field/purple/1x1.png');
			if(purple8x2capture == false)
				purple8x2.setImage('img/game-field/purple/1x1.png');
			if(purple9x2capture == false)
				purple9x2.setImage('img/game-field/purple/1x1.png');
			if(purple10x2capture == false)
				purple10x2.setImage('img/game-field/purple/1x1.png');
			if(purple11x2capture == false)
				purple11x2.setImage('img/game-field/purple/1x1.png');	

			if(purple1x3capture == false)
				purple1x3.setImage('img/game-field/purple/1x1.png');
			if(purple2x3capture == false)
				purple2x3.setImage('img/game-field/purple/1x1.png');
			if(purple3x3capture == false)
				purple3x3.setImage('img/game-field/purple/1x1.png');
			if(purple4x3capture == false)
				purple4x3.setImage('img/game-field/purple/1x1.png');
			if(purple5x3capture == false)
				purple5x3.setImage('img/game-field/purple/1x1.png');
			if(purple6x3capture == false)
				purple6x3.setImage('img/game-field/purple/1x1.png');
			if(purple7x3capture == false)
				purple7x3.setImage('img/game-field/purple/1x1.png');
			if(purple8x3capture == false)
				purple8x3.setImage('img/game-field/purple/1x1.png');
			if(purple9x3capture == false)
				purple9x3.setImage('img/game-field/purple/1x1.png');
			if(purple10x3capture == false)
				purple10x3.setImage('img/game-field/purple/1x1.png');
			if(purple11x3capture == false)
				purple11x3.setImage('img/game-field/purple/1x1.png');

			if(purple1x4capture == false)
				purple1x4.setImage('img/game-field/purple/1x1.png');
			if(purple2x4capture == false)
				purple2x4.setImage('img/game-field/purple/1x1.png');
			if(purple3x4capture == false)
				purple3x4.setImage('img/game-field/purple/1x1.png');
			if(purple4x4capture == false)
				purple4x4.setImage('img/game-field/purple/1x1.png');
			if(purple5x4capture == false)
				purple5x4.setImage('img/game-field/purple/1x1.png');
			if(purple6x4capture == false)
				purple6x4.setImage('img/game-field/purple/1x1.png');
			if(purple7x4capture == false)
				purple7x4.setImage('img/game-field/purple/1x1.png');
			if(purple8x4capture == false)
				purple8x4.setImage('img/game-field/purple/1x1.png');
			if(purple9x4capture == false)
				purple9x4.setImage('img/game-field/purple/1x1.png');
			if(purple10x4capture == false)
				purple10x4.setImage('img/game-field/purple/1x1.png');
			if(purple11x4capture == false)
				purple11x4.setImage('img/game-field/purple/1x1.png');

			if(purple2x5capture == false)
				purple2x5.setImage('img/game-field/purple/1x1.png');
			if(purple3x5capture == false)
				purple3x5.setImage('img/game-field/purple/1x1.png');
			if(purple4x5capture == false)
				purple4x5.setImage('img/game-field/purple/1x1.png');
			if(purple5x5capture == false)
				purple5x5.setImage('img/game-field/purple/1x1.png');
			if(purple6x5capture == false)
				purple6x5.setImage('img/game-field/purple/1x1.png');
			if(purple7x5capture == false)
				purple7x5.setImage('img/game-field/purple/1x1.png');
			if(purple8x5capture == false)
				purple8x5.setImage('img/game-field/purple/1x1.png');
			if(purple9x5capture == false)
				purple9x5.setImage('img/game-field/purple/1x1.png');
			if(purple10x5capture == false)
				purple10x5.setImage('img/game-field/purple/1x1.png');

			if(purple1x6capture == false)
				purple1x6.setImage('img/game-field/purple/1x1.png');
			if(purple2x6capture == false)
				purple2x6.setImage('img/game-field/purple/1x1.png');
			if(purple3x6capture == false)
				purple3x6.setImage('img/game-field/purple/1x1.png');
			if(purple4x6capture == false)
				purple4x6.setImage('img/game-field/purple/1x1.png');
			if(purple5x6capture == false)
				purple5x6.setImage('img/game-field/purple/1x1.png');
			if(purple6x6capture == false)
				purple6x6.setImage('img/game-field/purple/1x1.png');
			if(purple7x6capture == false)
				purple7x6.setImage('img/game-field/purple/1x1.png');
			if(purple8x6capture == false)
				purple8x6.setImage('img/game-field/purple/1x1.png');
			if(purple9x6capture == false)
				purple9x6.setImage('img/game-field/purple/1x1.png');
			if(purple10x6capture == false)
				purple10x6.setImage('img/game-field/purple/1x1.png');
			if(purple11x6capture == false)
				purple11x6.setImage('img/game-field/purple/1x1.png');

			if(purple1x7capture == false)
				purple1x7.setImage('img/game-field/purple/1x1.png');
			if(purple2x7capture == false)
				purple2x7.setImage('img/game-field/purple/1x1.png');
			if(purple3x7capture == false)
				purple3x7.setImage('img/game-field/purple/1x1.png');
			if(purple4x7capture == false)
				purple4x7.setImage('img/game-field/purple/1x1.png');
			if(purple5x7capture == false)
				purple5x7.setImage('img/game-field/purple/1x1.png');
			if(purple6x7capture == false)
				purple6x7.setImage('img/game-field/purple/1x1.png');
			if(purple7x7capture == false)
				purple7x7.setImage('img/game-field/purple/1x1.png');
			if(purple8x7capture == false)
				purple8x7.setImage('img/game-field/purple/1x1.png');
			if(purple9x7capture == false)
				purple9x7.setImage('img/game-field/purple/1x1.png');
			if(purple10x7capture == false)
				purple10x7.setImage('img/game-field/purple/1x1.png');
			if(purple11x7capture == false)
				purple11x7.setImage('img/game-field/purple/1x1.png');

			if(purple1x8capture == false)
				purple1x8.setImage('img/game-field/purple/1x1.png');
			if(purple2x8capture == false)
				purple2x8.setImage('img/game-field/purple/1x1.png');
			if(purple3x8capture == false)
				purple3x8.setImage('img/game-field/purple/1x1.png');
			if(purple4x8capture == false)
				purple4x8.setImage('img/game-field/purple/1x1.png');
			if(purple5x8capture == false)
				purple5x8.setImage('img/game-field/purple/1x1.png');
			if(purple6x8capture == false)
				purple6x8.setImage('img/game-field/purple/1x1.png');
			if(purple7x8capture == false)
				purple7x8.setImage('img/game-field/purple/1x1.png');
			if(purple8x8capture == false)
				purple8x8.setImage('img/game-field/purple/1x1.png');
			if(purple9x8capture == false)
				purple9x8.setImage('img/game-field/purple/1x1.png');
			if(purple10x8capture == false)
				purple10x8.setImage('img/game-field/purple/1x1.png');
			if(purple11x8capture == false)
				purple11x8.setImage('img/game-field/purple/1x1.png');

			if(purple1x9capture == false)
				purple1x9.setImage('img/game-field/purple/1x1.png');
			if(purple2x9capture == false)
				purple2x9.setImage('img/game-field/purple/1x1.png');
			if(purple3x9capture == false)
				purple3x9.setImage('img/game-field/purple/1x1.png');
			if(purple4x9capture == false)
				purple4x9.setImage('img/game-field/purple/1x1.png');
			if(purple5x9capture == false)
				purple5x9.setImage('img/game-field/purple/1x1.png');
			if(purple6x9capture == false)
				purple6x9.setImage('img/game-field/purple/1x1.png');
			if(purple7x9capture == false)
				purple7x9.setImage('img/game-field/purple/1x1.png');
			if(purple8x9capture == false)
				purple8x9.setImage('img/game-field/purple/1x1.png');
			if(purple9x9capture == false)
				purple9x9.setImage('img/game-field/purple/1x1.png');
			if(purple10x9capture == false)
				purple10x9.setImage('img/game-field/purple/1x1.png');
			if(purple11x9capture == false)
				purple11x9.setImage('img/game-field/purple/1x1.png');
		};
	};
	this.entry = function () {
		
	};
};