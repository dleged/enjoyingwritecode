// parseInt(string,radix){}

function localParseInt(str, radix) {

  radix = radix || (radix && /(0[xX])/.test(str)) ? 16 : 10;
  typeof str !== "string" && (str = str.toString());
  str = str.trim();
  str = str.match(/^\d+/)[0];
  let len = str.length - 1;
  
  return str.split('').reduce(function (sum, num, index) {
    return sum + num * Math.pow(radix, len - index);
  }, 0);
}

console.log(localParseInt('123',16),localParseInt('123.2'),localParseInt('123.a'),localParseInt('123.2'))