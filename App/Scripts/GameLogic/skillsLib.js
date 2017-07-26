class SkillLib {
    returnLibrary() {
        const skillsLib = [{
                'primarySkill': 'dexterity',
                'title': 'Dexterity',
                'skills': [{
                    'statName': 'acrobatics',
                    'title' : 'Acrobatics'
                }, {
                    'statName': 'sleight-of-hand',
                    'title' : 'Sleight of Hand'
                }, {
                    'statName': 'stealth',
                    'title' : 'Stealth'
                }]
            },
            {
                'primarySkill': 'strength',
                'title': 'Strength',
                'skills': [{
                    'statName': 'athletics',
                    'title' : 'Athletics'
                }]
            },
            {
                'primarySkill': 'intelligence',
                'title': 'Intelligence',
                'skills': [{
                    'statName': 'arcana',
                    'title' : 'Arcana'
                }, {
                    'statName': 'history',
                    'title' : 'History'
                }, {
                    'statName': 'investigation',
                    'title' : 'Investigation'
                }, {
                    'statName': 'nature',
                    'title' : 'Nature'
                }, {
                    'statName': 'religion',
                    'title' : 'Religion'
                }]
            },
            {
                'primarySkill': 'wisdom',
                'title': 'Wisdom',
                'skills': [{
                    'statName': 'animal-handling',
                    'title' : 'Animal Handling'
                }, {
                    'statName': 'insight',
                    'title' : 'Insight'
                }, {
                    'statName': 'medicine',
                    'title' : 'Medicine'
                }, {
                    'statName': 'perception',
                    'title' : 'Perception'
                }, {
                    'statName': 'survival',
                    'title' : 'Survival'
                }]
            },
            {
                'primarySkill': 'charisma',
                'title': 'Charisma',
                'skills': [{
                    'statName': 'deception',
                    'title' : 'Deception'
                }, {
                    'statName': 'intimidation',
                    'title' : 'Intimidation'
                }, {
                    'statName': 'performance',
                    'title' : 'Performance'
                }, {
                    'statName': 'persuasion',
                    'title' : 'Persuasion'
                }]
            }
        ];
        return skillsLib;
    }
}