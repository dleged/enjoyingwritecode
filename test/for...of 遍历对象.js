const { nextTick } = require("process");

var obj = {
  a: 1,
  b: 2,
  c: 3
};

// obj[Symbol.iterator] = function () {
//   let keys = Object.keys(this);
//   let count = 0;

//   return {
//     next() {
//       if (count < keys.length) {
//         return { value: obj[keys[count++]], done: false }
//       } else {
//         return { value: undefined, done: true }
//       }
//     }
//   }
// }

obj[Symbol.iterator] = function* () {
  let keys = Object.keys(obj);

  for (let k of keys) {
    yield [k, obj[k]];
  }
}

for (k of obj) {
  console.log(k);
}