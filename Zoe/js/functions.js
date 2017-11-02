var UIBuild = function(){
	panelUIStats.innerHTML = ``;
	panelUIPopulation.innerHTML = ``;
	panelUIRes.innerHTML = ``;
	UIBuildShow = true;
	panelUIBuild.innerHTML = `
		<div class="back-black" style="text-align:left;">
			Постройки
		</div>
		<div class="scoll back-black-03">
			<table>
				<tr class="bottomPanelUItr buildMenu">
					<td onclick="toBuild = 'str1'; UIBuildClose();">
						<div class="build" style="text-align: center; display:block;">
							<img width="50" height="50" src="img/Structure/str1.png">
						</div>
						<div class="info" style="text-align: center;">
							<p>Общежитие</p>
							<p>300 <img class="res" width="30" height="30" src="img/Environment/res1.png"></p>
							<p>40 <img class="res" width="30" height="30" src="img/Environment/res2.png"></p>
						</div>
					</td>
					<td onclick="toBuild = 'str2'; UIBuildClose();">
						<div class="build" style="text-align: center; display:block;">
							<img width="50" height="50" src="img/Structure/str2.png">
						</div>
						<div class="info" style="text-align: center;">
							<p>Генератор энергии</p>
							<p>75 <img class="res" width="30" height="30" src="img/Environment/res1.png"></p>
							<p>15 <img class="res" width="30" height="30" src="img/Environment/res2.png"></p>
						</div>
					</td>
					<td onclick="toBuild = 'str3'; UIBuildClose();">
						<div class="build" style="text-align: center; display:block;">
							<img width="50" height="50" src="img/Structure/str3.png">
						</div>
						<div class="info" style="text-align: center;">
							<p>Фабрика машин</p>
							<p>90 <img class="res" width="30" height="30" src="img/Environment/res1.png"></p>
							<p>30 <img class="res" width="30" height="30" src="img/Environment/res2.png"></p>
						</div>
					</td>
					<td onclick="toBuild = 'str4'; UIBuildClose();">
						<div class="build" style="text-align: center; display:block;">
							<img width="50" height="50" src="img/Structure/str4.png">
						</div>
						<div class="info" style="text-align: center;">
							<p>Казарма</p>
							<p>130 <img class="res" width="30" height="30" src="img/Environment/res1.png"></p>
							<p>30 <img class="res" width="30" height="30" src="img/Environment/res2.png"></p>
						</div>
					</td>
				</tr>
				<tr class="bottomPanelUItr buildMenu" style="margin-top: 8px;">
					<td onclick="toBuild = 'str5'; UIBuildClose();">
						<div class="build" style="text-align: center; display:block;">
							<img width="50" height="50" src="img/Structure/str5.png">
						</div>
						<div class="info" style="text-align: center;">
							<p>Производство стали</p>
							<p>250 <img class="res" width="30" height="30" src="img/Environment/res1.png"></p>
							<p>70 <img class="res" width="30" height="30" src="img/Environment/res2.png"></p>
						</div>
					</td>
					<td onclick="toBuild = 'str6'; UIBuildClose();">
						<div class="build" style="text-align: center; display:block;">
							<img width="50" height="50" src="img/Structure/str6.png">
						</div>
						<div class="info" style="text-align: center;">
							<p>Шахта</p>
							<p>60 <img class="res" width="30" height="30" src="img/Environment/res1.png"></p>
							<p>20 <img class="res" width="30" height="30" src="img/Environment/res2.png"></p>
						</div>
					</td>
					<td onclick="toBuild = 'str7'; UIBuildClose();">
						<div class="build" style="text-align: center; display:block;">
							<img width="50" height="50" src="img/Structure/str7.png">
						</div>
						<div class="info" style="text-align: center;">
							<p>Столовая</p>
							<p>120 <img class="res" width="30" height="30" src="img/Environment/res1.png"></p>
							<p>40 <img class="res" width="30" height="30" src="img/Environment/res2.png"></p>
						</div>
					</td>
					<td onclick="toBuild = 'str8'; UIBuildClose();">
						<div class="build" style="text-align: center; display:block;">
							<img width="50" height="50" src="img/Structure/str8.png">
						</div>
						<div class="info" style="text-align: center;">
							<p>Производство биопластика</p>
							<p>130 <img class="res" width="30" height="30" src="img/Environment/res1.png"></p>
							<p>30 <img class="res" width="30" height="30" src="img/Environment/res2.png"></p>
						</div>
					</td>
				</tr>
			</table>
		</div>
		<button id="dialogButton1" class="btn-green right" onclick="UIBuildClose();">Закрыть</button>
	`;
}

var UIBuildClose = function(){
	UIBuildShow = false;
	panelUIBuild.innerHTML = ``;
	panelUIStats.innerHTML = ``;
	panelUIPopulation.innerHTML = ``;
	panelUIRes.innerHTML = ``;
}

var UIStats = function(){
	panelUIBuild.innerHTML = ``;
	panelUIPopulation.innerHTML = ``;
	panelUIRes.innerHTML = ``;
	UIStatsShow = true;
	panelUIStats.innerHTML = `
		<div class="back-black" style="text-align:left;">
			Статистика
		</div>
		<div class="scoll back-black-03" style="padding:12px;">
			В разработке
		</div>
		<button id="dialogButton1" class="btn-green right" onclick="UIStatsClose();">Закрыть</button>
	`;
}

var UIStatsClose = function(){
	UIStatsShow = false;
	panelUIBuild.innerHTML = ``;
	panelUIStats.innerHTML = ``;
	panelUIPopulation.innerHTML = ``;
	panelUIRes.innerHTML = ``;
}

var UIPopulation = function(){
	panelUIBuild.innerHTML = ``;
	panelUIStats.innerHTML = ``;
	panelUIRes.innerHTML = ``;
	UIPopulationShow = true;
	panelUIStats.innerHTML = `
		<div class="back-black" style="text-align:left;">
			Население
		</div>
		<div class="scoll back-black-03" style="padding:12px;">
			В разработке
		</div>
		<button id="dialogButton1" class="btn-green right" onclick="UIPopulationClose();">Закрыть</button>
	`;
}

var UIPopulationClose = function(){
	UIPopulationShow = false;
	panelUIBuild.innerHTML = ``;
	panelUIStats.innerHTML = ``;
	panelUIPopulation.innerHTML = ``;
	panelUIRes.innerHTML = ``;
}

var UIRes = function(){
	panelUIBuild.innerHTML = ``;
	panelUIStats.innerHTML = ``;
	panelUIPopulation.innerHTML = ``;
	UIResShow = true;
	panelUIStats.innerHTML = `
		<div class="back-black" style="text-align:left;">
			Ресурсы
		</div>
		<div class="scoll back-black-03" style="padding:12px;">
			В разработке
		</div>
		<button id="dialogButton1" class="btn-green right" onclick="UIResClose();">Закрыть</button>
	`;
}

var UIResClose = function(){
	UIResShow = false;
	panelUIBuild.innerHTML = ``;
	panelUIStats.innerHTML = ``;
	panelUIPopulation.innerHTML = ``;
	panelUIRes.innerHTML = ``;
}