class Player
{
    constructor()
    {
        this.angle=0;
        this.name="";
        this.health=15;
        this.index=null;
        this.arrow=25

    }
    getPlayerCount()
    {
       db.ref("playerCount").on("value",(data)=>
       {
           playerCount=data.val()
       })
    }
    updatePlayerCount(playerCount)
    {
        db.ref("/").update({
            playerCount:playerCount
        })
    }
    update()
    {
        var playerIndex="players/player"+this.index
        db.ref(playerIndex).update({
            name:this.name,
             angle:this.angle,
            health:this.health,
            index:this.index,
            arrowLeft:this.arrow
        })
        
    }
    static playerInfo()
    {
        db.ref("players").on("value",(data)=>
        {
            allPlayers=data.val();
        })
    }
}