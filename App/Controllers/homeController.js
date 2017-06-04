app.controller('homeController', [ '$location', '$scope', '$route','userFactory', function(loc, scope, route, userFactory){ 
    getUser = () => {
        scope.userEmail = "";
        userFactory.getCurUser((data) => {
            if(data.data.message === false){
                console.log("Create an accuont to save your campaign!");
            } else if(data.data.message){
                scope.userEmail = data.data.message;
                userFactory.getLoggedInUserPlayers((data) => {
                    
                });
            }
        });
    };
    getUser();
}]);