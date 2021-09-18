class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size)
  }
  
  _hash(key) {
    let total = 0;
    const PRIME = 31
    for(let i = 0; i < Math.min(key.length, 100); i++){
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length
    }
    return total;
  }

  set(key, value){
    let index = this._hash(key);
    if(!this.keyMap[index]){
      this.keyMap[index] = []
    }
    this.keyMap[index].push([key, value])
  }

  get(key) {
    let index = this._hash(key);
    if(this.keyMap[index]){
      for(let i = 0; i < this.keyMap[index].length; i++){
        if(this.keyMap[index][i][0] === key){
          return this.keyMap[index][i][1]
        }
      }
    }
    return undefined
  }

  values() {
    let values = [];
    for (let index of this.keyMap){
      if(index){
        for (let hash of index){
          values.push(hash[1])
        }
      }
    }
    return values;
  }

  keys() {
  let keys = [];
    for (let index of this.keyMap){
      if(index){
        for (let hash of index){
          keys.push(hash[0])
        }
      }
    }
    return keys;
  }
}

let ht = new HashTable();

console.log(ht.set('hello world', 'goodbye!!'));
console.log(ht.set('hello 2', 'goodbye 2!!'));
console.log(ht.set('hello 3', 'goodbye 3!!'));
console.log(ht.keys());