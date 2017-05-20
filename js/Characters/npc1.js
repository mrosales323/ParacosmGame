var playerName;

/*
Todo: Make dialogue box system. Place text box at bottom of the screen. Make it where when colliding with npc you can press space to talk. 
*/
var NPC1= function(xPos,yPos,npcString){
Phaser.Sprite.call(this,game,xPos,yPos,npcString,null);
console.log("Make a npc");
}

NPC1.prototype= Object.create(Phaser.Sprite.prototype);
NPC1.prototype.constructor=NPC1;


NPC1.prototype.create=function(){

}

NPC1.prototype.update=function(){
//console.log("MEH");
}

NPC1.prototype.name="Sandy";

NPC1.prototype.sentences=[

    //first numeric value represents the number of strings in that dialogue list.
    //[0,x]
    /*
    [3,
    "Hello",
    "Boop",
    "This is Some Text"
    ],
    */
    //[1,x]
    [2,
    "Oh hey "+playerName+"....",
    "Man there is too much to read in school. Is that a letter to me from Jenny?!"
    ]

];

NPC1.prototype.dialogueCount=1;
NPC1.prototype.dialogueIndex=1;

NPC1.prototype.talk=function(){
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