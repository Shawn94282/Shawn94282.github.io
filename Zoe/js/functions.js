var UIBuild = function(){
	panelUIStats.innerHTML = ``;
	panelUIPopulation.innerHTML = ``;
	panelUIRes.innerHTML = ``;
	UIBuildShow = true;
	panelUIBuild.innerHTML = `
		<div class="panelBack">
			<div class="panel">
				<div class="tile" style="text-align:center;">
					<b>Постройки</b>
				</div>
				<div class="panelInfo" style="margin-top:4px;text-align:center;padding:12px;">
					<div class="panelBuilding" style="text-align:center;" onclick="toBuildFund = 'str1'; UIBuildClose(); checkRes();">
						<div class="build" style="text-align: center; display:block;">
							<img width="50" height="50" src="img/Structure/str1.png">
						</div>
						<div class="info" style="text-align: center;">
							<p>Общежитие</p>
							<hr class="white">
							<p>300 <img class="res" width="30" height="30" src="img/Environment/res1.png"></p>
							<p>40 <img class="res" width="30" height="30" src="img/Environment/res2.png"></p>
							<hr class="white">
							Нужно:<img class="need" width="17" height="17" src="img/energy.png"> <img class="need" width="17" height="17" src="img/water.png">
						</div>
					</div>
					<div class="panelBuilding" style="text-align:center;" onclick="toBuildFund = 'str2'; UIBuildClose(); checkRes();">
						<div class="build" style="text-align: center; display:block;">
							<img width="50" height="50" src="img/Structure/str2.png">
						</div>
						<div class="info" style="text-align: center;">
							<p>Генератор энергии</p>
							<hr class="white">
							<p>75 <img class="res" width="30" height="30" src="img/Environment/res1.png"></p>
							<p>15 <img class="res" width="30" height="30" src="img/Environment/res2.png"></p>
						</div>
					</div>
					<div class="panelBuilding" style="text-align:center;" onclick="toBuildFund = 'str3'; UIBuildClose(); checkRes();">
						<div class="build" style="text-align: center; display:block;">
							<img width="50" height="50" src="img/Structure/str3.png">
						</div>
						<div class="info" style="text-align: center;">
							<p>Фабрика машин</p>
							<hr class="white">
							<p>90 <img class="res" width="30" height="30" src="img/Environment/res1.png"></p>
							<p>30 <img class="res" width="30" height="30" src="img/Environment/res2.png"></p>
							<hr class="white">
							Нужно:<img class="need" width="17" height="17" src="img/energy.png"> <img class="need" width="17" height="17" src="img/water.png">
						</div>
					</div>
					<div class="panelBuilding" style="text-align:center;" onclick="toBuildFund = 'str4'; UIBuildClose(); checkRes();">
						<div class="build" style="text-align: center; display:block;">
							<img width="50" height="50" src="img/Structure/str4.png">
						</div>
						<div class="info" style="text-align: center;">
							<p>Казарма</p>
							<hr class="white">
							<p>130 <img class="res" width="30" height="30" src="img/Environment/res1.png"></p>
							<p>30 <img class="res" width="30" height="30" src="img/Environment/res2.png"></p>
							<hr class="white">
							Нужно:<img class="need" width="17" height="17" src="img/energy.png"> <img class="need" width="17" height="17" src="img/water.png">
						</div>
					</div>
					<div class="panelBuilding" style="text-align:center;" onclick="toBuildFund = 'str5'; UIBuildClose(); checkRes();">
						<div class="build" style="text-align: center; display:block;">
							<img width="50" height="50" src="img/Structure/str5.png">
						</div>
						<div class="info" style="text-align: center;">
							<p>Производство стали</p>
							<hr class="white">
							<p>250 <img class="res" width="30" height="30" src="img/Environment/res1.png"></p>
							<p>70 <img class="res" width="30" height="30" src="img/Environment/res2.png"></p>
							<hr class="white">
							Нужно:<img class="need" width="17" height="17" src="img/energy.png"> <img class="need" width="17" height="17" src="img/water.png">
						</div>
					</div>
					<div class="panelBuilding" style="text-align:center;" onclick="toBuildFund = 'str6'; UIBuildClose(); checkRes();">
						<div class="build" style="text-align: center; display:block;">
							<img width="50" height="50" src="img/Structure/str6.png">
						</div>
						<div class="info" style="text-align: center;">
							<p>Шахта</p>
							<hr class="white">
							<p>60 <img class="res" width="30" height="30" src="img/Environment/res1.png"></p>
							<p>20 <img class="res" width="30" height="30" src="img/Environment/res2.png"></p>
							<hr class="white">
							Нужно:<img class="need" width="17" height="17" src="img/energy.png"> <img class="need" width="17" height="17" src="img/water.png">
						</div>
					</div>
					<div class="panelBuilding" style="text-align:center;" onclick="toBuildFund = 'str7'; UIBuildClose(); checkRes();">
						<div class="build" style="text-align: center; display:block;">
							<img width="50" height="50" src="img/Structure/str7.png">
						</div>
						<div class="info" style="text-align: center;">
							<p>Столовая</p>
							<p>120 <img class="res" width="30" height="30" src="img/Environment/res1.png"></p>
							<p>40 <img class="res" width="30" height="30" src="img/Environment/res2.png"></p>
							<hr class="white">
							Нужно:<img class="need" width="17" height="17" src="img/energy.png"> <img class="need" width="17" height="17" src="img/water.png">
						</div>
					</div>
					<div class="panelBuilding" style="text-align:center;" onclick="toBuildFund = 'str8'; UIBuildClose(); checkRes();">
						<div class="build" style="text-align: center; display:block;">
							<img width="50" height="50" src="img/Structure/str8.png">
						</div>
						<div class="info" style="text-align: center;">
							<p>Производство биопластика</p>
							<hr class="white">
							<p>130 <img class="res" width="30" height="30" src="img/Environment/res1.png"></p>
							<p>30 <img class="res" width="30" height="30" src="img/Environment/res2.png"></p>
							<hr class="white">
							Нужно:<img class="need" width="17" height="17" src="img/energy.png">
						</div>
					</div>
					<div class="panelBuilding" style="text-align:center;" onclick="toBuildFund = 'str16'; UIBuildClose(); checkRes();">
						<div class="build" style="text-align: center; display:block;">
							<img width="50" height="50" src="img/Structure/str16.png">
						</div>
						<div class="info" style="text-align: center;">
							<p>Водонасосная станция</p>
							<hr class="white">
							<p>30 <img class="res" width="30" height="30" src="img/Environment/res1.png"></p>
							<p>5 <img class="res" width="30" height="30" src="img/Environment/res2.png"></p>
							<hr class="white">
							Нужно:<img class="need" width="17" height="17" src="img/energy.png">
						</div>
					</div>
				</div>
				<div class="key" style="margin-top:12px;text-align:center;">
					<span class="label label-white" onclick="UIBuildClose();">Закрыть</span>
				</div>
			</div>
		</div>
	`;
}

