const Rx = require('rxjs');
const { merge, mergeMap, tap, scan} = require('rxjs/operators');

Rx.Observable
  .pipe(merge(
    setInterval(1000)
  ))
  .scan((count) => {
    count = count + 1;
  },0)
  .subscribe(console.log);