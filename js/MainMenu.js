var PlayButton;
var PlayButtonText;


var QuitButton;
var QuitButtonText;

var OptionsButton;
var OptionsButtonText;

var cursor;

var fullScreenButton;
var fullScreenButtonText

var password;

var MainMenu=function(game){
console.log("Loading My Main Menu");
};

MainMenu.prototype.preload=function(){
console.log("Loading Main Menu Assets. Refresh v1.0.8");
}


MainMenu.prototype.create=function(){
 
  // PlayButton= game.add.button(game.world.centerX - 95, 400, 'PlayButton', actionOnClick, this, 2, 1, 0);
  PlayButton = game.add.sprite(game.world.centerX, game.world.centerY, 'BlankButton');
  PlayButton.anchor.x=0.5;
  PlayButton.anchor.y=0.5;
  var PlayButtonStyle = { font: "32px Arial", fill: "#ff0044", wordWrap: true, wordWrapWidth: PlayButton.width, align: "center" };
  PlayButtonText = game.add.text(PlayButton.centerX*.95, PlayButton.centerY*.95, "Play", PlayButtonStyle);
  
  /*
  OptionsButton = game.add.sprite(game.world.centerX, game.world.centerY*1.25, 'BlankButton');
  OptionsButton.anchor.x=0.5;
  OptionsButton.anchor.y=0.5;
  var OptionsButtonStyle = { font: "32px Arial", fill: "#ff0044", wordWrap: true, wordWrapWidth: OptionsButton.width, align: "center" };
  OptionsButtonText = game.add.text(OptionsButton.centerX*.925, OptionsButton.centerY*.95, "Options", OptionsButtonStyle);
  */
  
  QuitButton = game.add.sprite(game.world.centerX, game.world.centerY*1.5, 'BlankButton');
  QuitButton.anchor.x=0.5;
  QuitButton.anchor.y=0.5;
  var QuitButtonStyle = { font: "32px Arial", fill: "#ff0044", wordWrap: true, wordWrapWidth: QuitButton.width, align: "center" };
  QuitButtonText = game.add.text(QuitButton.centerX*.95, QuitButton.centerY*.96, "Quit", QuitButtonStyle);


  fullScreenButton = game.add.sprite(game.world.centerX, game.world.centerY*1.75, 'BlankButton');
  fullScreenButton.anchor.x=0.5;
  fullScreenButton.anchor.y=0.5;
  var fullScreenButtonStyle = { font: "32px Arial", fill: "#ff0044", wordWrap: true, wordWrapWidth: fullScreenButton.width, align: "center" };
  fullScreenButtonText = game.add.text(fullScreenButton.centerX*.935, fullScreenButton.centerY*.942, "Full Screen", fullScreenButtonStyle);


  PlayButton.inputEnabled=true;
  PlayButton.events.onInputDown.add(actionOnClick, this);
  QuitButton.inputEnabled=true;
  QuitButton.events.onInputDown.add(quitFunction,this);

  fullScreenButton.inputEnabled=true;
  fullScreenButton.events.onInputDown.add(fullScreenClick,this);
  cursor= game.add.sprite(0,0,"cursor");
  cursor.scale.setTo(5,5);
  cursor.smoothed=false;
}


MainMenu.prototype.update=function(){
	
	cursor.x=game.input.x;
	cursor.y=game.input.y;
}

MainMenu.prototype.render=function(){

}


function actionOnClick () {
    game.state.start("nameSelectionMenu");
}


function quitFunction(){
	game.destroy();
}

function fullScreenClick(){
   if (game.scale.isFullScreen)
    {
        game.scale.stopFullScreen();
    }
    else
    {
        game.scale.startFullScreen(false);
    }
}