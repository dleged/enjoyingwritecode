const net = require("net");

const client = net.createConnection({port: 8124},function(){
  console.log('server has completed');
  client.write('hello server');
  client.end();
});

client.on("connect", function () {
  console.log("socket has connectd");
});

client.on("data", function (data) {
  console.log("client has received: %s", data);
  socket.write(data);
  client.end();
});

client.on("end", function () {
  console.log('client has disconnected');
})

client.on("error", function (err) {
  console.error("socket error: %s", err);
});
