app.controller('playerController', [ '$location', '$scope', '$route','$routeParams', 'playerFactory','campaignFactory','userFactory', function(loc, scope, route, routeParams, playerFactory, campaignFactory, userFactory) { 
    let currUser = userFactory.getCurUser((data) => {
        if(data.data.message === false) {
            loc.path('/login');
        }
        });
        //All Players You Own
        playerFactory.getSessionPlayers((data) => {
        playersArray = data.data.players;
        for(var i = 0; i < playersArray.length; i++){
            scope.totalPlayers.push(playersArray[i]);
        }
    });
    //GET PLAYER
    if (routeParams.id) {
        playerFactory.getPlayer(routeParams.id, (data) => {
            if(data.data.playerFound) {
                var P = data.data.playerFound;   
                let playerOnDisplay = new Player(P._id, P.accountEmail, P.campaign, P.realName, P.name, P.race, P.classType, P.alignment, P.sex, P.size, P.age, P.height, P.weight, P.level, P.initiative, P.speed, P.strength, P.dexterity, P.constitution, P.intelligence, P.wisdom, P.charisma, P.currentHitPoints, P.tempHitPoints, P.spellList, P.skills, P.personalityTraits, P.ideals, P.bonds, P.flaws, P.attacksSpellcasting, P.featuresTraits, P.equipment, P.proficienciesLanguages, P.appearance, P.alliesOrganizations, P.backStory, P.treasureInventory, P.spellcastingClass, P.spellcastingAbility,P.spellSaveDC, P.spellSaveBonus, P.armorClass, P.proficiencyBonus, P.borderColor, P.companions );
                scope.player = playerOnDisplay;
                let primaryStats = [{stat: "strength", value: scope.player.strength}, {stat: "dexterity", value: scope.player.dexterity}, {stat:"constitution", value: scope.player.constitution}, {stat:"intelligence", value: scope.player.intelligence}, {stat: "wisdom", value: scope.player.wisdom}, {stat:"charisma", value: scope.player.charisma}];
                //Get Modifiers
                scope.player.calculateModifiers();
                var masterStat = scope.player.organizeStatsArray();
                scope.basicInformation = masterStat.basicInformation;
                scope.charDetails = masterStat.charDetails;
                scope.primaryStats = masterStat.primaryStats;
                scope.spellDetails = masterStat.spellDetails;
                scope.vitals = masterStat.vitals;
                scope.spellsForPlayer = scope.player.spellList.allSpells();
                userFactory.getCurUser((data) =>{
                    if(data.data.message === scope.player.accountEmail){
                        scope.player.youOwnThis = true;
                    }
                });
            } else {
                console.error("Something went wrong. Sorry!");
            }
    });
    }
    //FOR NEW PLAYERS -----
    scope.totalPlayers = [];    
    scope.campaignJoinResponse = "";
    scope.createNewPlayer = () => {
        //first arg is a placeholder for the email to attach in back end from session data.
        var playerInstance = new Player( 0 ," ",scope.newPlayer.campaign, scope.newPlayer.realName, scope.newPlayer.name, scope.newPlayer.race, scope.newPlayer.classType,scope.newPlayer.alignment, scope.newPlayer.sex, scope.newPlayer.size, scope.newPlayer.age, scope.newPlayer.height, scope.newPlayer.weight, scope.newPlayer.level, scope.newPlayer.initiative, scope.newPlayer.speed, scope.newPlayer.strength,scope.newPlayer.dexterity, scope.newPlayer.constitution, scope.newPlayer.intelligence, scope.newPlayer.wisdom, scope.newPlayer.charisma, scope.newPlayer.currentHitPoints);
        
        playerFactory.newPlayer(playerInstance, (data) => {
            if (data) {
                scope.totalPlayers.push(data.data.playerMade);
                }
            });  
    };
    scope.joinCampaign = (player, campaignCred) => {
        if( ! campaignCred || !campaignCred.title || !campaignCred.password){
            scope.campaignJoinResponse = "oops, missed a field";
        } else {
        campaignFactory.addPlayer(player, campaignCred, (data) => {
            scope.campaignJoinResponse = data.data.message;
        });
        }
    };
    //For html access to saving
    scope.updateAndSave = (player) => {
        playerFactory.updateAndSave(player, (data) => {
            if(data.data.player){
            }else{
                
            }
        });
    scope.player.calculateModifiers();
    };
    
    //----------------------

    //PLAYER CLASS ACCESS
    scope.addEquipment = () => {
        var newEquipmentNo = scope.player.equipment.length + 1;
        scope.player.addEquipment(newEquipmentNo);
        scope.toggleEquipmentEdit(scope.player.equipment[scope.player.equipment.length - 1]);
    };
    scope.addSpell = () => {
        var newSpellNo = scope.player.spellList.length + 1;
        scope.player.addSpell(newSpellNo);
        scope.toggleSpellEdit(scope.player.spellList[scope.player.spellList.length - 1]);
    };
    scope.deleteEquipment = (equipment) => {
        scope.player.deleteEquipment(equipment);
        playerFactory.updateAndSave(scope.player, (data)=>{return;});
    };
    scope.deleteSpell = (spell) => {
        scope.player.deleteSpell(spell);
        playerFactory.updateAndSave(scope.player, (data)=>{return;});
    };
    //UI TOGGLES
    scope.toggleJoinCampaign = () => {
        let modal = document.getElementById("campaignModal");
        if(modal.classList.contains('is-active')){
            modal.classList.remove('is-active');
        } else {
            modal.classList.add('is-active');
        }
    };
    scope.editStat = (stat) => {
         if(stat.editing !== true){
            stat.editing = true;
        } else{
            scope.updateAndSave(scope.player);
            stat.editing = false;}
    };
    scope.toggleEdit = (player) => {
        if(player.editing !== true){
            player.editing = true;
        } else{player.editing = false;}
        
    };
    scope.toggleSpellEdit = (spell) => {
        if(spell.spellEditing !== true){
            spell.spellEditing = true;
        } else{spell.spellEditing = false;}
        
    };
    scope.toggleEquipmentEdit = (equipment) => {
        if(equipment.equipmentEditing !== true){
            equipment.equipmentEditing = true;
        } else{equipment.equipmentEditing = false;}
    };
    }]);