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

function mouseReleased()
{
  if(gameState===1)
  {
    if(player.index===1)
    {
      arrow = createSprite(player1T.x,player1T.y,70,9);

     
    }else if(player.index===2)
    {
      arrow = createSprite(player2T.x,player2T.y,70,9);

    }
      arrow.pointTo(mouseX,mouseY);
    arrowGroup.add(arrow);
    player.arrow-=1
    
    player.update()
    
  }
}