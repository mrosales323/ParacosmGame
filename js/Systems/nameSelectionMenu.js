var confirmNameButton;
var confirmNameButtonText;

var namefield;

var nameSelectionMenu=function(frame){
//Phaser.Sprite.call(this,game, 0,0,"cursor",frame);

};


 nameSelectionMenu.prototype.preload=function(){

}


nameSelectionMenu.prototype.create=function(){
 
	 namefield = game.add.inputField(game.world.centerX*.975, game.world.centerY*.7, {
    font: '18px Arial',
    fill: '#212121',
    fontWeight: 'bold',
    width: 150,
    padding: 8,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 6,
    placeHolder: 'Input Field',
    type: PhaserInput.InputType.text
});

	confirmNameButton = game.add.sprite(game.world.centerX, game.world.centerY, 'BlankButton');

    var confirmNameButtonStyle = { font: "32px Arial", fill: "#ff0044", wordWrap: true, wordWrapWidth: confirmNameButton.width, align: "center" };
    confirmNameButtonText = game.add.text(confirmNameButton.centerX*.95, PlayButton.centerY*.95, "Confirm Name", confirmNameButtonStyle);
  
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
playerName=namefield.value.toString();
console.log(playerName);
game.state.start("main");

}