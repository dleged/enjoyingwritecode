const dgram = require('dgram');

const buffer = new Buffer('深入浅出 Node.js');

const client = dgram.createSocket('udp4');

client.send(buffer, 0, buffer.length, 1234, 'localhost', function (err, bytes) {
  client.close();
});