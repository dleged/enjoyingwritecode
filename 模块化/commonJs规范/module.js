var name;

exports.setName = function(thyName){
  name = thyName;
}

exports.getName = function(){
  console.log('hello',name);
}

console.log(name,name);
