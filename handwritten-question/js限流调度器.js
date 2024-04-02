// 实现JS限流调度器，方法add接收一个返回Promise的函数，同时执行的任务数量不能超过两个。
// 题目描述
// JS实现一个带并发限制的异步调度器Scheduler，
// 保证同时运行的任务最多有两个。
// 完善代码中Scheduler类，
// 使得以下程序能正确输出


// 1. 先拆解题目，实现简单的执行
// 2. 再限流
class Scheduler {
  constructor() {
    this.count = 2
    this.queue = []
    this.run = []
  }

  add(task) {
    return new Promise((resolve, reject) => {
      task.resolve = resolve;
      this.queue.push(task);
      this.runTask();
    });
  }

  runTask() {
    if (this.run.length >= this.count || !this.queue.length) return;
    const task = this.queue.shift();
    this.run.push(task);

    task().then((val) => {
      task.resolve(val);
      this.run = this.run.filter((t) => t !== task);
      this.runTask();
    })
  }

}

const scheduler = new Scheduler()
const timeout = (time) => {
  return new Promise(r => setTimeout(r, time))
}
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order))
}
addTask(1000, 1)
addTask(500, 2)
addTask(300, 3)
addTask(400, 4)// log: 2 3 1 4


