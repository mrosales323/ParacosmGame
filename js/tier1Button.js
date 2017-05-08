var cost=10;


var button1BaseMoney=.05;
var button1Level=0;
var button1BasePower=1.00;
var button1CostMultiplier=1.15;

var button1Text;
var priceText;

var button1 = function(){
Phaser.Sprite.call(this,game,game.world.centerX*.25,game.world.centerY*.15,"tier1Button",null);

//button1.anchor.set(0.5);
button1.inputEnabled=true;
button1Text= game.add.text(256,16,"",{fill: "#ffffff"});
priceText=game.add.text(button1.centerX,button1.centerY,{fill:"#000000"});
//button1.events.onInputDown.add(button1Click,this);
console.log("WTF");

}

button1.prototype= Object.create(Phaser.Sprite.prototype);
button1.prototype.constructor=button1;


button1.prototype.create=function(){

}

function button1Click(){
console.log("YAY");
button1Level+=1;
priceText.text="Button Level " + button1Level;
}