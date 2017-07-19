class DynamicList {
    constructor(list, title) {
        this.list = list;
        this.title = title;
    }
    addItem() {
            var id = this.list.length + 1;
            this.list.push({
                id: id
            });
            this.toggleEdit(this.list[this.list.length - 1]);
        }
    addItemTimeStamped() {
            var id = this.list.length + 1;
            this.list.push({
                id: id,
                created_at: moment().format('MMMM Do YYYY, h:mm a')
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
         if (item.editing !== true) {
            item.editing = true;
        } else {
            item.editing = false;
            }
        }

    ifEditReturnIcon(item){
        if(item.editing === true) {
            return 'fa fa-save';
        } else {
            return 'fa fa-pencil';
        }
    }
    returnList() {
        return this.list;
    }
}