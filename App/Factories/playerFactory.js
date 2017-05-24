app.factory('userFactory', ['$http', '$location', function(http, loc){
	var factory = {};
	factory.newPost = function( ){
		http.post( ).then(function(returned_data){
			if(returned_data){
			loc.url( );
			}
		});
	};
    factory.getOne = function(id, callback){
		http.get( ).then(function(returned_data){
			callback(returned_data);
		});
	};
	return factory;
}]);