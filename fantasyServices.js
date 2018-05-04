function FantasyService(callback){
    var playersData = []
    var usersTeam= []

    this.getLocalPlayers = function getLocalPlayers(){
      return playersData;
    }

    this.getUsersTeam = function getUsersTeam(){
      return usersTeam;
    }

    this.addUsersTeam = function addUsersTeam(newPlayerId, cb){
      var newPlayer = playersData.filter(function(play){
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
           return callback()
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
           callback()
         });
     }    
 loadPlayersData(); //call the function above every time we create a new service
 } 