const fs = require('fs');

function startProgram(){
  exports.child =  require('child_process').spawn('node',['./server.js'],{stdio: 'inherit'});
} 

startProgram();

function crash(){
  exports.child.kill();
  startProgram();
}

fs.watchFile('./server.js', {persistent: true,interval: 1000}, crash)