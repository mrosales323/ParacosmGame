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
	switch(stage){
		case 0:
			if(mail.visible==true) EXMarkSprite.visible=false;
			if(mail.hasDeliveredAllMail()==true){
				if(mail.visible==false)EXMarkSprite.visible=true;
			}
		break;

		case 1:
			if(mail1.visible==true) EXMarkSprite.visible=false;
			if(mail1.hasDeliveredAllmail1()==true){
				if(mail1.visible==false)EXMarkSprite.visible=true;
			}
		break;
		
		case 2:
			if(mail2.visible==true) EXMarkSprite.visible=false;
			if(mail2.hasDeliveredAllmail2()==true){
				if(mail2.visible==false)EXMarkSprite.visible=true;
			}
		break;
		
		case 3:
			if(mail3.visible==true) EXMarkSprite.visible=false;
			if(mail3.hasDeliveredAllmail3()==true){
				if(mail3.visible==false)EXMarkSprite.visible=true;
			}
		break;
		
		case 4:
			if(mail4.visible==true) EXMarkSprite.visible=false;
			if(mail4.hasDeliveredAllmail4()==true){
				if(mail4.visible==false)EXMarkSprite.visible=true;
			}
		break;
		
		case 5:
			if(mail5.visible==true) EXMarkSprite.visible=false;
			if(mail5.hasDeliveredAllmail5()==true){
				if(mail5.visible==false)EXMarkSprite.visible=true;
			}
		break;
		
		case 6:
			if(mail6.visible==true) EXMarkSprite.visible=false;
			if(mail6.hasDeliveredAllmail6()==true){
				if(mail6.visible==false)EXMarkSprite.visible=true;
			}
		break;
		
		case 7:
			if(mail7.visible==true) EXMarkSprite.visible=false;
			if(mail7.hasDeliveredAllmail7()==true){
				if(mail7.visible==false)EXMarkSprite.visible=true;
			}
		break;
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
		switch(stage){
			case 0:
				if(mail.hasDeliveredAllMail()==true){
					mail.kill();
					BGM.pause();
					EXMarkSprite.kill();
					game.state.start("DaySelectionMenu");
				}
				else{
					console.log("Can't end the day yet.");
					createDialogueSetUp("I haven't finished delivering all the mail yet.",this);
				}
				break;
			case 1:
				if(mail1.hasDeliveredAllmail1()==true){
					mail1.kill();
					BGM.pause();
					EXMarkSprite.kill();
					DayTwoButtonEnabled=true;
					game.state.start("DaySelectionMenu");
				}
				else{
					console.log("Can't end the day yet.");
					createDialogueSetUp("I haven't finished delivering all the mail yet.",this);
				}
				break;
			case 2:
				if(mail2.hasDeliveredAllmail2()==true){
					mail2.kill();
					BGM.pause();
					EXMarkSprite.kill();
					DayThreeButtonEnabled=true;
					game.state.start("DaySelectionMenu");
				}
				else{
					console.log("Can't end the day yet.");
					createDialogueSetUp("I haven't finished delivering all the mail yet.",this);
				}
				break;
			case 3:
				if(mail3.hasDeliveredAllmail3()==true){
					mail3.kill();
					BGM.pause();
					EXMarkSprite.kill();
					DayFourButtonEnabled=true;
					game.state.start("DaySelectionMenu");
				}
				else{
					console.log("Can't end the day yet.");
					createDialogueSetUp("I haven't finished delivering all the mail yet.",this);
				}
				break;
			case 4:
				if(mail4.hasDeliveredAllmail4()==true){
					mail4.kill();
					BGM.pause();
					EXMarkSprite.kill();
					DayFiveButtonEnabled=true;
					game.state.start("DaySelectionMenu");
				}
				else{
					console.log("Can't end the day yet.");
					createDialogueSetUp("I haven't finished delivering all the mail yet.",this);
				}
				break;
			case 5:
				if(mail5.hasDeliveredAllmail5()==true){
					mail5.kill();
					BGM.pause();
					EXMarkSprite.kill();
					DaySixButtonEnabled=true;
					game.state.start("DaySelectionMenu");
				}
				else{
					console.log("Can't end the day yet.");
					createDialogueSetUp("I haven't finished delivering all the mail yet.",this);
				}
				break;
			case 6:
				if(mail6.hasDeliveredAllmail6()==true){
					mail6.kill();
					BGM.pause();
					EXMarkSprite.kill();
					DaySevenButtonEnabled=true;
					game.state.start("DaySelectionMenu");
				}
				else{
					console.log("Can't end the day yet.");
					createDialogueSetUp("I haven't finished delivering all the mail yet.",this);
				}
				break;
			case 7:
				//Cool end game stuff here
				if(mail7.hasDeliveredAllmail7()==true){
					mail7.kill();
					BGM.pause();
					EXMarkSprite.kill();
					game.state.start("DaySelectionMenu");
				}
				else{
					console.log("Can't end the day yet.");
					createDialogueSetUp("I haven't finished delivering all the mail yet.",this);
				}
				break;
		}
	}