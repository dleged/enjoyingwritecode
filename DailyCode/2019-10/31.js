//promise A+ 简单实现
const PENDING = 'pending';
const FULLFILLED = 'fullfilled';
const REJECT = 'rejected';


class PromiseA{
  constructor(fn){
    this.status = 'pending';
    this.value = undefined;
    this.reason = null;

    resolve = function(value){
      if(this.status === 'pending'){
        this.value = value;
        this.status = FULLFILLED;
      }
    }

    reject = function(e){
      if(this.status === 'pending'){
        this.value = e;
        this.status = REJECT;
      }
    }

    try{
      fn(resolve,reject)
    }catch(e){
      reject(e);
    }
  }
}

PromiseA.prototype.then = function(fullfilled,rejected){

}
