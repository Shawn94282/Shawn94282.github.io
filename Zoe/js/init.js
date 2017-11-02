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

var day = 1;

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

var toBuild;

var bottomPanelUI = pjs.system.newDOM('div', true);
bottomPanelUI.className = 'bottomPanelUI';
bottomPanelUI.innerHTML = `
	<table>
		<tr class="bottomPanelUItr">
			<td onclick="UIStats()">
				Статистика
			</td>
			<td onclick="UIPopulation()">
				Население
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

var topPanelUI = pjs.system.newDOM('div', true);
topPanelUI.className = 'topPanelUI';
topPanelUI.innerHTML = `
	<table>
		<tr class="topPanelUItr">
			<td class="day">
				День `+day+`
			</td>
			<td class="time">
				`+date+`
				<div class="timeprogress-back">
				<div id="timeprogress" class="timeprogress">
				</div>
			</td>
		</tr>
	</table>
`;

var progress = 0.1;
setInterval(function(){
	var timeprogress = document.getElementById('timeprogress');
	timeprogress.style = "width:"+progress+"px;";
	if(progress > 109){
		progress = 0.1;
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
				<tr class="topPanelUItr">
					<td class="day">
						День `+day+`
					</td>
					<td class="time">
						`+date+`
						<div class="timeprogress-back">
						<div id="timeprogress" class="timeprogress" style="width:`+progress+`px;">
						</div>
					</td>
				</tr>
			</table>
		`;
	} else {
		progress += 0.1;
	}
}, 100);

var tileStats = pjs.system.newDOM('div', true);
tileStats.className = 'tileStats';

var version = pjs.system.newDOM('div', true);
version.className = 'version';
version.innerHTML = `
	beta 0.1.3.7
`;

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