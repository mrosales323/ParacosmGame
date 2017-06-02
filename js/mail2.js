//-------------------
var mail2Group;
var m;
//-------------------
var letter;
var message;

var deliveredAllmail2;
//--------------------------------------------------------------------------
//depending on the stage time load the notes with different sets of text then assign them a value

var mail2 = function(game,key){
Phaser.Sprite.call(this,game,game.camera.x+game.camera.width/2,game.camera.y+game.camera.height/2,key,null);
	console.log("Make my mail2Bag");
	this.scale.setTo(30,20);
	this.anchor.setTo(.5,.5);
	this.smoothed=false;
}

mail2.prototype= Object.create(Phaser.Sprite.prototype);
mail2.prototype.constructor=mail2;


mail2.prototype.makeGrid=function(){
	//when mail2 is made visible this function will be called
	//it orients the actual mail2 on the mail2bag in a set grid
	//mail2Group.createMultiple(5,'mail2',true);
	//mail2Group.scale.setTo(10,10);
	//mail2Group.align(game.world.centerX,game.world.centerY, 500, 500);

	for (var i=0;i<mail2Group.length;i++) {
		if(i<6){
			mail2Group.children[i].y=game.camera.y+game.camera.height/2-150;
			mail2Group.children[i].x=game.camera.x+game.camera.width/2-(375)+((i)*150);
		}else{
			mail2Group.children[i].y=game.camera.y+game.camera.height/2+125;
			mail2Group.children[i].x=game.camera.x+game.camera.width/2-(375)+((i-6)*150);
		}
	}
}
mail2.prototype.addToGroup=function(stage){
	console.log("is this even being used");
	if(!mail2Group){
		mail2Group=game.add.group();
	}
	var fuckYou=game.add.sprite(game.world.centerX,game.world.centerY,'mail');
	fuckYou.inputEnabled = true;
	fuckYou.scale.setTo(8,8);
	fuckYou.anchor.setTo(.5,.5);
	fuckYou.smoothed=false;
	//fuckYou.visible=false;
	console.log(stage+ "is the sdfgdfgdfhdfhdfhdfh stage");
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
			letter.mail2Key="key";
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
						//console.log(mail2Group.children[0].mail2Key);
						printText("letter1");
					}else if(fuckYou.x==game.camera.x+game.camera.width/2-(375)+150&&fuckYou.y==game.camera.y+game.camera.height/2-150){
						//console.log(mail2Group.children[1].mail2Key);
						printText("This letter works at least");
						console.log("Camera: "+game.camera.x+game.camera.width/2-(375));
						console.log(fuckYou.x+", "+fuckYou.y);
					}else if(fuckYou.x==game.camera.x+game.camera.width/2-(375)+(2*150)&&fuckYou.y==game.camera.y+game.camera.height/2-150){
						//console.log(mail2Group.children[2].mail2Key);
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
						//console.log(mail2Group.children[0].mail2Key);
						printText("LETTER1\n\nDear Josh,\n    I have figured out how to make text work in game for our mail2 system."+
							"Its actually quite a simple system that will read the day and display the required text"+
							"in a bounded text box.\n\n\nLove, Cole");
					}else if(fuckYou.x==game.camera.x+game.camera.width/2-(375)+150&&fuckYou.y==game.camera.y+game.camera.height/2-150){
						//console.log(mail2Group.children[1].mail2Key);
						printText("LETTER2");
					}else if(fuckYou.x==game.camera.x+game.camera.width/2-(375)+(2*150)&&fuckYou.y==game.camera.y+game.camera.height/2-150){
						//console.log(mail2Group.children[2].mail2Key);
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
						//console.log(mail2Group.children[0].mail2Key);
						printText("LETTER1\n\nDear Josh,\n    I have figured out how to make text work in game for our mail2 system."+
							"Its actually quite a simple system that will read the day and display the required text"+
							"in a bounded text box.\n\n\nLove, Cole");
					}else if(fuckYou.x==game.camera.x+game.camera.width/2-(375)+150&&fuckYou.y==game.camera.y+game.camera.height/2-150){
						//console.log(mail2Group.children[1].mail2Key);
						printText("LETTER2");
					}else if(fuckYou.x==game.camera.x+game.camera.width/2-(375)+(2*150)&&fuckYou.y==game.camera.y+game.camera.height/2-150){
						//console.log(mail2Group.children[2].mail2Key);
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
	//Initialize the mail2 keys for the stage here.
	mail2Group.add(fuckYou);
	console.log(mail2Group.length);
}

