app.controller('sessionController', ['$location', '$scope', '$route','$routeParams', 'campaignFactory', function(loc, scope, route, routeParams, campaignFactory){
    
        if (routeParams.id) {
            campaignFactory.getCampaignById(routeParams.id, (data) => {
                scope.campaignForSession = data.data.campaign;
            });

    }






}]);