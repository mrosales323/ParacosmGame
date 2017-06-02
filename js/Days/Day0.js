var tutorialMayor;
var showtextOnce;

var DayZero=function(game){
console.log("Starting the tutorial.");
};

DayZero.prototype.preload=function(){

}
DayZero.prototype.mailBag=function(){
	//generate a mailbag
	if(!mail){
		mail=new Mail(game,'mailBag');
		console.log("mailbag");
		game.add.existing(mail);
	}

	
}

DayZero.prototype.createAllNPCS=function(){
	tutorialMayor= new TutorialMayor(game.world.centerX*1,game.world.centerY*1,"Mayor");
	this.game.physics.arcade.enable(tutorialMayor);
	tutorialMayor.enableBody=true;
	tutorialMayor.body.collideWorldBounds=true;
	tutorialMayor.body.immovable=true;
	tutorialMayor.body.enable=true;
	tutorialMayor.dialogueIndex=dayNumber;
	tutorialMayor.inputEnabled = true;
    tutorialMayor.events.onInputDown.add(clickToTalk, this);

//has to be done for npcs that use variables that are determined after initalization of the game. Otherwise the variables will be undefined.
	tutorialMayor.sentences=[
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
    "Ahh "+playerName+" are you here to deliver my mail to me?\nCome here and let me see it.",
    "Hmm more junk it seems. This mayor business is hard work.\nAnyways good work today, I'll see you tomorrow."
    ]

];
	tutorialMayor.scale.setTo(2.5,2.5);
	tutorialMayor.smoothed=false;
	tutorialMayor.frame=0;
	game.add.existing(tutorialMayor);

	mailBox= new MailBox(game.world.centerX*1.1,game.world.centerY*1.4,"MailBox");
	this.game.physics.arcade.enable(mailBox);
	mailBox.enableBody=true;
	mailBox.body.collideWorldBounds=true;
	mailBox.body.immovable=true;
	mailBox.scale.setTo(2.5,2.5);
	mailBox.smoothed=false;
	mailBox.inputEnabled = true;
    mailBox.events.onInputDown.add(clickToTalk, this);
	game.add.existing(mailBox);
	mailBox.createEx();
	console.log("MAKE ALL THE NPCS OR ELSE THINGS ARE GOING TO BREAK SOME THINGS");
}

DayZero.prototype.createCharacter=function(){
	character= new player(game.world.centerX,game.world.centerY);
	this.game.physics.arcade.enable(character);
	character.enableBody=true;
	character.body.collideWorldBounds=true;
	character.body.onCollide = new Phaser.Signal();
	character.body.onCollide.add(character.talk, this);
	game.add.existing(character);	
	character.scale.setTo(2,2);
	//character.body.setSize(character.width/.4,character.height/.7,0,character.height*1.1);
	character.animations.add("IdleRight",[0,1],1,true);
    character.animations.add("rightWalk",[2,3],10,true);
    character.animations.add("leftWalk",[4,5],10,true);
    character.animations.add("IdleLeft",[6,7],1,true);
    character.smoothed=false;
}

DayZero.prototype.createTrees=function(){
	trees= game.add.group();
	trees=game.add.physicsGroup();
	trees.immovable=true;
	
	//top border
	for(var treeCount=0; treeCount<45;treeCount++){
		var tree = game.add.sprite(game.world.centerX*.05*treeCount,game.world.centerY*.001,"Tree1");	
		this.game.physics.arcade.enable(tree);
		tree.enableBody=true;
		tree.body.collideWorldBounds=true;
		tree.body.immovable=true;
		trees.add(tree);
	}

	//bottom border
	for(var treeCount=0; treeCount<45;treeCount++){
		var tree = game.add.sprite(game.world.centerX*.05*treeCount,game.world.centerY*2,"Tree1");	
		this.game.physics.arcade.enable(tree);
		tree.enableBody=true;
		tree.body.collideWorldBounds=true;
		tree.body.immovable=true;
		trees.add(tree);
	}

	//left border
	for(var treeCount=0; treeCount<45;treeCount++){
		var tree = game.add.sprite(game.world.centerX*0,game.world.centerY*.2*treeCount,"Tree1");	
		this.game.physics.arcade.enable(tree);
		tree.enableBody=true;
		tree.body.collideWorldBounds=true;
		tree.body.immovable=true;
		trees.add(tree);
	}

	//right border
	for(var treeCount=0; treeCount<45;treeCount++){
		var tree = game.add.sprite(game.world.centerX*2,game.world.centerY*.2*treeCount,"Tree1");	
		this.game.physics.arcade.enable(tree);
		tree.enableBody=true;
		tree.body.collideWorldBounds=true;
		tree.body.immovable=true;
		trees.add(tree);
	}

	console.log("OAK AND PINE MAKE NO RESEIN.")
}
var _emitter;
DayZero.prototype.leafs=function(){
	_emitter=game.add.emitter(game.centerX,game.centerY,600);
	_emitter.makeParticles('leaf');
		_emitter.start(false, 14000, 100);
	_emitter.x=game.world.centerX;
	_emitter.y=0;
	_emitter.width=game.world.width;
	_emitter.maxParticleScale = 3;
    _emitter.minParticleScale = 2;
    _emitter.setYSpeed(10, 20);


}

