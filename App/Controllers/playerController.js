app.controller('playerController', ['$location', '$timeout', '$scope', '$route', '$routeParams', 'playerFactory', 'campaignFactory', 'userFactory', 'Upload', function (loc, timeout, scope, route, routeParams, playerFactory, campaignFactory, userFactory, Upload) {

    //GET PLAYER
    if (routeParams.id) {
        playerFactory.getPlayer(routeParams.id, (data) => {
            if (data.data.playerFound) {
                var P = data.data.playerFound;
                let playerOnDisplay = new Player(P._id, P.accountEmail, P.campaign, P.realName, P.name, P.race, P.classType, P.alignment, P.sex, P.size, P.age, P.height, P.weight, P.level, P.initiative, P.speed, P.strength, P.dexterity, P.constitution, P.intelligence, P.wisdom, P.charisma, P.currentHitPoints, P.tempHitPoints, P.spellList, P.skills, P.personalityTraits, P.ideals, P.bonds, P.flaws, P.attacksSpellcasting, P.featuresTraits, P.equipment, P.proficiencies, P.languages, P.appearance, P.alliesOrganizations, P.backStory, P.treasureInventory, P.spellcastingClass, P.spellcastingAbility, P.spellSaveDC, P.spellSaveBonus, P.armorClass, P.proficiencyBonus, P.borderColor, P.companions, P.notes);
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
                scope.spellSlots = slots.returnSpellSlotArray(slots.createSpellSlots(scope.player.level, scope.player.spellcastingClass));
                //Stat Organization
                var masterStat = scope.player.organizeStatsArray();
                scope.basicInformation = masterStat.basicInformation;
                scope.charDetails = masterStat.charDetails;
                scope.primaryStats = masterStat.primaryStats;
                scope.spellDetails = masterStat.spellDetails;

                scope.vitals = masterStat.vitals;
                scope.skillList = new DynamicList(scope.player.skills);
                scope.companions = new DynamicList(scope.player.companions);
                scope.equipmentList = new DynamicList(scope.player.equipment);
                scope.spells = new DynamicList(scope.player.spellList);
                scope.playerNotes = new DynamicList(scope.player.notes, 'Notes');
                userFactory.getCurUser((data) => {
                    if (data.data.message === scope.player.accountEmail) {
                        scope.player.youOwnThis = true;
                    }
                });
                scope.templates = [{
                        name: 'Basic Information',
                        url: './../partials/basicInfo.html'
                    },
                    {
                        name: 'Stats and Skills',
                        url: './../partials/statsVitals.html'
                    },
                    {
                        name: 'Spell Manager',
                        url: './../partials/spellInfo.html'
                    },
                    {
                        name: 'Equipment',
                        url: './../partials/equip.html'
                    },
                    {
                        name: 'Details and Inventory',
                        url: './../partials/details.html'
                    },
                    {
                        name: 'Companions',
                        url: './../partials/companions.html'
                    },
                    {
                        name: 'Notes',
                        url: './../partials/notes.html'
                    },
                    {
                        name: 'Delete',
                        url: './../partials/delete.html'
                    }
                                    
                ];
                scope.currentTemplate = scope.templates[0];
                scope.templateUrl = scope.currentTemplate.url;
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
                campaignCred.title = "";
                campaignCred.password = "";
            });
        }
    };
    //For html access to saving
    scope.updateAndSave = (player) => {
        playerFactory.updateAndSave(player, (data) => {
            if (data.data.player) {
                scope.player.calculateModifiers();
            } else if (data.data.error) {
                let error = data.data.error;
                console.error(error)
                if (error.name === "CastError") {

                }
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
    };
    //UI TOGGLES
    scope.templateSwap = (template) => {
        scope.currentTemplate = template;
        scope.templateUrl = template.url;
    };
    scope.searchDate = (date) => {
        scope.noteSearch = date;
    };
    scope.ifActiveTemplate = (template) => {
        if(template.name === scope.currentTemplate.name){
            return 'is-active';
        } else {
            return;
        }
    };
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
    scope.ifEdit = (stat) => {
        if(stat.editing === true || scope.player.editing === true){
            return  'fa fa-save';
        } else{
            return 'fa fa-pencil';
        }
    };
    scope.editStat = (stat) => {
        //Check to see if spellSlots will change...
        if (stat.editing !== true) {
            stat.editing = true;
        } else {
            scope.updateAndSave(scope.player);
            if (stat.title === 'Level' || stat.title === 'Spell Casting Class') {
                let slots = scope.player.spellSlots;
                scope.spellSlots = slots.returnSpellSlotArray(slots.createSpellSlots(scope.player.level, scope.player.spellcastingClass));
            }
            stat.editing = false;
        }
    };
    scope.toggleEdit = (p) => {
        if (p.editing !== true) {
            p.editing = true;
        } else {
            p.editing = false;
        }

    };

}]);