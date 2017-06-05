/*
genericNPCStructure.js
Description: A generic NPC that can be coppied and used as a template for making other npcs.

We need a total of 13 NPCs for the game. So far there are 4 others, so I guess 9 more, and the current four need the dialogue to reflect what is in the google drive.
*/


//Don't worry about these variables.
//temp var for dialogue
var d;
var temp;
var temp2;
var temp3;
var active=false;

//Constructor stuff for the next few lines. 
var genericNPCStructure= function(xPos,yPos,npcString){
Phaser.Sprite.call(this,game,xPos,yPos,npcString,null);
console.log("Make a generic npc");
}

//Prototype stuff.
genericNPCStructure.prototype= Object.create(Phaser.Sprite.prototype);
genericNPCStructure.prototype.constructor=genericNPCStructure;

//Nothing really needs to be done here.
genericNPCStructure.prototype.create=function(){

}

//The name of the NPC when talking to them.
//Look into boot.js where the key should match the name of the npc for the correct graphic. See main.js and Day0.js for examples on how this looks. 
genericNPCStructure.prototype.name="Mr.Generic";

//All of the dialogue of the NPCs. This is a 2D array. Each "X" array represents a day, and the strings inside the "Y" or nested arrays represent the dialogue for the NPC. 
genericNPCStructure.prototype.sentences=[

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

    //This is the array of dialogue for day one.
    [2,
    "Oh hey how's it going?",
    "I guess mail is a thing people need."
    ],

    [4,
    "This is how dialogue would work for multiple days.",
    "Each line in this array is the different\ndialogue that people say when you talk to them\neach time.",
    "Each array stands for the dialogue for different days.",
    "The number at the beginning of the array tells the game\nhow many lines of dialogue exist for this day."
    ],

    [1,
    "This is the dialogue for day 3."
    ],

    [2,
    "This is the dialogue for day 4.",
    "Looks good"
    ],

    [2,
    "This is the dialogue for day 5.",
    "Summer is soon"
    ],

    [2,
    "This is the dialogue for day 6.",
    "Hopefully this game is good"
    ],

    [2,
    "This is the dialogue for day 7.",
    "HThis is the last day."
    ],


];

//Don't worry about this.
genericNPCStructure.prototype.dialogueCount=1;
//Don't worry about this.
genericNPCStructure.prototype.dialogueIndex=1;
//Don't touch this.
genericNPCStructure.prototype.talk=function(){
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

//Don't worry about this
genericNPCStructure.prototype.update=function(){
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