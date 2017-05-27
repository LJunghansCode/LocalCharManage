var app = angular.module('app', ['ngRoute']);

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
        .when('/login', {
            templateUrl: './partials/login.html',
            controller: 'userController'
        })
        .when('/campaignManager', {
            templateUrl: './partials/campaign.html',
            controller: 'campaignController'
        })
        .otherwise('/', {
            redirectTo: '/home'
        });
});