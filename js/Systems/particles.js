var particle = function(game,key){
	//the key will be the spite for the particle system
	Phaser.Sprite.call(this,game,game.camera.x+game.camera.width/2,game.camera.y+game.camera.height/2,key,null);
	console.log("PARTICLES AQUIRED");
	
}

particle.prototype= Object.create(Phaser.Sprite.prototype);
particle.prototype.constructor=particle;