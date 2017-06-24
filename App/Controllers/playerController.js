app.controller('playerController', [ '$location', '$scope', '$route','$routeParams', 'playerFactory','campaignFactory', function(loc, scope, route, routeParams, playerFactory, campaignFactory) { 
    //TO-DO GLOBAL MESSAGE DISPLAY
    scope.totalPlayers = [];    
    scope.campaignJoinResponse = "";
    scope.createNewPlayer = () => {
        //first arg is a placeholder for the email to attach in back end from session data.
        var playerInstance = new Player( 0 ," ",scope.newPlayer.campaign, scope.newPlayer.realName, scope.newPlayer.name, scope.newPlayer.race, scope.newPlayer.classType,scope.newPlayer.alignment, scope.newPlayer.sex, scope.newPlayer.size, scope.newPlayer.age, scope.newPlayer.height, scope.newPlayer.weight, scope.newPlayer.level, scope.newPlayer.initiative, scope.newPlayer.speed, scope.newPlayer.strength,scope.newPlayer.dexterity, scope.newPlayer.constitution, scope.newPlayer.intelligence, scope.newPlayer.wisdom, scope.newPlayer.charisma, scope.newPlayer.currentHitPoints, scope.newPlayer.tempHitPoints );
        
        playerFactory.newPlayer(playerInstance, (data) => {
            if (data) {
                scope.totalPlayers.push(data.data.playerMade);
                }
            });  
    };
    scope.toggleEdit = (player) => {
        if(player.editing !== true){
            player.editing = true;
        } else{player.editing = false;}
        
    };
    playerFactory.getSessionPlayers((data) => {
        playersArray = data.data.players;
        for(var i = 0; i < playersArray.length; i++){
            scope.totalPlayers.push(playersArray[i]);
        }
    });
    if (routeParams.id) {
        playerFactory.getPlayer(routeParams.id, (data) => {
            if(data.data.playerFound) {
                var P = data.data.playerFound;   
                let playerOnDisplay = new Player(P._id, P.accountEmail, P.campaign, P.realName, P.name, P.race, P.classType, P.alignment, P.sex, P.size, P.age, P.height, P.weight, P.level, P.initiative, P.speed, P.strength, P.dexterity, P.constitution, P.intelligence, P.wisdom, P.charisma, P.currentHitPoints, P.tempHitPoints, P.spellList, P.skills, P.personalityTraits, P.ideals, P.bonds, P.flaws, P.attacksSpellcasting, P.featuresTraits, P.equipment, P.proficienciesLanguages, P.appearance, P.alliesOrganizations, P.backStory, P.treasureInventory, P.spellcastingClass, P.spellcastingAbility,P.spellSaveDC, P.spellSaveBonus );
                scope.player = playerOnDisplay;
            } else {
                console.error("Something went wrong. Sorry!");
            }
    });
    }
    scope.joinCampaign = (player, campaignCred) => {
        campaignFactory.addPlayer(player, campaignCred, (data) => {
            scope.campaignJoinResponse = data.data.message;
        });
    };
    scope.updateAndSave = (player) => {
        playerFactory.updateAndSave(player, (data) => {
            console.log(data);
        });
    };
    scope.addSpell = () => {
        var newSpellNo = scope.player.spellList.length + 1;
        scope.player.spellList.push({id: newSpellNo});
    };
    scope.deleteSpell = (spell) => {
        scope.player.spellList.splice(spell.id - 1, 1);
        //sort id/array relationship.
        for(let i = 0; i < scope.player.spellList.length; i++){
            let thisSpell = scope.player.spellList[i];
            thisSpell.id = i + 1;
        }
    };

    }]);