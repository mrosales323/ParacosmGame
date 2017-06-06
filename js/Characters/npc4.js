//npc4 is councilwoman

var playerName;

//temp var for dialogue
var d;
var temp;
var temp2;
var temp3;
var active = false;

var NPC4 = function(xPos, yPos, npcString){
	Phaser.Sprite.call(this, game, xPos, yPos, npcString, null);
	console.log("Make npc4");
}

NPC4.prototype = Object.create(Phaser.Sprite.prototype);
NPC4.prototype.constructor = NPC4;
NPC4.prototype.create = function() {
	
}

NPC4.prototype.name = "Councilwoman";

//first numeric value represents the number of strings in the dialogue list

NPC4.prototype.sentences = [

	[2,
	"My colleague and I have one thing in common; we aren't fans of the new mayor.",
	"Ah a letter from the committee? Why thank you " + playerName + "."],
	
	[2,
	"The mine may bring in business but it was closed for a reason...",
	"Oh a letter, thank you."],
	
	[1,
	"My colleague and I are arranging a public meeting to discuss recent changes."],
	
	[1,
	"After the protest, we are having a town hall meeting to confront the mayor."],
	
	[2,
	"Its been a difficult road but we have gotten most of the council to agree to depose the mayor.",
	"A lot of members of his party were particularly difficult to persuade."],
	
];

NPC4.prototype.dialogueCount = 1;
NPC4.prototype.dialogueIndex = 1;

NPC4.prototype.talk = function(){
	
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

NPC4.prototype.update = function() {
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