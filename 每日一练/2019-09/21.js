//判断是否是手机号 1开头，第二位[34578]

function testIsPhon(phone){
  let reg = /^1[34578]\d{9}$/;
  return reg.test(phone);
}
console.log(testIsPhon(15658866967)); //true
console.log(testIsPhon(156588669670)); //false
console.log(testIsPhon(10658866967)); //true

/*
  判断是否是邮箱
*/

function testIsEmil(mail){
  let reg = /^([a-zA-Z0-9_\-])+@([a-zA-Z0-9_\-])+.([a-zA-Z0-9_\-])/;
  return reg.test(mail);
}
console.log(testIsEmil('1208674494@qq.com')); //true
console.log(testIsEmil('duandaunf@gmail.com')); //true
console.log(testIsEmil('duan.daunf@gmail.com')); //false

/*
  判断是否是身份证
*/

function testIsCardNo(cardNo){
  let reg =/(^\d{15}$)|(^\d{18}$)|(^\d{17}[\dXx])/;
  return reg.test(cardNo);
}
console.log(testIsCardNo('369423199105052210')) //true
console.log(testIsCardNo('36942319910505221X')) //true
console.log(testIsCardNo('36942319910505221y')) //false
