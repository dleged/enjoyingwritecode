const rollers = require('streamroller');

const stream = new rollers.DateRollingFileStream('myfile',"yyyy-mm-dd HH:mm:ss");

stream.write('hello');
stream.end();