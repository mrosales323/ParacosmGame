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
var active=false
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

NPC3.prototype.update=function(){
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