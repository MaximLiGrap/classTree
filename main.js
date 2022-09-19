class TreeStore {
    constructor(items) {
        this.items = items;
    }

    getAll() {
        return this.items;
    };

    getItem(id) {
        return this.items.find(item => item.id === id)
    };

    getChildren(id) {
        return this.items.filter(item => item.parent === id)
    };

    getAllChildren(id) {
        let children = this.getChildren(id);
        for(let i = 0; i < children.length; i++){
            children = children.concat(this.getChildren(children[i].id))
        }
        return children
    };

    getAllParents(id) {
        let arr = []
        if(this.items.find(item => item.id === id).parent !== 'root') {
            let parrentId = this.getItem(id).parent
            arr.push(this.getItem(parrentId)) 
            for(let i = 0; i < arr.length; i++) {
                if(arr[i].parent !== 'root') {
                    arr.push(this.getItem(arr[i].parent))
                } 
            }
        }
        return arr

    }
}

const items = [
    { id: 1, parent: 'root' },
    { id: 2, parent: 1, type: 'test' },
    { id: 3, parent: 1, type: 'test' },

    { id: 4, parent: 2, type: 'test' },
    { id: 5, parent: 2, type: 'test' },
    { id: 6, parent: 2, type: 'test' },

    { id: 7, parent: 4, type: null },
    { id: 8, parent: 4, type: null },
];

const ts = new TreeStore(items);
