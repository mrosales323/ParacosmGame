//npc5 is school teacher

var playerName;

//temp var for dialogue
var d;
var temp;
var temp2;
var temp3;
var active = false;

var NPC5 = function(xPos, yPos, npcString){
	Phaser.Sprite.call(this, game, xPos, yPos, npcString, null);
	console.log("Make npc5");
}

NPC5.prototype = Object.create(Phaser.Sprite.prototype);
NPC5.prototype.constructor = NPC5;
NPC5.prototype.create = function() {
	
}

NPC5.prototype.name = "School Teacher";

//first numeric value represents the number of strings in the dialogue list

NPC5.prototype.sentences = [

	[3,
	"Hi " + playerName + "! The kids just got out of class.",
	"What a bright bunch I have got this year.",
	"A letter from the committee? Why thank you."
	],
	
	[2,
	"A lot of people going t owrk in those mines.",
	"My father worked in those before he passed."
	],
	
	[2,
	"A letter from Jannett? Thanks...",
	"She says she is having troubles in her home town too."
	],
	
	[4,
	"There is just too much going on for people to pay attention to.",
	"Now we are taking actions against our own citizens.",
	"Students are being forced into separated classes.",
	"Its not even on the orders of our mayor but at the behest of the school board."
	],
	
	[3,
	"People keep giving in to the mayor and now there is talk of moving the children of foreigners to an entirely different schooling location.",
	"What have the people of this town come to?",
	"Thanks for the letter... apparently this is not a localized trend. I'm scared for the future."
	],
	
	[2,
	"I can't believe this is happening.",
	"I'd leave town but I cant just abandon the children."
	],
	
	[1,
	"Praise the mayor."
	],	
	

];

NPC5.prototype.dialogueCount = 1;
NPC5.prototype.dialogueIndex = 1;

NPC5.prototype.talk = function(){
	
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

NPC5.prototype.update = function() {
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