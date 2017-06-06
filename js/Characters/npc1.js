// npc1 is shopkeeper

var playerName;

//temp var for dialogue
var d;
var temp;
var temp2;
var temp3;
var active = false;

var NPC1 = function(xPos, yPos, npcString){
	Phaser.Sprite.call(this, game, xPos, yPos, npcString, null);
	console.log("Make npc1");
}

NPC1.prototype = Object.create(Phaser.Sprite.prototype);
NPC1.prototype.constructor = NPC1;
NPC1.prototype.create = function() {
	
}

NPC1.prototype.name = "Shopkeeper";

//first numeric value represents the number of strings in the dialogue list

NPC1.prototype.sentences = [
	
	[4,
	"Hi " + playerName + "!",
	"Weather sure is nice today.",
	"Good weather means people are more likely to go shopping.",
	"Oh a letter? Thank you!"
	],
	
	[3,
	"Mail, my favorite part of the day.",
	"You see they opened the mine up?"
	"Might help business."
	],
	
	[2,
	"Have you seen that nice man who usually sits on the corner?",
	"He sometimes comes around to buy an apple."
	],
	
	[4,
	"Had to let go of one of my workers today.",
	"He came from a neighboring country that we aren't allied with.",
	"New law states that him and people like him aren't allowed to work here anymore.",
	"I also heard that we stopped taking imports from that country."
	],
	
	[2,
	"Not a lot of business now a days....",
	"The mayor brought into town a new grocier and most folks aren't buying the same way they used to."
	],
	
	[1,
	"I'm closing down the shop for the day. It just doesn't feel right."
	],
	
	[1,
	"Praise the mayor."
	],

];

NPC1.prototype.dialogueCount = 1;
NPC1.prototype.dialogueIndex = 1;

NPC1.prototype.talk = function(){
	
	if(dialogueTimmer != -1)
		return;
	if(this.dialogueCount > (this.sentences[this.dialogueIndex][0])){
		this.dialogueCount = 1;
	}
	else{
		
	}
	
	//do more logic checking here to get the correct list of npc dialogue
	
	temp = [...this.sentences[this.dialogueIndex][this.dialogueCount]];
	d = createDialogueSetUp(this.sentences[this.dialogueIndex][this.dialogueCount],this);
	temp2 = d.text;
	d.text = "";
	temp3 = [...temp2];
	
	console.log("Index: " + this.dialogueIndex);
	active = true;
	console.log("activated");   //console.log(d.text);
	
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


var i = 0;

NPC1.prototype.update = function() {
	/*
	console.log("MEH");
	console.log("sdfsdf");
	console.log("safsdfsg");
	
	if(temp3){
		console.log(temp3.length);
	}
	if(temp){
		console.log(temp.length);
	}
	*/
	if(active){
		if(this.dialogueIndex == 0){
			if(i < temp3.length){
				d.text = d.text + temp3[i];
				console.log(d.text);
				i++;
			}
			else{
				active = false;
				console.log("Deactivated");
				i = 0;
			}
		}
		else{
			if(i < temp3.length){
				d.text = d.text + temp3[i];
				//console.log(d.text);
				i++;
			}
			else{
				active = false;
				console.log(this.dialogueCount);
				console.log(this.dialogueIndex);
				console.log("Deactivatedsss");
				i = 0;
			}
		}
	}
}






























