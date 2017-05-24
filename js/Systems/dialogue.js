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
	console.log("create some dialogue");
	dialogueBox = game.add.sprite(game.camera.x+50, game.camera.y+game.height-200, 'DialogueBox');
	portraitBox= game.add.sprite(game.camera.x+game.width-230,game.camera.y+game.height-200,"PortraitBox");
	nameTagBox=game.add.sprite(game.camera.x+game.width-230,game.camera.y+game.height-250,"NameTagBox");
	npcName= game.add.text(game.camera.x+game.width-185,game.camera.y+game.height-240,{fill:"#abcdef"});
	npcName.text=npc.name;

	//dialogueBox.scale.setTo(game.world.scale.x*2,game.world.scale.y);

	npcPortrait=game.add.sprite(portraitBox.centerX*.975,portraitBox.centerY*.95,npc.name);

	dialogue= game.add.text(game.camera.x+75,game.camera.y+game.height-175,{fill: "#abcdef"});
	dialogue.text=dialogueString;
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