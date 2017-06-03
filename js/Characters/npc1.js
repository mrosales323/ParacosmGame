var playerName;
//temp var for dialogue
var d;
var temp;
var temp2;
var temp3;
var active=false;
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
    temp=[...this.sentences[this.dialogueIndex][this.dialogueCount]];
    d=createDialogueSetUp(this.sentences[this.dialogueIndex][this.dialogueCount],this);
    temp2=d.text;
    d.text="";
    temp3=[...temp2];

    console.log("INDEX: "+this.dialogueIndex);
    active=true
    console.log("activated");    //console.log(d.text);


    switch(stage){
        case 1:
            mail1.doesKeyMatch(this.name);
        break;
        case 2:
             mail2.doesKeyMatch(this.name);
        break;
        case 3:
             mail3.doesKeyMatch(this.name);
        break;
        case 4:
             mail4.doesKeyMatch(this.name);
        break;
        case 5:
             mail5.doesKeyMatch(this.name);
        break;
        case 6:
             mail6.doesKeyMatch(this.name);
        break;
        case 7:
            mail7.doesKeyMatch(this.name);
        break;

    }


}
var i=0;

NPC1.prototype.update=function(){
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