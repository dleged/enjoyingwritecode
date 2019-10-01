//实现JSON.parse

function jsonParse(str){
  return eval('(' + str + ')');
}

jsonParse('{a:1,b:[1,2,3]}')
