    class Player {
        constructor ( accountEmail, campaign, realName, name, race, classType, alignment, sex, size, age, height, weight, level, initiative, speed, strength, dexterity, constitution, intelligence, wisdom, charisma, currentHitPoints, tempHitPoints ) {
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
            this.wisdom = wisdom;
            this.charisma = charisma;
            this.currentHitPoints = currentHitPoints;
            this.tempHitPoints = tempHitPoints; 
            this.experience = 0;  
        }
        normalizeTextLowerCase(text){
            let lowerCase = "";
            for(let i = 0; i < text.length; i++){
                let letter = text[i].toLowerCase();
                lowerCase += letter;
            }
            return lowerCase;
        }
        rollDNum(num){
            let roll = Math.floor(Math.random() * num) + 1;
            return roll;
        }
        gainHealth(healthToGain) {
            this.currentHitPoints += healthToGain;
        }
        loseHealth(healthToLose) {
            this.currentHitPoints -= healthToLose;
        }
        gainExperience(toGain, callback) {
            console.log(toGain);
            let currentLevel = this.level;
            const levelGuide = new LevelGuide();
            let newValue = this.experience + parseInt(toGain);
            let experienceNeeded = levelGuide.experienceNeeded(currentLevel);
            if(this.experience >= experienceNeeded){
                this.gainLevel();
                this.experience = 0;
                this.level += 1;
                callback(this);
            }else {
            this.experience = newValue;
            callback(this);
            }

        }
        gainLevel() {
            const DiceManager = new DiceRoller();
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
                console.log(DiceManager.rollDie(["d20", "d4"]));
                
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