DayZero.prototype.loadTiles=function(){
		house=this.game.add.sprite(game.world.centerX,game.world.centerY*.2,"Building");
		house.scale.setTo(3,3);
		this.game.physics.arcade.enable(house);
		house.enableBody=true;
		house.body.collideWorldBounds=true;
		house.body.immovable=true;
}

DayZero.prototype.create=function(){
	tileSprite = game.add.tileSprite(0, 0, worldWidth, worldHeight, 'JoshFlower');
	this.game.physics.startSystem(Phaser.Physics.ARCADE);
	//game.world.setBounds(0,0,worldWidth,worldHeight); //make the world larger than the camera viewport
	showtextOnce=false;
	this.createTrees();
	this.createAllNPCS();
	this.loadTiles();
	this.createCharacter();
	game.camera.follow(character);
	game.time.events.loop(Phaser.Timer.SECOND, dialogueCountDown, this);
	isDialogueUp=false;

	BGM= game.add.audio("village");
	BGM.loop=true;
	BGM.play();
 	game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;

	//game.input.onDown.add(this.gofull, this);

	this.leafs();

	//game.add.existing(cursor);
    console.log("sfsdjkhgkje");
	this.mailBag();
	mail.deleteFromGroup();
	mail.addToGroup(stage);
	mail.makeInvisible();
	for(var i=0;i<11;i++){
		mail.addToGroup(stage);
	}
	mail.setKeys(stage);


	mail.setUp(stage);


	//default to mail not being open
	mailMenu=false;
	cursor= game.add.sprite(0,0,"cursor");
	cursor.scale.setTo(5,5);
	//cursor.anchor(0.5,0.5);
	cursor.anchor.setTo(0,0);
	cursor.smoothed=false;
	clickToTalk(tutorialMayor);
}
//this.game.stage.scale.refresh();


DayZero.prototype.listener=function(){
	counter++;
//text.text="You clicked "+ counter + " times!";
}

DayZero.prototype.update=function(){
	if(isDialogueUp==false && showtextOnce==false){
		tutorialDialogueSetUp("Click an NPC to talk to them",null);
		showtextOnce=true;
	} 
	cursor.x=game.input.x+game.camera.x;
	cursor.y=game.input.y+game.camera.y;
	//game.physics.arcade.moveToPointer(cursor, 800);
	 //collision detection between player and entities is checked in Player.js
	this.game.canvas.style.cursor="ship";
	if (game.input.keyboard.isDown(Phaser.Keyboard.ESC) && isDialogueUp==true)
	    {
	    	cleanDialogue();
	    }
	//game.debug.inputInfo(32, 32);

	if(game.input.keyboard.justPressed(Phaser.Keyboard.M)){
		if(!flipflop){
			flipflop=true;
			if(mail.visible==true){
				mail.makeInvisible();
				mail.killLetter();
				canPlayerMove=true;
			}else if(mail.visible==false){
				mail.makeVisible();
				canPlayerMove=false;


					for (var i = mailGroup.length - 1; i >= 0; i--) {
						console.log("I HAVE LOTS OF MAIL " + i);
						console.log(mailGroup.children[i].mailKey);
					}
			}
		}
	}
	if(game.input.keyboard.justReleased(Phaser.Keyboard.M)){
		flipflop=false;
	}
}

DayZero.prototype.render=function(){
   // game.debug.bodyInfo(character, 32, 32);

   // game.debug.body(character);

}