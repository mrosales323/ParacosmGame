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
//used to flipflop the mail state
var flipflop;

var mail

var mailMenu;

var cursor;
//true if mail is open so the player cannot move
//false if mail is not open so the player can move
var main=function(game){
console.log("Playing my awesome game :LSLIADIJADILJ");
};

main.prototype.preload=function(){
	/*
	this.game.load.image('ship','assets/img/ship.png');
	this.game.load.image("tier1Button","assets/img/Buttons/buttonTier1.png");
	this.game.load.image("masterClickButton","assets/img/Buttons/buttonTier1.png");
	this.game.load.image("Player","assets/img/Player/player.png");
	this.game.load.image("DialogueBox","assets/img/Displays/DialogueBox.png");
	this.game.load.image("PortraitBox","assets/img/Displays/PortraitBox.png");
	this.game.load.image("NameTagBox","assets/img/Displays/NameTagBox.png");


	this.game.load.image("JoshFlower","assets/img/tiles/aSmallFlower.png");


	game.load.audio("Town1",["assets/audio/BGM/Town1.m4a","assets/audio/BGM/Town1.mp3","assets/audio/BGM/Town1.wav"]);

this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;  
this.scale.pageAlignHorizontally = true;
this.scale.pageAlignVertically = true;
this.scale.refresh();
*/

}
main.prototype.mailBag=function(){
	//generate a mailbag
	mail=new mail(game,'mailBag');
	console.log("mailbag");
	game.add.existing(mail);
	
}

main.prototype.createAllNPCS=function(){
	npc1= new NPC1(game.world.centerX*1.3,game.world.centerY*1.3,"ship");
	this.game.physics.arcade.enable(npc1);
	npc1.enableBody=true;
	npc1.body.collideWorldBounds=true;
	npc1.body.immovable=true;
	npc1.body.enable=true;
	npc1.dialogueIndex=dayNumber;


npc1.sentences=[

    //first numeric value represents the number of strings in that dialogue list.
    //[0,x]
    /*
    [3,
    "Hello",
    "Boop",
    "This is Some Text"
    ],
    */
    //[1,x]
    [2,
    "Oh hey there "+playerName+"....",
    "Man there is too much to read in school. Is that a letter to me from Jenny?!"
    ]

];



	game.add.existing(npc1);

	npc2= new NPC2(game.world.centerX*1.5,game.world.centerY*1.8,"ship");
	this.game.physics.arcade.enable(npc2);
	npc2.enableBody=true;
	npc2.body.collideWorldBounds=true;
	npc2.body.immovable=true;
	npc2.body.enable=true;
	npc2.dialogueIndex=dayNumber;
	game.add.existing(npc2);

	npc3= new NPC3(game.world.centerX*0.5,game.world.centerY*1.8,"ship");
	this.game.physics.arcade.enable(npc3);
	npc3.enableBody=true;
	npc3.body.enable=true;
	npc3.body.collideWorldBounds=true;
	npc3.body.immovable=true;
	npc3.dialogueIndex=dayNumber;
	game.add.existing(npc3);

	npc4= new NPC4(game.world.centerX*1.3,game.world.centerY*0.3,"ship");
	this.game.physics.arcade.enable(npc4);
	npc4.enableBody=true;
	npc4.body.collideWorldBounds=true;
	npc4.body.immovable=true;
	//npc4.body.enable=true;
	npc4.dialogueIndex=dayNumber;
	game.add.existing(npc4);

console.log("finish making my npcs");
}

main.prototype.createCharacter=function(){
	character= new player(game.world.centerX,game.world.centerY);
	this.game.physics.arcade.enable(character);
	character.enableBody=true;
	character.body.collideWorldBounds=true;
	character.body.onCollide = new Phaser.Signal();
	character.body.onCollide.add(character.talk, this);
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
 	game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;

	//game.input.onDown.add(this.gofull, this);
	this.mailBag();
	mail.addToGroup();
	mail.makeInvisible();
	for(var i=0;i<10;i++){
		mail.addToGroup();
	}
	//default to mail not being open
	mailMenu=false;
	cursor= game.add.sprite(0,0,"cursor");
	cursor.scale.setTo(5,5);
	//cursor.anchor(0.5,0.5);
	cursor.anchor.setTo(0,0);
	cursor.smoothed=false;
	//game.add.existing(cursor);
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
	cursor.x=game.input.x+game.camera.x;
	cursor.y=game.input.y+game.camera.y;
	//game.physics.arcade.moveToPointer(cursor, 800);
	 //collision detection between player and entities is checked in Player.js
	this.game.canvas.style.cursor="ship";
	if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && isDialogueUp==true)
	    {
	    	console.log("Space pressed");
	    	cleanDialogue();
	    }
	game.debug.inputInfo(32, 32);

	if(game.input.keyboard.justPressed(Phaser.Keyboard.M)){
		if(!flipflop){
			flipflop=true;
			if(mail.visible==true){
				mail.makeInvisible();
			}else if(mail.visible==false){
				mail.makeVisible();
			}
		}
	}
	if(game.input.keyboard.justReleased(Phaser.Keyboard.M)){
		flipflop=false;
	}
}

main.prototype.render=function(){

}

