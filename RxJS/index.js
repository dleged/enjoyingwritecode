
// 真正开始工作的 observable
class SafeObservable {

  constructor(destination) {
    this.destination = destination;
  }

  next(value) {
    const destination = this.destination;
    if (destination && !this.isUnsubscribed) {
      destination.next(value);
    }
  }

  complete() {
    const destination = this.destination;
    if (!this.isUnsubscribed) {
      if (destination.complete) {
        destination.complete();
      }
      this.unsubscribe();
    }
  }

  error(error) {
    const destination = this.destination;
    if (!this.isUnsubscribed) {
      if (destination.error) {
        destination.error(error);
      }
      this.unsubscribe();
    }
  }

  unsubscribe() {
    this.isUnsubscribed = true;
    if (this._unsubscriber) {
      this._unsubscriber();
    }
  }
}

// 控制主题
class Observable {
  constructor(_observer) {
    this._observer = _observer;
  }

  subscriber(observer) {
    const safeObservable = new SafeObservable(observer);
    safeObservable._unsubscriber = this._observer(safeObservable);
    return safeObservable.unsubscribe;
  }
}

const observer = {
  next(value) { console.log('next -> ' + value); },
  error(err) { console.error(err) },
  complete() { console.log('complete') },
}


const observable = new Observable(observer => {
  let i = 0;
  const id = setInterval(() => {
    if (i < 10) {
      observer.next(i++);
    } else {
      observer.complete();
    }
  }, 100);

  return () => {
    console.log('unsubbed');
    clearInterval(id);
  }
});
// 订阅后开始工作
const unSubscribe = observable.subscriber(observer);
