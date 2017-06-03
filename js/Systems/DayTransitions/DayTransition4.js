var trPOP;

var DayTransition4= function(game){
console.log("THIS IS THE DAY TRANSITION SCRENE");
}

DayTransition4.prototype.preload=function(){

}

DayTransition4.prototype.create=function(){
 	game.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
	//var	sfx=game.audio.add("Pop");
	trPOP=game.add.audio("Pop");
}

DayTransition4.prototype.style1= { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
DayTransition4.prototype.style2={ font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };


DayTransition4.prototype.update=function(){

if(this.counter==1){
	console.log("SHOW THE DATE TEXT!!!");
    var text1 = game.add.text(game.world.centerX, (game.world.centerY/2), "Day 4", this.style1);
}

if(this.counter==2){
	var text2 = game.add.text((game.world.centerX/1)-(3*32),(game.world.centerY/2)+100, "December 17, 1996", this.style2);
}

if(this.counter==3){
	console.log("SHOW THE START TEXT");
	game.state.start("DayFour");
}

}

DayTransition4.prototype.render=function(){

}

DayTransition4.prototype.counter=0;

DayTransition4.prototype.updateCounter=function(){
	this.counter++;
	trPOP.play();
}