/*
Todo: Make dialogue box system. Place text box at bottom of the screen. Make it where when colliding with npc you can press space to talk. 
*/
var NPC3= function(xPos,yPos,npcString){
Phaser.Sprite.call(this,game,xPos,yPos,npcString,null);
console.log("Make a npc 3");
}

NPC3.prototype= Object.create(Phaser.Sprite.prototype);
NPC3.prototype.constructor=NPC3;


NPC3.prototype.create=function(){

}

NPC3.prototype.update=function(){

}

NPC3.prototype.name="Alex";

NPC3.prototype.sentences=[

    //first numeric value represents the number of strings in that dialogue list.
    //[0,x]
    [3,
    "Hi there! Weather sure is nice today.",
    "Good weather means people are more likely to go shopping.",
    "Oh a letter? Thank you."
    ]
    //[1,x]

];

NPC3.prototype.dialogueCount=1;
NPC3.prototype.dialogueIndex=1;

NPC3.prototype.talk=function(){
if(dialogueTimmer!=-1) return;
if(this.dialogueCount>(this.sentences[this.dialogueIndex][0])){
    this.dialogueCount=1;
}
else{
  
}
//do more logic checking here to get the correct list of npc dialogue
createDialogueSetUp(this.sentences[this.dialogueIndex][this.dialogueCount],this);
console.log("NPC 3 talking");

}