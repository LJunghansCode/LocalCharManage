app.controller('playerController', [ '$location', '$scope', '$route','playerFactory', function(loc, scope, route, playerFactory) { 
   scope.totalPlayers = [];
    scope.createNewPlayer = () => {
        var playerInstance = new Player( " ",scope.newPlayer.campaign, scope.newPlayer.realName, scope.newPlayer.name, scope.newPlayer.race, scope.newPlayer.classType, scope.newPlayer.alignment, scope.newPlayer.sex, scope.newPlayer.size, scope.newPlayer.age, scope.newPlayer.height, scope.newPlayer.weight, scope.newPlayer.level, scope.newPlayer.initiative, scope.newPlayer.speed, scope.newPlayer.strength, scope.newPlayer.dexterity, scope.newPlayer.constitution, scope.newPlayer.intelligence, scope.newPlayer.wisdom, scope.newPlayer.charisma, scope.newPlayer.currentHitPoints, scope.newPlayer.tempHitPoints );
        playerFactory.newPlayer(playerInstance, (data) =>{
            if (data) {
                scope.totalPlayers.push(data.data.playerMade);
            }
        });  
    };
    playerFactory.getSessionPlayers((data) => {
        playersArray = data.data.players;
        for(var i = 0; i < playersArray.length; i++){
            console.log(playersArray[i]);
            scope.totalPlayers.push(playersArray[i]);
        }
    });
}]);