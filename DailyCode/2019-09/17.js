//todo 实现模版引擎
let template = '${who}${years}年${age}岁';
let who = '一木';
let years = 2019;
let age = 18;

function templateParse(template){
  let reg = /\$\{(\w+)\}/;
  if(reg.test(template)){
    let v = reg.exec(template);
    template = template.replace(v[0],eval(v[1]));
    return templateParse(template)
  }
  return template;
}

function anthorTemplateParse(template){
  let reg = /\$\{(\w+)\}/g;
  if(reg.test(template)){
    return template.replace(reg,function(v1,v2){
      return eval(v2);
    })
  }
  return template;
}

console.log(templateParse(template));
console.log(anthorTemplateParse(template));
