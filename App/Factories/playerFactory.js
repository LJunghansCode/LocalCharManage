app.factory('playerFactory', ['$http', '$location', function(http, loc){
	var factory = {};
	factory.newPlayer = (player, callback) => {
		http.post("/new_player", player).then((returned_data) => {
			if(returned_data){
             callback(returned_data);
			// loc.url( );
			}
		});
	};
    factory.getPlayer = function(id, callback){
		http.get().then(function(returned_data){
			callback(returned_data);
		});
	};
	return factory;
}]);