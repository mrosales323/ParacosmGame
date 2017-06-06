//npc9 is female doctor

var playerName;

//temp var for dialogue
var d;
var temp;
var temp2;
var temp3;
var active = false;

var NPC9 = function(xPos, yPos, npcString){
	Phaser.Sprite.call(this, game, xPos, yPos, npcString, null);
	console.log("Make npc9");
}

NPC9.prototype = Object.create(Phaser.Sprite.prototype);
NPC9.prototype.constructor = NPC9;
NPC9.prototype.create = function() {
	
}

NPC9.prototype.name = "Doctor";

//first numeric value represents the number of strings in the dialogue list

NPC9.prototype.sentences = [

	[1,
	"Hey " + playerName + "! Want a quick check up?"
	],
	
	[2,
	"The mine has been reopen.",
	"Hopefully I dont get patients with injuries from the mine."
	],

	[2,
	"Have you tasted the water? Hmmm....",
	"I need to send a letter to my colleagues and get their advice."
	],	
	
	[3,
	"The water has a high concentration of metals in it.",
	"Its only been a few months since the mine opened.",
	"Not to mention workers from the mines are getting sick a lot recently."
	],
	
	[3,
	"I cant believe this!",
	"The mayor has informed me that it would be unlawful to tell citizens that the water is undrinkable!",
	"I shouldn't even be telling you this."
	],
	
	[1,
	"Don't drink the water. Its not safe."
	],
	
	[1,
	"Praise the mayor."
	],	
	
	

];

NPC9.prototype.dialogueCount = 1;
NPC9.prototype.dialogueIndex = 1;

NPC9.prototype.talk = function(){
	
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

NPC9.prototype.update = function() {
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