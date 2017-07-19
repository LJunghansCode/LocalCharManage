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
    createSpellSlots(level, classType) {
        switch (this.normalizeTextLowerCase(classType)) {
            case ("paladin"):
                var paladinGuide = {
                    '1': {
                        First: 0,
                        Second: 0,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0
                    },
                    '2': {
                        First: 2,
                        Second: 0,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0
                    },
                    '3': {
                        First: 3,
                        Second: 0,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0
                    },
                    '4': {
                        First: 4,
                        Second: 2,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0
                    },
                    '5': {
                        First: 4,
                        Second: 2,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0
                    },
                    '6': {
                        First: 4,
                        Second: 2,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0
                    },
                    '7': {
                        First: 4,
                        Second: 3,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0
                    },
                    '8': {
                        First: 4,
                        Second: 3,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0
                    },
                    '9': {
                        First: 4,
                        Second: 3,
                        Third: 2,
                        Fourth: 0,
                        Fifth: 0
                    },
                    '10': {
                        First: 4,
                        Second: 3,
                        Third: 2,
                        Fourth: 0,
                        Fifth: 0
                    },
                    '11': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 0,
                        Fifth: 0
                    },
                    '12': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 0,
                        Fifth: 0
                    },
                    '13': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 1,
                        Fifth: 0
                    },
                    '14': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 1,
                        Fifth: 0
                    },
                    '15': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 2,
                        Fifth: 0
                    },
                    '16': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 2,
                        Fifth: 0
                    },
                    '17': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 1
                    },
                    '18': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 1
                    },
                    '19': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2
                    },
                    '20': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2
                    },
                };
                return paladinGuide[level];
            case ("druid"):
                var druidGuide = {
                    '1': {
                        First: 2,
                        Second: 0,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '2': {
                        First: 3,
                        Second: 0,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '3': {
                        First: 4,
                        Second: 2,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '4': {
                        First: 4,
                        Second: 3,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '5': {
                        First: 4,
                        Second: 3,
                        Third: 2,
                        Fourth: 0,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '6': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 0,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '7': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 1,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '8': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 2,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '9': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 1,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '10': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '11': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 1,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '12': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 1,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '13': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 1,
                        Seventh: 1,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '14': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 1,
                        Seventh: 1,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '15': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 1,
                        Seventh: 1,
                        Eighth: 1,
                        Ninth: 0
                    },
                    '16': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 1,
                        Seventh: 1,
                        Eighth: 1,
                        Ninth: 0
                    },
                    '17': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 1,
                        Seventh: 1,
                        Eighth: 1,
                        Ninth: 1
                    },
                    '18': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 3,
                        Sixth: 1,
                        Seventh: 1,
                        Eighth: 1,
                        Ninth: 1
                    },
                    '19': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 3,
                        Sixth: 2,
                        Seventh: 1,
                        Eighth: 1,
                        Ninth: 1
                    },
                    '20': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 3,
                        Sixth: 2,
                        Seventh: 2,
                        Eighth: 1,
                        Ninth: 1
                    },
                };
                return druidGuide[level];
            case ("bard"):
                var bardGuide = {
                    '1': {
                        First: 2,
                        Second: 0,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '2': {
                        First: 3,
                        Second: 0,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '3': {
                        First: 4,
                        Second: 2,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '4': {
                        First: 4,
                        Second: 3,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '5': {
                        First: 4,
                        Second: 3,
                        Third: 2,
                        Fourth: 0,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '6': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 0,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '7': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 1,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '8': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 2,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '9': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 1,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '10': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '11': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 1,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '12': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 1,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '13': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 1,
                        Seventh: 1,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '14': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 1,
                        Seventh: 1,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '15': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 1,
                        Seventh: 1,
                        Eighth: 1,
                        Ninth: 0
                    },
                    '16': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 1,
                        Seventh: 1,
                        Eighth: 1,
                        Ninth: 0
                    },
                    '17': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 1,
                        Seventh: 1,
                        Eighth: 1,
                        Ninth: 1
                    },
                    '18': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 3,
                        Sixth: 1,
                        Seventh: 1,
                        Eighth: 1,
                        Ninth: 1
                    },
                    '19': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 3,
                        Sixth: 2,
                        Seventh: 1,
                        Eighth: 1,
                        Ninth: 1
                    },
                    '20': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 3,
                        Sixth: 2,
                        Seventh: 2,
                        Eighth: 1,
                        Ninth: 1
                    },
                };
                return bardGuide[level];
            case ("cleric"):
                var clericGuide = {
                    '1': {
                        First: 2,
                        Second: 0,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '2': {
                        First: 3,
                        Second: 0,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '3': {
                        First: 4,
                        Second: 2,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '4': {
                        First: 4,
                        Second: 3,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '5': {
                        First: 4,
                        Second: 3,
                        Third: 2,
                        Fourth: 0,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '6': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 0,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '7': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 1,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '8': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 2,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '9': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 1,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '10': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '11': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 1,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '12': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 1,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '13': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 1,
                        Seventh: 1,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '14': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 1,
                        Seventh: 1,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '15': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 1,
                        Seventh: 1,
                        Eighth: 1,
                        Ninth: 0
                    },
                    '16': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 1,
                        Seventh: 1,
                        Eighth: 1,
                        Ninth: 0
                    },
                    '17': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 1,
                        Seventh: 1,
                        Eighth: 1,
                        Ninth: 1
                    },
                    '18': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 3,
                        Sixth: 1,
                        Seventh: 1,
                        Eighth: 1,
                        Ninth: 1
                    },
                    '19': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 3,
                        Sixth: 2,
                        Seventh: 1,
                        Eighth: 1,
                        Ninth: 1
                    },
                    '20': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 3,
                        Sixth: 2,
                        Seventh: 2,
                        Eighth: 1,
                        Ninth: 1
                    },
                };
                return clericGuide[level];
            case ("ranger"):
                var rangerGuide = {
                    '1': {
                        First: 0,
                        Second: 0,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0
                    },
                    '2': {
                        First: 2,
                        Second: 0,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0
                    },
                    '3': {
                        First: 3,
                        Second: 0,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0
                    },
                    '4': {
                        First: 4,
                        Second: 2,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0
                    },
                    '5': {
                        First: 4,
                        Second: 2,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0
                    },
                    '6': {
                        First: 4,
                        Second: 2,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0
                    },
                    '7': {
                        First: 4,
                        Second: 3,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0
                    },
                    '8': {
                        First: 4,
                        Second: 3,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0
                    },
                    '9': {
                        First: 4,
                        Second: 3,
                        Third: 2,
                        Fourth: 0,
                        Fifth: 0
                    },
                    '10': {
                        First: 4,
                        Second: 3,
                        Third: 2,
                        Fourth: 0,
                        Fifth: 0
                    },
                    '11': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 0,
                        Fifth: 0
                    },
                    '12': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 0,
                        Fifth: 0
                    },
                    '13': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 1,
                        Fifth: 0
                    },
                    '14': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 1,
                        Fifth: 0
                    },
                    '15': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 2,
                        Fifth: 0
                    },
                    '16': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 2,
                        Fifth: 0
                    },
                    '17': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 1
                    },
                    '18': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 1
                    },
                    '19': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2
                    },
                    '20': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2
                    },
                };
                return rangerGuide[level];
            case ("sorcerer"):
                var sorcGuide = {
                    '1': {
                        First: 2,
                        Second: 0,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '2': {
                        First: 3,
                        Second: 0,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '3': {
                        First: 4,
                        Second: 2,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '4': {
                        First: 4,
                        Second: 3,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '5': {
                        First: 4,
                        Second: 3,
                        Third: 2,
                        Fourth: 0,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '6': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 0,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '7': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 1,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '8': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 2,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '9': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 1,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '10': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '11': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 1,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '12': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 1,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '13': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 1,
                        Seventh: 1,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '14': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 1,
                        Seventh: 1,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '15': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 1,
                        Seventh: 1,
                        Eighth: 1,
                        Ninth: 0
                    },
                    '16': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 1,
                        Seventh: 1,
                        Eighth: 1,
                        Ninth: 0
                    },
                    '17': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 1,
                        Seventh: 1,
                        Eighth: 1,
                        Ninth: 1
                    },
                    '18': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 3,
                        Sixth: 1,
                        Seventh: 1,
                        Eighth: 1,
                        Ninth: 1
                    },
                    '19': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 3,
                        Sixth: 2,
                        Seventh: 1,
                        Eighth: 1,
                        Ninth: 1
                    },
                    '20': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 3,
                        Sixth: 2,
                        Seventh: 2,
                        Eighth: 1,
                        Ninth: 1
                    },
                };
                return sorcGuide[level];
            case ("wizard"):
                var wizardGuide = {
                    '1': {
                        First: 2,
                        Second: 0,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '2': {
                        First: 3,
                        Second: 0,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '3': {
                        First: 4,
                        Second: 2,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '4': {
                        First: 4,
                        Second: 3,
                        Third: 0,
                        Fourth: 0,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '5': {
                        First: 4,
                        Second: 3,
                        Third: 2,
                        Fourth: 0,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '6': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 0,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '7': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 1,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '8': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 2,
                        Fifth: 0,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '9': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 1,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '10': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 0,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '11': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 1,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '12': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 1,
                        Seventh: 0,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '13': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 1,
                        Seventh: 1,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '14': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 1,
                        Seventh: 1,
                        Eighth: 0,
                        Ninth: 0
                    },
                    '15': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 1,
                        Seventh: 1,
                        Eighth: 1,
                        Ninth: 0
                    },
                    '16': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 1,
                        Seventh: 1,
                        Eighth: 1,
                        Ninth: 0
                    },
                    '17': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 2,
                        Sixth: 1,
                        Seventh: 1,
                        Eighth: 1,
                        Ninth: 1
                    },
                    '18': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 3,
                        Sixth: 1,
                        Seventh: 1,
                        Eighth: 1,
                        Ninth: 1
                    },
                    '19': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 3,
                        Sixth: 2,
                        Seventh: 1,
                        Eighth: 1,
                        Ninth: 1
                    },
                    '20': {
                        First: 4,
                        Second: 3,
                        Third: 3,
                        Fourth: 3,
                        Fifth: 3,
                        Sixth: 2,
                        Seventh: 2,
                        Eighth: 1,
                        Ninth: 1
                    },
                };
                return wizardGuide[level];
        }
    }
}