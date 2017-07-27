app.controller('playerController', ['$location', '$timeout', '$scope', '$route', '$routeParams', 'playerFactory', 'campaignFactory', 'userFactory', 'Upload', function (loc, timeout, scope, route, routeParams, playerFactory, campaignFactory, userFactory, Upload) {
    //GET PLAYER
    userFactory.getCurUser( (data) => {
        if(data.data.user){
            scope.user = data.data.user;
        }
    });
    
    if (routeParams.id) {
        playerFactory.getPlayer(routeParams.id, (data) => {
            if (data.player) {
                ////////////////////////
               //Player Class Creation//
               ///////////////////////
                scope.player = data.player;
                //Get Modifiers
                scope.player.calculateModifiers();
                //Get Spell Slots
                let slots = scope.player.spellSlots;
                scope.spellSlots = slots.returnSpellSlotArray(slots.createSpellSlots(scope.player.level, scope.player.spellcastingClass));
                ////////////////////
               //Stat Organization//
               ////////////////////
                var masterStat = scope.player.organizeStatsArray();
                scope.basicInformation = masterStat.basicInformation;
                scope.charDetails = masterStat.charDetails;
                scope.primaryStats = masterStat.primaryStats;
                scope.spellDetails = masterStat.spellDetails;
                //Check for skillmap Existince.
                if(scope.player.skills === undefined) {
                    scope.player.skills = {};
                    scope.updateAndSave(scope.player);
                }
                scope.vitals = masterStat.vitals;
                scope.skillList = new SkillLib().returnLibrary();
                scope.companions = new DynamicList(scope.player.companions);
                scope.equipmentList = new DynamicList(scope.player.equipment);
                scope.spells = new DynamicList(scope.player.spellList);
                scope.playerNotes = new DynamicList(scope.player.notes, 'Notes');
                //CHECK OWNERSHIP
                if (scope.user.email === scope.player.accountEmail) {
                        scope.player.youOwnThis = true;
                    }
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
                        name: 'Details Inventory and Equipment',
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
                        name: 'Experience',
                        url: './../partials/experience.html'
                    },
                    {
                        name: 'Delete',
                        url: './../partials/delete.html'
                    }
                                    
                ];
                scope.currentTemplate = scope.templates[0];
                scope.templateUrl = scope.currentTemplate.url;
            } else {
                loc.url('/players');
                console.error("Something went wrong. Sorry!");
            }
        });
    } else {
        //All Players You Own
            playerFactory.getSessionPlayers((data) => {
                if(scope.user){
                playersArray = data.data.players;
                for (var i = 0; i < playersArray.length; i++) {
                    scope.totalPlayers.push(playersArray[i]);
                    }    
                } else {
                    scope.notLoggedIn = true;
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
    //Main Stat Edit Toggle
    scope.editStat = (stat) => {
        //Check to see if spellSlots will change...
        if (stat.editing !== true) {
            stat.editing = true;
        } else {
            scope.updateAndSave(scope.player);
            if (stat.title === 'Level' || stat.title === 'Spell Casting Class') {
                let slots = scope.player.spellSlots;
                scope.player.resetExperience();
                scope.spellSlots = slots.returnSpellSlotArray(slots.createSpellSlots(scope.player.level, scope.player.spellcastingClass));
            }
            stat.editing = false;
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


    scope.statModCalc = (stat) => {
        let statMod = scope.player.singleModCalc(stat);
        return statMod;
    };
    //UI TOGGLES

    //Class controller for skills
    scope.addSkill = (skill) => {
        scope.player.toggleSkill(skill);
        scope.updateAndSave(scope.player);
    };
    scope.ifPlayerHasSkill = (skill) => {
        if(scope.player.skills[skill]){
            return 'is-prof';
        } else {
            return;
        }
    };
    //Template swap for partial views
    scope.templateSwap = (template) => {
        scope.currentTemplate = template;
        scope.templateUrl = template.url;
    };
    //Check Active Template for css class
    scope.ifActiveTemplate = (template) => {
        if(template.name === scope.currentTemplate.name){
            return 'is-active';
        } else {
            return;
        }
    };
    //Assign note search this date
    scope.searchDate = (date) => {
        scope.noteSearch = date;
    };
    //Campaign Join Modal
    scope.toggleJoinCampaign = () => {
        let modal = document.getElementById("campaignModal");
        if (modal.classList.contains('is-active')) {
            modal.classList.remove('is-active');
        } else {
            modal.classList.add('is-active');
        }
    };
    //Delete Modal
    scope.toggleDeletePlayer = () => {
        let modal = document.getElementById("deleteModal");
        if (modal.classList.contains('is-active')) {
            modal.classList.remove('is-active');
        } else {
            modal.classList.add('is-active');
        }
    };
    //Icon swap on fields
    scope.ifEdit = (stat) => {
        if(stat.editing === true || scope.player.editing === true){
            return  'fa fa-save';
        } else{
            return 'fa fa-pencil';
        }
    };

    //Toggle whole player edit
    scope.toggleEdit = (p) => {
        if (p.editing !== true) {
            p.editing = true;
        } else {
            p.editing = false;
        }

    };

}]);