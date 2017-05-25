var mongoose = require('mongoose');
var User = mongoose.model('user');
var Player = mongoose.model('player');
var bcrypt = require('bcrypt');
var session = require('express-session')


module.exports = (() => {
    return {
        newPlayer : (req, res) => {
            var playerToMake = new Player(req.body);
            playerToMake.accountEmail = req.session.user.email;
            playerToMake.save();
            console.log(playerToMake);
            res.json({playerMade: playerToMake});
        }

    };

})();