function getType(value) {
  const toString = Object.prototype.toString;

  if (typeof value === 'object') {
    // '[Object string]'
    let result = toString.call(value).split(' ')[1].split('');
    //']'
    result = result.pop().join('');
    return result.toLowerCase;
  } else {
    return typeof result;
  }



}

console.log(getType({}), getType(''), getType([]));


if (value === null) {
  return null + '';
}

if (typeof value === 'object') {
  let valueClass = Object.prototype.toString.call(value);// '[object String]'
  let type = valueClass.split(' ')[1].split('');// String] => [s,t,r...]
  type.pop();// remove ']'
  return type.join('').toLowerCase();
} else {
  return typeof value;
}