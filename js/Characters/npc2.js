/*
Todo: Make dialogue box system. Place text box at bottom of the screen. Make it where when colliding with npc you can press space to talk. 
*/
var NPC2= function(xPos,yPos,npcString){
Phaser.Sprite.call(this,game,xPos,yPos,npcString,null);
console.log("Make a npc 2");
}

NPC2.prototype= Object.create(Phaser.Sprite.prototype);
NPC2.prototype.constructor=player;


NPC2.prototype.create=function(){

}

NPC2.prototype.update=function(){
//console.log("MEH");
}

NPC2.prototype.name="Billy";

NPC2.prototype.sentences=[

    //first numeric value represents the number of strings in that dialogue list.
    //[0,x]
    [3,
    "I",
    "Like",
    "Tacos"
    ],
    //[1,x]
    [2,
    "My dog is my favorite animal.",
    "I guess cats are cool too."
    ]

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
}