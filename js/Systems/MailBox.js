

/*
Todo: Make dialogue box system. Place text box at bottom of the screen. Make it where when colliding with npc you can press space to talk. 
*/
var MailBox= function(xPos,yPos,npcString){
Phaser.Sprite.call(this,game,xPos,yPos,npcString,null);
console.log("Make a npc");
}

MailBox.prototype= Object.create(Phaser.Sprite.prototype);
MailBox.prototype.constructor=MailBox;


MailBox.prototype.create=function(){

}

MailBox.prototype.update=function(){
//console.log("MEH");
}

MailBox.prototype.name="mailBox";

MailBox.prototype.sentences=[

    //first numeric value represents the number of strings in that dialogue list.
    //[0,x]
    [1,
    "How are you talking to a mailbox? They don't talk back you know.",
    ]

];

MailBox.prototype.dialogueCount=1;
MailBox.prototype.dialogueIndex=1;

MailBox.prototype.talk=function(){
//if(hasDeliveredAllMailForDay==true) DO SOME COOL STUFF.
console.log("MAIL TIME!!!!!!!!!!!");

}