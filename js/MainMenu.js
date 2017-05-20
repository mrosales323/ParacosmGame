
var PlayButton;
var cursor;


var MainMenu=function(game){
	console.log("Loading My Main Menu");
};

MainMenu.prototype.preload=function(){
	console.log("Loading Main Menu Assets. Yum");
}


MainMenu.prototype.create=function(){
 
	// PlayButton= game.add.button(game.world.centerX - 95, 400, 'PlayButton', actionOnClick, this, 2, 1, 0);
	var PlayButton = game.add.sprite(game.world.centerX, game.world.centerY, 'PlayButton');
	// PlayButton.onInputOver.add(over, this);
	PlayButton.inputEnabled=true;
	PlayButton.events.onInputDown.add(actionOnClick, this);

	cursor= game.add.sprite(0,0,"cursor");
	cursor.scale.setTo(15,15);

	cursor.smoothed=false;
	console.log("HELP ME");
}

//bugged code
MainMenu.prototype.update=function(){
	
	cursor.x=game.input.x;
	cursor.y=game.input.y;
}

MainMenu.prototype.render=function(){

}


function actionOnClick () {

    game.state.start("main");

}

function over(){
	console.log("WTF22222");
	///this.game.canvas.style.cursor = "none";
}