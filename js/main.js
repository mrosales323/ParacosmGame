var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var counter=0;
var text;

var character;
var npc1;

var dialogue;
var dialogueTimmer=-1;

function preload(){
	this.game.load.image('ship','assets/img/ship.png');
	this.game.load.image("tier1Button","assets/img/Buttons/buttonTier1.png");
	this.game.load.image("masterClickButton","assets/img/Buttons/buttonTier1.png");
	this.game.load.image("Player","assets/img/Player/player.png");

}

function createAllNPCS(){
	npc1= new genericNPCStructure(game.world.centerX*1.3,game.world.centerY*1.3,"ship");
	this.game.physics.arcade.enable(npc1);
	npc1.enableBody=true;
	npc1.body.collideWorldBounds=true;
	npc1.body.immovable=true;
	game.add.existing(npc1);
}

function createCharacter(){
	character= new player(game.world.centerX,game.world.centerY);
	this.game.physics.arcade.enable(character);
	character.enableBody=true;
	character.body.collideWorldBounds=true;
	character.body.onCollide = new Phaser.Signal();
	character.body.onCollide.add(character.talk, this);
	game.add.existing(character);	
}

function create(){
	this.game.physics.startSystem(Phaser.Physics.ARCADE);
	createAllNPCS();
	createCharacter();
	game.time.events.loop(Phaser.Timer.SECOND, dialogueCountDown, this);
}

function listener(){
	counter++;
//text.text="You clicked "+ counter + " times!";
}

function update(){
	 game.physics.arcade.collide(character, npc1);
}

function render(){

}


function dialogueCountDown(){
	
	if(dialogueTimmer==0){
		//clear dialogue
		dialogue.destroy();
		dialogueTimmer=-1;
		console.log("Boom");
	}
	else if(dialogueTimmer>0){
		console.log(dialogueTimmer);
		dialogueTimmer--;
	}
}

