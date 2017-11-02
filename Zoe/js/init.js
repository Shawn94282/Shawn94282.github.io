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

var tileStats = pjs.system.newDOM('div', true);
tileStats.className = 'tileStats';

var version = pjs.system.newDOM('div', true);
version.className = 'version';
version.innerHTML = `
	beta 0.1.3.5
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