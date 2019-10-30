//请使用最基本的遍历来实现判断字符串 a 是否被包含在字符串 b 中，并返回第一次出现的位置（找不到返回 -1）。

var a='34',b='1234567890', // 返回 2
    c='35',d='1234567890'; // 返回 -1
// includes(a,b);

function includes(a,b){
  for(let i in b){
    if(a[0] === b[i]){
      var temp = true;
      for(let j in a){
        if(a[j] !== b[Number(i) + Number(j)]){
          temp = false;
        }
      }
      if(temp){
        return i;
      }
    }
  }
  return -1
}
console.log(includes(a,b));
console.log(includes(c,d));


//实现千位分隔符
var money1 = 12334 // -> 12,334.000;
var money2 = 123456.9 // -> 999,999.900;
function parseToMoney(money){
  if(!/^\d|.+$/.test(money)) return console.warn('arguments must be a number');
  money = Number(money).toFixed(3);
  let [integer,decimal] = money.toString().split('.');
  integer = integer.replace(/\d(?=(\d{3})+$)/g,"$`,");
  return integer + '.' + decimal;
}

console.log(parseToMoney(money1));
console.log(parseToMoney(money2));