mail2.prototype.setKeys=function(stage){
	//Use this area to set which npc's that day get mail2.
	switch(stage){
		case 0:
			console.log("OK, here we go.")
			mail2Group.children[0].mail2Key="Mayor";
			break;
		case 1:
			console.log("OK, here we go.")
			mail2Group.children[0].mail2Key="Alex";
			mail2Group.children[1].mail2Key="Sandy";
			mail2Group.children[2].mail2Key="Helen";
			break;
		case 2:
			console.log("OK, here we go.")
			mail2Group.children[0].mail2Key="Alex";
			mail2Group.children[1].mail2Key="Sandy";
			mail2Group.children[2].mail2Key="Helen";
			break;
		case 3:
			console.log("OK, here we go.")
			mail2Group.children[0].mail2Key="Alex";
			mail2Group.children[1].mail2Key="Sandy";
			mail2Group.children[2].mail2Key="Helen";
			break;
		case 4:
			console.log("OK, here we go.")
			mail2Group.children[0].mail2Key="Alex";
			mail2Group.children[1].mail2Key="Sandy";
			mail2Group.children[2].mail2Key="Helen";
			break;
		case 5:
			console.log("OK, here we go.")
			mail2Group.children[0].mail2Key="Alex";
			mail2Group.children[1].mail2Key="Sandy";
			mail2Group.children[2].mail2Key="Helen";
			break;
		case 6:
			console.log("OK, here we go.")
			mail2Group.children[0].mail2Key="Alex";
			mail2Group.children[1].mail2Key="Sandy";
			mail2Group.children[2].mail2Key="Helen";
			break;
		case 7:
			console.log("OK, here we go.")
			mail2Group.children[0].mail2Key="Alex";
			mail2Group.children[1].mail2Key="Sandy";
			mail2Group.children[2].mail2Key="Helen";
			break;
	}
}

mail2.prototype.setUp=function(stage){
	//change these values to set how many mail2 pieces need to be delivered for the day.
	//look through and reenable everything
	for(var i=0;i<mail2Group.length;i++){
		mail2Group.children[i].visible=true;
		if(message){
			console.log("message exists");
			message.visible=true;
		}
		//letter.visible=true;
	}
	switch(stage){
		case 0:
			for(var i=1;i<mail2Group.length;i++){
				mail2.giveLetter(i);
			}
			break;
		case 1:
			for(var i=3;i<mail2Group.length;i++){
				mail2.giveLetter(i);
			}
			break;
		case 2:
			for(var i=1;i<mail2Group.length;i++){
				mail2.giveLetter(i);
			}
			break;
		case 3:
			for(var i=0;i<mail2Group.length;i++){
				mail2.giveLetter(i);
			}
			break;
		case 4:
			for(var i=0;i<mail2Group.length;i++){
				mail2.giveLetter(i);
			}
			break;
		case 5:
			for(var i=0;i<mail2Group.length;i++){
				mail2.giveLetter(i);
			}
			break;
		case 6:
			for(var i=0;i<mail2Group.length;i++){
				mail2.giveLetter(i);
			}
			break;
		case 7:
			for(var i=0;i<mail2Group.length;i++){
				mail2.giveLetter(i);
			}
			break;
	}
}

mail2.prototype.doesKeyMatch=function(npcName){
	for (var i = mail2Group.length - 1; i >= 0; i--) {
       //console.log("This is a mail2 key2222");
       //console.log(mail2Group.children[i].mail2Key);
       if(mail2Group.children[i].mail2Key==npcName) this.giveLetter(i);
    }
}

mail2.prototype.hasDeliveredAllmail2=function(){
	for (var i = mail2Group.length - 1; i >= 0; i--) {
       //console.log("This is a mail2 key2222");
       //console.log(mail2Group.children[i].mail2Key);
       if(mail2Group.children[i].visible==true) return false
    }
	return true;
}

mail2.prototype.center=function(){
	this.x=game.camera.x+game.camera.width/2;
	this.y=game.camera.y+game.camera.height/2;
}
mail2.prototype.makeVisible=function(){
	this.visible=true;
	mail2Group.visible=true;
	//place the group
	this.center();
	this.makeGrid();
}
mail2.prototype.checkUp=function(){
	if(this.visible==true){
		//its visible
		return true;
	}
}
mail2.prototype.makeInvisible=function(){
	this.visible=false;
	mail2Group.visible=false;
}

mail2.prototype.deleteFromGroup=function(object){
	//clear the group
	if(mail2Group){
		mail2Group.removeAll(true);
		console.log("mail2group undefined");
	}else{

	}
}
mail2.prototype.killLetter=function(){
	if(letter){
		letter.kill();
		if(message){
			message.kill();
		}
	}
}
mail2.prototype.giveLetter=function(index){
	mail2Group.children[index].visible=false;
	mail2Group.children[index].inputEnabled=false;
}
mail2.prototype.resetBag=function(){
	for(var i;i<mail2Group.length;i++){
		mail2Group.children[i].visible=true;
		mail2Group.children[i].inputEnabled=true;
	}
}
mail2.prototype.update=function(){
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
	for(var i=0;i<mail2Group.length;i++){
		if(mail2Group.children[i].input.pointerOver()){
			//check for click event

			mail2Group.children[i].scale.setTo(7,7);
		}else{
			mail2Group.children[i].scale.setTo(6,6);
		}	
	}
}
