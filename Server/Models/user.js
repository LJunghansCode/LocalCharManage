var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: String,
    password: String
});
mongoose.model('user', userSchema);