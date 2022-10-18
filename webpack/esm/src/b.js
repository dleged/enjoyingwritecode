import { a, setA } from './a.js';

console.log('running a modle');

console.log('a;', a);
console.log('setA;', setA);

let b = 'b';

function setB(newVal) {
  b = newVal;
}

export {
  b,
  setB
}