// 获取url参数
// 'http://www.baidu.com?a=1&b=2&c=3';

function getUrpParams(url) {
  let array = url.split('?');
  if(!array[1]) return {};

  let paramsArray = array[1];
  paramsArray = paramsArray.split('&');

  let result = {};
  let reg = /\=/;
  paramsArray.forEach((v) => {
    if(reg.test(v)){
      let [key,val] = v.split(reg);
      val = val ? decodeURIComponent(val) : null;
      if(!result[key]){
        result[key] = val;
      }else{
        Array.isArray(result[key])
          ? result[key].push(val)
          : result[key] = [result[key],val]
      }
    }
  })
  return result;
}


console.log(getUrpParams('http://www.baidu.com?a=1&b=2&c=3'));
