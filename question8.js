class HashMap {
    constructor() {
        this.map = {};
    }

    put(key, value) {
        this.map[key] = value;
    }

    get(key) {
        return this.map.hasOwnProperty(key) ? this.map[key] : undefined;
    }

    remove(key) {
        if (this.map.hasOwnProperty(key)) {
            delete this.map[key];
        }
    }
}

const hashMap = new HashMap();
hashMap.put('name', 'Alice');
console.log(hashMap.get('name')); 
hashMap.remove('name');
console.log(hashMap.get('name')); 
