// function format(num) {
//   let str = num.toString();

//   const [d, i] = str.split('.');

//   let c = d.toString().replace(/\d(?=(\d{3})+$)/g, function (v,j) {
//     return v + ',';
//   });

//   return c + '.' + i;
// }

function format(num){
  let str = num.toString();

  let [i,d] = str.split('.');

  let len = i.length;
  let count = 0;

  while(len > 0){
    len--;
    count++;

    if(count == 3 && i[len-1]){
      i = i.slice(0,len) + ',' + i.slice(len,i.length);
      count = 0;
    }
  }

  count = 0;
  len = 0;
  while(len < d.length){
 
    len++;
    count++;

    if(count === 3 && d[len]){
      d = d.slice(0,len) + ',' + d.slice(len,d.length);
      count = 0;
      len++;
    }
  }



  return i + '.' + d;

}

console.log(format(112345678.1234789));
