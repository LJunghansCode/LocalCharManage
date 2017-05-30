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
        }
        gainHealth(healthToGain) {
            this.currentHitPoints += healthToGain;
        }
        loseHealth(healthToLose) {
            this.currentHitPoints -= healthToLose;
        }
        gainLevel() {
            console.log(this);
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

            switch(this.classType){
                case("paladin"):
                
                  break;
                case("barbarian"):
                
                  break;
                case("paladin"):
                
                  break;
                case("paladin"):
                
                  break;                                    
            } 
        }
    }