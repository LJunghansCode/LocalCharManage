app.controller('userController', [ '$window', '$location', '$scope', '$route', 'userFactory', function( window, loc, scope, route, userFactory){
    scope.currentUser = false;
    scope.statusMessage = " ";
    scope.loginStatusMessage = " ";
    scope.newUser = () => {
        //Validator class
        const Validator = new ValidateInput();
        //Validator will return an object with passed at truthy/falsy. And an 'errorMessage'
        let userInstanceEmail = scope.newUser.email;
        let userInstancePassword = scope.newUser.password;
        let userConfirm = scope.newUser.confirmPassword;
        if (userConfirm !== userInstancePassword) {
            scope.statusMessage = "Sorry, passwords don't match. Try again!";
            return;
        } else if (!userInstanceEmail || ! userInstancePassword) {
            scope.statusMessage = " Oops, you missed a field";
            return;
        }  else if ( !Validator.checkValidEmail(userInstanceEmail).passed || !Validator.checkValidPassword(userInstancePassword).passed ) {
            scope.statusMessage = Validator.checkValidPassword(userInstancePassword).errorMessage + Validator.checkValidEmail(userInstanceEmail).errorMessage;
        } else {
                userToSend = {email: userInstanceEmail, password: userInstancePassword};
                userFactory.newUser(userToSend, (returnedData) => {
                    scope.currentUser = true;
                    scope.statusMessage = returnedData.data.message;
                    if(returnedData.data.message !== "Welcome Back!"){
                        window.location.reload();
                    } else {
                        window.location.reload();
                    }
                    
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
            if(returnedData.data.message !== "Welcome Back!"){
                     return;
                    } else {
                        loc.url('/players');
                    }
        });
      }
    };
    scope.logOutUser = () => {
        userFactory.logOutUser((data) => {
            scope.currentUser = false;
            loc.path('/login');
            window.location.reload();
        });
    };
    
}]);