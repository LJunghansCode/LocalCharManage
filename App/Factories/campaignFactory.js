app.factory('campaignFactory', ['$http', '$location', function(http, loc){
    var factory = {};
    factory.newCampaign = (campaignInstance, callback) => {
        http.post('/new_campaign', campaignInstance).then((returnedData) => {
            callback(returnedData);
        });
    };
    factory.startCampaignSession = (campaign, callback) => {
        http.post('/get_campaign', campaign).then((returnedData) => {
            callback(returnedData);
        });
    };  
    factory.getCampaignById = (id, callback) => {
        let campaign = {id: id};
        http.post('/get_campaignById', campaign).then((returnedData) => {
            callback(returnedData);
        }); 
    };
    factory.addPlayer = (playerToAdd, campaignToJoinCred, callback) => {
        let addInfo = {
                player: playerToAdd,
                campaignName: campaignToJoinCred.title,
                campaignPassword: campaignToJoinCred.password
            };
        http.post('/add_player', addInfo).then((returnedData) => {
            callback(returnedData);
        });
    };
    factory.removePlayer = (player, campaign, callback) => {
        var removeInfo = {player: player, campaign: campaign};
        http.post('/remove_player', removeInfo).then((returnedData)=>{
            callback(returnedData);
        });
    };
    factory.all = [];
    factory.startCombat = (players, enemies) => {  
        for(let i=0; i<players.length; i++){
            factory.all.push(players[i]);
        }
        for(let i=0; i<enemies.length; i++){
            factory.all.push(enemies[i]);
        }
    };
    factory.getFighters = (callback) => {
        callback(factory.all);
    };

    return factory;
}]);