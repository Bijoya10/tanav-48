var db
var gameState=0,playerCount,allPlayers;
var game,player,form;
var player1,player2;
var player1T,player2T
var arrow,arrowDb,arrowGroup
var player1Img
var player2Img
function preload()
{
  player1Img=loadImage("a2.png");
  player2Img=loadImage("a.png");
}
function setup() {
  createCanvas(800,400);
  db=firebase.database();
  game=new Game()
  game.getGameState()
  game.start()

  arrowGroup=createGroup();

}

function draw() {
  if(playerCount===2)
  {
    gameState=1;
    
  }
  if(gameState===1)
  {
    clear()
    game.play();
  }
  
}

