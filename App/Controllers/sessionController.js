app.controller('sessionController', ['$location', '$scope', '$route','$routeParams', 'campaignFactory','playerFactory', function(loc, scope, route, routeParams, campaignFactory, playerFactory){
   scope.gainExperience = (expToGain, player) => {
        player.gainExperience(expToGain, (data) => {
            player = data;
        });
    };
    const diceRoll = new DiceRoller();
    scope.dieRolls = [{id: 1}];
    scope.rollsResults = [];
    scope.addDie = () => {
        var newDieNo = scope.dieRolls.length + 1;
        scope.dieRolls.push({id: newDieNo});
    };
    scope.rollDie = (player, diceArray) => {
        if(diceArray !== undefined && diceArray){
            let rollsToSend = [];
            for(let i=0; i<diceArray.length; i++){
                rollsToSend.push(diceArray[i].choice);
            }
            var rollResult = diceRoll.rollDie(rollsToSend);
            for(let i=0; i<rollResult.length; i++){
                scope.rollsResults.push(rollResult[i]);
            }
        }
    };
    scope.currentPlayers = [];
        if (routeParams.id) {
            campaignFactory.getCampaignById(routeParams.id, (CampData) => {
                scope.campaignForSession = CampData.data.campaign;
                let playersArray = CampData.data.campaign.players;
                for(let i = 0; i < playersArray.length; i++) {
                    playerFactory.getPlayer(playersArray[i]._id, (data) => {   
                        let playerInstance = new Player(data.data.playerFound._id, data.data.playerFound.accountEmail, CampData.data.campaign.campaignTitle, data.data.playerFound.realName, data.data.playerFound.name, data.data.playerFound.race, data.data.playerFound.classType, data.data.playerFound.alignment, data.data.playerFound.sex, data.data.playerFound.size, data.data.playerFound.age, data.data.playerFound.height, data.data.playerFound.weight, data.data.playerFound.level, data.data.playerFound.initiative, data.data.playerFound.speed, data.data.playerFound.strength, data.data.playerFound.dexterity, data.data.playerFound.constitution,data.data.intelligence, data.data.playerFound.wisdom, data.data.playerFound.charisma, data.data.playerFound.currentHitPoints, data.data.playerFound.tempHitPoints, data.data.spells);
                        scope.currentPlayers.push(playerInstance); 
                       
                    });
                }
            });

    }
    scope.toggleEdit = (player) => {
        if(player.editing !== true){
            player.editing = true;
        } else{player.editing = false;}
        
    };
    
    






}]);