
const buf = Buffer.alloc(5);


const abcde = Buffer.from('我是abc');
console.log(buf);
console.log(Buffer.byteLength(buf, 'utf8'), 'bytes'); //5 个空字节
console.log(Buffer.byteLength(abcde, 'utf8', 'bytes'));// 9字节

console.log(process.memoryUsage());


const fs = require('fs');

const file = fs.createReadStream('../stream/writeFile.file', {highWaterMark:11 });

file.on('data', function (chunk) {
  console.log(chunk);
})