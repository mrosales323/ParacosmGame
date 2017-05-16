/*
Todo: Make dialogue box system. Place text box at bottom of the screen. Make it where when colliding with npc you can press space to talk. 
*/
var genericNPCStructure = function(xPos,yPos,npcString){
Phaser.Sprite.call(this,game,xPos,yPos,npcString,null);
console.log("Make a genericNPCStructure. I have no clue why you are doing this.");
}

genericNPCStructure.prototype= Object.create(Phaser.Sprite.prototype);
genericNPCStructure.prototype.constructor=player;


genericNPCStructure.prototype.create=function(){

}

genericNPCStructure.prototype.update=function(){
//console.log("MEH");
}


genericNPCStructure.prototype.sentences=[

    //first numeric value represents the number of strings in that dialogue list.
    //[0,x]
    [3,
    "Hello",
    "Boop",
    "This is Some Text"
    ],
    //[1,x]
    [2,
    "This is what it looks like.",
    "To have multiple dialogue lists"
    ]

];

genericNPCStructure.prototype.dialogueCount=1;
genericNPCStructure.prototype.dialogueIndex=1;

genericNPCStructure.prototype.talk=function(){
if(dialogueTimmer!=-1) return;
if(this.dialogueCount>(this.sentences[this.dialogueIndex][0])){
    this.dialogueCount=1;
}
else{
  
}

//do more logic checking here to get the correct list of npc dialogue
createDialogueSetUp(this.sentences[this.dialogueIndex][this.dialogueCount],this);


}