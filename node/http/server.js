const http = require('http');
// const cp = require('child_process');
const opn = require('opn');
const PORT = 9999;

http.createServer((request, resopnse) => {
    resopnse.writeHead(200, { 'Content-Type': 'text/html' });
    resopnse.write('<div style="color: red;font-size: 20px;">HELLO NODE.JS</div>');
    resopnse.end('set by node http server!');
}).listen(PORT);


opn(`http://localhost:${PORT}`, { app: ['google chrome', '--incognito'] });