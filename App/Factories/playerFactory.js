app.factory('playerFactory', ['$http', '$location', function(http, loc){
	var factory = {};
	factory.newPlayer = (player, callback) => {
		http.post("/new_player", player).then((returned_data) => {
			if(returned_data){
             callback(returned_data);
			}
		});
	};
    factory.getPlayer = (id, callback) => {
		http.get().then( (returned_data) => {
			callback(returned_data);
		});
	};
    factory.getSessionPlayers = (callback) => {
        http.get('/getMyPlayers').then((returned_data) => {
            callback(returned_data);
        });
    };
	return factory;
}]);