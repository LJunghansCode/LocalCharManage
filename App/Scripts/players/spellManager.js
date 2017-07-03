class SpellManager{
    constructor(spellList){
        this.spellList = spellList;
    }
    allSpells() {
        return this.spellList;
    }
    addSpell(id) {
        this.spellList.push({id: id});
    }
    deleteSpell(spell){
        this.spellList.splice(spell.id - 1, 1);
        //sort id/array relationship.
        for(let i = 0; i < this.spellList.length; i++){
            let thisSpell = this.spellList[i];
            thisSpell.id = i + 1;
        }
    }   
}