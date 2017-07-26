app.controller('experienceController', ['$window', '$scope', '$route', 'playerFactory', function (window, scope, route, playerFactory) {
    //set Slider
     scope.LevelGuide = new LevelGuide();
     scope.returnWidthPercent = (player) => {
        if(player.experience === undefined || player.experience === null || player.experience === 0){
            let classObj = {'width': '0%'};
            return classObj;
        }
       
        player.level = parseInt(player.level);
        let xpNeeded = scope.LevelGuide.experienceNeeded(player.level);
        var currExperience = player.experience;
        var decimalOfTotal = (currExperience / xpNeeded);
        var percToSet = Math.floor(decimalOfTotal * 100);
        if (percToSet >= 100) {

            percToSet = 0;
        }
        var widthString = percToSet + "%";
        var classObj = {'width': widthString};
        return classObj;
    };
    scope.resetExperience = (player) => {
        player.resetExperience();
        scope.updateAndSave(player);
    };
    scope.updateAndSave = (player) => {
        playerFactory.updateAndSave(player, (data) => {
            if (data.data.player) {
                scope.player.calculateModifiers();
            } else if (data.data.error) {
                let error = data.data.error;
                console.error(error);

            }
        });
    };
    scope.gainExperience = (toGain, player) => {
        if(player.experience === 0 || player.experience === undefined || player.experience === null){
            scope.player.gainExperience(0);
        }
        let valueToSlide = scope.player.gainExperience(toGain);
        scope.updateAndSave(scope.player);
    };
}]);