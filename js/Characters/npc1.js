/*
Todo: Make dialogue box system. Place text box at bottom of the screen. Make it where when colliding with npc you can press space to talk. 
*/
var NPC1= function(xPos,yPos,npcString){
Phaser.Sprite.call(this,game,xPos,yPos,npcString,null);
console.log("Make a npc");
}

NPC1.prototype= Object.create(Phaser.Sprite.prototype);
NPC1.prototype.constructor=player;


NPC1.prototype.create=function(){

}

NPC1.prototype.update=function(){
//console.log("MEH");
}


NPC1.prototype.sentences=[

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
dialogueBox = game.add.sprite(game.camera.x, game.camera.y+450, 'DialogueBox');
dialogueTimmer=5;
dialogue= game.add.text(game.camera.x+20,game.camera.y+475,this.sentences[this.dialogueIndex][this.dialogueCount],{fill: "#abcdef"});
dialogue.text=this.sentences[this.dialogueIndex][this.dialogueCount];
//console.log("dialogue is drawn");

this.dialogueCount++;
isDialogueUp=true;

}