class Campaign{
    constructor(campaignTitle, campaignPassword){
        this.campaignTitle = campaignTitle;
        this.campaignPassword = campaignPassword;
        this.playersArray = [];
    }
    addPlayer (player) {
        this.playersArray.push(player);
    }

}