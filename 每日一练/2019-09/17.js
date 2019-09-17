//todo 实现模版引擎
let template = '${who}${years}年${age}岁';
let who = '一木';
let years = 2019;
let age = 18;

function temlateParse(template){
  let reg = /\$\{(\w+)\}/;
  if(reg.test(template)){
    let v = reg.exec(template)[1];
    template.replace('${' + v + '}',eval(v));
    return temlateParse(template);
  }
}

console.log(temlateParse(template));
