function getURLParameters(url){
  console.log((url.match(/([^?=&]+)(=([^&]*))/g) || []));
  return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
    {}
  );
}

console.log(getURLParameters('http://url.com/page?name=Adam&surname=Smith')); // {name: 'Adam', surname: 'Smith'}
console.log(getURLParameters('google.com')); // {}


function objectToQueryString(object){
  return object ? Object.entries(object).reduce((acc,[key,v]) => {
    let symbol = acc.length === 0 ? '?' : '&';
    acc += v ? `${symbol}${key}=${v}` : '';
    return acc;
  },'') : '';
}
console.log(objectToQueryString({ page: '1', size: '2kg', key: undefined })); // '?page=1&size=2kg'


const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');
console.log(RGBToHex(255, 165, 1)); // 'ffa501'
