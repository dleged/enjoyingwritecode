

class SendRequest{

  constructor(limit = 2){
    this.limit = limit;
    this.runningTask = [];
    this.tasks = [];
  }

  send(url){
    if(this.runningTask.length < this.limit){
        this.runningTask.push(() => {return fetch(url)});
        return this.runTask();
    }
    this.tasks.push(() => {return fetch(url)});
  }

  runTask(){
    const task = this.runningTask.shift();
    if(task){
      task().then((res) => { 
        res.json().then(console.log)
        let index = this.runningTask.findIndex(task);
        this.runningTask.splice(index,1);
        if(this.tasks.length){
          const task = this.tasks.shift();
          this.runningTask.push(task);
        }
        this.runTask();
      });
    }
  }

}


const instance = new SendRequest(3);
//https://blog.csdn.net/c__chao/article/details/78573737
instance.send('https://api.github.com/emojis');
instance.send('https://api.github.com/emojis');
instance.send('https://api.github.com/emojis');
instance.send('https://api.github.com/emojis');
instance.send('https://api.github.com/emojis');