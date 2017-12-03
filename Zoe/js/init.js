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

var res1Event = '';
var res2Event = '';

var addResEvent = function(count,res){
	if(res == 1){
		res1Event = '<b style="color:red;" class="ml-1">-'+count+'</b>';
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
					<td class="float-right hover mx-2" style="margin-top:5px;">
						<img class="res" width="20" height="20" src="img/icons/plus-circle.png">
					</td>
					<td class="float-right hover" style="margin-top:5px;">
						`+res2+` <img class="res" width="30" height="30" src="img/Environment/res2.png">
						`+res1Event+`
					</td>
					<td class="float-right hover" style="margin-top:5px;">
						`+res1+` <img class="res" width="30" height="30" src="img/Environment/res1.png">
						`+res1Event+`
					</td>
				</tr>
			</table>
		`;
		setTimeout(function(){
			res1Event = '';
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
						<td class="float-right hover mx-2" style="margin-top:5px;">
							<img class="res" width="20" height="20" src="img/icons/plus-circle.png">
						</td>
						<td class="float-right hover" style="margin-top:5px;">
							`+res2+` <img class="res" width="30" height="30" src="img/Environment/res2.png">
							`+res1Event+`
						</td>
						<td class="float-right hover" style="margin-top:5px;">
							`+res1+` <img class="res" width="30" height="30" src="img/Environment/res1.png">
							`+res1Event+`
						</td>
					</tr>
				</table>
			`;
		}, 5000);
	} else if(res == 2){
		res2Event = '<b style="color:red;" class="ml-1">-'+count+'</b>';
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
					<td class="float-right hover mx-2" style="margin-top:5px;">
						<img class="res" width="20" height="20" src="img/icons/plus-circle.png">
					</td>
					<td class="float-right hover" style="margin-top:5px;">
						`+res2+` <img class="res" width="30" height="30" src="img/Environment/res2.png">
						`+res1Event+`
					</td>
					<td class="float-right hover" style="margin-top:5px;">
						`+res1+` <img class="res" width="30" height="30" src="img/Environment/res1.png">
						`+res1Event+`
					</td>
				</tr>
			</table>
		`;
		setTimeout(function(){
			res2Event = '';
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
						<td class="float-right hover mx-2" style="margin-top:5px;">
							<img class="res" width="20" height="20" src="img/icons/plus-circle.png">
						</td>
						<td class="float-right hover" style="margin-top:5px;">
							`+res2+` <img class="res" width="30" height="30" src="img/Environment/res2.png">
							`+res1Event+`
						</td>
						<td class="float-right hover" style="margin-top:5px;">
							`+res1+` <img class="res" width="30" height="30" src="img/Environment/res1.png">
							`+res1Event+`
						</td>
					</tr>
				</table>
			`;
		}, 5000);
	}
}

var day = 1;

var res1 = 500;
var res2 = 100;

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
			<td class="float-right hover mx-2" style="margin-top:5px;">
				<img class="res" width="20" height="20" src="img/icons/plus-circle.png">
			</td>
			<td class="float-right hover" style="margin-top:5px;">
				`+res2+` <img class="res" width="30" height="30" src="img/Environment/res2.png">
				`+res1Event+`
			</td>
			<td class="float-right hover" style="margin-top:5px;">
				`+res1+` <img class="res" width="30" height="30" src="img/Environment/res1.png">
				`+res1Event+`
			</td>
		</tr>
	</table>
`;

var progress = 1;
setInterval(function(){
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
					<td class="float-right hover mx-2" style="margin-top:5px;">
						<img class="res" width="20" height="20" src="img/icons/plus-circle.png">
					</td>
					<td class="float-right hover" style="margin-top:5px;">
						`+res2+` <img class="res" width="30" height="30" src="img/Environment/res2.png">
						`+res1Event+`
					</td>
					<td class="float-right hover" style="margin-top:5px;">
						`+res1+` <img class="res" width="30" height="30" src="img/Environment/res1.png">
						`+res1Event+`
					</td>
				</tr>
			</table>
		`;
	} else {
		progress += 0.5;
	}
}, 100);

if(res1Event || res2Event){
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
				<td class="float-right hover mx-2" style="margin-top:5px;">
					<img class="res" width="20" height="20" src="img/icons/plus-circle.png">
				</td>
				<td class="float-right hover" style="margin-top:5px;">
					`+res2+` <img class="res" width="30" height="30" src="img/Environment/res2.png">
					`+res1Event+`
				</td>
				<td class="float-right hover" style="margin-top:5px;">
					`+res1+` <img class="res" width="30" height="30" src="img/Environment/res1.png">
					`+res1Event+`
				</td>
			</tr>
		</table>
	`;
}

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

var version = pjs.system.newDOM('div', true);
version.className = 'version';
version.innerHTML = `
	beta 0.1.6.9
`;

var randpos1;
var randpos2;
var randpos3;
var randpos4;
var randpos5;
var randpos6;
var randpos7;
var randpos8;
var randpos9;
var randpos10;
var randpos11;
var randpos12;

setInterval(function(){
	randpos1 = pjs.math.random(-20,20);
	randpos2 = pjs.math.random(-20,20);
	randpos3 = pjs.math.random(-20,20);
	randpos4 = pjs.math.random(-20,20);
	randpos5 = pjs.math.random(-20,20);
	randpos6 = pjs.math.random(-20,20);
	randpos7 = pjs.math.random(-20,20);
	randpos8 = pjs.math.random(-20,20);
	randpos9 = pjs.math.random(-20,20);
	randpos10 = pjs.math.random(-20,20);
	randpos11 = pjs.math.random(-20,20);
	randpos12 = pjs.math.random(-20,20);
}, 10000);