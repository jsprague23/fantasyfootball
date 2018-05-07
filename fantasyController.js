function FantasyController() {


    this.search = function search(e){
        e.preventDefault()
        var query = e.target.query.value
        var results = fantasyService.search(query)
        drawUsersTeam(results)
        };

    var fantasyService = new FantasyService(drawPlayersTeam);
    var loading = true;
   
    function ready() {
        loading = false;
    }

    function searchName() {
        var x = document.getElementById("fullname");
    }


    function searchPosition() {
        var y = document.getElementById("position");
    }


    function searchTeam() {
        var z = document.getElementById("pro_team");
    }




    function drawPlayersTeam(playersData) {
        console.log(playersData)
        var template = '<h1><u>Free Agents</u></h1>'
        for (var i = 0; i < playersData.length; i++) {
            var player = playersData[i];
            template += `
        <div>
        <img class="playerPic" src="${player.photo}" alt=>
        <h3>Name:${player.fullname}</h3>
        <h3>Team:${player.pro_team}</h3>
        <h3>Position:${player.position}</h3>
        <button onclick="app.controllers.fantasyController.addUsersTeam(${player.id})">Add to Team</button>
            </div>`



        }


        document.getElementById("playersData").innerHTML = template;

    }

    function drawUsersTeam(usersTeam) {

        var template = '<h1><u>My Team</u></h1>'
        for (var i = 0; i < usersTeam.length; i++) {
            var player = usersTeam[i];
            template += `
        <div>
        <img class="playerPic" src="${player.photo}" alt=> 
        <h3>Name:${player.fullname}</h3>
        <h3>Team:${player.pro_team}</h3>
        <h3>Position:${player.position}</h3>
        <button onclick="app.controller.fantasyController.removeFromTeam(${player.id})">Remove from Team   </button> 
        </div>`

        }

        document.getElementById("usersTeam").innerHTML = template;

    }


    this.addUsersTeam = function addUsersTeam(id) {
        fantasyService.addUsersTeam(id, drawUsersTeam)
        
    }

    this.removeFromTeam = function removeFromTeam(id) {
        fantasyService.removeFromTeam(id, drawPlayersTeam)
   
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