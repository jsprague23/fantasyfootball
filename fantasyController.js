function FantasyController(){

}
var fantasyService= new FantasyService(drawUsersTeam);







function drawPlayersTeam(players){
    
    var template='<h1>Free Agents</h1>'
    for (var i = 0; i < players.length; i++) {
        var player = players[i];
        template+= `
        <div>
        <img class="playerPic" src="${player.thumbnail.path}.${player.thumbnail.extenssion}" alt=>
        <h3>Name:${player.name}</h3>
        <h3>Team:${player.team}</h3>
        <h3>Position:${player.position}</h3>
        <button onclick="app.controllers.fantasyController.addToTeam"(${player.id})
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
        <img class="playerPic" src="${player.thumbnail.path}.${player.thumbnail.extension}" alt=> 
        <h3>Name:${player.name}</h3>
        <h3>Team:${player.team}</h3>
        <h3>Position:${player.position}</h3>
        <button onclick="app.controller.fantasyController.removeFromTeam"(${player.id}) 
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