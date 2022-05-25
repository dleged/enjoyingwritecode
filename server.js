const http = require('http');
const fs = require('fs');
const buffer = require('buffer');


http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/html' });
  const html = fs.readFileSync('./test.html',{encoding: 'utf8'});
  res.write(buffer.Buffer(html));

  res.write('<script type="text/javascript">alert(1)</script>');
  res.end();
}).listen(1234);