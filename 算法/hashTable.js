class HashTable{
	constructor(...args){
		let limitLen = args[0] || 10;
		this.hashTable = new Array(limitLen)
	}

	_getHash(value){
		var t = 0;
		for(var i = 0,len = value.length;i<len;i++){
			t = t + value.charCodeAt(i);
		}
		return t % len;
	}

	add(value){
		return this.hashTable[this._getHash(value)] = value;
	}

	get(value){
		return this.hashTable[this._getHash(value)];
	}

	remove(){
		return delete this.hashTable[this._getHash(value)];
	}

	print(){
		return this.hashTable;
	}
}


let hash = new HashTable;

hash.add('html');
hash.add('css');
hash.add('javascript');

console.log(hash.get('html'));
console.log(hash.print());
