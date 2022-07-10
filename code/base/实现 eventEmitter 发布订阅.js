
class EventEmitters {
  subscriptions = {}

  on(eventName, callback, type = 'normal') {

    if (!this.subscriptions[eventName]) {
      this.subscriptions[eventName] = {
        callback: [callback],
        type
      };
    } else {
      this.subscriptions[eventName].callback.push(callback);
    }

    return () => {
      this.subscriptions[eventName] = undefined;
    }

  }

  remove(eventName, callback) {
    if (this.subscriptions[eventName] && this.subscriptions[eventName].callback) {
      let callbackList = this.subscriptions[eventName].callback;
      let index = callbackList.indexOf(callback);
      this.subscriptions[eventName].callback.splice(index, 1);
    }
  }

  onces(eventName, callback) {
    this.on(eventName, callback, 'onces');
  }

  emit(eventName, ...args) {
    if (this.subscriptions[eventName]) {
      let { callback, type } = this.subscriptions[eventName];
      callback.forEach(callback => {
        callback && callback(...args);
      });

      if (type === 'onces') {
        this.subscriptions[eventName] = undefined;
      }
    }
  }

}

const person = new EventEmitters();

const buyBook1 = () => {console.log('小黑今天去买书');}
const buyBook2 = () => {console.log('小白今天去买书');}
const buyOnceBook = () => {console.log('小兰最后一次去买书');}


person.on('book',buyBook1);
const removeAll = person.on('book',buyBook2);
person.onces('onecBook',buyOnceBook);

person.emit('book');
person.emit('onecBook');

person.remove('book',buyBook1);

person.emit('book');
person.emit('onecBook');

removeAll();
person.emit('book');


