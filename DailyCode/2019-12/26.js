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
