//Object.create 实现继承

function _Array(){
    this.name = '_Array';
}

_Array.__proto__ = Object.create(Array.prototype,{
    constructor:{
        val: _Array,
        enumerable: false,
        writable: true,
        configuration: true
    }
})

console.log(new _Array(1,2,3,4));