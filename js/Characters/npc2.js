/*
Todo: Make dialogue box system. Place text box at bottom of the screen. Make it where when colliding with npc you can press space to talk. 
*/
var NPC2= function(xPos,yPos,npcString){
Phaser.Sprite.call(this,game,xPos,yPos,npcString,null);
console.log("Make a npc 2");
}

NPC2.prototype= Object.create(Phaser.Sprite.prototype);
NPC2.prototype.constructor=NPC2;


NPC2.prototype.create=function(){

}

NPC2.prototype.update=function(){

}

NPC2.prototype.name="Billy";

NPC2.prototype.sentences=[

    //first numeric value represents the number of strings in that dialogue list.
    //[0,x]
    [2,
    "I for one look forward to the policy changes our new mayor is going to make." ,
    "We need better law and order if you ask me! Have you seen these kids?!"
    ]
    //[1,x]


];

NPC2.prototype.dialogueCount=1;
NPC2.prototype.dialogueIndex=1;

NPC2.prototype.talk=function(){
if(dialogueTimmer!=-1) return;
if(this.dialogueCount>(this.sentences[this.dialogueIndex][0])){
    this.dialogueCount=1;
}
else{
  
}
//do more logic checking here to get the correct list of npc dialogue
createDialogueSetUp(this.sentences[this.dialogueIndex][this.dialogueCount],this);
console.log("NPC 1 talking");
}