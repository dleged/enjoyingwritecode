//nthArg

function nthArg(n){
  return (...args) => {
    return args.slice(n)[0];
  }
}

const third = nthArg(2);
console.log(third(1, 2, 3));
third(1, 2, 3); // 3
third(1, 2); // undefined
const last = nthArg(-1);
console.log(last(1, 2, 3, 4, 5));
