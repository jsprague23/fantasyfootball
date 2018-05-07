function FantasyController(){

}
var fantasyService= new FantasyService(drawPlayersTeam);







function drawPlayersTeam(players){
    console.log(players)
        var template='<h1>Free Agents</h1>'
    for (var i = 0; i < players.length; i++) {
        var player = players[i];
        template+= `
        <div>
        <img class="playerPic" src="${player.photo}" alt=>
        <h3>Name:${player.fullname}</h3>
        <h3>Team:${player.pro_team}</h3>
        <h3>Position:${player.position}</h3>
        <button onclick="app.controllers.fantasyController.addToTeam"(${player.id})>Add to Team</button>
        </div>`
        
    }
    
    document.getElementById("playersData").innerHTML=template;

}

function drawUsersTeam(players){
   
    var template='<h1>My Team</h1>'
    for (var i = 0; i < players.length; i++) {
        var player = players[i];
        template+= `
        <div>
        <img class="playerPic" src="${player.photo}" alt=> 
        <h3>Name:${player.fullname}</h3>
        <h3>Team:${player.pro_team}</h3>
        <h3>Position:${player.position}</h3>
        <button onclick="app.controller.fantasyController.removeFromTeam"(${player.id})>Remove from Team   </button> 
        </div>`
        
    }

document.getElementById("usersTeam").innerHTML=template;



    
      this.addUsersTeam= function addUsersTeam(id){
          fantasyService.addUsersTeam(id,drawUsersTeam)
      }

      this.removeFromTeam= function removeFromTeam(id){
        fantasyService.removeFromTeam(id,drawPlayersTeam)
    
  } 
}

// function PlayersService(callback){
//     var playersData = [];
  
//     this.getPlayersByTeam = function(teamName){
//       //return an array of all players who match the given teamName.
//     }
  
//     this.getPlayersByPosition = function(position){
//       //return an array of all players who match the given position.
//     }
//   } 