class SpellSlots {
    constructor(classType) {
        this.classType = classType;
        this.spellSlots = [];
    }
    normalizeTextLowerCase(text) {
        let lowerCase = "";
        for (let i = 0; i < text.length; i++) {
            let letter = text[i].toLowerCase();
            lowerCase += letter;
        }
        return lowerCase;
    }
    returnSpellSlotArray(ssObj) {
        var spellSlotArray = [];
        if(ssObj){
        Object.keys(ssObj).forEach((slot) => {
            let newSlot = {
                'spellLevel': slot,
                'spellsToCast': []
            };
            for (let i = 0; i < ssObj[slot]; i++) {
                let spell = {
                    'id': i  + 1,
                    'available': true
                };
                newSlot.spellsToCast.push(spell);
            }
            spellSlotArray.push(newSlot);
        });
        }
        return spellSlotArray;
    }
    createSpellSlots(level) {
        switch (this.normalizeTextLowerCase(this.classType)) {
            case ("paladin"):
                var paladinGuide = {
                    '1': {
                        first: 0,
                        second: 0,
                        third: 0,
                        fourth: 0,
                        fifth: 0
                    },
                    '2': {
                        first: 2,
                        second: 0,
                        third: 0,
                        fourth: 0,
                        fifth: 0
                    },
                    '3': {
                        first: 3,
                        second: 0,
                        third: 0,
                        fourth: 0,
                        fifth: 0
                    },
                    '4': {
                        first: 4,
                        second: 2,
                        third: 0,
                        fourth: 0,
                        fifth: 0
                    },
                    '5': {
                        first: 4,
                        second: 2,
                        third: 0,
                        fourth: 0,
                        fifth: 0
                    },
                    '6': {
                        first: 4,
                        second: 2,
                        third: 0,
                        fourth: 0,
                        fifth: 0
                    },
                    '7': {
                        first: 4,
                        second: 3,
                        third: 0,
                        fourth: 0,
                        fifth: 0
                    },
                    '8': {
                        first: 4,
                        second: 3,
                        third: 0,
                        fourth: 0,
                        fifth: 0
                    },
                    '9': {
                        first: 4,
                        second: 3,
                        third: 2,
                        fourth: 0,
                        fifth: 0
                    },
                    '10': {
                        first: 4,
                        second: 3,
                        third: 2,
                        fourth: 0,
                        fifth: 0
                    },
                    '11': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 0,
                        fifth: 0
                    },
                    '12': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 0,
                        fifth: 0
                    },
                    '13': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 1,
                        fifth: 0
                    },
                    '14': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 1,
                        fifth: 0
                    },
                    '15': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 2,
                        fifth: 0
                    },
                    '16': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 2,
                        fifth: 0
                    },
                    '17': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 1
                    },
                    '18': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 1
                    },
                    '19': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2
                    },
                    '20': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2
                    },
                };
                return paladinGuide[level];
            case ("druid"):
                var druidGuide = {
                    '1': {
                        first: 2,
                        second: 0,
                        third: 0,
                        fourth: 0,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '2': {
                        first: 3,
                        second: 0,
                        third: 0,
                        fourth: 0,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '3': {
                        first: 4,
                        second: 2,
                        third: 0,
                        fourth: 0,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '4': {
                        first: 4,
                        second: 3,
                        third: 0,
                        fourth: 0,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '5': {
                        first: 4,
                        second: 3,
                        third: 2,
                        fourth: 0,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '6': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 0,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '7': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 1,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '8': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 2,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '9': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 1,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '10': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '11': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 1,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '12': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 1,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '13': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 1,
                        seventh: 1,
                        eighth: 0,
                        ninth: 0
                    },
                    '14': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 1,
                        seventh: 1,
                        eighth: 0,
                        ninth: 0
                    },
                    '15': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 1,
                        seventh: 1,
                        eighth: 1,
                        ninth: 0
                    },
                    '16': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 1,
                        seventh: 1,
                        eighth: 1,
                        ninth: 0
                    },
                    '17': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 1,
                        seventh: 1,
                        eighth: 1,
                        ninth: 1
                    },
                    '18': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 3,
                        sixth: 1,
                        seventh: 1,
                        eighth: 1,
                        ninth: 1
                    },
                    '19': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 3,
                        sixth: 2,
                        seventh: 1,
                        eighth: 1,
                        ninth: 1
                    },
                    '20': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 3,
                        sixth: 2,
                        seventh: 2,
                        eighth: 1,
                        ninth: 1
                    },
                };
                return druidGuide[level];
            case ("bard"):
                var bardGuide = {
                    '1': {
                        first: 2,
                        second: 0,
                        third: 0,
                        fourth: 0,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '2': {
                        first: 3,
                        second: 0,
                        third: 0,
                        fourth: 0,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '3': {
                        first: 4,
                        second: 2,
                        third: 0,
                        fourth: 0,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '4': {
                        first: 4,
                        second: 3,
                        third: 0,
                        fourth: 0,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '5': {
                        first: 4,
                        second: 3,
                        third: 2,
                        fourth: 0,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '6': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 0,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '7': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 1,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '8': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 2,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '9': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 1,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '10': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '11': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 1,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '12': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 1,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '13': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 1,
                        seventh: 1,
                        eighth: 0,
                        ninth: 0
                    },
                    '14': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 1,
                        seventh: 1,
                        eighth: 0,
                        ninth: 0
                    },
                    '15': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 1,
                        seventh: 1,
                        eighth: 1,
                        ninth: 0
                    },
                    '16': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 1,
                        seventh: 1,
                        eighth: 1,
                        ninth: 0
                    },
                    '17': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 1,
                        seventh: 1,
                        eighth: 1,
                        ninth: 1
                    },
                    '18': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 3,
                        sixth: 1,
                        seventh: 1,
                        eighth: 1,
                        ninth: 1
                    },
                    '19': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 3,
                        sixth: 2,
                        seventh: 1,
                        eighth: 1,
                        ninth: 1
                    },
                    '20': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 3,
                        sixth: 2,
                        seventh: 2,
                        eighth: 1,
                        ninth: 1
                    },
                };
                return bardGuide[level];
            case ("cleric"):
                var clericGuide = {
                    '1': {
                        first: 2,
                        second: 0,
                        third: 0,
                        fourth: 0,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '2': {
                        first: 3,
                        second: 0,
                        third: 0,
                        fourth: 0,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '3': {
                        first: 4,
                        second: 2,
                        third: 0,
                        fourth: 0,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '4': {
                        first: 4,
                        second: 3,
                        third: 0,
                        fourth: 0,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '5': {
                        first: 4,
                        second: 3,
                        third: 2,
                        fourth: 0,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '6': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 0,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '7': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 1,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '8': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 2,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '9': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 1,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '10': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '11': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 1,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '12': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 1,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '13': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 1,
                        seventh: 1,
                        eighth: 0,
                        ninth: 0
                    },
                    '14': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 1,
                        seventh: 1,
                        eighth: 0,
                        ninth: 0
                    },
                    '15': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 1,
                        seventh: 1,
                        eighth: 1,
                        ninth: 0
                    },
                    '16': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 1,
                        seventh: 1,
                        eighth: 1,
                        ninth: 0
                    },
                    '17': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 1,
                        seventh: 1,
                        eighth: 1,
                        ninth: 1
                    },
                    '18': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 3,
                        sixth: 1,
                        seventh: 1,
                        eighth: 1,
                        ninth: 1
                    },
                    '19': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 3,
                        sixth: 2,
                        seventh: 1,
                        eighth: 1,
                        ninth: 1
                    },
                    '20': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 3,
                        sixth: 2,
                        seventh: 2,
                        eighth: 1,
                        ninth: 1
                    },
                };
                return clericGuide[level];
            case ("ranger"):
                var rangerGuide = {
                    '1': {
                        first: 0,
                        second: 0,
                        third: 0,
                        fourth: 0,
                        fifth: 0
                    },
                    '2': {
                        first: 2,
                        second: 0,
                        third: 0,
                        fourth: 0,
                        fifth: 0
                    },
                    '3': {
                        first: 3,
                        second: 0,
                        third: 0,
                        fourth: 0,
                        fifth: 0
                    },
                    '4': {
                        first: 4,
                        second: 2,
                        third: 0,
                        fourth: 0,
                        fifth: 0
                    },
                    '5': {
                        first: 4,
                        second: 2,
                        third: 0,
                        fourth: 0,
                        fifth: 0
                    },
                    '6': {
                        first: 4,
                        second: 2,
                        third: 0,
                        fourth: 0,
                        fifth: 0
                    },
                    '7': {
                        first: 4,
                        second: 3,
                        third: 0,
                        fourth: 0,
                        fifth: 0
                    },
                    '8': {
                        first: 4,
                        second: 3,
                        third: 0,
                        fourth: 0,
                        fifth: 0
                    },
                    '9': {
                        first: 4,
                        second: 3,
                        third: 2,
                        fourth: 0,
                        fifth: 0
                    },
                    '10': {
                        first: 4,
                        second: 3,
                        third: 2,
                        fourth: 0,
                        fifth: 0
                    },
                    '11': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 0,
                        fifth: 0
                    },
                    '12': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 0,
                        fifth: 0
                    },
                    '13': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 1,
                        fifth: 0
                    },
                    '14': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 1,
                        fifth: 0
                    },
                    '15': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 2,
                        fifth: 0
                    },
                    '16': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 2,
                        fifth: 0
                    },
                    '17': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 1
                    },
                    '18': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 1
                    },
                    '19': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2
                    },
                    '20': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2
                    },
                };
                return rangerGuide[level];
            case ("sorcerer"):
                var sorcGuide = {
                    '1': {
                        first: 2,
                        second: 0,
                        third: 0,
                        fourth: 0,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '2': {
                        first: 3,
                        second: 0,
                        third: 0,
                        fourth: 0,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '3': {
                        first: 4,
                        second: 2,
                        third: 0,
                        fourth: 0,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '4': {
                        first: 4,
                        second: 3,
                        third: 0,
                        fourth: 0,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '5': {
                        first: 4,
                        second: 3,
                        third: 2,
                        fourth: 0,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '6': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 0,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '7': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 1,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '8': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 2,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '9': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 1,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '10': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '11': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 1,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '12': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 1,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '13': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 1,
                        seventh: 1,
                        eighth: 0,
                        ninth: 0
                    },
                    '14': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 1,
                        seventh: 1,
                        eighth: 0,
                        ninth: 0
                    },
                    '15': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 1,
                        seventh: 1,
                        eighth: 1,
                        ninth: 0
                    },
                    '16': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 1,
                        seventh: 1,
                        eighth: 1,
                        ninth: 0
                    },
                    '17': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 1,
                        seventh: 1,
                        eighth: 1,
                        ninth: 1
                    },
                    '18': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 3,
                        sixth: 1,
                        seventh: 1,
                        eighth: 1,
                        ninth: 1
                    },
                    '19': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 3,
                        sixth: 2,
                        seventh: 1,
                        eighth: 1,
                        ninth: 1
                    },
                    '20': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 3,
                        sixth: 2,
                        seventh: 2,
                        eighth: 1,
                        ninth: 1
                    },
                };
                return sorcGuide[level];
            case ("wizard"):
                var wizardGuide = {
                    '1': {
                        first: 2,
                        second: 0,
                        third: 0,
                        fourth: 0,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '2': {
                        first: 3,
                        second: 0,
                        third: 0,
                        fourth: 0,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '3': {
                        first: 4,
                        second: 2,
                        third: 0,
                        fourth: 0,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '4': {
                        first: 4,
                        second: 3,
                        third: 0,
                        fourth: 0,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '5': {
                        first: 4,
                        second: 3,
                        third: 2,
                        fourth: 0,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '6': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 0,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '7': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 1,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '8': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 2,
                        fifth: 0,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '9': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 1,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '10': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 0,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '11': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 1,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '12': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 1,
                        seventh: 0,
                        eighth: 0,
                        ninth: 0
                    },
                    '13': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 1,
                        seventh: 1,
                        eighth: 0,
                        ninth: 0
                    },
                    '14': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 1,
                        seventh: 1,
                        eighth: 0,
                        ninth: 0
                    },
                    '15': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 1,
                        seventh: 1,
                        eighth: 1,
                        ninth: 0
                    },
                    '16': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 1,
                        seventh: 1,
                        eighth: 1,
                        ninth: 0
                    },
                    '17': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 2,
                        sixth: 1,
                        seventh: 1,
                        eighth: 1,
                        ninth: 1
                    },
                    '18': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 3,
                        sixth: 1,
                        seventh: 1,
                        eighth: 1,
                        ninth: 1
                    },
                    '19': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 3,
                        sixth: 2,
                        seventh: 1,
                        eighth: 1,
                        ninth: 1
                    },
                    '20': {
                        first: 4,
                        second: 3,
                        third: 3,
                        fourth: 3,
                        fifth: 3,
                        sixth: 2,
                        seventh: 2,
                        eighth: 1,
                        ninth: 1
                    },
                };
                return wizardGuide[level];
        }
    }
}