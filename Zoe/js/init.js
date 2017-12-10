var pjs = new PointJS(840, 480, {
	backgroundColor : '#bb6444'
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

var game_planet_loop = false;
var menu_loop = true;

var res1Event = '';
var res2Event = '';

var day = 1;

var res1 = 600;
var res2 = 200;
var res3 = 0;

var date_day = 1;
var date_mouth = 11;
var date_year = 6912;

var mothes =  [
	{
		"name": "Января"
	},
	{
		"name": "Февраля"
	},
	{
		"name": "Марта"
	},
	{
		"name": "Апреля"
	},
	{
		"name": "Мая"
	},
	{
		"name": "Июня"
	},
	{
		"name": "Июля"
	},
	{
		"name": "Августа"
	},
	{
		"name": "Сентября"
	},
	{
		"name": "Октября"
	},
	{
		"name": "Ноября"
	},
	{
		"name": "Декабря"
	}
];

var date = date_day+" "+mothes[date_mouth-1].name+" "+date_year;

var toBuild, toBuildFund;

var progress = 1;
setInterval(function(){
	if(game_planet_loop){
		var timeprogress = document.getElementById('timeprogress');
		timeprogress.style = "width:"+progress+"px;";
		if(progress > 109){
			progress = 1;
			day++;
			date_day++;
			date = date_day+" "+mothes[date_mouth-1].name+" "+date_year;
			if(date_day > 30){
				date_day = 0;
				if(date_mouth <= 11){
					date_mouth++;
				} else if(date_mouth == 12){
					date_mouth = 1;
					date_year++;
				}
			}
			topPanelUI.innerHTML = `
				<table>
					<tr class="topPanelUItr clearfix" style="width:840px;">
						<td class="day float-left" style="margin-top:5px;">
							День `+day+`
						</td>
						<td class="time float-left">
							`+date+`
							<div class="timeprogress-back">
							<div id="timeprogress" class="timeprogress" style="width:`+progress+`px;">
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
							`+res2Event+`
						</td>
						<td class="float-right hover" style="margin-top:5px;">
							`+Math.round(res1)+` <img class="res" width="30" height="30" src="img/Environment/res1.png">
							`+res1Event+`
						</td>
					</tr>
				</table>
			`;
		} else {
			progress += 0.5;
		}
	}
}, 200);

setInterval(function(){
	if(game_planet_loop){
		topPanelUI.innerHTML = `
			<table>
				<tr class="topPanelUItr clearfix" style="width:840px;">
					<td class="day float-left" style="margin-top:5px;">
						День `+day+`
					</td>
					<td class="time float-left">
						`+date+`
						<div class="timeprogress-back">
						<div id="timeprogress" class="timeprogress" style="width:`+progress+`px;">
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
						`+res2Event+`
					</td>
					<td class="float-right hover" style="margin-top:5px;">
						`+Math.round(res1)+` <img class="res" width="30" height="30" src="img/Environment/res1.png">
						`+res1Event+`
					</td>
				</tr>
			</table>
		`;
	}
},1000);

var topPanelUI = pjs.system.newDOM('div', true);
topPanelUI.className = 'topPanelUI';

var bottomPanelUI = pjs.system.newDOM('div', true);
bottomPanelUI.className = 'bottomPanelUI';

var tileStats = pjs.system.newDOM('div', true);
tileStats.className = 'tileStats';

var panelUIBuild = pjs.system.newDOM('div', true);
panelUIBuild.className = 'panelUIBuild';
var UIBuildShow = false;

var panelUIRes = pjs.system.newDOM('div', true);
panelUIRes.className = 'panelUIRes';
var UIResShow = false;

var panelUIPopulation = pjs.system.newDOM('div', true);
panelUIPopulation.className = 'panelUIPopulation';
var UIPopulationShow = false;

var panelUIStats = pjs.system.newDOM('div', true);
panelUIStats.className = 'panelUIStats';
var UIStatsShow = false;

var needsPanel = pjs.system.newDOM('div', true);
needsPanel.className = 'needsPanel';

var menu = pjs.system.newDOM('div', true);
menu.className = 'menu';

// var scene = pjs.system.newDOM('div', true);
// scene.className = 'scene';
// scene.innerHTML = `
// 	<div class="scene-back">
// 		<div class="scene-center">
// 			<img width="42" height="42" src="img/icons/plus-circle.png"><br>
// 			<h4>Глава 1: Начало</h4>
// 			<p>Успели выжить не все. Бой продолжается.</p>
// 		</div>
// 		<div class="scene-bottom">
// 			НАЖМИТЕ ЧТО БЫ ПРОДОЛЖИТЬ
// 		</div>
// 	</div>
// `;