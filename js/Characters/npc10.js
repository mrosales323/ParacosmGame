//npc10 is farmer

var playerName;

//temp var for dialogue
var d;
var temp;
var temp2;
var temp3;
var active = false;

var NPC10 = function(xPos, yPos, npcString){
	Phaser.Sprite.call(this, game, xPos, yPos, npcString, null);
	console.log("Make npc10");
}

NPC10.prototype = Object.create(Phaser.Sprite.prototype);
NPC10.prototype.constructor = NPC10;
NPC10.prototype.create = function() {
	
}

NPC10.prototype.name = "Farmer";

//first numeric value represents the number of strings in the dialogue list

NPC10.prototype.sentences = [

	[1,
	"Must produce these crops!"
	],
	
	[2,
	"The mine opening means people will be hungrier.",
	"Maybe I can get the store to buy my crops at a higher price."
	],
	
	[,

	],
	
	[3,
	"They took the farm away from me. Said I couldn't be trusted with the town's food supply.",
	"Now I'm being forced to work in the mines.",
	"I've lived in this town for most of my life!"
	],
	
	[2,
	"The guard have made me register as a foreigner.",
	"I'm scheduled to begin work in the mine. Its the only place I'm allowed to work."
	],
	
	[2,
	"They won't let me leave.",
	"I threatened to leave town and they said I couldn't."
	],
	
	[1,
	"Praise the mayor."
	],	
	
	

];

NPC10.prototype.dialogueCount = 1;
NPC10.prototype.dialogueIndex = 1;

NPC10.prototype.talk = function(){
	
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

NPC10.prototype.update = function() {
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