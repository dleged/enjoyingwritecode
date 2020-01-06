//观察者模式
class ObServer{
  list = []
  message = ''

  addObserver(objserver){
    this.list.push(objserver);
    return this;
  }

  addMessage(msg){
    this.message = msg;
  }

  notify(){
    this.list.forEach((v) => v.notify && v.notify(this.message));
  }
}


let obj1 = {
  notify: console.log
}

let obj2 = {
  notify: console.log
}

let obServer = new ObServer();
obServer.addObserver(obj1).addObserver(obj2).addMessage('开盘');

obServer.notify();



//发布订阅模式
class publishAndSubscribe{
  list = {}

  addListener(name,fn){
    let fns = this.list[name];
    if(typeof fns === Array){
      this.list[name] = fns.push(fn);
    }else if(fn){
      this.list[name] = [fns,fn];
    }else{
      this.list[name] = fn;
    }
  }

  removeListener(name){
    let fns = this.list[name];
    if(fns[name]) delete fns[name];
  }

  notify(name){
    let fns = this.list([name]);
    if(typeof fns === 'Array'){
      for(let i = 0;i < fns.length; i++){
        fns[i]();
      }
    }else if(fns){
      fns(name);
    }
  }
}

new
