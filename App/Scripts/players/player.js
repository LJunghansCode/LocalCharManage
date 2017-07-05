    class Player {
        constructor ( id, accountEmail, campaign, realName, name, race, classType, alignment, sex, size, age, height, weight, level, initiative, speed, strength, dexterity, constitution, intelligence, wisdom, charisma, currentHitPoints, tempHitPoints, spellList, skills, personalityTraits, ideals, bonds, flaws, attacksSpellcasting, featuresTraits, equipment, proficienciesLanguages, appearance, alliesOrganizations, backStory, treasureInventory, spellcastingClass, spellcastingAbility,spellSaveDC, spellSaveBonus, armorClass, proficiencyBonus, borderColor, companions, notes) {
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
            this.experience = 0;  
            this.skills = skills;
            this.personalityTraits = personalityTraits;
            this.ideals = ideals;
            this.bonds = bonds;
            this.flaws = flaws;
            this.attacksSpellcasting = attacksSpellcasting;
            this.featuresTraits = featuresTraits;
            this.equipment = equipment;
            this.proficienciesLanguages = proficienciesLanguages;
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
        }
        normalizeTextLowerCase(text){
            let lowerCase = "";
            for(let i = 0; i < text.length; i++){
                let letter = text[i].toLowerCase();
                lowerCase += letter;
            }
            return lowerCase;
        }
        organizeStatsArray () {
            //IN ORDER OF Appearance
            const masterStatArraysObj = 
            {
                primaryStats : [{title:"Strength", stat: "strength",statMod:this.strengthMod, value: this.strength}, {title:"Dexterity", stat: "dexterity", statMod:this.dexterityMod, value: this.dexterity}, {title:"Constitution", stat:"constitution", statMod:this.constitutionMod, value: this.constitution}, {title:"Intelligence", stat:"intelligence", statMod:this.intelligenceMod, value: this.intelligence}, {title:"Wisdom", stat: "wisdom", statMod:this.wisdomMod, value: this.wisdom}, {title:"Charisma", stat:"charisma", statMod:this.charismaMod, value: this.charisma} ],

                vitals : [{title: "Level", stat:"level", value: this.level}, {title: "Speed", stat:"speed",value:this.speed},{title: "Armor Class", stat:"armorClass",value:this.armorClass}, {title: "HP", stat:"currentHitPoints", value:this.currentHitPoints}, {title: "Temp HP", stat:"tempHitPoints", value: this.tempHitPoints}, {title: "Height", stat:"height", value: this.height}, {title: "Weight", stat:"weight", value: this.weight} ,{title: "Initiative", stat: "initiative", value: this.initiative} ],

                basicInformation : [{title: "Real Name", stat:"realName", value: this.realName}, {title: "Player Name", stat:"name", value:this.name}, {title: "Race", stat:"race", value:this.race}, {title: "Class", stat:"classType", value: this.classType}, {title: "Alignment", stat:"alignment", value: this.alignment}, {title: "Age", stat:"age", value: this.age}],

                charDetails : [ {title: "Treasure and Inventory", stat:"treasureInventory", value: this.treasureInventory}, {title: "Attacks and Spellcasting Details", stat:"attacksSpellcasting", value:this.attacksSpellcasting}, {title: "Features and Traits", stat:"featuresTraits", value: this.featuresTraits}, {title: "Proficiencies and Languages", stat:"proficienciesLanguages", value: this.proficienciesLanguages}, {title: "Appearance", stat:"appearance", value: this.appearance},{title: "Allies and Organizations", stat:"alliesOrganizations", value: this.alliesOrganizations}, {title: "Back Story", stat:"backStory", value: this.backStory}, {title: "Ideals", stat:"ideals", value: this.ideals}, {title: "Bonds", stat:"bonds",value:this.bonds},{title: "Flaws", stat:"flaws",value:this.flaws},{title: "Personality Traits", stat:"personalityTraits",value:this.pbonersonalityTraits},{title: "Notes", stat:"notes", value: this.notes} ],

                spellDetails : [{title: "Spell Casting Class", stat:"spellcastingClass", value: this.spellcastingClass}, {title: "Spell Casting Ability", stat:"spellcastingAbility",value:this.spellcastingAbility}, {title: "Spell Save DC", stat:"spellSaveDC", value:this.spellSaveDC}, {title: "Spell Save Bonus", stat:"spellSaveBonus", value: this.spellSaveBonus}]
            };
            return masterStatArraysObj;

        }
        calculateModifiers ()  {
            let primaryStats = [{stat: "strength", value: this.strength}, {stat: "dexterity", value: this.dexterity}, {stat:"constitution", value: this.constitution}, {stat:"intelligence", value: this.intelligence}, {stat: "wisdom", value: this.wisdom}, {stat:"charisma", value: this.charisma} ]
            for(let i = 0; i<primaryStats.length; i++){
                let name = primaryStats[i].stat + "Mod";
                let modValue = primaryStats[i].value - 10;
                modValue = Math.floor(modValue/2);
                this[name] = modValue;
                }
        }
        singleModCalc (stat) {
            var modifier = stat + "Mod";
            this[modifier] = Math.floor((this[stat] - 10) / 2);
            return("Modifer: " + this[modifier]);
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
            if(newValue >= experienceNeeded){
                this.gainLevel();
                this.experience = newValue - experienceNeeded;
                this.level += 1;
            } else {
            this.experience = newValue;
            }

        }
        addEquipment() {
            var id = this.equipment.length + 1;
            this.equipment.push({id: id});
        }
        addCompanion() {
            var id = this.companions.length + 1;
            this.companions.push({id: id});
        }
        addSpell() {
            var id = this.spellList.length + 1;
            this.spellList.push({id: id});
        }
        addSkill(){
            var id = this.skills.length + 1;
            this.skills.push({id: id});
        }
        deleteSpell(spell){
        this.spellList.splice(spell.id - 1, 1);
        //sort id/array relationship.
        for(let i = 0; i < this.spellList.length; i++){
            let thisSpell = this.spellList[i];
            thisSpell.id = i + 1;
            }
        }   
        deleteEquipment(equipment){
        this.equipment.splice(equipment.id - 1, 1);
        //sort id/array relationship.
        for(let i = 0; i < this.equipment.length; i++){
            let thisEquip = this.equipment[i];
            thisEquip.id = i + 1;
            }
        }
        deleteSKill(skill){
        this.skills.splice(equipment.id - 1, 1);
        //sort id/array relationship.
        for(let i = 0; i < this.equipment.length; i++){
            let thisSkill = this.equipment[i];
            thisSkill.id = i + 1;
            }
        }
        deleteCompanion(companion){
        this.companions.splice(companion.id - 1, 1);
        //sort id/array relationship.
        for(let i = 0; i < this.companions.length; i++){
            let thisC = this.companions[i];
            thisC.id = i + 1;
            }
        }

        ActionRoll(RollsArray){
            //send in format of ["d12", '"d20", "d20"]
            return(this.DiceManager.rollDie(RollsArray));
        }
        gainLevel() {
            switch(this.normalizeTextLowerCase(this.classType)){
                case("paladin"):
                    
                  break;
                case("barbarian"):
                
                  break;
                case("cleric"):
                
                  break;
                case("druid"):
                
                  break;   
                case("fighter"):
                
                  break;   
                case("monk"):
                
                  break;   
                case("ranger"):
                
                  break;   
                case("rogue"):
                
                  break;   
                case("sorcerer"):
                
                  break;
                case("warlock"):
                
                  break;
                case("wizard"):
                
                  break;                                                                                                                                                  
            } 
        }
    }