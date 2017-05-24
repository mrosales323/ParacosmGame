/*
Todo: Make dialogue box system. Place text box at bottom of the screen. Make it where when colliding with npc you can press space to talk. 
*/
var d;
var temp;
var temp2;
var temp3;
var active=false;
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
    temp=[this.sentences[this.dialogueIndex][this.dialogueCount]];
    d=createDialogueSetUp(this.sentences[this.dialogueIndex][this.dialogueCount],this);
    temp2=d.text;
    d.text="";
    temp3=[temp2];

    console.log("INDEX: "+this.dialogueIndex);
    active=true
    console.log("activated");  

    mail.doesKeyMatch(this.name);
}
var i=0;
NPC2.prototype.update=function(){
    if(active){
        if(this.dialogueIndex==0){
            if(i<temp3.length){
                d.text=d.text+temp3[i];
                console.log(d.text);
                i++
             }else{
                active=false;
                console.log("Deactivated");
                i=0;
             }
        }else{
            if(i<temp3.length){
                d.text=d.text+temp3[i];
                //console.log(d.text);
                i++
             }else{
                active=false;
                console.log(this.dialogueCount);
                console.log(this.dialogueIndex);
                console.log("Deactivatedsss");
                i=0;
             }
        }
    }
}