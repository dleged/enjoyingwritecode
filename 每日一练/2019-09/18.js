//转化为驼峰命名

//i-have-an-apple -> iHaveAnApple

function translateHump(str){
  let reg = /-\w/g;
  return str.replace(reg,function(v){
    return v.slice(1).toUpperCase();
  })
}

console.log(translateHump('i-have-an-apple'));
