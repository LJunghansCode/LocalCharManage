var mongoose = require('mongoose');
var User = mongoose.model('user');
var Player = mongoose.model('player');
var bcrypt = require('bcrypt');
var session = require('express-session');


//export our controller methods
module.exports = (() => {
   const handleError = (err) => {
        console.error(err);
    };
    return {
        imageForUser : (req, res) => {
            console.log(req.body);
        },
        newUser : (req, res) => {
                User.findOne({email: req.body.email}, (err, userFound) => {
                if(!req.body.email || !req.body.password) {
                    res.json({message: "Looks like you missed a field. Try again!"});
                }
                else if(userFound){
                     res.json({message: "E-mail address not valid; In Use."});
                }
                else{
                    userToSave = new User(req.body);
                    const saltrounds = 9;
                    bcrypt.hash(userToSave.password, saltrounds, (err, hash) => {
                        if(err){
                            console.error(err);
                        } else {
                            userToSave.password = hash;
                            userToSave.save((err) => {
                                if(err) {
                                    console.error(err);
                                }else {
                                     var sess = req.session;
                                     sess.user = userToSave;
                                     sess.user.players = [];
                                     res.json({message: "Success! Good luck in your trials!"});
                                }
                            });
                            
                        }
                    });
                }       
        
            }); 
        },
        loginUser : (req, res) => {
            User.findOne({email: req.body.email}, (err, userFound) => {
                if(!req.body.email || !req.body.password){
                    res.json({message: "Something went wrong, please try again"});
                } else if(userFound){
                    bcrypt.compare(req.body.password, userFound.password,(err, bcryptRes) => {
                        if(bcryptRes === true){
                            var sess = req.session;
                            sess.user = userFound;
                            sess.user.players = [];
                            res.json({message: "Welcome Back!"});
                        } else {
                            res.json({message: "Something went wrong, please try again"});
                        }
                    });
                } else {
                    res.json({message: "Something went wrong, please try again"});
                }
            });
        },
        getUser : (req, res) => {
            var sess = req.session;
            if(!sess.user) {
                res.json({message: false});
            } else {
                res.json({message: sess.user.email});
            }
        },
        logoutUser : (req, res) => {
            var sess = req.session;
            if(sess.user) {
                sess.destroy();
                res.json({loggedOut: true});
            }
        },
        getMyPlayers : (req, res) => {
            var currentUser = req.session.user;
            Player.find({accountEmail: currentUser.email}, (err, playerArr) => {
                 res.json({players: playerArr});
            });
        }

    };

})();