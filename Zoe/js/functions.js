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
					<b style="color:red;">ВКЛЮЧЕН РЕЖИМ РАЗРАБОТЧИКА! ВСЕ БЕСПЛАТНО!</b><br><br>
					<div class="panelBuilding" style="text-align:center;" onclick="res1 = res1 + 100; UIResClose();">
						<div class="build" style="text-align: center; display:block;">
							<img width="50" height="50" src="img/Environment/res1.png">
						</div>
						<div class="info" style="text-align: center;">
							<p>Сталь</p>
							<hr class="white">
							<p>100 - 1 голос</p>
							<p>300 - 3 голоса</p>
							<p>500 - 5 голосов</p>
							<p>1000 - 10 голосов</p>
							<p>2500 - 25 голосов</p>
						</div>
					</div>
					<div class="panelBuilding" style="text-align:center;" onclick="res2 = res2 + 100; UIResClose();">
						<div class="build" style="text-align: center; display:block;">
							<img width="50" height="50" src="img/Environment/res2.png">
						</div>
						<div class="info" style="text-align: center;">
							<p>Биопластик</p>
							<hr class="white">
							<p>100 - 1 голос</p>
							<p>300 - 3 голоса</p>
							<p>500 - 5 голосов</p>
							<p>1000 - 10 голосов</p>
							<p>2500 - 25 голосов</p>
						</div>
					</div>
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

var showMenu = function(){
	if(game_planet_loop == true){
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
	} else if(menu_loop == true){
		menu.innerHTML = `
			<div class="menu-back">
				<div class="animated fadeIn">
					<div class="menu-panel" onclick="menu_loop = false; game_planet_loop = true; showMenu(); game.setLoop('game_planet'); menu.innerHTML = ''; topPanelUI.innerHTML = ''; return true;">[ Глава 2 ]<br>Продолжить</div>
					<div class="menu-panel" onclick="showShop();">Магазин</div>
					<div class="menu-panel">Помощь</div>
					<div class="menu-panel">Настройки</div>
					<div class="menu-panel">Группа игры</div>
					<div class="menu-panel">Разработчики</div>
					<div class="menu-version">beta 0.2.5</div>
				</div>
			</div>
		`;
		topPanelUI.innerHTML = `
			<table>
				<tr class="topPanelUItr clearfix" style="width:840px;">
					<td class="day float-left" style="margin-top:5px;">
						<img class="res" width="20" height="20" src="img/icons/user.png">
					</td>
					<td class="day float-left" style="margin-top:5px;margin-left:-10px;">
						Тестер 1
					</td>
					<td class="time float-left">
						2 уровень
						<div class="timeprogress-back">
						<div id="timeprogress" class="timeprogress" style="width:40px;">
						</div>
					</td>
					<td class="float-right hover mx-2" style="margin-top:5px;" onclick="UIRes()">
						<img class="res" width="20" height="20" src="img/icons/plus-circle.png">
					</td>
					<td class="float-right hover" style="margin-top:5px;">
						121 <img class="res" style="margin-left:1px;margin-right:1px;" width="20" height="20" src="img/icons/money32.png">
					</td>
					<td class="float-right hover" style="margin-top:5px;">
						5141 <img class="res" style="margin-left:1px;margin-right:1px;" width="15" height="15" src="img/icons/coin32.png">
					</td>
				</tr>
			</table>
		`;
	}
}

var showShop = function(){
	if(menu_loop){
		menu.innerHTML = `
			<div class="menu-back" style="padding-top:50px;">
				<div class="animated fadeIn">
					<div class="menu-header">
						<div class="header-back" onclick="showMenu();">Назад</div>
						<div class="header">Магазин</div>
					</div>
					<div style="margin-top:5px;height:400px;overflow:auto;width:450px;margin-left:auto;margin-right:auto;">
						<div style="display:flex;width:435px;margin-top:5px;margin-left:auto;margin-right:auto;">
							<div class="shop-pack" style="width:212.5px;margin-right:5px;float:left;">
								Обычный бустерпак <br>[ Глава 2 ]<br><br>
								Может выпасть:<br>
								<ul>
									<li>0-100 стали</li>
									<li>0-200 биопластика</li>
									<li>0-300 руды</li>
									<li>2 инженера/биолога/рабочего/военного</li>
								</ul>
								<br>
								1000 <img class="res" style="margin-left:1px;margin-right:1px;" width="15" height="15" src="img/icons/coin32.png">
							</div>
							<div class="shop-pack-primary" style="width:212.5px;float:right;">
								Редкий бустерпак <br>[ Глава 2 ]<br><br>
								Может выпасть:<br>
								<ul>
									<li>100-200 стали</li>
									<li>200-500 биопластика</li>
									<li>300-600 руды</li>
									<li>4 инженера/биолога/рабочего/военного</li>
								</ul>
								<br>
								50 <img class="res" style="margin-left:1px;margin-right:1px;" width="20" height="20" src="img/icons/money32.png">
							</div>
						</div>
						<div style="display:flex;width:435px;margin-top:5px;margin-left:auto;margin-right:auto;">
							<div class="shop-pack-warning" style="width:212.5px;margin-right:5px;float:left;">
								Легендарный бустерпак <br>[ Глава 2 ]<br><br>
								Может выпасть:<br>
								<ul>
									<li>200-400 стали</li>
									<li>500-1000 биопластика</li>
									<li>600-1200 руды</li>
									<li>8 инженера/биолога/рабочего/военного</li>
								</ul>
								<br>
								100 <img class="res" style="margin-left:1px;margin-right:1px;" width="20" height="20" src="img/icons/money32.png">
							</div>
							<div class="shop-pack-danger" style="width:212.5px;float:right;">
								Тестерский бустерпак <br>[ Глава 2 ]<br><br>
								Может выпасть:<br>
								<ul>
									<li>0-400 стали</li>
									<li>0-1000 биопластика</li>
									<li>0-1200 руды</li>
									<li>0-8 инженера/биолога/рабочего/военного</li>
								</ul>
								<br>
								1 <img class="res" style="margin-left:1px;margin-right:1px;" width="20" height="20" src="img/icons/money32.png">
							</div>
						</div>
					</div>
				</div>
			</div>
		`;
		topPanelUI.innerHTML = `
			<table>
				<tr class="topPanelUItr clearfix" style="width:840px;">
					<td class="day float-left" style="margin-top:5px;">
						<img class="res" width="20" height="20" src="img/icons/user.png">
					</td>
					<td class="day float-left" style="margin-top:5px;margin-left:-10px;">
						Тестер 1
					</td>
					<td class="time float-left">
						2 уровень
						<div class="timeprogress-back">
						<div id="timeprogress" class="timeprogress" style="width:40px;">
						</div>
					</td>
					<td class="float-right hover mx-2" style="margin-top:5px;" onclick="UIRes()">
						<img class="res" width="20" height="20" src="img/icons/plus-circle.png">
					</td>
					<td class="float-right hover" style="margin-top:5px;">
						121 <img class="res" style="margin-left:1px;margin-right:1px;" width="20" height="20" src="img/icons/money32.png">
					</td>
					<td class="float-right hover" style="margin-top:5px;">
						5141 <img class="res" style="margin-left:1px;margin-right:1px;" width="15" height="15" src="img/icons/coin32.png">
					</td>
				</tr>
			</table>
		`;
	}
}

showMenu();

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
		}, 5000);
	}
}