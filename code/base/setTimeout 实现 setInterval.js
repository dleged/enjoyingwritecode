

function _setInterval(callback, interval, ...args) {

  let context = this;

  setTimeout(() => {
    callback.call(context, ...args);
    _setInterval.call(context, callback, interval, ...args);
  }, interval);

}


