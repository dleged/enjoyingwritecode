const net = require('net');

const server = net.createServer(function (socket) {

  socket.on('connect', function () {
    console.log('链接了');
  })

  socket.on('data', function () {
    socket.write('hello man! ');
  })

  socket.on('end', function () {
    console.log('end')
  });

  socket.write('welcome net world! ');

});

server.on('error', function (err) {
  console.error(err);
})


server.listen(8888, function () {
  console.log('server bound');
})
