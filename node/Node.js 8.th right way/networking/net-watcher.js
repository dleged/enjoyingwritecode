const fs = require('fs');
const net = require('net');
const filename = process.argv[2];

if(!filename) throw new Error('Error: No filename specified.');

net.createServer(connection => {

  console.log('Subscriber connected.');
  connection.write(`ow watching "${filename}" for changes...\n`);

  const watcher = fs.watch(filename,() => connection.write(`File changed: ${new Date()}\n`));

  connection.on("close",() => {
    console.log('Subscriber disconnected.');
    watcher.close();
  });

}).listen(6000,() => {
  console.log('Listening for subscribers...')
});