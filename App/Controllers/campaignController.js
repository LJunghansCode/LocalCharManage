app.controller('campaignController', ['$window', '$location', '$scope', '$route', 'campaignFactory','playerFactory', function(window, loc, scope, route, campaignFactory, playerFactory){
    scope.newCampaign = () => {
        campaignFactory.newCampaign(scope.campaignInstance, (data) => {
            if(data){
                let campaignFromBack = data.data;
                console.log(data);
                
            }
        });
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
    // playerFactory.getSessionPlayers( (data) => {
    //     playersArray = data.data.players;
    //     for(let i = 0; i < playersArray.length; i++) {
    //        scope.sessPlayers.push(playersArray[i]);
    //     }
    // });

}]);