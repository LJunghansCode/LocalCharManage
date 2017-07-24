app.controller('userController', [ '$window', '$location', '$scope', '$route', 'userFactory', function( window, loc, scope, route, userFactory){
    scope.currentUser = false;
    scope.statusMessage = " ";
    scope.loginStatusMessage = " ";
    scope.newUser = () => {
        //Validator class
        const Validator = new ValidateInput();
        //Validator will return an object with passed at truthy/falsy. And an 'errorMessage'
        let userInstanceEmail = scope.newUser.email;
        let newUserName = scope.newUser.user_name;
        let userInstancePassword = scope.newUser.password;
        let userConfirm = scope.newUser.confirmPassword;
        if (userConfirm !== userInstancePassword) {
            scope.statusMessage = "Sorry, passwords don't match. Try again!";
            return;
        } else if (!newUserName || !userInstanceEmail || ! userInstancePassword) {
            scope.statusMessage = " Oops, you missed a field";
            return;
        }  else if ( !Validator.checkValidEmail(userInstanceEmail).passed || !Validator.checkValidPassword(userInstancePassword).passed ) {
            scope.statusMessage = Validator.checkValidPassword(userInstancePassword).errorMessage + Validator.checkValidEmail(userInstanceEmail).errorMessage;
        } else {
                userToSend = {email: userInstanceEmail, user_name: newUserName, password: userInstancePassword};
                userFactory.newUser(userToSend, (returnedData) => {
                    scope.currentUser = true;
                    scope.statusMessage = returnedData.data.message;
                    scope.returnUser(userToSend.email, userToSend.password);
                    if(returnedData.data.message !== "Welcome Back!"){
                        window.location.reload();
                    } else {
                        console.log('you logged in')
                        loc.path('/players');
                    }
                    
                });
            }
    };
    scope.returnUser = (userInstanceEmail, userInstancePassword) => {
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
                        loc.path('/players');                         
                        window.location.reload();
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