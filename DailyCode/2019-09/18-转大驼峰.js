//转化为驼峰命名

//i-have-an-apple -> iHaveAnApple
//ASCII 码中大写的字符 65 - 90

function translateHump(str) {
  //let reg = /-\w/g;
  //return str.replace(reg,function(v){
  //return v.slice(1).toUpperCase();
  //})
  str = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '-') {
      if (str[i + 1]) {
        str.splice(i, 2, str[i + 1].toUpperCase());
      }
    }
  }
  return str.join('');
}

console.log(translateHump('i-have-an-apple'));
