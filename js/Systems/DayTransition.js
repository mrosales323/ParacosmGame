

var DayTransition1= function(game){
console.log("THIS IS THE DAY TRANSITION SCRENE");
}

DayTransition1.prototype.preload=function(){

}

DayTransition1.prototype.create=function(){
 game.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
}

DayTransition1.prototype.update=function(){
if(this.counter==1){
	console.log("SHOW THE DATE TEXT!!!");
}

if(this.counter==3){
	console.log("SHOW THE START TEXT");
}

}

DayTransition1.prototype.render=function(){

}

DayTransition1.prototype.counter=0;

DayTransition1.prototype.updateCounter=function(){
	this.counter++;
}