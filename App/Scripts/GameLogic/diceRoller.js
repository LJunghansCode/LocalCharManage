class DiceRoller {
    rollDie(rollsArray){
        let i, rollsValues = [];
        //for int values from inputs->coming in as "d20", "d4", etc...
        const dieVals = {
            "d4" : 4,
            "d6" : 6,
            "d8" : 8,
            "d10" : 10,
            "d12" : 12,
            "d20" : 20
        };
        for(i=0; i<rollsArray.length; i++){
         let dice = rollsArray[i],
             rollVal = dieVals[dice],
             roll = Math.floor(Math.random() * rollVal) + 1;
             rollsValues.push({
                "dice": dice,
                "rollValue" : roll
            });
        }
        return rollsValues;
    }
}