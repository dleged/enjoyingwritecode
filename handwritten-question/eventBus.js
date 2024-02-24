class EventBus{

  constructor(){
    this.events = {};
  }

  on(type,cb){
    this.events[type] = this.events[type] || [];
    this.events[type].push(cb);
  }

  emit(type,...args){
    (this.events[type] || []).forEach(cb => cb.apply(this,args));
  }

  off(type,cb){
    if(!cb){
      this.events[type] = null;
    }
    this.events[type] = this.events[type].filter(item =>item !== cb);
  }

  once(type,cb){
    const fn = () => {
      cb();
      this.off(type,cb);
    }
    this.add(type,fn);
  }

}


const eventBus = new EventBus()
const task1 = () => { console.log('task1'); }
const task2 = () => { console.log('task2'); }
eventBus.on('task', task1)
eventBus.on('task', task2)

setTimeout(() => {
  eventBus.emit('task')
}, 1000) 