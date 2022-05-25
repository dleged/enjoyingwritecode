// <div><%=name%></> => <div>yimu</div>


function compile(str, data) {

  const regExp = /<%=([\s\S]+?)%>/g

  str = str.replace(regExp, function (match, code) {
    console.log(match, code);
    return "' + obj." + code + " + '";
  });

  let tpl = "var tpl = '" + str + "';return tpl;"

  console.log(tpl);

  var compileFn = new Function('obj', tpl);
  return compileFn(data);
}


function render(str, data) {
  return compile(str, data);
}

const template = '<div><%=name%></>';
const data = { name: 'yimu' };

console.log(render(template, data));