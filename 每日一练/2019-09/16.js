var url = 'https://www.google.com/search?newwindow=1&newwindow=2&sxsrf=ACYBGNSO6FTQ2XBl9l9h5DLm8K2mZnwioQ%3A1568617531705&ei=OzR_XZXSKsvAoATD7Ldo&q=如何学好typescript&oq=如何学好typescript&gs_l=psy-ab.3...21183220.21193425..21193840...6.0..0.172.2606.14j10......0....1..gws-wiz.....10..0i131j0j35i362i39j0i12j33i160.lhjx4suH_RA&ved=0ahUKEwjV24_W49TkAhVLIIgKHUP2DQ0Q4dUDCAs&uact=5';

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
