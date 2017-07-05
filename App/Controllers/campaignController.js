app.controller('campaignController', ['$window', '$location', '$scope', '$route', 'campaignFactory','playerFactory', function(window, loc, scope, route, campaignFactory, playerFactory){
    scope.responseMessage = "";
    scope.newCampaign = () => {
        if(!scope.campaignInstance.title || !scope.campaignInstance.password) {
            scope.responseMessage = "oops, you missed something";
        }else{
        campaignFactory.newCampaign(scope.campaignInstance, (data) => {
            if(data){
                let campaignFromBack = data.data;
                scope.responseMessage = "Created!";
                
            }
        });
     }
    };
    scope.startCampaignSession = () => {
        campaignFactory.startCampaignSession(scope.session, (data) => {
            loc.path('/session/' + data.data.campaignId);
        });
    };
    scope.addPlayer = (playerToAdd, campaignToJoin) => {
        campaignFactory.addPlayer(playerToAdd, campaignToJoin, (returnedData) => {
        });
    };


}]);