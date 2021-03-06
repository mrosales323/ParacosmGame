var game = new Phaser.Game(1280, 736, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload(){

	this.game.load.image("cursor","assets/img/cursor.png");
	this.game.load.image('ship','assets/img/ship.png');

	this.game.load.spritesheet('Sandy','assets/img/Characters/npc1.png',19,18,6);
	this.game.load.image('Billy','assets/img/Characters/npc2.png');
	this.game.load.spritesheet('Alex','assets/img/Characters/npc3.png',13,21,6);
	this.game.load.spritesheet('Mayor','assets/img/Characters/npc3.png',13,21,6);
	this.game.load.image('Helen','assets/img/Characters/npc4.png');

	this.game.load.image("tier1Button","assets/img/Buttons/buttonTier1.png");
	this.game.load.image("masterClickButton","assets/img/Buttons/buttonTier1.png");
	this.game.load.spritesheet("Player","assets/img/Player/Player.png",21,27,8);
	this.game.load.image("PlayerPortrait","assets/img/Player/PlayerPortrait.png");
	this.game.load.image("mailBox","assets/img/Player/Player.png");
	this.game.load.image("DialogueBox","assets/img/Displays/DialogueBox.png");
	this.game.load.image("PortraitBox","assets/img/Displays/PortraitBox.png");
	this.game.load.image("NameTagBox","assets/img/Displays/NameTagBox.png");
	this.game.load.image("letter","assets/img/Displays/emptyLetter.png");
	this.game.load.image("mail","assets/img/Displays/letter.png");
	//this.game.load.image("letter","assets/img/Displays/mail.png");
	this.game.load.image("mailBag","assets/img/Displays/mailBag.png");
	this.game.load.image("MailBox","assets/img/tiles/shittyMailBox.png");
	this.game.load.image("Tree1","assets/img/tiles/shittyTree.png");
	this.game.load.image("leaf","assets/img/particles/leaf.png");
	this.game.load.image("Building","assets/img/tiles/Building.png");

	this.game.load.image("EXMark","assets/img/tiles/exclamationMark.png");

	this.game.load.image("JoshFlower","assets/img/tiles/aSmallFlower.png");
	this.game.load.spritesheet("tiles", "assets/img/tiles/tiles.png", 32, 32, 9);

	this.game.load.image("BlankButton","assets/img/MainMenu/Buttons/PlayButton.png");

	game.load.audio("Town1",["assets/audio/BGM/Town1.m4a","assets/audio/BGM/Town1.mp3","assets/audio/BGM/Town1.wav"]);
	game.load.audio("village",["assets/audio/BGM/village.mp3","assets/audio/BGM/village.ogg"]);
	game.load.audio("Pop",["assets/audio/SFX/Pop.wav","assets/audio/SFX/Pop.mp3","assets/audio/SFX/Pop.ogg"]);

	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;  
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.scale.refresh();


}

function create(){
	game.add.plugin(PhaserInput.Plugin);
	console.log("Booting up v5");
	game.state.add("DayZero",DayZero);
	game.state.add("DayOne",DayOne);
	game.state.add("DayTwo",DayTwo);
	game.state.add("DayThree",DayThree);
	game.state.add("DayFour",DayFour);
	game.state.add("DayFive",DayFive);
	game.state.add("DaySix",DaySix);
	game.state.add("DaySeven",DaySeven);
	game.state.add("nameSelectionMenu",nameSelectionMenu);
	game.state.add("MainMenu",MainMenu);
	game.state.add("DaySelectionMenu",DaySelectionMenu);

	game.state.add("DayTransition0",DayTransition0);
	game.state.add("DayTransition1",DayTransition1);
	game.state.add("DayTransition2",DayTransition2);
	game.state.add("DayTransition3",DayTransition3);
	game.state.add("DayTransition4",DayTransition4);
	game.state.add("DayTransition5",DayTransition5);
	game.state.add("DayTransition6",DayTransition6);
	game.state.add("DayTransition7",DayTransition7);
	//game.state.add("instructions",instructions);
	//game.state.add("credits",credits);
	game.state.start("MainMenu");
}

function update(){
	
}

function render(){

}