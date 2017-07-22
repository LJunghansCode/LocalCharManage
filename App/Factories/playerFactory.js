
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
				callback(returned_data);
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