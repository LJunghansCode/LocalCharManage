var app = angular.module('app', ['ngRoute']);
console.log("Built by Luca Junghans, sup");
app.config(($routeProvider, $locationProvider) => {
    $routeProvider
        .when('/home', {
            templateUrl: './partials/home.html',
            controller: 'homeController'
        })
        .when('/players', {
            templateUrl: './partials/players.html',
            controller: 'playerController'
        })
        .otherwise('/', {
            redirectTo: '/home'
        });
});