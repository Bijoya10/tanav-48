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
            player1=createSprite(100,350,20,140);            
            player2=createSprite(710,200,70,70);
            player2.addImage("player2",player2ImgStill)
            player2.scale=0.4
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
            image(player1Img,0,0,70,70);
            pop()
            
            push()
            imageMode(CENTER)
            translate(700,200);
            rotate(allPlayers["player2"].angle)
            image(player2Img,0,0,70,70);
            pop()
            
            
                
                if(keyIsDown(LEFT_ARROW)&& player.angle>-30 )
                {
                    
                    player.vY=player.vY+player.angle/10
                    player.angle-=2
                    player.update()
                }else if(keyIsDown(RIGHT_ARROW) && player.angle<30)
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
                  arrow.velocityX=-7;
                  arrow.velocityY=-player.angle/10;
                }
                console.log(arrow.velocityY)
                arrow.pointTo(400,(arrow.velocityY+6)*30)      
                arrowGroup.add(arrow);
                player.arrow-=1
                
                player.update()
               }
                    
               if(player.index===1)
               {
                if(arrowGroup.isTouching(player2))
                {
                    allPlayers["player2"].health-=1
                    db.ref("players/player2").update({
                        health:allPlayers["player2"].health
                    })
                }
               }else if(player.index===2)
               {
                if(arrowGroup.isTouching(player1))
                {
                    allPlayers["player1"].health-=1
                    db.ref("players/player1").update({
                        health:allPlayers["player1"].health
                    })
                }
               }
               if(player.health===0)
               {
                   gameState=2
               }
            
        }
       
        

         
        drawSprites()
    }
    end()
    {

    }
}