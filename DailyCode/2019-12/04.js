//实现一个简单的模版引擎


function tempRender(str,data){
  return str.replace(/\{\{(.+?)\}\}/g,($1,$2) => {
    return data[$2];
  })
}

console.log(tempRender(`{{name}} age is {{age}}`,{name: 'yimu',age: 16}));
