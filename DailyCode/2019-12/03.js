// 获取url参数
// 'http://www.baidu.com?a=1&b=2&c=3';

function getUrpParams(url) {
  const result = {}
  const queryString = url.split('?')[1];
  // if (!queryString) return result;
  // const pairs = queryString.split('&');
  // for (let pair of pairs) {
  //   const [key, value] = pair.split('=');
  //   result[decodeURIComponent(key)] = decodeURIComponent(value);
  // }


  const urlParams = new URLSearchParams(queryString || window.location.search);

  for (let [key, value] of urlParams.entries()) {
    result[decodeURIComponent(key)] = decodeURIComponent(value);
  }

  return result;
}


console.log(getUrpParams('http://www.baidu.com?a=1&b=2&c=3&d=JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B'));
