const fs = require('fs');

let file = fs.createWriteStream('./bigfile.js');

for(var i = 0; i < 999; i++){
  file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n');
}

file.end();

