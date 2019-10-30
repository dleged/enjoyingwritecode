//实现基本的继承
function SuperType(){
    this.property = true;
}

SuperType.prototype.getSuperProperty = function(){
  console.log(this);
  return this.property;
}


function SubType(){
    this.subproperty = false;
}
SubType.prototype = new SuperType();
SubType.prototype.getSubProperty = function(){
  return this.property;
}

let sub = new SubType();
console.log(sub.getSuperProperty()); //true SubType.getSuperProperty ->  SubType.prototype -> SuperType.prototype.getSuperProperty

console.log(sub instanceof Object);//true
console.log(sub instanceof SubType);//true
console.log(sub instanceof SuperType);//true
