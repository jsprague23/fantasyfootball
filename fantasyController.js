FantasyController = function FantasyController(){

}
var fantasyService= new fantasyService()



function drawUsers(players){
    console.log(players)
    var template=''
    for (var i = 0; i < players.length; i++) {
        var player = players[i];
        template= `
        <div>
        <h3>Name:</h3>
        <h3>Team:</h3>
        <h3>Position:</h3>
        </div>`
        
    }



}

function searchPlayers(search){
    return

}

function PlayersService(callback){
    var playersData = [];
  
    this.getPlayersByTeam = function(teamName){
      return playersData.filter(function(player){
        if(player.team == teamName){
          return true;
        }
      });
    }
  } 