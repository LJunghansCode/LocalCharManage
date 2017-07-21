app.controller('homeController', [ '$location', '$scope', '$route','userFactory', function(loc, scope, route, userFactory){ 
    let currUser = userFactory.getCurUser((data) => {
        if(data.data.message === false) {
            loc.path('/login');
        }
        });
        scope.toggleNavBar = () => {
        //navbar is 265px wide
            var navBar = document.getElementById('mainNav');
            var mainContent = document.getElementById('body-container');
            if(navBar.classList.contains('is-open')) {
                navBar.classList.remove('is-open');
                mainContent.style.marginLeft = "0";
            } else{
                mainContent.style.marginLeft = "265px";
                navBar.classList.add('is-open');
            }

        };
    scope.closeNavBar = () => {
        var navBar = document.getElementById('mainNav');
        var mainContent = document.getElementById('body-container');
        if(navBar.classList.contains('is-open')){
            navBar.classList.remove('is-open');
            mainContent.style.marginLeft = "0";
        }
    };
    

    
}]);