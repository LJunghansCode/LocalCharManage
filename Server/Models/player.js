var mongoose = require('mongoose');

var playerSchema = new mongoose.Schema({
accountEmail: {type:String},
campaign: {type:String},
realName: {type:String},
name: {type:String},
race: {type:String},
classType: {type:String},
alignment: {type:String},
sex: {type:String},
size: {type:String},
age: {type:Number},
height: {type:String},
weight: {type:String},
level: {type:Number},
initiative: {type:String},
speed: {type:String},
strength: {type:Number},
dexterity: {type:Number},
constitution: {type:Number},
intelligence: {type:Number},
wisdom: {type:Number},
charisma: {type:Number},
currentHitPoints: {type:Number},
tempHitPoints: {type:Number},
spellList: {type: []},
skills: {type: String},
personalityTraits: {type: String},
ideals: {type: String},
bonds: {type: String},
flaws: {type: String},
attacksSpellcasting: {type: String},
featuresTraits: {type: String},
equipment: {type: String},
proficienciesLanguages: {type: String},
appearance: {type: String},
alliesOrganizations: {type: String},
backStory: {type: String},
treasureInventory: {type: String},
spellcastingClass: {type: String},
spellcastingAbility: {type: String},
spellSaveDC: {type: String},
spellSaveBonus: {type: String},
strengthMod: {type: Number},
dexterityMod: {type: Number},
constitutionMod: {type: Number},
intelligenceMod: {type: Number},
wisdomMod: {type: Number},
charismaMod: {type: Number},
armorClass: {type: Number},
proficiencyBonus: {type: Number}
});
mongoose.model('player', playerSchema);