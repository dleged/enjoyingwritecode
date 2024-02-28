class EventBus {

  constructor() {
    this._events = new Map();
  }

  on(type, cb) {

    if (typeof cb !== 'function') throw new TypeError('cb must be a function!');

    const fns = this._events.get(type) || [];
    fns.push(cb);
    this._events.set(type, fns);
    return () => {
      this._events.set(fns.filter((fn) => fn !== cb));
    }

  }

  once(type, cb) {

    if (typeof cb !== 'function') throw new TypeError('cb must be a function!');

    const newFb = (...args) => {
      cb(...args);
      this.off(type, cb);
    }

    this.on(type, cb);

  }

  emit(type, ...args) {

    const fns = this._events.get(type) || [];
    if (!fns.length) return;

    fns.foreach((fn) => fn(...args));

  }

  off(type, cb) {

    if (typeof cb !== 'function') throw new TypeError('cb must be a function!');

    const fns = this._events.get(type) || [];

    if (fns.lenght) return;

    const fliterFns = fns.filter((fn) => fn !== cb);
    this._events.set(type, fliterFns);

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