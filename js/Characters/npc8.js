//npc8 is husband and wife

var playerName;

//temp var for dialogue
var d;
var temp;
var temp2;
var temp3;
var active = false;

var NPC8 = function(xPos, yPos, npcString){
	Phaser.Sprite.call(this, game, xPos, yPos, npcString, null);
	console.log("Make npc8");
}

NPC8.prototype = Object.create(Phaser.Sprite.prototype);
NPC8.prototype.constructor = NPC8;
NPC8.prototype.create = function() {
	
}

NPC8.prototype.name = "Husband and Wife";

//first numeric value represents the number of strings in the dialogue list

NPC8.prototype.sentences = [

	[2,
	"H: How's the mail business " + playerName + "? Think the new mayor is going to affect your job?",
	"W: You're making him worry!"
	],
	
	[3,
	"H: I heard there is talk of mail screening in the future.",
	"W: Apparently the mayor is scared of ilicit packages from spies...",
	"W: I heard it from my friend on the city council."
	],
	
	[2,
	"H: We are planning on going to the twon meeting.",
	"W: We are hoping something can be done to get rid of this new mayor."
	],
	
	[4,
	"H: Have you noticed the shady people around the post office?",
	"H: Maybe your boss knows something...",
	"W: We have thought about leaving town and moving somewhere else.",
	"W: Anyway, hope to see you at the rally today."
	],
	
	[2,
	"H: Seems like there is no where we can go where things are better right now.",
	"W: At least that last protest maed our voices heard."
	],
	
	[2,
	"H: We had a lot of friends in the council.",
	"W: I cant believe they are all gone."
	],
	
	[2,
	"H: Praise the mayor.",
	"W: Praise the mayor."
	],	
	
	

];

NPC8.prototype.dialogueCount = 1;
NPC8.prototype.dialogueIndex = 1;

NPC8.prototype.talk = function(){
	
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

NPC8.prototype.update = function() {
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