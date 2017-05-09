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
//var image= game.add.sprite(game.world.centerX*.2,game.world.centerY*.1,"tier1Button");
//image.anchor.set(0.5);
//image.inputEnabled=true;
/*
text= game.add.text(256,16,"",{fill: "#ffffff"});
var but=new button1();
but.anchor.set(0.5);
but.inputEnabled=true;
but.events.onInputDown.add(button1Click,this);
game.add.existing(but);

//image.events.onInputDown.add(listener,this);
/*
this.game.physics.startSystem(Phaser.Physics.ARCADE); //start up the arcade physics system
swapKey= this.game.input.keyboard.addKey(Phaser.Keyboard.R);

ships=game.add.group();
//var ehh= new ship(96,96,.5,"assets/img/ship.png");
for(var i=1; i<=50; i++){		
var player= new ship(game,"ship", null,getRandomIntInclusive(1,3)); //game, asset, frame, scale, x, y;


//	player.animations.add("left",[0,1],10,true);
//	player.animations.add("right",[2,3],10,true);


ships.add(player);
}

for(var i=0; i<=ships.length; i++){
	console.log("ships in group dtrdtr" + i);
}

*/
}

function listener(){
	counter++;
//text.text="You clicked "+ counter + " times!";
}

function update(){
	 game.physics.arcade.collide(character, npc1);
/*	
	for (var i=0, len=ships.children.length; i<len; i++){
	if((ships.children[i].x<0-ships.children[i].width) && ships.children[i].body.velocity.x<0){
		console.log("wrap right");
		ships.children[i].x=game.width;
		}
		else if( (ships.children[i].x>game.width) && ships.children[i].body.velocity.x>0 ){
			console.log("wrap left");
		ships.children[i].x=0-ships.children[i].width;
		}
	}
*/
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


//counter+=(button1BaseMoney*button1Level)*(button1BasePower);



//counter=Number((counter).toFixed(3)); // 6.7
//text.text="You have "+ counter + " points!";
}

