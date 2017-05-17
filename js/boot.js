
var game = new Phaser.Game(1280, 720, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload(){

	this.game.load.image("cursor","assets/img/cursor.png");

	this.game.load.image('ship','assets/img/ship.png');
	this.game.load.image("tier1Button","assets/img/Buttons/buttonTier1.png");
	this.game.load.image("masterClickButton","assets/img/Buttons/buttonTier1.png");
	this.game.load.image("Player","assets/img/Player/player.png");
	this.game.load.image("DialogueBox","assets/img/Displays/DialogueBox.png");
	this.game.load.image("PortraitBox","assets/img/Displays/PortraitBox.png");
	this.game.load.image("NameTagBox","assets/img/Displays/NameTagBox.png");


	this.game.load.image("JoshFlower","assets/img/tiles/aSmallFlower.png");



	this.game.load.image("BlankButton","assets/img/MainMenu/Buttons/PlayButton.png");

	game.load.audio("Town1",["assets/audio/BGM/Town1.m4a","assets/audio/BGM/Town1.mp3","assets/audio/BGM/Town1.wav"]);

	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;  
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.scale.refresh();


}


function create(){
	game.add.plugin(PhaserInput.Plugin);


	console.log("Booting up v3");
	game.state.add("main",main);
	game.state.add("nameSelectionMenu",nameSelectionMenu);
	game.state.add("MainMenu",MainMenu);
	//game.state.add("instructions",instructions);
	//game.state.add("credits",credits);
	//game.state.add("main",main);
	//game.state.add("gameOver",gameOver);
	game.state.start("MainMenu");

 
}


function update(){
	
}

function render(){

}

