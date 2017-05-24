/*
Todo: Make dialogue box system. Place text box at bottom of the screen. Make it where when colliding with npc you can press space to talk. 
*/
//the worst named variables ever
//d is a reference to the dialogue object created
var d;
//temp is the dynamic array of chars in the sentence
var temp;
//a duplication of the first line
var temp2;
//an array from that duplication
var temp3;
var active=false;
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

NPC4.prototype.name="Helen";

NPC4.prototype.sentences=[

    [2,
    "Hello there. The kids just got out of class. \nWhat a bright bunch I have got this year.",
    "A letter from the committee? Why thank you.",
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
    temp=[...this.sentences[this.dialogueIndex][this.dialogueCount]];
    d=createDialogueSetUp(this.sentences[this.dialogueIndex][this.dialogueCount],this);
    temp2=d.text;
    d.text="";
    temp3=[...temp2];

    console.log("INDEX: "+this.dialogueIndex);
    active=true
    console.log("activated"); 
}
var i=0;

NPC4.prototype.update=function(){
//console.log("MEH");
    //console.log("sdfsdf");
    //console.log("safsdfsg");
    /*
    if(temp3){
            console.log(temp3.length);
    }
    if(temp){
        console.log(temp.length);
    }
    */
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