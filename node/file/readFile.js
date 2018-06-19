const fs = require('fs');
const colors = require('colors');

//异步读取
fs.readFile('../http/server.js','utf-8',(error,data) => {
    if(error) throw error;
    console.log('start 异步读取！'['red']);
    console.log(data);
    console.log('end 异步读取!\n'['red']);
});

console.log('切换读取方式\n'['yellow']);

//同步读取
const data = fs.readFileSync('./readFile.js','utf8');
console.log('start 同步读取'['green']);
console.log(data);
console.log('end 同步读取!\n'['green']);
