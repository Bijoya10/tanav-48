class Form
{
    constructor()
    {
        this.quit=createButton("QUIT");
        this.play=createButton("PLAY");
        this.input=createInput("");
        this.reset=createButton("RESET")

    }
    
    display()
    {
        this.input.position(400,200);
        this.play.position(400,250);
        this.quit.position(400,300);
        this.reset.position(50,50);

        this.play.mousePressed(()=>
        {
            playerCount+=1;
            player.updatePlayerCount(playerCount);
            this.hide()
            player.index=playerCount;
            player.name=this.input.value()
            player.update();
        })
        this.quit.mousePressed(()=>{
            //look for the correct command
             window.close()
        })
        this.reset.mousePressed(()=>
        {
            db.ref("/").set({
                gameState:0,
                playerCount:0
                
            })
        })
        
    }
    hide()
    {       
        this.input.hide()
        this.play.hide()
        this.quit.hide()
    }

}