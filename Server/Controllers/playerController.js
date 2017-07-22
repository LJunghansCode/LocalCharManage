var mongoose = require('mongoose');
var User = mongoose.model('user');
var Player = mongoose.model('player');
var bcrypt = require('bcrypt');
var campaign = mongoose.model('campaign');
var session = require('express-session');


module.exports = (() => {
    const handleError = (err, res) => {
        res.json({error: err});
    };
    var PlayerController = {};
       PlayerController.newPlayer = (req, res) => {
            var sess = req.session;
            var playerToMake = new Player(req.body);
            if(sess.user){
                playerToMake.accountEmail = sess.user.email;
                sess.user.players.push(playerToMake);
            }else{
                playerToMake.accountEmail = "TempPlayer";
            }            
            playerToMake.save((err) => {
                if (err) return handleError(err);
            });
            res.json({playerMade: playerToMake});
        };
        PlayerController.getPlayer = (req, res) => {
            Player.findOne({_id: req.body.id}, (err, foundPlayer) => {
                if (err) {
                    res.json({error: err});
                    return handleError(err);
                }
                if (foundPlayer) {
                    res.json({playerFound: foundPlayer});
                } else {
                    console.error('No player to find');
                }
            }); 
        };
        PlayerController.deletePlayer = (req, res) => {
            Player.findOneAndRemove({_id: req.body.id}, (err, foundPlayer) => {
                if (err) return handleError(err);
                if (foundPlayer) {
                    res.json({message: true});
                } else {
                    res.json({message: false});
                }
            }); 
        };
        PlayerController.updateAndSave = (req, res) => {
                Player.findOneAndUpdate({_id: req.body.id}, req.body, (err, foundPlayer) => {
                if (err) {
                    return handleError(err, res);
                }
                if (foundPlayer) {
                   foundPlayer.save();
                   res.json({player: foundPlayer});
                } else {
                    console.error('no find');
                }
            });   
        };


    return PlayerController;

})();