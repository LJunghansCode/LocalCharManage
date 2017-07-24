app.controller('homeController', ['$location', '$scope', '$route', 'userFactory', function (loc, scope, route, userFactory) {
    userFactory.getCurUser((data) => {
        if (data.data.user === false) {
            loc.path('/home');
        } else {
            scope.user = data.data.user;
        }
    });
    scope.toggleNavBar = () => {
        //navbar is 265px wide
        var navBar = document.getElementById('mainNav');
        var mainContent = document.getElementById('body-container');
        if (navBar.classList.contains('is-open')) {
            navBar.classList.remove('is-open');
            mainContent.style.paddingLeft = "20px";
        } else {
            mainContent.style.paddingLeft = "265px";
            navBar.classList.add('is-open');
        }
    };
    scope.closeNavBar = () => {
        var navBar = document.getElementById('mainNav');
        var mainContent = document.getElementById('body-container');
        if (navBar.classList.contains('is-open')) {
            navBar.classList.remove('is-open');
            mainContent.style.paddingLeft = "20px";
        }
    };
    scope.logOut = () => {
        userFactory.logOutUser((data) => {
            scope.user = false;
        });
    };
    scope.loggedCheck = () => {
        if(scope.user) {
            return 'Log Out';
        } else {
            return 'Log In / Register';
        }
    };



}]);