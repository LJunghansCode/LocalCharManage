app.controller('homeController', ['$location', '$scope', '$route', 'userFactory', function (loc, scope, route, userFactory) {
    userFactory.getCurUser((data) => {
        if (data.data.message === false) {
            loc.path('/login');
        } else {
            scope.user= data.data.message;
        }
    });
    scope.toggleNavBar = () => {
        //navbar is 265px wide
        var navBar = document.getElementById('mainNav');
        var mainContent = document.getElementById('body-container');
        if (navBar.classList.contains('is-open')) {
            navBar.classList.remove('is-open');
            mainContent.style.paddingLeft = "0";
        } else {
            mainContent.style.paddingLeft = "11%";
            navBar.classList.add('is-open');
        }
    };
    scope.closeNavBar = () => {
        var navBar = document.getElementById('mainNav');
        var mainContent = document.getElementById('body-container');
        if (navBar.classList.contains('is-open')) {
            navBar.classList.remove('is-open');
            mainContent.style.paddingLeft = "0";
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