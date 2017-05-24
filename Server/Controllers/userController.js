var mongoose = require('mongoose');
var User = mongoose.model('user');
var bcrypt = require('bcrypt');


module.exports = (() => {
    return {
        newUser : (req, res) => {
                User.findOne({email: req.body.email}, (err, userFound) => {
                if(!req.body.email || !req.body.password) {
                    res.json({message: "Looks like you missed a field. Try again!"});
                }
                else if(userFound){
                     res.json({message: "E-mail address not valid"});
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
                    console.log(req.body);
                    res.json({message: "Something went wrong, please try again"});
                } else if(userFound){
                    console.log(userFound.password);
                    console.log(req.body.password);
                    bcrypt.compare(req.body.password, userFound.password,(err, bcryptRes) => {
                        if(bcryptRes === true){
                            res.json({message: "Welcome Back!"});
                        } else {
                            res.json({message: "Something went wrong, please try again"});
                        }
                    });
                } else {
                    res.json({message: "Something went wrong, please try again"});
                }
            });
        }

    };

})();