app.controller('sessionController', ['$location', '$scope', '$route','$routeParams','orderByFilter','campaignFactory','playerFactory','userFactory',function(loc, scope, route, routeParams, orderBy, campaignFactory, playerFactory, userFactory){
    let currUser = userFactory.getCurUser((data) => {
        if(data.data.message === false) {
            loc.path('/login');
        }
        });
        //Players/Enemy Array For Scope
        var currentPlayers = [];
        var currentEnemies = [];
        //Load the players...
        if (routeParams.id) {
            campaignFactory.getCampaignById(routeParams.id, (CampData) => {
                scope.campaignForSession = CampData.data.campaign;
                let playersArray = CampData.data.campaign.players;
                for(let i = 0; i < playersArray.length; i++) {
                    playerFactory.getPlayer(playersArray[i]._id, (data) => {   
                        let playerInstance = new Player(data.data.playerFound._id, data.data.playerFound.accountEmail, CampData.data.campaign.campaignTitle, data.data.playerFound.realName, data.data.playerFound.name, data.data.playerFound.race, data.data.playerFound.classType, data.data.playerFound.alignment, data.data.playerFound.sex, data.data.playerFound.size, data.data.playerFound.age, data.data.playerFound.height, data.data.playerFound.weight, data.data.playerFound.level, data.data.playerFound.initiative, data.data.playerFound.speed, data.data.playerFound.strength, data.data.playerFound.dexterity, data.data.playerFound.constitution,data.data.intelligence, data.data.playerFound.wisdom, data.data.playerFound.charisma, data.data.playerFound.currentHitPoints, data.data.playerFound.tempHitPoints, data.data.playerFound.spellList, data.data.playerFound.skills, data.data.playerFound.personalityTraits, data.data.playerFound.ideals, data.data.playerFound.bonds, data.data.playerFound.flaws, data.data.playerFound.attacksSpellcasting, data.data.playerFound.featuresTraits, data.data.playerFound.equipment, data.data.playerFound.proficienciesLanguages, data.data.playerFound.appearance, data.data.playerFound.alliesOrganizations, data.data.playerFound.backStory, data.data.playerFound.treasureInventory, data.data.playerFound.spellcastingClass, data.data.playerFound.spellcastingAbility,data.data.playerFound.spellSaveDC, data.data.playerFound.spellSaveBonus,data.data.playerFound.armorClass,data.data.playerFound.proficiencyBonus,data.data.playerFound.borderColor);
                        userFactory.getCurUser((data) =>{
                            if(data.data.message === playerInstance.accountEmail){
                                playerInstance.youOwnThis = true;
                            }
                        });

                        currentPlayers.push(playerInstance);
                    });
                }
                
            });
    }
    //sort the players
    //VarDeclaration
    //DICE
    const diceRoll = new DiceRoller();
    scope.dieRolls = [{id: 1}];
    scope.rollsResults = [];
    scope.currentPlayers = currentPlayers;
    scope.currentEnemies = [];
    campaignFactory.getFighters((data)=>{
        if(data){
           scope.allFighters = data;
        }
    });
    //COLORS
    var availableColors = [
        "red",
        "blue",
        "purple",
        "green",
        "teal",
        "pink",
        "orange",
        "gray"
    ];
    //Functionality
    var updateAllStats = () => {
        for(let i=0; i<scope.currentPlayers.length; i++){
            playerFactory.updateAndSave(scope.currentPlayers[i], (data) => {});
        }
    };
    //EnemyForCombatArrayManagement
    scope.addEnemy = () => {
        var newEnemyNo = scope.currentEnemies.length + 1;
        scope.currentEnemies.push({id: newEnemyNo});
    };
    scope.killEnemy = (id) => {
        for(let i=0; i< scope.currentEnemies.length; i++){
            if(scope.currentEnemies[i].id == id){
                scope.currentEnemies.splice(i, 1);
            }
        }
    };
    //Dice Roller
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
    scope.initiativeRoll = (player) => {
        player.initiative = diceRoll.rollDie(['d20'])[0].rollValue;
    };
    //Edit Functionality
    scope.toggleEdit = (player) => {
        if(player.editing !== true){
            player.editing = true;
        } else {
            // scope.sortPlayers(scope.currentPlayers); 
            playerFactory.updateAndSave(player, (data)=>{
            });
            player.editing = false;
        }
    };
    //Color Choosing
    scope.getColor = (player) => {
        let pColor = player.borderColor;
        if(!pColor || pColor === undefined) {
            return null; 
        } else{
            let colorString = pColor;
            return colorString;
        }
         playerFactory.updateAndSave(player, (data)=>{
            });
    };
    scope.pickColor = (choice, player) => {
        player.borderColor = choice;
        playerFactory.updateAndSave(player,(data)=>{
        });
    };
    //Related to Combat
    scope.startCombat = (players) => {
        updateAllStats();
        campaignFactory.startCombat(players, scope.currentEnemies);
        loc.url('/combat' );
    };
     scope.toggleStartCombat = () => {
        let modal = document.getElementById("combatModal");
        if(modal.classList.contains('is-active')){
            modal.classList.remove('is-active');
        } else {
            modal.classList.add('is-active');
        }
    };
    
    //Leave campaign
    scope.leaveCampaign = (player) => {
        let campaignData = {id: routeParams.id};
        campaignFactory.removePlayer(player, campaignData, (data) =>{
            route.reload();
        });
    };
   
    






}]);