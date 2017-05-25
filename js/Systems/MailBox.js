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
MailBox.prototype.create=function(){

}

MailBox.prototype.update=function(){
	if(mail.visible==true) EXMarkSprite.visible=false;
	if(mail.hasDeliveredAllMail()==true){
	if(mail.visible==false)	EXMarkSprite.visible=true;
	}
}

MailBox.prototype.name="mailBox";

MailBox.prototype.createEx=function(){
		console.log("GASPO!!!!");
		EXMarkSprite=game.add.sprite(mailBox.centerX*.99,mailBox.centerY*.8,"EXMark");
		EXMarkSprite.scale.setTo(4,4);
		EXMarkSprite.smoothed=false;
		EXMarkSprite.visible=false;
}

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
		EXMarkSprite.kill();
		this.kill();
		switch(stage){
			case 1:
				DayTwoButtonEnabled=true;
				game.state.start("DaySelectionMenu");
				break;
			case 2:
				DayThreeButtonEnabled=true;
				game.state.start("DaySelectionMenu");
				break;
			case 2:
				DayThreeButtonEnabled=true;
				game.state.start("DaySelectionMenu");
				break;
			case 3:
				DayFourButtonEnabled=true;
				game.state.start("DaySelectionMenu");
				break;
			case 4:
				DayFiveButtonEnabled=true;
				game.state.start("DaySelectionMenu");
				break;
			case 5:
				DaySixButtonEnabled=true;
				game.state.start("DaySelectionMenu");
				break;
			case 6:
				DaySevenButtonEnabled=true;
				game.state.start("DaySelectionMenu");
				break;
			case 7:
				//Cool end game stuff here
				game.state.start("DaySelectionMenu");
				break;
		}
	}
	else{
		console.log("Can't end the day yet.");
		createDialogueSetUp("I haven't finished delivering all the mail yet.",this);
	}
}