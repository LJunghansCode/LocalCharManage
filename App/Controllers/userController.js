app.controller('userController', [ '$location', '$scope', '$route', function(loc, scope, route){ 
    scope.newUser = () => {
        const userInstanceEmail = scope.newUser.email;
        const userInstancePassword = scope.newUser.password;
        console.log(userInstanceEmail);
        console.log(userInstancePassword);
        
    };
}]);