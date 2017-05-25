var EXMarkSprite;

/*
Todo: Make dialogue box system. Place text box at bottom of the screen. Make it where when colliding with npc you can press space to talk. 
*/
var MailBox= function(xPos,yPos,npcString){
Phaser.Sprite.call(this,game,xPos,yPos,npcString,null);
console.log("Make a npc");
}

MailBox.prototype= Object.create(Phaser.Sprite.prototype);
MailBox.prototype.constructor=MailBox;

MailBox.prototype.once;


MailBox.prototype.create=function(){
this.once=false;
}

MailBox.prototype.update=function(){
//console.log("MEH");
	if(this.once==true) return;
	if(mail.hasDeliveredAllMail()==true){
		EXMarkSprite=game.add.sprite(mailBox.centerX*.99,mailBox.centerY*.8,"EXMark");
		EXMarkSprite.scale.setTo(4,4);
		EXMarkSprite.smoothed=false;
		console.log("CAN END THE DAY");
		this.once=true;
	}
	else this.once=false;
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
//this.name=playerName;
//if(hasDeliveredAllMailForDay==true) DO SOME COOL STUFF.
	if(mail.hasDeliveredAllMail()==true){
		mail.kill();
		BGM.pause();
		switch(stage){
			case 1:
				DayTwoButtonEnabled=true
				game.state.start("DaySelectionMenu");
				break;
		}
	}
	else{
		console.log("Can't end the day yet.");
		createDialogueSetUp("I haven't finished delivering all the mail yet.",this);
	}
}