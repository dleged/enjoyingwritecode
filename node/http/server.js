const http = require('http');
// const cp = require('child_process');
const util = require('util');
const url = require('url');
const opn = require('opn');
const PORT = 9999;

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('<div style="color: red;font-size: 20px;">HELLO NODE.JS</div>');
    response.write(util.inspect(url.parse(request.url,true)));
    response.end('set by node http server!');
}).listen(PORT);


opn(`http://localhost:${PORT}`, { app: ['google chrome', '--incognito'] });