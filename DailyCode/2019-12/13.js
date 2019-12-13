//mapStirng
function mapString(str,fn){
  return str.split('')
          .map((v) => fn(v))
          .join('');
}

console.log(mapString('lorem ipsum', c => c.toUpperCase())); // 'LOREM IPSUM'


//CSVToArray
function CSVToArray(data, delimiter = ',', omitFirstRow = false){
  return data.slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
        .split('\n')
        .map((v) => v.split(delimiter))
}


console.log(CSVToArray('a,b\nc,d')); // [['a','b'],['c','d']];
console.log(CSVToArray('a;b\nc;d', ';')); // [['a','b'],['c','d']];
console.log(CSVToArray('col1,col2\na,b\nc,d', ',', true)); // [['a','b'],['c','d']];


//mask
function mask(cc,num = 4,mask = '*'){
    return `${cc}`.slice(-num).padStart(`${cc}`.length,mask);
}

console.log(mask(1234567890)); // '******7890'
console.log(mask(1234567890, 3)); // '*******890'
console.log(mask(1234567890, -4, '$')); // '$$$$567890'
