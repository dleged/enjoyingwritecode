const net = require('net');

const server = net.createServer({
  allowHalfOpen: false,
  pauseOnConnect: false
});
const socketList = [];

server.on('connection', handleConnectoin);

function handleConnectoin(socket){
  socket.on('end', function(socket) {
    console.log(`${socket} 断开连接`)
    socketList.splice(socketList.indexOf(socket),1);
  });
  
  socket.on('close',function(){
    console.log(`socket 服务器关闭`);
  });
  
  socket.on('data', function(data){
    console.log(data.toString());
  });

  console.log('连接已建立' + socket);
  socketList.push(socket);
  // setInterval(() => {
  //   socket.write('连接已建立');
  // },1000)
}

server.getConnections(function(err,count){
  console.log(`当前连接${count}个长链接`);
});

server.listen(9999);


// var net = require('net');
// var server = net.createServer();    
// server.on('connection', handleConnection);
// server.listen(9000, function() {    
//   console.log('server listening to %j', server.address());  
// });
// function handleConnection(conn) {    
//   var remoteAddress = conn.remoteAddress + ':' + conn.remotePort;  
//   console.log('new client connection from %s', remoteAddress);
//   conn.setEncoding('utf8');
//   conn.on('data', onConnData);  
//   conn.once('close', onConnClose);  
//   conn.on('error', onConnError);
//   function onConnData(d) {  
//     console.log('connection data from %s: %j', remoteAddress, d);  
//     conn.write(d.toUpperCase());  
//   }
//   function onConnClose() {  
//     console.log('connection from %s closed', remoteAddress);  
//   }
//   function onConnError(err) {  
//     console.log('Connection %s error: %s', remoteAddress, err.message);  
//   }  
// }