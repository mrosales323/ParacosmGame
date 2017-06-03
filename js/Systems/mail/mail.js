//-------------------
var mailGroup;
var m;
//-------------------
var letter;
var message;

var deliveredAllMail;
//--------------------------------------------------------------------------
//depending on the stage time load the notes with different sets of text then assign them a value

var Mail = function(game,key){
Phaser.Sprite.call(this,game,game.camera.x+game.camera.width/2,game.camera.y+game.camera.height/2,key,null);
	console.log("Make my mailBag");
	this.scale.setTo(30,20);
	this.anchor.setTo(.5,.5);
	this.smoothed=false;
}

Mail.prototype= Object.create(Phaser.Sprite.prototype);
Mail.prototype.constructor=Mail;


Mail.prototype.makeGrid=function(){
	//when mail is made visible this function will be called
	//it orients the actual mail on the mailbag in a set grid
	//mailGroup.createMultiple(5,'mail',true);
	//mailGroup.scale.setTo(10,10);
	//mailGroup.align(game.world.centerX,game.world.centerY, 500, 500);

	for (var i=0;i<mailGroup.length;i++) {
		if(i<6){
			mailGroup.children[i].y=game.camera.y+game.camera.height/2-150;
			mailGroup.children[i].x=game.camera.x+game.camera.width/2-(375)+((i)*150);
		}else{
			mailGroup.children[i].y=game.camera.y+game.camera.height/2+125;
			mailGroup.children[i].x=game.camera.x+game.camera.width/2-(375)+((i-6)*150);
		}
	}
}
Mail.prototype.addToGroup=function(stage){
	if(!mailGroup){
		mailGroup=game.add.group();
	}
	var fuckYou=game.add.sprite(game.world.centerX,game.world.centerY,'mail');
	fuckYou.inputEnabled = true;
	fuckYou.scale.setTo(8,8);
	fuckYou.anchor.setTo(.5,.5);
	fuckYou.smoothed=false;
	//fuckYou.visible=false;
	fuckYou.events.onInputDown.add(
		function(){
			//console.log("clicked");
			//check the stage nad the index of the object clicked
			//then display a new sprite on the screen with the text overlaying it
			//depending on fuckYous current pos print different text to the box
			//console.log(fuckYou.x);
			//console.log(fuckYou.y);
			if(letter){
				letter.kill();
				if(message){
					message.kill();
				}
			}
			console.log("making the letter");
			letter=game.add.sprite(game.camera.x+game.camera.width/2,game.camera.y+game.camera.height/2,'letter');
			letter.smoothed=false;
			letter.anchor.setTo(.5,.5);
			letter.scale.setTo(20,20);
			game.add.existing(letter);
			letter.mailKey="key";
			var printText=function(string){
				console.log("tater tots");
				var style = { font: "16px Arial", fill: "#000", 
		        align: "left", // the alignment of the text is independent of the bounds, try changing to 'center' or 'right'
		        boundsAlignH: "left", 
		        boundsAlignV: "top", 
		        wordWrap: true, wordWrapWidth: 300 };
        		message=game.add.text(game.camera.x+game.camera.width/2,game.camera.y+game.camera.height/2,string,style);
				message.setTextBounds(0, 0, 300, 568);
				message.anchor.setTo(.5,.5);
				if(message){
					message.visible=true;
				}
			}					
			//console.log("1010101010101010101010101-----------");
			console.log("STAGE: "+stage);
			switch(stage){
				case 0:
					if(fuckYou.x==game.camera.x+game.camera.width/2-(375)&&fuckYou.y==game.camera.y+game.camera.height/2-150){
						//console.log(mailGroup.children[0].mailKey);
						printText("letter1");
					}else if(fuckYou.x==game.camera.x+game.camera.width/2-(375)+150&&fuckYou.y==game.camera.y+game.camera.height/2-150){
						//console.log(mailGroup.children[1].mailKey);
						printText("This letter works at least");
						console.log("Camera: "+game.camera.x+game.camera.width/2-(375));
						console.log(fuckYou.x+", "+fuckYou.y);
					}else if(fuckYou.x==game.camera.x+game.camera.width/2-(375)+(2*150)&&fuckYou.y==game.camera.y+game.camera.height/2-150){
						//console.log(mailGroup.children[2].mailKey);
						printText("Letter3");
					}else if(fuckYou.x==game.camera.x+game.camera.width/2-(375)+(3*150)&&fuckYou.y==game.camera.y+game.camera.height/2-150){
						printText("randomText");
					}else if(fuckYou.x==game.camera.x+game.camera.width/2-(375)+(4*150)&&fuckYou.y==game.camera.y+game.camera.height/2-150){
						printText("randomText");
					}else if(fuckYou.x==game.camera.x+game.camera.width/2-(375)+(5*150)&&fuckYou.y==game.camera.y+game.camera.height/2-150){
						printText("randomText");
					}else if(fuckYou.x==game.camera.x+game.camera.width/2-(375)+(0*150)&&fuckYou.y==game.camera.y+game.camera.height/2+125){
						printText("killme");
					}

					break;
				case 1:
					if(fuckYou.x==game.camera.x+game.camera.width/2-(375)&&fuckYou.y==game.camera.y+game.camera.height/2-150){
						//console.log(mailGroup.children[0].mailKey);
						printText("LETTER1\n\nDear Josh,\n    I have figured out how to make text work in game for our mail system."+
							"Its actually quite a simple system that will read the day and display the required text"+
							"in a bounded text box.\n\n\nLove, Cole");
					}else if(fuckYou.x==game.camera.x+game.camera.width/2-(375)+150&&fuckYou.y==game.camera.y+game.camera.height/2-150){
						//console.log(mailGroup.children[1].mailKey);
						printText("LETTER2");
					}else if(fuckYou.x==game.camera.x+game.camera.width/2-(375)+(2*150)&&fuckYou.y==game.camera.y+game.camera.height/2-150){
						//console.log(mailGroup.children[2].mailKey);
						printText("Letter3");
					}else if(fuckYou.x==game.camera.x+game.camera.width/2-(375)+(3*150)&&fuckYou.y==game.camera.y+game.camera.height/2-150){
						printText("randomText");
					}else if(fuckYou.x==game.camera.x+game.camera.width/2-(375)+(4*150)&&fuckYou.y==game.camera.y+game.camera.height/2-150){
						printText("randomText");
					}else if(fuckYou.x==game.camera.x+game.camera.width/2-(375)+(5*150)&&fuckYou.y==game.camera.y+game.camera.height/2-150){
						printText("randomText");
					}else if(fuckYou.x==game.camera.x+game.camera.width/2-(375)+(0*150)&&fuckYou.y==game.camera.y+game.camera.height/2+125){
						printText("killme");
					}
					break;
				case 2:
					if(fuckYou.x==game.camera.x+game.camera.width/2-(375)&&fuckYou.y==game.camera.y+game.camera.height/2-150){
						//console.log(mailGroup.children[0].mailKey);
						printText("LETTER1\n\nDear Josh,\n    I have figured out how to make text work in game for our mail system."+
							"Its actually quite a simple system that will read the day and display the required text"+
							"in a bounded text box.\n\n\nLove, Cole");
					}else if(fuckYou.x==game.camera.x+game.camera.width/2-(375)+150&&fuckYou.y==game.camera.y+game.camera.height/2-150){
						//console.log(mailGroup.children[1].mailKey);
						printText("LETTER2");
					}else if(fuckYou.x==game.camera.x+game.camera.width/2-(375)+(2*150)&&fuckYou.y==game.camera.y+game.camera.height/2-150){
						//console.log(mailGroup.children[2].mailKey);
						printText("Letter3");
					}else if(fuckYou.x==game.camera.x+game.camera.width/2-(375)+(3*150)&&fuckYou.y==game.camera.y+game.camera.height/2-150){
						printText("randomText");
					}else if(fuckYou.x==game.camera.x+game.camera.width/2-(375)+(4*150)&&fuckYou.y==game.camera.y+game.camera.height/2-150){
						printText("randomText");
					}else if(fuckYou.x==game.camera.x+game.camera.width/2-(375)+(5*150)&&fuckYou.y==game.camera.y+game.camera.height/2-150){
						printText("randomText");
					}else if(fuckYou.x==game.camera.x+game.camera.width/2-(375)+(0*150)&&fuckYou.y==game.camera.y+game.camera.height/2+125){
						printText("killme");
					}
					break;
			}
			console.log("after switch");

		}, this);
	//Initialize the mail keys for the stage here.
	mailGroup.add(fuckYou);
	console.log(mailGroup.length);
}

