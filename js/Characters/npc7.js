//npc7 is chef

var playerName;

//temp var for dialogue
var d;
var temp;
var temp2;
var temp3;
var active = false;

var NPC7 = function(xPos, yPos, npcString){
	Phaser.Sprite.call(this, game, xPos, yPos, npcString, null);
	console.log("Make npc7");
}

NPC7.prototype = Object.create(Phaser.Sprite.prototype);
NPC7.prototype.constructor = NPC7;
NPC7.prototype.create = function() {
	
}

NPC7.prototype.name = "Chef";

//first numeric value represents the number of strings in the dialogue list

NPC7.prototype.sentences = [

	[1,
	"Hello " + playerName + ", would you like some food?"
	],
	
	[3,
	"I sure hope the materials from the mines don't seep into the river.",
	"We get a lot of fish from there.",
	"Ah a new recipe from my mother. She has started this restaurant a long time ago."
	],
	
	[2,
	"I'm not sure it is a good idea to keep selling the fish from around here.",
	"Maybe its just me, but the water tastes a little weird."
	],
	
	[3,
	"Yeah, I stopped selling fish from around here.",
	"And now that one of our biggest imorters has been banned, well...",
	"we will have to resort to other foods."
	],
	
	[2,
	"Mail? Oh thanks.",
	"Looks like another ingredients supplier cant come through."
	],
	
	[2,
	"I'm leaving town.",
	"You should too before its too late."
	],
	
	[1,
	"Praise the mayor."
	],	
	
	

];

NPC7.prototype.dialogueCount = 1;
NPC7.prototype.dialogueIndex = 1;

NPC7.prototype.talk = function(){
	
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

NPC7.prototype.update = function() {
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