var app = angular.module('app', ['ngRoute']);
console.log("Built by Luca Junghans, sup");
app.config(function($routeProvider, $locationProvider){
    $routeProvider
        .when('/home', {
            templateUrl: './partials/home.html',
            controller: 'homeController'
        })
        .otherwise('/', {
            redirectTo: '/home'
        });
});