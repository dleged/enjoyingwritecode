// 转换前：
source = [{
  id: 1,
  pid: 0,
  name: 'body'
}, {
  id: 2,
  pid: 1,
  name: 'title'
}, {
  id: 3,
  pid: 2,
  name: 'div'
}]
// 转换为: 
tree = [{
  id: 1,
  pid: 0,
  name: 'body',
  children: [{
    id: 2,
    pid: 1,
    name: 'title',
    children: [{
      id: 3,
      pid: 1,
      name: 'div'
    }]
  }]
}]


function toJson(source) {
  let result = [];
  let map = new Map();

  if(!Array.isArray(source)){
    throw new TypeError('输入的不是数组');
  }

  source.forEach(item => {
    const { pid, id } = item;

    const value = map.get(pid);

    if (value) {
      value.children.push(item);
    } else {
      result.push(item);
    }
    item.children = [];
    map.set(id, item);

  });


  return result;
}


console.log(JSON.stringify(toJson(source)));