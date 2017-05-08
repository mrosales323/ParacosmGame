var game = new Phaser.Game(800, 1200, Phaser.AUTO, '', { preload: preload, create: create, update: update });
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var counter=0;
var text;
function preload(){
this.game.load.image('ship','assets/img/ship.png');
this.game.load.image("tier1Button","assets/img/Buttons/buttonTier1.png");
this.game.load.image("masterClickButton","assets/img/Buttons/buttonTier1.png");
}


function create(){
//var image= game.add.sprite(game.world.centerX*.2,game.world.centerY*.1,"tier1Button");
//image.anchor.set(0.5);
//image.inputEnabled=true;
text= game.add.text(256,16,"",{fill: "#ffffff"});
var but=new button1();
but.anchor.set(0.5);
but.inputEnabled=true;
but.events.onInputDown.add(button1Click,this);
game.add.existing(but);
game.time.events.loop(Phaser.Timer.SECOND, updateCounter, this);
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
text.text="You clicked "+ counter + " times!";
}

function update(){
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


function updateCounter(){
console.log("RUN AN UPDATE222");

counter+=(button1BaseMoney*button1Level)*(button1BasePower);



counter=Number((counter).toFixed(3)); // 6.7
text.text="You have "+ counter + " points!";
}

