class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  on(name, fn) {
    let listeners = this.events.get(name) || new Set();
    listeners.add(fn);
    this.events.set(name, listeners);
    return () => {
      listeners.delete(fn);
    }

  }

  emit(name, ...args) {
    let listeners = this.events.get(name);
    if (!listeners) {
      return;
    }

    for (let listener of listeners) {
      if (typeof listener === 'function') {
        listener(...args);
      }
    }

  }

  clearAll() {
    this.events.clearAll();
  }
}

// event

const e = new EventEmitter();

const removeListen = e.on('listen', (port) => console.log('listen on port:', port));
e.emit('listen', 1234); // Output: listen on port: 1234

removeListen(); // Removes the listener
e.emit('listen', 5678); // No output since the listener has been removed
