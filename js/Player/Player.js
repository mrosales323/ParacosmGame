
var playerName;

var player = function(xPos,yPos){
Phaser.Sprite.call(this,game,xPos,yPos,"Player",null);

//button1.anchor.set(0.5);


//button1.events.onInputDown.add(button1Click,this);
console.log("Make my player");


 this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
 this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
 this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
 this.game.input.keyboard.addKey(Phaser.Keyboard.UP);


}

player.prototype= Object.create(Phaser.Sprite.prototype);
player.prototype.constructor=player;

player.prototype.create=function(){

}

player.prototype.talk=function(player, npc){
if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && isDialogueUp==false)
    {
    npc.talk();
    }
}

player.prototype.update=function(){
//console.log("MEH");
	if(isDialogueUp==true) return;
	//console.log("This is running");

 	if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        this.body.x -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        this.body.x += 4;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        this.body.y -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        this.body.y += 4;
    }

   game.physics.arcade.collide(character,npc1);
   game.physics.arcade.collide(character,npc2);
   game.physics.arcade.collide(character,npc3);
   game.physics.arcade.collide(character,npc4);
    //console.log("AHHHH");
}
