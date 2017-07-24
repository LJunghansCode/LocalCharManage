var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: String,
    user_name: String,
    password: String,
    players: []
});
mongoose.model('user', userSchema);