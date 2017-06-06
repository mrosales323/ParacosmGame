//npc6 is town guard

var playerName;

//temp var for dialogue
var d;
var temp;
var temp2;
var temp3;
var active = false;

var NPC6 = function(xPos, yPos, npcString){
	Phaser.Sprite.call(this, game, xPos, yPos, npcString, null);
	console.log("Make npc6");
}

NPC6.prototype = Object.create(Phaser.Sprite.prototype);
NPC6.prototype.constructor = NPC6;
NPC6.prototype.create = function() {
	
}

NPC6.prototype.name = "Town Guard";

//first numeric value represents the number of strings in the dialogue list

NPC6.prototype.sentences = [

	[3,
	"I for one look forward to the policy changes our new mayor is going to make.",
	"We need better law and order if you ask me!",
	"Have you seen these kids?!"
	],
	
	[2,
	"Reopening the mines is exactly what this town needs! Busy people commit less crimes!",
	"Ah a letter from the city watch association."
	],
	
	[2,
	"Sending the homeless around here to work in the mines was a brilliant idea.",
	"You can bet there will be a lot less crime happening around here."
	],
	
	[2,
	"The mayor assures us in the guard that things are getting better. He has my trust.",
	"He has done nothing but good things for this town."
	],
	
	[2,
	"There has been a lot of trouble from the town.",
	"We in the guard are sworn to keep the peace."
	],
	
	[2,
	"The mayor himself has assigned me to look into the arson of the town hall.",
	"Say, do you know anything about that."
	],
	
	[1,
	"Praise the mayor."
	],		

];

NPC6.prototype.dialogueCount = 1;
NPC6.prototype.dialogueIndex = 1;

NPC6.prototype.talk = function(){
	
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

NPC6.prototype.update = function() {
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