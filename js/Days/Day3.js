var DayThree=function(game){
console.log("Playing my awesome game:");
};

DayThree.prototype.preload=function(){

}
DayThree.prototype.mail3Bag=function(){
	//generate a mail3bag
	mail3=new mail3(game,'mailBag');
	console.log("mail3bag");
	game.add.existing(mail3);
	
}

DayThree.prototype.createAllNPCS=function(){
	npc1= new NPC1(game.world.centerX*1.3,game.world.centerY*1.3,"Sandy");
	this.game.physics.arcade.enable(npc1);
	npc1.enableBody=true;
	npc1.body.collideWorldBounds=true;
	npc1.body.immovable=true;
	npc1.body.enable=true;
	npc1.dialogueIndex=dayNumber;
	npc1.inputEnabled = true;
    npc1.events.onInputDown.add(clickToTalk, this);

//has to be done for npcs that use variables that are determined after initalization of the game. Otherwise the variables will be undefined.
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

	npc2= new NPC2(game.world.centerX*1.5,game.world.centerY*1.8,"Billy");
	this.game.physics.arcade.enable(npc2);
	npc2.enableBody=true;
	npc2.body.collideWorldBounds=true;
	npc2.body.immovable=true;
	npc2.body.enable=true;
	npc2.dialogueIndex=dayNumber;
	npc2.inputEnabled = true;
    npc2.events.onInputDown.add(clickToTalk, this);
	game.add.existing(npc2);

	npc3= new NPC3(game.world.centerX*0.5,game.world.centerY*1.8,"Alex");
	this.game.physics.arcade.enable(npc3);
	npc3.enableBody=true;
	npc3.body.enable=true;
	npc3.body.collideWorldBounds=true;
	npc3.body.immovable=true;
	npc3.dialogueIndex=dayNumber;
	npc3.inputEnabled = true;
    npc3.events.onInputDown.add(clickToTalk, this);
	game.add.existing(npc3);

	npc4= new NPC4(game.world.centerX*1.3,game.world.centerY*0.3,"Helen");
	this.game.physics.arcade.enable(npc4);
	npc4.enableBody=true;
	npc4.body.collideWorldBounds=true;
	npc4.body.immovable=true;
	//npc4.body.enable=true;
	npc4.dialogueIndex=dayNumber;
	npc4.inputEnabled = true;
    npc4.events.onInputDown.add(clickToTalk, this);
	game.add.existing(npc4);

	mailBox= new MailBox(game.world.centerX*1.1,game.world.centerY*0.7,"MailBox");
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
	console.log("MAKE ALL THE NPCS OR ELSE THINGS ARE GOING TO BREAK v333333333333");
}

DayThree.prototype.createCharacter=function(){
	character= new player(game.world.centerX,game.world.centerY);
	this.game.physics.arcade.enable(character);
	character.enableBody=true;
	character.body.collideWorldBounds=true;
	character.body.onCollide = new Phaser.Signal();
	character.body.onCollide.add(character.talk, this);
	game.add.existing(character);	
	character.scale.setTo(.4,.4);
	character.body.setSize(character.width/.4,character.height/.7,0,character.height*1.1);
}

DayThree.prototype.createTrees=function(){
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
DayThree.prototype.leafs=function(){
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
DayThree.prototype.create=function(){
	tileSprite = game.add.tileSprite(0, 0, worldWidth, worldHeight, 'JoshFlower');
	this.game.physics.startSystem(Phaser.Physics.ARCADE);
	game.world.setBounds(0,0,worldWidth,worldHeight); //make the world larger than the camera viewport
	
	this.createTrees();
	this.createAllNPCS();
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
    console.log("sfsdjkhgkje");
	this.mail3Bag();
	mail3.addToGroup(stage);
	mail3.makeInvisible();
	for(var i=0;i<10;i++){
		mail3.addToGroup(stage);
	}
	mail3.setKeys(stage);


	mail3.setUp(stage);


	//default to mail3 not being open
	mail3Menu=false;
	cursor= game.add.sprite(0,0,"cursor");
	cursor.scale.setTo(5,5);
	//cursor.anchor(0.5,0.5);
	cursor.anchor.setTo(0,0);
	cursor.smoothed=false;

}
//this.game.stage.scale.refresh();


DayThree.prototype.listener=function(){
	counter++;
//text.text="You clicked "+ counter + " times!";
}

DayThree.prototype.update=function(){

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
			if(mail3.visible==true){
				mail3.makeInvisible();
				mail3.killLetter();
				canPlayerMove=true;
			}else if(mail3.visible==false){
				mail3.makeVisible();
				canPlayerMove=false;


					for (var i = mail3Group.length - 1; i >= 0; i--) {
						console.log("I HAVE LOTS OF MAIL " + i);
						console.log(mail3Group.children[i].mail3Key);
					}
			}
		}
	}
	if(game.input.keyboard.justReleased(Phaser.Keyboard.M)){
		flipflop=false;
	}
}

DayThree.prototype.render=function(){
   // game.debug.bodyInfo(character, 32, 32);

   // game.debug.body(character);

}