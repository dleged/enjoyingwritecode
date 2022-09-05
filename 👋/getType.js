function getType(value) {
  if (value === null) {
    return null + '';
  }

  if (typeof value === 'object') {
    let valueClass = Object.prototype.toString.call(value);// '[Object String]'
    let type = valueClass.split(' ')[1].split('');// String] => [S,t,r...]
    type.pop();// remove ']'
    return type.join('').toLowerCase();
  } else {
    return typeof value;
  }

}

console.log(getType({}),getType(''),getType([]));