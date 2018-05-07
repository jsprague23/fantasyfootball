function FantasyService(callback){
    var playersData = []
    var usersTeam= []

    this.search = function search(query) {
      var x = query.toLowerCase()
      var filteredResults = playersData.filter(function (player) {
        return player.fullname.toLowerCase().includes(x) || player.pro_team.toLowerCase().includes(x) || player.position.toLowerCase().includes(x)
      })
      return filteredResults
    }
    
    this.getLocalPlayers = function getLocalPlayers(){
      return playersData;
    }

    this.getUsersTeam = function getUsersTeam(){
      return usersTeam;
    }

    this.getPlayersByTeam=function (teamName){
      return playersData.filter(function(player){
        if(player.team == teamName){
          return true;
        }
      })
    }

    this.getPlayersByPosition=function (position){
      return playersData.filter(function(player){
        if(player.position == position){
          return true;
        }
      })
    }

    this.getPlayersByName=function (name){
      return playersData.filter(function(player){
        if(player.fullName == name){
          return true;
        }
      })
    }


    this.addUsersTeam = function addUsersTeam(newPlayerId, cb){
      
      var newPlayer = playersData.find(function(play){
        return play.id == newPlayerId
      })
           usersTeam.push(newPlayer)
      cb(usersTeam);
    }

    this.removeFromTeam = function removeFromTeam(removeId, draw){
      var removePlayer =usersTeam.find(function(play){
        return play.id == removeId
      })
    

    var index = usersTeam.indexOf(removePlayer)
    usersTeam.splice(index,1)

    draw(usersTeam)
    };

     function loadPlayersData(){
       //check if the player already has a copy of the NFL playersData
       var localData = localStorage.getItem('playersData');
      //if they do, pull from there
       if(localData){
           playersData = JSON.parse(localData);
           //return will short-circuit the loadPlayersData function
           //this will prevent the code below from ever executing
           return callback(playersData)
       }
       //if not go get that data
       var url = "https://bcw-getter.herokuapp.com/?url=";
       var endpointUri = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";
       var apiUrl = url + encodeURIComponent(endpointUri);
 
         $.getJSON(apiUrl, function(data){
           playersData = data.body.players;
           console.log('Player Data Ready')
           console.log('Writing Player Data to localStorage')
           localStorage.setItem('playersData', JSON.stringify(playersData))
           console.log('Finished Writing Player Data to localStorage')
           callback(playersData)
         });
     }    
 loadPlayersData(); //call the function above every time we create a new service
 } 