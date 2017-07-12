class DynamicList {
    constructor(list) {
        this.list = list;
    }
    addItem() {
        console.log('her')
        console.log(this.list[this.list.length])
            var id = this.list.length + 1;
            this.list.push({
                id: id
            });
            this.toggleEdit(this.list[this.list.length - 1]);
        }
    deleteItem(item) {
            this.list.splice(item.id - 1, 1);
            //sort id/array relationship.
            for (let i = 0; i < this.list.length; i++) {
                let thisItem = this.list[i];
                thisItem.id = i + 1;
            }
        }
    toggleEdit(item){
         if (item.Editing !== true) {
            item.Editing = true;
        } else {
            item.Editing = false;
            }
        }
    returnList() {
        return this.list;
    }
}