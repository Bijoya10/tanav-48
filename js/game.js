class Game
{
    constructor()
    {

    }
    getGameState()
    {
       db.ref("gameState").on("value",(data)=>
       {
           gameState=data.val()
       })
    }
    updateGameState(state)
    {
        db.ref("/").update({
            gameState:state
        })
    }
   async start()
    {
        if(gameState===0)
        {
            player=new Player()
            var playerCountRef=await db.ref("playerCount").once("value");
            if(playerCountRef.exists())
            {
                playerCount=playerCountRef.val();
                player.getPlayerCount();
            }
            form=new Form()
            player1=createSprite(100,350,20,70);
            player1T=createSprite(100,290,20,50);
            
            player2=createSprite(700,350,20,70);
            player2T=createSprite(700,290,20,50);
            
            form.display()
           
            player1T.addImage("a",player1Img);
            player2T.addImage("b",player2Img);
            player1T.scale=0.5
            player2T.scale=0.5
        }
    }
    play()
    {
        form.hide()
        Player.playerInfo()
        if(allPlayers!==undefined)
        {
            
        }
         if(player.index===1 && mouseX>90 && mouseX<270 )
         {
            player1T.pointTo(mouseX,mouseY);

         }else if(player.index===2)
         {
            player2T.pointTo(mouseX,mouseY);
         }

         
        drawSprites()
    }
    end()
    {

    }
}