var trPOP;

var DayTransition5= function(game){
console.log("THIS IS THE DAY TRANSITION SCRENE");
}

DayTransition5.prototype.preload=function(){

}

DayTransition5.prototype.create=function(){
 	game.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
	//var	sfx=game.audio.add("Pop");
	trPOP=game.add.audio("Pop");
}

DayTransition5.prototype.style1= { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
DayTransition5.prototype.style2={ font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };


DayTransition5.prototype.update=function(){

if(this.counter==1){
	console.log("SHOW THE DATE TEXT!!!");
    var text1 = game.add.text(game.world.centerX, (game.world.centerY/2), "Day 5", this.style1);
}

if(this.counter==2){
	var text2 = game.add.text((game.world.centerX/1)-(3*32),(game.world.centerY/2)+100, "May 1, 1997", this.style2); 
}

if(this.counter==3){
	console.log("SHOW THE START TEXT");
	game.state.start("DayFive");
}

}

DayTransition5.prototype.render=function(){

}

DayTransition5.prototype.counter=0;

DayTransition5.prototype.updateCounter=function(){
	this.counter++;
	trPOP.play();
}