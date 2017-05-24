var mongoose = require('mongoose');
var User = mongoose.model('user');


module.exports = (() => {
    return {
        newUser : (req, res) => {
                user.findOne({email: req.body.email}, function(err, user){
                if(user){
                    //todo --> res with this
                    console.log("this email is in use code");
                }
                else{
                    user = new User();
                }       
        
            }); 
        }

    };

})();