//查找字符串中出现最多的字符和个数

var str = 'adsadasdasdsadasdsadsdfdsfdsfsd';

str = str.split('').sort((a,b) => a < b).join('');

var num = 0;
var chart = '';
str.replace(/(\w)\1+/g,($0,$1) => {
  if($0.length > num){
    num = $0.length;
    chart = $1;
  }
})

console.log(`出现最多的字符是${chart},出现了${num}次`);
