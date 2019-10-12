const fs = require('fs');
const path = require('path');

console.log(1);

function stattag () {
  let stat = fs.statSync(path.join(__dirname,'list.md'));
  var mtime = stat.mtime.getTime().toString(16)
  var size = stat.size.toString(16)
  return '"' + size + '-' + mtime + '"'
}

console.log(stattag());
console.log(2);
