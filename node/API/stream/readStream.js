// const fs = require('fs');

// const readFile = fs.createReadStream('./bigfile.js');

// const writeFile = fs.createWriteStream('./writeFile.file');

// readFile.pipe(writeFile);

const { Readable }  = require('stream');

const inStream = new Readable({
  read(size){
    this.push(String.fromCharCode(this.currentCharCode++));
    if(this.currentCharCode > 90){
      this.push(null);
    }
  }
});

inStream.push('111')

inStream.currentCharCode = 65;
inStream.pipe(process.stdout);

