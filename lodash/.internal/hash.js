const HASH_UNDEFINED = '__lodash_is_undefined';

class Hash{

  /*
   * 创建一个hash对象 {__data__: {a: 1},size: 1}
   *
   *@private
   *@constructor
   *@parma {Array} [entries] [[key,value],[key,value]]
  */
  constructor(entries){
    let index = -1;
    let length = entries === null ? 0 : entries.length;
    this.clear();

    while (++index < length) {
      let entry = entries[index];
      this.set(entry[0],entry[1]);
    }

  }

  clear(){
    this.__data__ = Object.create(null);
    this.size = 0;
  }

  has(key){
    return this.__data__[key] !== undefined;
  }

  delete(key){
    let result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return this;
  }

  get(key){
    let value = this.__data__[key];

    return value === HASH_UNDEFINED ? undefined : value;
  }

  set(key,value){
    this.size += this.has(key) ? 0 : 1;
    this.__data__[key] = value === undefined ? HASH_UNDEFINED : value;
    return this;
  }
}
