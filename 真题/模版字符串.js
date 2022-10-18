const html = '<div>我叫<%=name>，年龄<b><%=age></b></div>';
const data = {
  name: 'yimu',
  age: 18
}

function template(html, data) {

  html = html.replace(/\<\%\=(.*?)\>/g,function(search,key){
    return data[key.trim()];
  });

  return html;
}

console.log(template(html,data));
