var dialogue;
var dialogueTimmer=-1;

var dialogueBox;
var portraitBox;
var nameTagBox;

var npcName;
var npcPortrait;


var isDialogueUp;


function dialogueCountDown(){
	
	if(dialogueTimmer==0){
		//clear dialogue
		cleanDialogue();
	}
	else if(dialogueTimmer>0){
			console.log(dialogueTimmer);
			dialogueTimmer--;
			//console.log(isDialogueUp);
	}
}

function cleanDialogue(){
		dialogue.destroy();
		dialogueTimmer=-1;
		dialogueBox.kill();
		portraitBox.kill();
		nameTagBox.kill();
		npcName.kill();
		npcPortrait.kill();
		console.log("Boom BAM");
		isDialogueUp=false;
}

function createDialogueSetUp(dialogueString,npc){
	console.log("create some dialoguessss");
	dialogueBox = game.add.sprite(game.camera.x, game.camera.y+game.height-200, 'DialogueBox');
	dialogueBox.scale.setTo(1.78,1);
	portraitBox= game.add.sprite(game.camera.x+game.width-200,game.camera.y+game.height-200,"PortraitBox");
	nameTagBox=game.add.sprite(game.camera.x+game.width-200,game.camera.y+game.height-250,"NameTagBox");
	npcName= game.add.text(game.camera.x+game.width-155,game.camera.y+game.height-240,{fill:"#abcdef"});
	if(npc.name=="mailBox") {
		npcPortrait=game.add.sprite(portraitBox.centerX*.975,portraitBox.centerY*.95,"PlayerPortrait");
		npcPortrait.smoothed=false;
		npcPortrait.scale.setTo(5,5);
		npcName.text=playerName;
	}
	else{
		npcPortrait=game.add.sprite(portraitBox.centerX*.975,portraitBox.centerY*.95,npc.name);
		npcPortrait.frame=0;
		npcPortrait.smoothed=false;
		npcPortrait.scale.setTo(5,5);
		npcName.text=npc.name;
	} 

	if(npcName.text==playerName)npcPortrait.scale.setTo(3,3);

	dialogue= game.add.text(game.camera.x+100,game.camera.y+game.height-175,{fill: "#abcdef"});
	dialogue.text=dialogueString;0
	dialogueTimmer=5;
	isDialogueUp=true;
	npc.dialogueCount++;
	return dialogue;
}
function dialogueUpdate(){
	if (game.input.keyboard.isDown(Phaser.Keyboard.ESC) && isDialogueUp==true)
    {
    	console.log("Escape from socializing!!!");
    	cleanDialogue();
    }
}

function clickToTalk(npc){
	console.log("Ok? I am clicking");
	
	if(canPlayerMove==false) return;
	character.yell(character,npc);
}