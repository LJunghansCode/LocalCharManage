app.controller('userController', [ '$window', '$location', '$scope', '$route', 'userFactory', function( window, loc, scope, route, userFactory){
    scope.currentUser = false;
    scope.statusMessage = " ";
    scope.loginStatusMessage = " ";
    scope.newUser = () => {
        const userInstanceEmail = scope.newUser.email;
        const userInstancePassword = scope.newUser.password;
        const userConfirm = scope.newUser.confirmPassword;
        if(userConfirm !== userInstancePassword) {
            scope.statusMessage = "Sorry, passwords don't match. Try again!";
        } else if(!userInstanceEmail || !userInstancePassword){
            scope.statusMessage = "Looks like you missed a field. Try again!";
        } else {
                userToSend = {email: userInstanceEmail, password: userInstancePassword};
                userFactory.newUser(userToSend, (returnedData) => {
                    scope.currentUser = true;
                    scope.statusMessage = returnedData.data.message;
                    window.location.reload();
                });
            }
    };
    scope.returnUser = () => {
        const userInstanceEmail = scope.returnUser.email;
        const userInstancePassword = scope.returnUser.password;
        if(!userInstanceEmail || !userInstancePassword){
            scope.loginStatusMessage = "Oops, you missed a field";
        } else {
        returnUser = {email: userInstanceEmail, password: userInstancePassword};
        userFactory.loginReturnUser(returnUser, (returnedData) => {
            scope.currentUser = true;
            scope.loginStatusMessage = returnedData.data.message;
            window.location.reload();
        });
      }
    };
    scope.logOutUser = () => {
        userFactory.logOutUser((data) => {
            console.log(data);
            window.location.reload();
            loc.path('/home');
        });
    };
    
}]);