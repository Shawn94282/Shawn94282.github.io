var WIDTH = 1290;
var HEIGHT = 676; // 633 with spectate mode // 676 disabled spectate
var socket = io.connect();
var game = new Game('#arena', WIDTH, HEIGHT, socket);
var selectedTank = 1;
var tankName = '';

socket.on('addTank', function(tank){
	game.addTank(tank.id, tank.type, tank.isLocal, tank.x, tank.y);
});

socket.on('disconnectedLog', function(tankId){
	game.disconnectedLog(tankId);
});

socket.on('sync', function(gameServerData){
	game.receiveData(gameServerData);
});

socket.on('killTank', function(tankData){
	game.killTank(tankData);
});

socket.on('removeTank', function(tankId){
	game.removeTank(tankId);
});

socket.on('chatMessage', function(data){
	game.chatMessage(data.user, data.msg);
});

$(document).ready( function(){

	$('#top').hide();
	$('#chat-send').hide();

	$('#join').click( function(){
		tankName = $('#tank-name').val();
		joinGame(tankName, selectedTank, socket);
	});

	$('#chat-send').click( function(){
		tankName = $('#tank-name').val();
		alertify.prompt( 'New message', 'Enter your message here:', '', function(evt, value) {
			var message = value;
			//var regexp = /^[a-z\s]+$/i;
			//if(regexp.test(this.val()))
				sendChatMessage(tankName, message);
		}, function(){
			return;
		});
	});

	$('#spec').click( function(){
		$('#prompt').hide();
		$('#top').show();
	});

	$('#back').click( function(){
		$('#top').hide();
		$('#prompt').show();
	});

	$('#tank-name').keyup( function(e){
		tankName = $('#tank-name').val();
		tankName = tankName.replace(/\s/g,'')=='';
		var k = e.keyCode || e.which;
		if(k == 13){
			joinGame(tankName, selectedTank, socket);
		}
	});

	$('ul.tank-selection li').click( function(){
		$('.tank-selection li').removeClass('selected')
		$(this).addClass('selected');
		selectedTank = $(this).data('tank');
	});

});

$(window).on('beforeunload', function(){
	socket.emit('leaveGame', tankName);
});

function joinGame(tankName, tankType, socket){
	if(tankName != ''){
		$('#prompt').hide();
		$('#chat-send').show();
		socket.emit('joinGame', {id: tankName, type: tankType});
	}
}

function sendChatMessage(tankName, message){
	if(message != ''){
		socket.emit('chatMessage', {user: tankName, msg: message});
	}
}