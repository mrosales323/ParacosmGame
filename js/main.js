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

var tileSprite;

var worldWidth=1920;
var worldHeight=1080;

var BGM;


var main=function(game){
console.log("Playing my awesome game :LSLIADIJADILJ");
};

main.prototype.preload=function(){
}

main.prototype.createAllNPCS=function(){
	npc1= new NPC1(game.world.centerX*1.3,game.world.centerY*1.3,"ship");
	this.game.physics.arcade.enable(npc1);
	npc1.enableBody=true;
	npc1.body.collideWorldBounds=true;
	npc1.body.immovable=true;
	npc1.body.enable=true;
	npc1.dialogueIndex=dayNumber;
	game.add.existing(npc1);

	npc2= new NPC2(game.world.centerX*1.5,game.world.centerY*1.8,"ship");
	this.game.physics.arcade.enable(npc2);
	npc2.enableBody=true;
	npc2.body.collideWorldBounds=true;
	npc2.body.immovable=true;
	npc2.body.enable=true;
	npc2.dialogueIndex=dayNumber;
	game.add.existing(npc2);


}

main.prototype.createCharacter=function(){
	character= new player(game.world.centerX,game.world.centerY);
	this.game.physics.arcade.enable(character);
	character.enableBody=true;
	character.body.collideWorldBounds=true;
	character.body.onCollide = new Phaser.Signal();
	character.body.onCollide.add(character.talk, this);
	
	character.scale.setTo(.25,.25);
	console.log("make my mail man man or else I might mail you a male.");

	game.add.existing(character);	
}

main.prototype.create=function(){
	tileSprite = game.add.tileSprite(0, 0, worldWidth, worldHeight, 'JoshFlower');
	this.game.physics.startSystem(Phaser.Physics.ARCADE);
	game.world.setBounds(0,0,worldWidth,worldHeight); //make the world larger than the camera viewport
	this.createAllNPCS();
	this.createCharacter();
	game.camera.follow(character);
	game.time.events.loop(Phaser.Timer.SECOND, dialogueCountDown, this);
	isDialogueUp=false;

	BGM= game.add.audio("Town1");
	BGM.loop=true;
	BGM.play();

	dayNumber=0;

 	game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;

	game.input.onDown.add(this.gofull, this);


 game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;

game.input.onDown.add(this.gofull, this);

}
//this.game.stage.scale.refresh();


main.prototype.gofull=function(){

	 if (game.scale.isFullScreen)
    {
        game.scale.stopFullScreen();
    }
    else
    {
        game.scale.startFullScreen(false);
    }


	console.log("All good to go! v2");
}


main.prototype.listener=function(){
	counter++;
//text.text="You clicked "+ counter + " times!";
}

main.prototype.update=function(){
dialogueUpdate();
game.debug.inputInfo(32, 32);
}

main.prototype.render=function(){

}

