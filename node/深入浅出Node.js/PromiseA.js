const util = require('util');
const EventEmitter = require('events').EventEmitter;

const PromiseA = function () {
  EventEmitter.call(this);
}

util.inherits(PromiseA, EventEmitter);

PromiseA.prototype.then = function (fulfilledHandler, errorHandler, processHandler) {

  if (typeof fulfulledHandler === 'function') {
    this.once('success', fulfilledHandler);
  }

  if (typeof errorHandler === 'function') {
    this.once('error', fulfilledHandler);
  }


  if (typeof processHandler === 'function') {
    this.once('process', fulfilledHandler);
  }

  return this;

}


var Deferred = function () {
  this.state = 'unfulfilled';
  this.promise = new PromiseA();
};

Deferred.prototype.resolve = function (obj) {
  this.state = 'fulfilled';
  this.promise.emit('success', obj);
};

Deferred.prototype.reject = function (err) {
  this.state = 'failed';
  this.promise.emit('error', err);
};

Deferred.prototype.progress = function (data) {
  this.promise.emit('progress', data);
};


// usage

var promisify = function (res) {
  var defferred = new Deferred();
  var result = '';

  res.on('data', function (chunk) {
    result += chunk;
    defferred.progress(chunk);
  })

  res.on('end', function () {
    defferred.resolve(result);
  })

  res.on('error', function (err) {
    defferred.reject(err);
  })

  return defferred.promise;
}

const res = require('fs').readFile('../1.js');

console.log(res);

promisify(res).then(function (result) {
  console.log('result', result);
}, function (err) {
  console.error(err);
}, function (chunk) {
  console.log('body: ' + chunk);
})