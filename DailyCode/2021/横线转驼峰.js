

function convert(jsonObject){

  function transform(obj){

    if(!Object.prototype.toString.call(obj) === '[object Object]' || !Object.prototype.toString.call(obj) === '[object Array]'){ 
      return obj;
    }

    if(Object.prototype.toString.call(obj) === '[object Array]'){
      obj.forEach((val,idx) => { 
        obj[idx] = transform(val)
      });
    }

    if(Object.prototype.toString.call(obj) === '[object Object]'){
      const values = Object.entries(obj);
      values.forEach(([key,val]) => {
        let newKey = key.replace((/_\w/g),function(v){
          return v.slice(1).toUpperCase();
        });
        
        console.log(val,'0---')
        obj[newKey] = transform(val);
        delete obj[key];
      });
    }

    return obj;
  }

  return transform(jsonObject);

}

// console.log(convert({'a_bc_def': 1}));
// console.log(convert({'a_bc_def': {'foo_bar': 'a_bc_def'}}));
console.log(convert({'a_bc_def': [{'foo_bar': 1,},{'goo_xyz': 3}]}));