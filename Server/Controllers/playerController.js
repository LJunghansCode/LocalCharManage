var mongoose = require('mongoose');
var User = mongoose.model('user');
var Player = mongoose.model('player');
var bcrypt = require('bcrypt');
var session = require('express-session');


module.exports = (() => {
    return {
        newPlayer : (req, res) => {
            var sess = req.session;
            var playerToMake = new Player(req.body);
            playerToMake.accountEmail = sess.user.email;
            sess.user.players.push(playerToMake);
            playerToMake.save();
            res.json({playerMade: playerToMake});
        }

    };

})();