// lib.js
var a = {counter:3};
function incCounter() {
  a.counter++;
}
module.exports = {
  counter: a,
  incCounter: incCounter,
};