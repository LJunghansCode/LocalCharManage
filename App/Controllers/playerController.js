app.controller('playerController', ['$location', '$timeout', '$scope', '$route', '$routeParams', 'playerFactory', 'campaignFactory', 'userFactory', 'Upload', function (loc, timeout, scope, route, routeParams, playerFactory, campaignFactory, userFactory, Upload) {
    let currUser = userFactory.getCurUser((data) => {
        if (data.data.message === false) {
            loc.path('/login');
        }
    });
    //GET PLAYER
    if (routeParams.id) {
        playerFactory.getPlayer(routeParams.id, (data) => {
            if (data.data.playerFound) {
                var P = data.data.playerFound;
                let playerOnDisplay = new Player(P._id, P.accountEmail, P.campaign, P.realName, P.name, P.race, P.classType, P.alignment, P.sex, P.size, P.age, P.height, P.weight, P.level, P.initiative, P.speed, P.strength, P.dexterity, P.constitution, P.intelligence, P.wisdom, P.charisma, P.currentHitPoints, P.tempHitPoints, P.spellList, P.skills, P.personalityTraits, P.ideals, P.bonds, P.flaws, P.attacksSpellcasting, P.featuresTraits, P.equipment, P.proficienciesLanguages, P.appearance, P.alliesOrganizations, P.backStory, P.treasureInventory, P.spellcastingClass, P.spellcastingAbility, P.spellSaveDC, P.spellSaveBonus, P.armorClass, P.proficiencyBonus, P.borderColor, P.companions, P.notes);
                scope.player = playerOnDisplay;
                let primaryStats = [{
                    stat: "strength",
                    value: scope.player.strength
                }, {
                    stat: "dexterity",
                    value: scope.player.dexterity
                }, {
                    stat: "constitution",
                    value: scope.player.constitution
                }, {
                    stat: "intelligence",
                    value: scope.player.intelligence
                }, {
                    stat: "wisdom",
                    value: scope.player.wisdom
                }, {
                    stat: "charisma",
                    value: scope.player.charisma
                }];
                //Get Modifiers
                scope.player.calculateModifiers();
                //Get Spell Slots
                let slots = scope.player.spellSlots;
                scope.spellSlots = slots.returnSpellSlotArray(slots.createSpellSlots(scope.player.level));
                //Stat Organization
                var masterStat = scope.player.organizeStatsArray();
                scope.basicInformation = masterStat.basicInformation;
                scope.charDetails = masterStat.charDetails;
                scope.primaryStats = masterStat.primaryStats;
                scope.spellDetails = masterStat.spellDetails;
                scope.vitals = masterStat.vitals;
                scope.companions = new DynamicList(scope.player.companions);
                scope.equipmentList = new DynamicList(scope.player.equipment);
                scope.spells = new DynamicList(scope.player.spellList);

                userFactory.getCurUser((data) => {
                    if (data.data.message === scope.player.accountEmail) {
                        scope.player.youOwnThis = true;
                    }
                });
            } else {
                console.error("Something went wrong. Sorry!");
            }
        });
    } else {
        //All Players You Own
        playerFactory.getSessionPlayers((data) => {
            playersArray = data.data.players;
            for (var i = 0; i < playersArray.length; i++) {
                scope.totalPlayers.push(playersArray[i]);
            }
        });
        //FOR NEW PLAYERS -----
        scope.createResponse = "";
        scope.totalPlayers = [];
        scope.campaignJoinResponse = "";
        scope.createNewPlayer = () => {
            playerFactory.newPlayer(scope.newPlayer, (data) => {
                if (data.data.playerMade) {
                    scope.createResponse = "You've created a new Character named " + data.data.playerMade.name;
                    scope.newPlayer = " ";
                    scope.totalPlayers.push(data.data.playerMade);
                }
            });
        };
    }
    // UI LOGIC -----------
    //Campaign Join
    scope.joinCampaign = (player, campaignCred) => {
        if (!campaignCred || !campaignCred.title || !campaignCred.password) {
            scope.campaignJoinResponse = "Oops, missed a field";
        } else {
            campaignFactory.addPlayer(player, campaignCred, (data) => {
                scope.campaignJoinResponse = data.data.message;
            });
        }
    };
    //For html access to saving
    scope.updateAndSave = (player) => {
        playerFactory.updateAndSave(player, (data) => {
            if (data.data.player) {
                scope.player.calculateModifiers();
            }
        });
    };
    scope.deletePlayer = (pId) => {
        playerFactory.deletePlayerById(pId, (data) => {
            if (data.data.message === true) {
                loc.url('/players');
            }
        });
    };
    //----------------------

    //PLAYER CLASS ACCESS
    scope.statModCalc = (stat) => {
        let statMod = scope.player.singleModCalc(stat);
        return statMod;
    }
    //UI TOGGLES
    scope.toggleJoinCampaign = () => {
        let modal = document.getElementById("campaignModal");
        if (modal.classList.contains('is-active')) {
            modal.classList.remove('is-active');
        } else {
            modal.classList.add('is-active');
        }
    };
    scope.toggleDeletePlayer = () => {
        let modal = document.getElementById("deleteModal");
        if (modal.classList.contains('is-active')) {
            modal.classList.remove('is-active');
        } else {
            modal.classList.add('is-active');
        }
    };

}]);