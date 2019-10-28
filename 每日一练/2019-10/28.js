//知乎看到的一个pr
ReactComponent.prototype.setState = function(partialState, callback) {
  invariant(
    typeof partialState === 'object' ||
      typeof partialState === 'function' ||
      partialState == null,
    'setState(...): takes an object of state variables to update or a ' +
      'function which returns an object of state variables.',
  );
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

//重写react 的setState方法，若没有传入callback，setState返回promise，很巧妙；
//callback 赋值包装一个promise调用resolve的方法体，再将callback传给this.updater.enqueueSetState；
//callback触发后，就会调用这个promise实例的then方法；

//react官方回复这样是多此一举，因为通过回调已经有一个回调函数，增加复杂度和难度；
//再者可能会在操作dom前调用setState方法，这样就保证不了这个顺序；
ReactComponent.prototype.setState = function(partialState, callback) {
   invariant(
     typeof partialState === 'object' ||
       typeof partialState === 'function' ||
       partialState == null,
      'setState(...): takes an object of state variables to update or a ' +
        'function which returns an object of state variables.',
    );
 +  let callbackPromise;
 +  if (!callback) {
 +    class Deferred {
 +      constructor() {
 +        this.promise = new Promise((resolve, reject) => {
 +          this.reject = reject;
 +          this.resolve = resolve;
 +        });
 +      }
 +    }
 +    callbackPromise = new Deferred();
 +    callback = () => {
 +      callbackPromise.resolve();
 +    };
 +  }
    this.updater.enqueueSetState(this, partialState, callback, 'setState');
 +
 +  if (callbackPromise) {
 +    return callbackPromise.promise;
 +  }
  };
