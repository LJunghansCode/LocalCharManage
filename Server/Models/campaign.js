var mongoose = require('mongoose');

var campaignSchema = new mongoose.Schema({
    name: String,
    players: [{userEmail: String, character: {} }],
});
mongoose.model('campaign', campaignSchema);