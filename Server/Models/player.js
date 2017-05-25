var mongoose = require('mongoose');

var playerSchema = new mongoose.Schema({
accountEmail: {type:String},
campaign: {type:String},
realName: {type:String},
name: {type:String},
race: {type:String},
class: {type:String},
alignment: {type:String},
sex: {type:String},
size: {type:String},
age: {type:Number},
height: {type:Number},
weight: {type:Number},
level: {type:Number},
initiative: {type:String},
speed: {type:Number},
strength: {type:Number},
dexterity: {type:Number},
constitution: {type:Number},
intelligence: {type:Number},
wisdom: {type:Number},
charisma: {type:Number},
currentHitPoints: {type:Number},
tempHitPoints: {type:Number}
});
mongoose.model('player', playerSchema);