var mongoose = require('mongoose');
var User = mongoose.model('user');
var Player = mongoose.model('player');
var bcrypt = require('bcrypt');
var session = require('express-session');


module.exports = (() => {
    var PlayerController = {};
       PlayerController.newPlayer = (req, res) => {
            var sess = req.session;
            var playerToMake = new Player(req.body);
            playerToMake.accountEmail = sess.user.email;
            sess.user.players.push(playerToMake);
            playerToMake.save();
            res.json({playerMade: playerToMake});
        };
        PlayerController.getPlayer = (req, res) => {
            console.log(req.params.id);
            Player.findOne({_id: req.params.id}, (err, foundPlayer) => {
                if (foundPlayer) {
                    console.log(foundPlayer);
                    res.json({playerFound: foundPlayer});
                } else {
                    console.log('no find');
                }
            });   
        
    };
    return PlayerController;

})();