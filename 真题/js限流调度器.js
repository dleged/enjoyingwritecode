// 实现JS限流调度器，方法add接收一个返回Promise的函数，同时执行的任务数量不能超过两个。

class Scheduler {

  runningQueue = [];
  taskQueue = [];

  async add(promiseFunc) {
   
    return new Promise((resolve) => {

      promiseFunc.resolve = resolve;

      // 任务数量少于 2，添加任务并执行
      if(this.runningQueue.length < 2){
        this.runningQueue.push(promiseFunc);
        this.runTask(promiseFunc);
      }else{// 多余 2，添加到任务队列
        this.taskQueue.push(promiseFunc);
      }

    });

  }

  runTask(promiseFunc){
    promiseFunc().then(() => {
      promiseFunc.resolve();

      const index = this.runningQueue.findIndex(fn => fn === promiseFunc);
      this.runningQueue.splice(index,1);
      let shift = this.taskQueue.shift();
      if(shift){
        this.runningQueue.push(shift);
        this.runTask(shift);
      }
    })
  }

}

const scheduler = new Scheduler()
const timeout = (time) => {
  return new Promise(r => setTimeout(r, time))
}
const addTask = (time, order) => {
  scheduler.add(() => timeout(time))// 返回一个 promise
    .then(() => console.log(order))// 期望返回的 promise 执行后再执行 order 输出
}
addTask(1000, 1)
addTask(500, 2)
addTask(300, 3)
addTask(400, 4)// log: 2 3 1 4


