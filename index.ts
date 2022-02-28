const {spawn} = require('child_process');
const fs = require('fs');
const path = require('path');

const file = process.argv[1];

const filePath = path.join(__dirname, file);

function startProcess(name: string){
  exports.process = spawn('node',[name]);
}

fs.watch(path.join(__dirname, file),{},() => {
  console.log('file is changed');

  exports.process.kill('SIGKILL');
  startProcess(filePath);
});

startProcess(filePath);