var checkRes = function(){
	if(toBuildFund == 'str1'){
		if(res1 < 300){
			alert('Не хватает ресурсов!'); toBuild = null;
		} else if(res2 < 40){
			alert('Не хватает ресурсов!'); toBuild = null;
		} else {
			res1 = res1 - 300;
			res2 = res2 - 40;
			addResEvent(300, 1);
			addResEvent(40, 2);
			toBuild = toBuildFund;
			toBuildFund = null;
		}
	}
	if(toBuildFund == 'str2'){
		if(res1 < 75){
			alert('Не хватает ресурсов!'); toBuild = null;
		} else if(res2 < 15){
			alert('Не хватает ресурсов!'); toBuild = null;
		} else {
			res1 = res1 - 75;
			res2 = res2 - 15;
			addResEvent(75, 1);
			addResEvent(15, 2);
			toBuild = toBuildFund;
			toBuildFund = null;
		}
	}
	if(toBuildFund == 'str3'){
		if(res1 < 90){
			alert('Не хватает ресурсов!'); toBuild = null;
		} else if(res2 < 30){
			alert('Не хватает ресурсов!'); toBuild = null;
		} else {
			res1 = res1 - 90;
			res2 = res2 - 30;
			addResEvent(90, 1);
			addResEvent(30, 2);
			toBuild = toBuildFund;
			toBuildFund = null;
		}
	}
	if(toBuildFund == 'str4'){
		if(res1 < 130){
			alert('Не хватает ресурсов!'); toBuild = null;
		} else if(res2 < 30){
			alert('Не хватает ресурсов!'); toBuild = null;
		} else {
			res1 = res1 - 130;
			res2 = res2 - 30;
			addResEvent(130, 1);
			addResEvent(30, 2);
			toBuild = toBuildFund;
			toBuildFund = null;
		}
	}
	if(toBuildFund == 'str5'){
		if(res1 < 250){
			alert('Не хватает ресурсов!'); toBuild = null;
		} else if(res2 < 70){
			alert('Не хватает ресурсов!'); toBuild = null;
		} else {
			res1 = res1 - 250;
			res2 = res2 - 70;
			addResEvent(250, 1);
			addResEvent(70, 2);
			toBuild = toBuildFund;
			toBuildFund = null;
		}
	}
	if(toBuildFund == 'str6'){
		if(res1 < 60){
			alert('Не хватает ресурсов!'); toBuild = null;
		} else if(res2 < 20){
			alert('Не хватает ресурсов!'); toBuild = null;
		} else {
			res1 = res1 - 60;
			res2 = res2 - 20;
			addResEvent(60, 1);
			addResEvent(20, 2);
			toBuild = toBuildFund;
			toBuildFund = null;
		}
	}
	if(toBuildFund == 'str7'){
		if(res1 < 120){
			alert('Не хватает ресурсов!'); toBuild = null;
		} else if(res2 < 40){
			alert('Не хватает ресурсов!'); toBuild = null;
		} else {
			res1 = res1 - 120;
			res2 = res2 - 40;
			addResEvent(120, 1);
			addResEvent(40, 2);
			toBuild = toBuildFund;
			toBuildFund = null;
		}
	}
	if(toBuildFund == 'str8'){
		if(res1 < 130){
			alert('Не хватает ресурсов!'); toBuild = null;
		} else if(res2 < 30){
			alert('Не хватает ресурсов!'); toBuild = null;
		} else {
			res1 = res1 - 130;
			res2 = res2 - 30;
			addResEvent(130, 1);
			addResEvent(30, 2);
			toBuild = toBuildFund;
			toBuildFund = null;
		}
	}
	if(toBuildFund == 'str16'){
		if(res1 < 30){
			alert('Не хватает ресурсов!'); toBuild = null;
		} else if(res2 < 5){
			alert('Не хватает ресурсов!'); toBuild = null;
		} else {
			res1 = res1 - 30;
			res2 = res2 - 5;
			addResEvent(30, 1);
			addResEvent(5, 2);
			toBuild = toBuildFund;
			toBuildFund = null;
		}
	}
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
		<div class="panelBack">
			<div class="panel">
				<div class="tile" style="text-align:center;">
					<b>Статистика</b>
				</div>
				<div class="panelInfo" style="margin-top:4px;text-align:center;padding:12px;">
					В разработке
				</div>
				<div class="key" style="margin-top:12px;text-align:center;">
					<span class="label label-white" onclick="UIStatsClose();">Закрыть</span>
				</div>
			</div>
		</div>
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
		<div class="panelBack">
			<div class="panel">
				<div class="tile" style="text-align:center;">
					<b>Население</b>
				</div>
				<div class="panelInfo" style="margin-top:4px;text-align:center;padding:12px;">
					В разработке
				</div>
				<div class="key" style="margin-top:12px;text-align:center;">
					<span class="label label-white" onclick="UIPopulationClose();">Закрыть</span>
				</div>
			</div>
		</div>
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
		<div class="panelBack">
			<div class="panel">
				<div class="tile" style="text-align:center;">
					<b>Ресурсы</b>
				</div>
				<div class="panelInfo" style="margin-top:4px;text-align:center;padding:12px;">
					В разработке
				</div>
				<div class="key" style="margin-top:12px;text-align:center;">
					<span class="label label-white" onclick="UIResClose();">Закрыть</span>
				</div>
			</div>
		</div>
	`;
}

var UIResClose = function(){
	UIResShow = false;
	panelUIBuild.innerHTML = ``;
	panelUIStats.innerHTML = ``;
	panelUIPopulation.innerHTML = ``;
	panelUIRes.innerHTML = ``;
}