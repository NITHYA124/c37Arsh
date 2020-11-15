var gameState = 0
var playercount;
var database;
var player;
var form;
var game;
var allplayers;
var position;
function setup(){
    createCanvas(400,400)
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    

}
function draw(){
    background("white");
   if(playercount === 4)
   {
      game.update(1);

  }
  if(gameState == 1){
      clear();
      game.play();
      
  }
}