Mail.prototype.setKeys=function(stage){
	//Use this area to set which npc's that day get mail.
	switch(stage){
		case 0:
			console.log("OK, here we go.")
			mailGroup.children[0].mailKey="Mayor";
			break;
		case 1:
			console.log("OK, here we go.")
			mailGroup.children[0].mailKey="Alex";
			mailGroup.children[1].mailKey="Sandy";
			mailGroup.children[2].mailKey="Helen";
			break;
		case 2:
			console.log("OK, here we go.")
			mailGroup.children[0].mailKey="Alex";
			mailGroup.children[1].mailKey="Sandy";
			mailGroup.children[2].mailKey="Helen";
			break;
		case 3:
			console.log("OK, here we go.")
			mailGroup.children[0].mailKey="Alex";
			mailGroup.children[1].mailKey="Sandy";
			mailGroup.children[2].mailKey="Helen";
			break;
		case 4:
			console.log("OK, here we go.")
			mailGroup.children[0].mailKey="Alex";
			mailGroup.children[1].mailKey="Sandy";
			mailGroup.children[2].mailKey="Helen";
			break;
		case 5:
			console.log("OK, here we go.")
			mailGroup.children[0].mailKey="Alex";
			mailGroup.children[1].mailKey="Sandy";
			mailGroup.children[2].mailKey="Helen";
			break;
		case 6:
			console.log("OK, here we go.")
			mailGroup.children[0].mailKey="Alex";
			mailGroup.children[1].mailKey="Sandy";
			mailGroup.children[2].mailKey="Helen";
			break;
		case 7:
			console.log("OK, here we go.")
			mailGroup.children[0].mailKey="Alex";
			mailGroup.children[1].mailKey="Sandy";
			mailGroup.children[2].mailKey="Helen";
			break;
	}
}

