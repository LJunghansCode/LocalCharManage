    class Player {
        constructor ( id, accountEmail, campaign, realName, name, race, classType, alignment, sex, size, age, height, weight, level, initiative, speed, strength, dexterity, constitution, intelligence, wisdom, charisma, currentHitPoints, tempHitPoints, spellList, skills, personalityTraits, ideals, bonds, flaws, attacksSpellcasting, featuresTraits, equipment, proficienciesLanguages, appearance, alliesOrganizations, backStory, treasureInventory, spellcastingClass, spellcastingAbility,spellSaveDC, spellSaveBonus, armorClass, proficiencyBonus, borderColor, companions ) {
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
        }
        normalizeTextLowerCase(text){
            let lowerCase = "";
            for(let i = 0; i < text.length; i++){
                let letter = text[i].toLowerCase();
                lowerCase += letter;
            }
            return lowerCase;
        }
        calculateModifiers (stats)  {
            this.statsArray = stats;
            for(let i = 0; i<stats.length; i++){
                let name = stats[i].stat + "Mod";
                let modValue = stats[i].value - 10;
                modValue = Math.floor(modValue/2);
                this[name] = "modifier: " + modValue;
                }
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
            }else {
            this.experience = newValue;
            }

        }
        addEquipment(id) {
            this.equipment.push({id: id});
        }
        addCompanion(id) {
            this.companions.push({id: id});
        }
        addSpell(id) {
            this.spellList.push({id: id});
        }
        deleteEquipment(equipment){
        this.equipment.splice(equipment.id - 1, 1);
        //sort id/array relationship.
        for(let i = 0; i < this.equipment.length; i++){
            let thisEquip = this.equipment[i];
            thisEquip.id = i + 1;
            }
        }
        deleteSpell(spell){
        this.spellList.splice(spell.id - 1, 1);
        //sort id/array relationship.
        for(let i = 0; i < this.spellList.length; i++){
            let thisSpell = this.spellList[i];
            thisSpell.id = i + 1;
            }
        }       
        ActionRoll(RollsArray){
            //send in format of ["d12", '"d20", "d20"]
            return(this.DiceManager.rollDie(RollsArray));
        }
        gainLevel() {
            // var SpellManager = new SpellManager(this.spellList);
            let constitution = this.health;
            let strength = this.strength;
            let wisdom = this.wisdom;
            let charisma = this.charisma;
            let level = this.level;
            let initiative = this.initiative;
            let speed = this.speed;
            let dexterity = this.dexterity;
            let currentHitPoints = this.currentHitPoints;
            let tempHitPoints = this.tempHitPoints;
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