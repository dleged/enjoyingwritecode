const http = require('http');

http.createServer(function(req, res){
  res.writeHead(200, { 'Content-Type': 'text/html'});
  res.write('hello');
  res.write(' ');// write 可以多次调用
  res.end('world');// 必须调用 end，否则客户端一直拿不到结果
}).listen(9999,() => {
  console.log('server listening at port 9999...')
});

process.title = 'node server process';

process.on('stdin',(res) => {
  console.log(res)
});