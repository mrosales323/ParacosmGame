

var Cursor=function(frame){
console.log("Loading cursor");
Phaser.Sprite.call(this,game, 0,0,"cursor",frame);

};


function preload(){

}


function create(){
 
}


function update(){
cursor.x=game.input.x;
cursor.y=game.input.y
}

function render(){

}

