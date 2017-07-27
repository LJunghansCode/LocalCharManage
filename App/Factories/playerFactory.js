
app.factory('playerFactory', ['$http', '$location', function(http, loc){
	var factory = {};

	factory.newPlayer = (player, callback) => {
		http.post("/new_player", player).then((returned_data) => {
			if(returned_data){
             callback(returned_data);
			}
		});
	};
	factory.deletePlayerById = (id, callback) => {
		http.post("delete_player", {id: id}).then((returned_data) =>{
			if(returned_data){
				callback(returned_data);
			}
		});
	};
    factory.getPlayer = (id, callback) => {
		http.post("/getPlayer", {id: id}).then( (returned_data) => {
			if(returned_data){
				 var P = returned_data.data.playerFound;
                 let playerToReturn = new Player(P._id, P.accountEmail, P.campaign, P.realName, P.name, P.race, P.classType, P.alignment, P.sex, P.size, P.age, P.height, P.weight, P.level, P.initiative, P.speed, P.strength, P.dexterity, P.constitution, P.intelligence, P.wisdom, P.charisma, P.currentHitPoints, P.tempHitPoints, P.spellList, P.skills, P.personalityTraits, P.ideals, P.bonds, P.flaws, P.attacksSpellcasting, P.featuresTraits, P.equipment, P.proficiencies, P.languages, P.appearance, P.alliesOrganizations, P.backStory, P.treasureInventory, P.spellcastingClass, P.spellcastingAbility, P.spellSaveDC, P.spellSaveBonus, P.armorClass, P.proficiencyBonus, P.borderColor, P.companions, P.notes, P.experience);
				 callback({player: playerToReturn});
			}
		});
	};
    factory.getSessionPlayers = (callback) => {
        http.get('/getMyPlayers').then((returned_data) => {
			
            if(returned_data.data.players){
				callback(returned_data);
			} else{
				callback({loggedIn: false});
				return;
			}
        });
    };
	factory.updateAndSave = (player, callback) => {
		player.calculateModifiers();
		http.post('/updateAndSave', player).then((returned_data) => {
			if(returned_data){
				callback(returned_data);
			}
		});
	};
	return factory;
}]);