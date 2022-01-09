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
    if(this._subscriber){
      this._subscriber();
    }
  }
}

class Observable {
  constructor(_subscriber){
    this._subscriber = _subscriber;
  }

  subscriber(observer) {
    const safeObservable = new SafeObservable(observer);
    safeObservable._subscriber = this._subscriber(safeObservable);
    return safeObservable._subscriber; 
  }
}

const observable = new Observable(observer => {
  const safeObservable = new SafeObservable(observer);

  let i = 0;
  const id = setInterval(() => {
    if(i < 10){
      safeObservable.next(i++);
    }else{
      safeObservable.complete();
    }
  },100)

  return () => {
    console.log('unsubbed');
    clearInterval(id);
  }

});

const observer = {
  next(value) { console.log('next -> ' + value); },
  error(err) { console.error(err) },
  complete() { console.log('complete') },
}


const unSubscribe = observable.subscriber(observer);

// setTimeout(unSubscribe,500)