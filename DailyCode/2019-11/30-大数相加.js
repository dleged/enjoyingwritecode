/*
  如何实现两个非常大的数字(已经超出了Number范围)的加法运算。
  注意由于这两个已经超过了Number范围，因此不能用Number存，这里我们选择使用字符串存储。
 */

function bigNumberPlus(a,b) {
  let current = 0;
  a = a.toString();
  b = b.toString();
  while (current < a.length || current < b.length) {
    if(!a[0]){
      a = '0' + a;
    }else if(!b[current]){
      b = '0' + b;
    }
    current++;
  }

  let carried = 0;//存储大于10的1位；
  let array = [];//存储每一项相加各位值的数组
  //从右->左，依次相加；
  for(let i = a.length - 1;i > -1;i--){
    let sum = carried + Number(a[i]) + Number(b[i]);
    if(sum > 9){
      carried = 1;
    }else{
      carried = 0;
    }
    array[i] = sum % 10;
  }

  if(carried === 1){
    array.unshift(carried);
  }

  return array.join('');
}


console.log(bigNumberPlus(93822390193928821,111111111111));
