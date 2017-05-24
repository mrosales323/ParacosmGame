var confirmNameButton;
var confirmNameButtonText;

var namefield;

var nameSelectionMenu=function(frame){
//Phaser.Sprite.call(this,game, 0,0,"cursor",frame);

};


 nameSelectionMenu.prototype.preload=function(){

}


nameSelectionMenu.prototype.create=function(){
 
console.log("Enterthe name menu");

	 namefield = game.add.inputField(game.world.centerX*.975, game.world.centerY*.7, {
    font: '18px Arial',
    fill: '#212121',
    fontWeight: 'bold',
    width: 150,
    padding: 8,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 6,
    placeHolder: 'Your name here',
    type: PhaserInput.InputType.text
});

	confirmNameButton = game.add.sprite(game.world.centerX, game.world.centerY, 'BlankButton');

    var confirmNameButtonStyle = { font: "16px Arial", fill: "#ff0044", wordWrap: true, wordWrapWidth: confirmNameButton.width, align: "center" };
    confirmNameButtonText = game.add.text(confirmNameButton.centerX*.925, confirmNameButton.centerY*.95, "Confirm Name", confirmNameButtonStyle);

   var playerSprite= game.add.sprite(game.world.centerX*1.05,game.world.centerY*1.5,"Player");
   playerSprite.scale.setTo(.4,.4);
  
    confirmNameButton.inputEnabled=true;
    confirmNameButton.events.onInputDown.add(this.actionOnClick, this);

	cursor= game.add.sprite(0,0,"cursor");
	cursor.scale.setTo(5,5);
	//cursor.anchor(0.5,0.5);
	cursor.smoothed=false;

}


nameSelectionMenu.prototype.update=function(){
	cursor.x=game.input.x;
	cursor.y=game.input.y;
}

nameSelectionMenu.prototype.render=function(){

}

nameSelectionMenu.prototype.actionOnClick=function(){
if(namefield.value.toString()=="") return;
playerName=namefield.value.toString();
console.log(playerName);
game.state.start("DaySelectionMenu");

}