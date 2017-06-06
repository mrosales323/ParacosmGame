//npc3 is councilman

var playerName;

//temp var for dialogue
var d;
var temp;
var temp2;
var temp3;
var active = false;

var NPC3 = function(xPos, yPos, npcString){
	Phaser.Sprite.call(this, game, xPos, yPos, npcString, null);
	console.log("Make npc3");
}

NPC3.prototype = Object.create(Phaser.Sprite.prototype);
NPC3.prototype.constructor = NPC3;
NPC3.prototype.create = function() {
	
}

NPC3.prototype.name = "Councilman";

//first numeric value represents the number of strings in the dialogue list

NPC3.prototype.sentences = [

	[2,
	"This election has me concerned " + playerName + ".",
	"You might not think it but the position of mayor is important."],
	
	[2,
	"This mayor went and opened that mine without council approval!",
	"People should be furious!"],
	
	[2,
	"This is completely unacceptable. People will be furious.",
	"I may need you to hand out fliers about this."],
	
	[1,
	"We have organized a protest. You should check it out."],
	
	[2,
	"The other council members and I are going to step in and remove the mayor from power in the coming days.",
	"A letter from the mayor? Thank you."],
	
];

NPC3.prototype.dialogueCount = 1;
NPC3.prototype.dialogueIndex = 1;

NPC3.prototype.talk = function(){
	
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

NPC3.prototype.update = function() {
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