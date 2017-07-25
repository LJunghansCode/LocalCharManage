app.controller('experienceController', ['$window', '$scope', '$route', 'playerFactory', function (window, scope, route, playerFactory) {
    //set Slider
    scope.slideExperience = (widthString) => {
        const xpslider = document.getElementById('experience-slider');
        xpslider.style.width = widthString;
    };
    (() => {
        scope.experienceNeeded = new LevelGuide().experienceNeeded(scope.player.level);
        let decimalOfTotal = (scope.player.experience / scope.experienceNeeded);
        let percToSet = Math.floor(decimalOfTotal * 100);
        let widthString = percToSet + "%";
        scope.slideExperience(widthString);
    })();
    scope.resetExperience = (player) =>{
        player.resetExperience();
        scope.slideExperience('0%');
        scope.updateAndSave(player);
        window.location.reload();
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
    scope.gainExperience = (toGain) => {
        if (toGain <= 0 || toGain === undefined) {
            return;
        }
        let valueToSlide = scope.player.gainExperience(toGain);
        let decimalOfTotal = (valueToSlide.currentExperience / valueToSlide.experienceNeeded);
        let percToSet = Math.floor(decimalOfTotal * 100);
        if (percToSet >= 100) {

            percToSet = 0;
        }
        let widthString = percToSet + "%";
        scope.slideExperience(widthString);
        scope.updateAndSave(scope.player);
    };
}]);