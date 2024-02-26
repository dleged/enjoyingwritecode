import { b, setB } from './b.js';

console.log('running b modle');

console.log('b;', b);
console.log('setB', setB);

let a = 'a';

function setA(newVal) {
  a = newVal;
}

export {
  a,
  setA
}