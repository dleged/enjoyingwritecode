// 实现一个LazyMan，可以按照以下方式调用:
// LazyMan('Hank')输出:
// Hi! This is Hank!

// LazyMan('Hank').sleep(10).eat('dinner')输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~

// LazyMan('Hank').eat('dinner').eat('supper')输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~

// LazyMan('Hank').eat('supper').sleepFirst(5)输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper

class LazyMan {

  constructor(name) {
    const task = () => {
      console.log('Hi this is ', name);
      this.next();
    }
    this.queue = [task];
    setTimeout(() => {
      this.next();
    },0)
  }

  eat(w) {
    const task = () => {
      console.log('Eat ~~~', w);
      this.next();
    }
    this.queue.push(task);
    return this;
  }

  sleep(time) {
    this.wrapSleep(time, false);
    return this;
  }

  sleepFirst(time) {
    this.wrapSleep(time, true);
    return this;
  }

  wrapSleep(time, isFirst) {

    if (isFirst) {
      this.queue.unshift(() => new Promise(() => {
        setTimeout(() => {
          console.log('wake up after ', time);
          this.next();
        }, time * 1000)
      }))
    } else {
      this.queue.push(() => new Promise(() => {
        setTimeout(() => {
          console.log('wake up after ', time);
          this.next();
        }, time * 1000)
      }))
    }

  }

  next() {
    const task = this.queue.shift();
    if(task){
      task();
    }
    return this;
  }

}

// Hi! This is Hank!

// new LazyMan('Hank').sleep(10).eat('dinner')
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~

// new LazyMan('Hank').eat('dinner').eat('supper')
// Hi This is Hank!
// Eat dinner~
// Eat supper~

new LazyMan('Hank').eat('supper').sleepFirst(5)
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper