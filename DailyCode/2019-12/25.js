const fs = require('fs');
const crypto = require('crypto');

const readFileLine = (filename) => {
  return fs.readFileSync(filename)
          .toString('UTF-8')
          .split('\n');
}
console.log(readFileLine('25.js'));


const createHashNode = () => {
  let filename = process.argv[2];
  console.log(filename);
  return new Promise((resolve,reject) => {
    const data = readFileLine(filename);
    console.log(data);
    resolve(crypto
          .createHash('sha256')
          .update(data.toString())
          .digest('hex'));
  })
}

console.log(createHashNode().then(console.log));
