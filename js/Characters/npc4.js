/*
Todo: Make dialogue box system. Place text box at bottom of the screen. Make it where when colliding with npc you can press space to talk. 
*/
var NPC4= function(xPos,yPos,npcString){
Phaser.Sprite.call(this,game,xPos,yPos,npcString,null);
console.log("Make a npc");
}

NPC4.prototype= Object.create(Phaser.Sprite.prototype);
NPC4.prototype.constructor=NPC4;


NPC4.prototype.create=function(){

}

NPC4.prototype.update=function(){
//console.log("MEH");
}

NPC4.prototype.name="Sandyssss";

NPC4.prototype.sentences=[

    [2,
    "Oh hey....",
    "Man there is too much to read in school. Is that a letter to me from Jenny?!"
    ]

];

NPC4.prototype.dialogueCount=1;
NPC4.prototype.dialogueIndex=1;

NPC4.prototype.talk=function(){
if(dialogueTimmer!=-1) return;
if(this.dialogueCount>(this.sentences[this.dialogueIndex][0])){
    this.dialogueCount=1;
}
else{
  
}
//do more logic checking here to get the correct list of npc dialogue
createDialogueSetUp(this.sentences[this.dialogueIndex][this.dialogueCount],this);
console.log("NPC 4 talking");

}