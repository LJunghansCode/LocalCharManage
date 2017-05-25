app.controller('playerController', [ '$location', '$scope', '$route','playerFactory', function(loc, scope, route, playerFactory) { 
    var totalPlayers = [];
    scope.createNewPlayer = () => {
        var playerInstance = new Player( "temp@temp.com",scope.newPlayer.campaign, scope.newPlayer.realName, scope.newPlayer.name, scope.newPlayer.race, scope.newPlayer.classType, scope.newPlayer.alignment, scope.newPlayer.sex, scope.newPlayer.size, scope.newPlayer.age, scope.newPlayer.height, scope.newPlayer.weight, scope.newPlayer.level, scope.newPlayer.initiative, scope.newPlayer.speed, scope.newPlayer.strength, scope.newPlayer.dexterity, scope.newPlayer.constitution, scope.newPlayer.intelligence, scope.newPlayer.wisdom, scope.newPlayer.charisma, scope.newPlayer.currentHitPoints, scope.newPlayer.tempHitPoints );
        totalPlayers.push(playerInstance);
        scope.playerList = totalPlayers;
        playerFactory.newPlayer(playerInstance, (data) =>{
            console.log(data);
        });
    };
}]);