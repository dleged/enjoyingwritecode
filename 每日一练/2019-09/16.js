
//解析 URL Params 为对象
/*
  中文转码decodeURIComponent
  重复出现的key值放入数组
  return {}
*/
function parseUrlParam(url){
  let afterStr = /.+\?(.+)$/.exec(url)[1];//获取？后面的字符串；
  let splitArr = afterStr.split('&');
  let result = {};
  splitArr.forEach((v) => {
    if(/=/.test(v)){//是否有值
      let [key,value] = v.split('=');
      value = decodeURIComponent(value);
      value = (/^\d+$/).test(value) ? parseFloat(value) : value;
      if(result.hasOwnProperty(key)){//存在相同的key值
        result[key] = [].concat(result[key],value);
      }else{
        result[key] = value;
      }
    }else{
      result[key] = true;
    }
  })

  return result;
}


console.log(parseUrlParam(url));
