var mongoose = require('mongoose');
var User = mongoose.model('user');
var Player = mongoose.model('player');
var Campaign = mongoose.model('campaign');
var bcrypt = require('bcrypt');
var session = require('express-session');
module.exports = (() => {
    const handleError = (err) => {
        console.error(err);
    };
    var CampaignController = {};
       CampaignController.newCampaign = (req, res) => {
       var campaignToMake = new Campaign({campaignTitle: req.body.title, campaignPassword: req.body.password});
           campaignToMake.save((err) => {
                if (err) return handleError(err);
           });
           res.json({campaignMade: campaignToMake});

        };

        CampaignController.addPlayer = (req, res) => {
            let campaignTitle = req.body.campaignName;
            let campaignPassword = req.body.campaignPassword;
            let playerInstance = req.body.player;
            Player.findOne({_id:playerInstance.id}, (err, playerFound) => {              
                if (err) return handleError(err);
                if(playerFound){
                    //TO-DO : WRITE VALIDATION FOR PLAYER ALREADY ON CAMPAIGN
                    Campaign.findOne({campaignTitle: campaignTitle, campaignPassword: campaignPassword}, (err, foundCampaign) => {
                        if(foundCampaign){
                            foundCampaign.players.push(playerFound);
                            foundCampaign.save();
                            res.json({message: "Added" +  " " + playerFound.name + " " + " to the campaign",
                            campaignId: foundCampaign._id
                            });
                        }else {
                            res.json({message:"credentials failed"});
                        }
                    });
                }else{
                    res.json({message:"Invalid Player"});
                }
            });
            
        };
        CampaignController.getCampaignById = (req, res) => {
                let id = req.body.id;
                Campaign.findById({_id: id}, (err, foundCampaign) => {         
                res.json({campaign: foundCampaign});
            });
        };
        CampaignController.getCampaign = (req, res) => {
            campaignTitle = req.body.title;
            campaignPassword = req.body.password;
            Campaign.findOne({campaignTitle: campaignTitle, campaignPassword: campaignPassword}, (err, foundCampaign) => {
                if (err) return handleError(err);
                if (foundCampaign) {
                    res.json({campaignId: foundCampaign._id,
                              campaignObject: foundCampaign
                            });
                }
            });
        };
        CampaignController.removePlayer = (req, res) => {
            let campaignToFindId = req.body.campaign.id;
            let playerToRemoveId = req.body.player.id;
            Campaign.findById(campaignToFindId, (err, foundCampaign) => {
                if(foundCampaign){
                    let playerList = foundCampaign.players;
                    for(let i=0; i<playerList.length; i++){
                        //dynamic typing garbage below
                        if(playerToRemoveId == playerList[i]._id){
                            playerList.splice(i, 1);
                        }
                    }
                    foundCampaign.save();
                    res.json({players: playerList});
                }
            });

        };
    return CampaignController;

})();