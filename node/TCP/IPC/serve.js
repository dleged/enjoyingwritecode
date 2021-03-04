const net = require('net');

const server = net.createServer(function(socket){
  console.log('client has connectd');

  socket.on('end',function(){
    console.log('client disconnected');
  });

  socket.write('hello client!');

  socket.pipe(socket)

}).listen(8124);


server.on('data',function(data){
  console.log('serve has received: %s',data);
  socket.write('serve send to client');
});

server.on('error',function(err){
  console.error(err);
})