//数学计算
const Big = require('big.js').default;

(function(){
  let MATH  = {
    plus: function(b){ //+
      let a = Number(this);
      b = b || 0;
      return (new Big(a).plus(b)).toString(2)
    },
    minus: function(b){ // -
      let a = Number(this);
      return (new Big(a).minus(b)).toString(2)
    },
    times: function(b){ // *
      let a = Number(this);
      return (new Big(a).times(b)).toString(2)
    },
    div: function(b){ // /
      let a = Number(this);
      if(Number(b) === 0) throw new Error('除数不能为0');
      return (new Big(a).div(b)).toString(2)
    }
  }

  let numberPro = Number.prototype;
  let stringPro = String.prototype;
  Object.keys(MATH).forEach((v) => {
    numberPro[`_${v}`] = MATH[v];
    stringPro[`_${v}`] = MATH[v];
  })

})(Number,String)
