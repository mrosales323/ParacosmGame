/*
Art is 2.5-D style. Keep that in mind when programming.


Main character is a mail man when starting off. Maybe a mine worker by the end.
RPG-walking simulator?

Mechanics:  walking
				-walking will be free movement style based.
			
			interacting, talking with people, dialogue choices.

Ideas: Rally you cna go to for possible story ending or just going home. Possibly affect change of story.
		-people enter your mail office in government attire and you aren't sure what they are doing. Possible beginning story arc.

		Phase 1: Just go deliver a simple package and talk to your neighbors. Pretty simple.
*/
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
var npc2;

var dialogue;
var dialogueTimmer=-1;
var dialogueBox;
var isDialogueUp;

var tileSprite;

var worldWidth=1920;
var worldHeight=1080;

function preload(){
	this.game.load.image('ship','assets/img/ship.png');
	this.game.load.image("tier1Button","assets/img/Buttons/buttonTier1.png");
	this.game.load.image("masterClickButton","assets/img/Buttons/buttonTier1.png");
	this.game.load.image("Player","assets/img/Player/player.png");
	this.game.load.image("DialogueBox","assets/img/Displays/DialogueBox.png");
	this.game.load.image("JoshFlower","assets/img/tiles/aSmallFlower.png");
}

function createAllNPCS(){
	npc1= new NPC1(game.world.centerX*1.3,game.world.centerY*1.3,"ship");
	this.game.physics.arcade.enable(npc1);
	npc1.enableBody=true;
	npc1.body.collideWorldBounds=true;
	npc1.body.immovable=true;
	npc1.body.enable=true;
	game.add.existing(npc1);

	npc2= new NPC2(game.world.centerX*1.5,game.world.centerY*1.8,"ship");
	this.game.physics.arcade.enable(npc2);
	npc2.enableBody=true;
	npc2.body.collideWorldBounds=true;
	npc2.body.immovable=true;
	npc2.body.enable=true;

	game.add.existing(npc2);


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
	tileSprite = game.add.tileSprite(0, 0, worldWidth, worldHeight, 'JoshFlower');
	this.game.physics.startSystem(Phaser.Physics.ARCADE);
	game.world.setBounds(0,0,worldWidth,worldHeight); //make the world larger than the camera viewport
	createAllNPCS();
	createCharacter();
	game.camera.follow(character);
	game.time.events.loop(Phaser.Timer.SECOND, dialogueCountDown, this);
	isDialogueUp=false;


	console.log("All good to go!");
}

function listener(){
	counter++;
//text.text="You clicked "+ counter + " times!";
}

function update(){
	 //collision detection between player and entities is checked in Player.js

if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && isDialogueUp==true)
    {
    	console.log("Space pressed");
    	cleanDialogue();
    }

}

function render(){

}


function dialogueCountDown(){
	
	if(dialogueTimmer==0){
		//clear dialogue
		cleanDialogue();
	}
	else if(dialogueTimmer>0){
		console.log(dialogueTimmer);
		dialogueTimmer--;
		//console.log(isDialogueUp);
	}
}

function cleanDialogue(){
		dialogue.destroy();
		dialogueTimmer=-1;
		dialogueBox.kill();
		console.log("Boom BAM");
		isDialogueUp=false;
}

