    class Player {
        constructor(id, accountEmail, campaign, realName, name, race, classType, alignment, sex, size, age, height, weight, level, initiative, speed, strength, dexterity, constitution, intelligence, wisdom, charisma, currentHitPoints, tempHitPoints, spellList, skills, personalityTraits, ideals, bonds, flaws, attacksSpellcasting, featuresTraits, equipment, proficiencies, languages, appearance, alliesOrganizations, backStory, treasureInventory, spellcastingClass, spellcastingAbility, spellSaveDC, spellSaveBonus, armorClass, proficiencyBonus, borderColor, companions, notes, experience) {
            this.id = id;
            this.accountEmail = accountEmail;
            this.campaign = campaign;
            this.realName = realName;
            this.name = name;
            this.race = race;
            this.classType = classType;
            this.alignment = alignment;
            this.sex = sex;
            this.size = size;
            this.age = age;
            this.height = height;
            this.weight = weight;
            this.level = level;
            this.initiative = initiative;
            this.speed = speed;
            this.strength = strength;
            this.dexterity = dexterity;
            this.constitution = constitution;
            this.intelligence = intelligence;
            this.wisdom = wisdom;
            this.charisma = charisma;
            this.currentHitPoints = currentHitPoints;
            this.tempHitPoints = tempHitPoints;
            this.spellList = spellList;
            this.DiceManager = new DiceRoller();
            this.experience = experience;
            this.skills = skills;
            this.personalityTraits = personalityTraits;
            this.ideals = ideals;
            this.bonds = bonds;
            this.flaws = flaws;
            this.attacksSpellcasting = attacksSpellcasting;
            this.featuresTraits = featuresTraits;
            this.equipment = equipment;
            this.proficiencies = proficiencies;
            this.languages = languages;
            this.appearance = appearance;
            this.alliesOrganizations = alliesOrganizations;
            this.backStory = backStory;
            this.treasureInventory = treasureInventory;
            this.spellcastingClass = spellcastingClass;
            this.spellcastingAbility = spellcastingAbility;
            this.spellSaveDC = spellSaveDC;
            this.spellSaveBonus = spellSaveBonus;
            this.armorClass = armorClass;
            this.proficiencyBonus = proficiencyBonus;
            this.borderColor = borderColor;
            this.companions = companions;
            this.notes = notes;
            this.spellSlots = new SpellSlots(this.classType);
        }
        normalizeTextLowerCase(text) {
            let lowerCase = "";
            for (let i = 0; i < text.length; i++) {
                let letter = text[i].toLowerCase();
                lowerCase += letter;
            }
            return lowerCase;
        }
        organizeStatsArray() {
            //In order of Appearance
            const masterStatArraysObj = {
                primaryStats: [{
                    title: "Strength",
                    stat: "strength",
                    statMod: this.strengthMod,
                    value: this.strength
                }, {
                    title: "Dexterity",
                    stat: "dexterity",
                    statMod: this.dexterityMod,
                    value: this.dexterity
                }, {
                    title: "Constitution",
                    stat: "constitution",
                    statMod: this.constitutionMod,
                    value: this.constitution
                }, {
                    title: "Intelligence",
                    stat: "intelligence",
                    statMod: this.intelligenceMod,
                    value: this.intelligence
                }, {
                    title: "Wisdom",
                    stat: "wisdom",
                    statMod: this.wisdomMod,
                    value: this.wisdom
                }, {
                    title: "Charisma",
                    stat: "charisma",
                    statMod: this.charismaMod,
                    value: this.charisma
                }],

                vitals: [{
                    title: "Level",
                    stat: "level",
                    value: this.level
                }, {
                    title: "Initiative",
                    stat: "initiative",
                    value: this.initiative
                }, {
                    title: "Speed",
                    stat: "speed",
                    value: this.speed
                }, {
                    title: "Armor Class",
                    stat: "armorClass",
                    value: this.armorClass
                }, {
                    title: "HP",
                    stat: "currentHitPoints",
                    value: this.currentHitPoints
                }, {
                    title: "Temp HP",
                    stat: "tempHitPoints",
                    value: this.tempHitPoints
                }, {
                    title: "Height",
                    stat: "height",
                    value: this.height
                }, {
                    title: "Weight",
                    stat: "weight",
                    value: this.weight
                }, {
                    title: "Speed",
                    stat: "speed",
                    value: this.speed
                }],

                basicInformation: [{
                    title: "Player Name",
                    stat: "realName",
                    value: this.realName
                }, {
                    title: "Character Name",
                    stat: "name",
                    value: this.name
                }, {
                    title: "Race",
                    stat: "race",
                    value: this.race
                }, {
                    title: "Class",
                    stat: "classType",
                    value: this.classType
                }, {
                    title: "Alignment",
                    stat: "alignment",
                    value: this.alignment
                }, {
                    title: "Age",
                    stat: "age",
                    value: this.age
                }],

                charDetails: [{
                    title: "Treasure and Inventory",
                    stat: "treasureInventory",
                    value: this.treasureInventory
                }, {
                    title: "Features and Traits",
                    stat: "featuresTraits",
                    value: this.featuresTraits
                }, {
                    title: "Proficiencies",
                    stat: "proficiencies",
                    value: this.languages
                }, {
                    title: "Languages",
                    stat: "languages",
                    value: this.proficiencies
                }, {
                    title: "Appearance",
                    stat: "appearance",
                    value: this.appearance
                }, {
                    title: "Allies and Organizations",
                    stat: "alliesOrganizations",
                    value: this.alliesOrganizations
                }, {
                    title: "Back Story",
                    stat: "backStory",
                    value: this.backStory
                }, {
                    title: "Ideals",
                    stat: "ideals",
                    value: this.ideals
                }, {
                    title: "Bonds",
                    stat: "bonds",
                    value: this.bonds
                }, {
                    title: "Flaws",
                    stat: "flaws",
                    value: this.flaws
                }, {
                    title: "Personality Traits",
                    stat: "personalityTraits",
                    value: this.pbonersonalityTraits
                }],
                playerNotes: {
                    title: "Notes",
                    stat: "notes",
                    value: this.notes
                },

                spellDetails: [{
                    title: "Spell Casting Class",
                    stat: "spellcastingClass",
                    value: this.spellcastingClass
                }, {
                    title: "Spell Casting Ability",
                    stat: "spellcastingAbility",
                    value: this.spellcastingAbility
                }, {
                    title: "Spell Save DC",
                    stat: "spellSaveDC",
                    value: this.spellSaveDC
                }]
            };
            return masterStatArraysObj;

        }
        calculateModifiers() {
            let primaryStats = [{
                stat: "strength",
                value: this.strength
            }, {
                stat: "dexterity",
                value: this.dexterity
            }, {
                stat: "constitution",
                value: this.constitution
            }, {
                stat: "intelligence",
                value: this.intelligence
            }, {
                stat: "wisdom",
                value: this.wisdom
            }, {
                stat: "charisma",
                value: this.charisma
            }];
            for (let i = 0; i < primaryStats.length; i++) {
                let name = primaryStats[i].stat + "Mod";
                let modValue = primaryStats[i].value - 10;
                modValue = Math.floor(modValue / 2);
                this[name] = modValue;
            }
        }
        singleModCalc(stat) {
            var modifier = stat + "Mod";
            this[modifier] = Math.floor((this[stat] - 10) / 2);
            //Check for modifier being valid
            if ( isNaN(this[modifier]) || this[stat] === "" || this[stat] === null ){
                return 'Enter a stat value';
            }
                return ("Modifer: " + this[modifier]);
        }
        gainHealth(healthToGain) {
            this.currentHitPoints += healthToGain;
        }
        loseHealth(healthToLose) {
            this.currentHitPoints -= healthToLose;
        }
        gainExperience(toGain) {
            let currentLevel = this.level;
            const levelGuide = new LevelGuide();
            let newValue = this.experience + parseInt(toGain);
            let experienceNeeded = levelGuide.experienceNeeded(currentLevel);
            //TESITNG CONSOLE LOG LINE
            // console.log('I am Level' + this.level + 'I need' + experienceNeeded + 'experience to get to level ' + (this.level + 1) + 'I just gained' + toGain + 'and now have' + newValue);
            //TESTING LINE ABOVE
                if (newValue >= experienceNeeded) {
                    this.gainLevel();
                    this.experience = newValue - experienceNeeded;
                } else {
                    this.experience = newValue;
                }
            return({
                currentExperience: newValue,
                experienceNeeded: experienceNeeded
            });
        }
        resetExperience() {
            this.experience = 0;
        }

        ActionRoll(RollsArray) {
            //send in format of ["d12", '"d20", "d20"]
            return (this.DiceManager.rollDie(RollsArray));
        }
        gainLevel() {
           this.level += 1;
        }
        toggleSkill(skill) {
            if(!this.skills){
                this.skills = {};
            }
            var skillMapObject = this.skills;
            if(skillMapObject[skill]){
               delete skillMapObject[skill];
            }else{
               skillMapObject[skill] = true;
            }
        }
        
        
    }