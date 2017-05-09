
var somevar1;
var somevar2;

var sentences= [
"sentence 1",
"sentence 2",
"sentence 3"
];

var numberofSentences=3;
var dialogueCount=0;

var genericNPCStructure = function(xPos,yPos,npcString){
Phaser.Sprite.call(this,game,xPos,yPos,npcString,null);

//button1.anchor.set(0.5);



//button1.events.onInputDown.add(button1Click,this);
console.log("Make a genericNPCStructure. I have no clue why you are doing this.");
}

genericNPCStructure.prototype= Object.create(Phaser.Sprite.prototype);
genericNPCStructure.prototype.constructor=player;


genericNPCStructure.prototype.create=function(){

}

genericNPCStructure.prototype.update=function(){
//console.log("MEH");
}

genericNPCStructure.prototype.talk=function(){
if(dialogueTimmer!=-1) return;

if(dialogueCount==numberofSentences){
    dialogueCount=0;
}
else{
  
}

console.log("HEY THERE");
dialogueTimmer=5;
dialogue= game.add.text(256,16,sentences[dialogueCount],{fill: "#ffffff"});
dialogue.text=sentences[dialogueCount];

dialogueCount++;
}

function button1Click(){
console.log("YAY");
button1Level+=1;
priceText.text="Button Level " + button1Level;
}