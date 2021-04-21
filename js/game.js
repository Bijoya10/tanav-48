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
           
            
            player2=createSprite(700,350,20,70);
            
            
            form.display()
           
            
        }
    }
    play()
    {
        form.hide()
        angleMode(DEGREES);
        Player.playerInfo()

        if(allPlayers!==undefined)
        {
            push()
            translate(100,200);
            rotate(allPlayers["player1"].angle)
            image(player1Img,0,0,20,20);
            pop()

            push()
            translate(700,200);
            rotate(allPlayers["player2"].angle)
            rect(0,0,20,20);
            pop()
            
            
                
                if(keyIsDown(LEFT_ARROW)&& player.angle>-90 )
                {
                    
                    player.vY=player.vY+player.angle/10
                    player.angle-=2
                    player.update()
                }else if(keyIsDown(RIGHT_ARROW) && player.angle<90)
                {
                    player.vX=player.vX+player.angle/10
                    player.angle+=2
                    player.update()
                }
               if(keyWentDown("space"))
               {
                if(player.index===1)
                {
                  arrow = createSprite(100,200,70,9);
            
                 
                }else if(player.index===2)
                {
                  arrow = createSprite(700,200,70,9);
            
                }
                arrow.pointTo(400,200+player.angle*2)      
                arrowGroup.add(arrow);
                player.arrow-=1
                arrow.velocityX=player.vX
                arrow.velocityY=player.vY
                player.update()
                
               }
            
            
            
        }
       
        

         
        drawSprites()
    }
    end()
    {

    }
}