Mail.prototype.setUp=function(stage){
	//change these values to set how many mail pieces need to be delivered for the day.
	//look through and reenable everything
	for(var i=0;i<mailGroup.length;i++){
		mailGroup.children[i].visible=true;
		if(message){
			console.log("message exists");
			message.visible=true;
		}
		//letter.visible=true;
	}
	switch(stage){
		case 0:
			for(var i=1;i<mailGroup.length;i++){
				mail.giveLetter(i);
			}
			break;
		case 1:
			for(var i=3;i<mailGroup.length;i++){
				mail.giveLetter(i);
			}
			break;
		case 2:
			for(var i=0;i<mailGroup.length;i++){
				mail.giveLetter(i);
			}
			break;
		case 3:
			for(var i=0;i<mailGroup.length;i++){
				mail.giveLetter(i);
			}
			break;
		case 4:
			for(var i=0;i<mailGroup.length;i++){
				mail.giveLetter(i);
			}
			break;
		case 5:
			for(var i=0;i<mailGroup.length;i++){
				mail.giveLetter(i);
			}
			break;
		case 6:
			for(var i=0;i<mailGroup.length;i++){
				mail.giveLetter(i);
			}
			break;
		case 7:
			for(var i=0;i<mailGroup.length;i++){
				mail.giveLetter(i);
			}
			break;
	}
}

Mail.prototype.doesKeyMatch=function(npcName){
	for (var i = mailGroup.length - 1; i >= 0; i--) {
       //console.log("This is a mail key2222");
       //console.log(mailGroup.children[i].mailKey);
       if(mailGroup.children[i].mailKey==npcName) this.giveLetter(i);
    }
}

Mail.prototype.hasDeliveredAllMail=function(){
	for (var i = mailGroup.length - 1; i >= 0; i--) {
       //console.log("This is a mail key2222");
       //console.log(mailGroup.children[i].mailKey);
       if(mailGroup.children[i].visible==true) return false
    }
	return true;
}

Mail.prototype.center=function(){
	this.x=game.camera.x+game.camera.width/2;
	this.y=game.camera.y+game.camera.height/2;
}
Mail.prototype.makeVisible=function(){
	this.visible=true;
	mailGroup.visible=true;
	//place the group
	this.center();
	this.makeGrid();
}
Mail.prototype.checkUp=function(){
	if(this.visible==true){
		//its visible
		return true;
	}
}
Mail.prototype.makeInvisible=function(){
	this.visible=false;
	mailGroup.visible=false;
}

Mail.prototype.deleteFromGroup=function(object){
	//clear the group
	if(mailGroup){
		mailGroup.removeAll(true);
		console.log("mailgroup undefined");
	}else{

	}
}
Mail.prototype.killLetter=function(){
	if(letter){
		letter.kill();
		if(message){
			message.kill();
		}
	}
}
Mail.prototype.giveLetter=function(index){
	mailGroup.children[index].visible=false;
	mailGroup.children[index].inputEnabled=false;
}
Mail.prototype.resetBag=function(){
	for(var i;i<mailGroup.length;i++){
		mailGroup.children[i].visible=true;
		mailGroup.children[i].inputEnabled=true;
	}
}
Mail.prototype.update=function(){
	if(game.input.keyboard.justPressed(Phaser.Keyboard.ESC)){
		//letter.kill();
		console.log("esc");
		if(letter){
			letter.kill();
		}
		if(message){
			message.kill();
		}

	}
	for(var i=0;i<mailGroup.length;i++){
		if(mailGroup.children[i].input.pointerOver()){
			//check for click event

			mailGroup.children[i].scale.setTo(7,7);
		}else{
			mailGroup.children[i].scale.setTo(6,6);
		}	
	}
}
