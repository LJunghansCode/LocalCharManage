var app = angular.module('app', ['ngRoute','ngFileUpload']);

app.config(($routeProvider, $locationProvider) => {
    $routeProvider
        .when('/home', {
            templateUrl: './partials/home.html',
            controller: 'homeController'
        })
        .when('/combat', {
            templateUrl: './partials/combat.html',
            controller: 'combatController'
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
        .when('/player/:id', {
            templateUrl: './partials/singlePlayer.html',
            controller: 'playerController'
        })
        .when('/session/:id', {
            templateUrl:'./partials/session.html',
            controller: 'sessionController'
        })
        .otherwise( {
            redirectTo: '/players',
            controller:'homeController'
        });
});