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
        factory.getCurUser = (callback) => {
            http.get("/get_user").then((returned_data) => {
                callback(returned_data);
            });
        };
        factory.logOutUser = (callback) => {
            http.get("/logout").then((returned_data) => {
                callback(returned_data);
            });
        };
        factory.getLoggedInUserPlayers  = (callback) => {
            http.get("/getMyPlayers").then((returned_data) => {
                callback(returned_data);
            });
        };
    return factory;
}]);