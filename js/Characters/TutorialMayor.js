//temp var for dialogue
var d;
var temp;
var temp2;
var temp3;
var active=false;
/*
Todo: Make dialogue box system. Place text box at bottom of the screen. Make it where when colliding with npc you can press space to talk. 
*/
var TutorialMayor= function(xPos,yPos,npcString){
Phaser.Sprite.call(this,game,xPos,yPos,npcString,null);
console.log("Make the TutorialMayor");
}

TutorialMayor.prototype= Object.create(Phaser.Sprite.prototype);
TutorialMayor.prototype.constructor=TutorialMayor;


TutorialMayor.prototype.create=function(){

}

TutorialMayor.prototype.mailKeyIndex=[3,0,0,0,0,0,0];

TutorialMayor.prototype.name="Mayor";

TutorialMayor.prototype.sentences=[

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
    "Ahh "+playerName+" are you here to deliver my mail to me?\nCome here and let me see it.",
    "Hmm more junk it seems. This mayor business is hard work.\nAnyways good work today, I'll see you tomorrow."
    ]

];

TutorialMayor.prototype.dialogueCount=1;
TutorialMayor.prototype.dialogueIndex=1;

TutorialMayor.prototype.talk=function(){
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
    //console.log("GRAAAAAAAAAAPPPEESSS " +this.dialogueCount+" APPPPLLLESSS " + this.dialogueIndex);

    if(this.dialogueCount==this.mailKeyIndex[0]) mail.doesKeyMatch(this.name);

}
var i=0;

TutorialMayor.prototype.update=function(){
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