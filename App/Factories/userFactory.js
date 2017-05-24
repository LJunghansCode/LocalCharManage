app.factory('userFactory', ['$http', '$location', function(http, loc){
    var factory = {};
        factory.newUser = (user, callback) => {
            http.post("/new_user", user).then((returned_data) => {
                callback(returned_data);
            });
        };
        factory.loginReturnUser = (user, callback) => {
            http.post("/login_user", user).then((returned_data) => {
                callback(returned_data);
            });
        };
    return factory;
}]);