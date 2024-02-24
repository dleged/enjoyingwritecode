const light = [
  { value: 'red', time: 2000 },
  { value: 'yellow', time: 1000 },
  { value: 'green', time: 2000 },
];

// 按照顺序，执行定时器

function lightRun(light){

  let promisify = ({value,time}) => new Promise((resolve) => {
    setTimeout(() => {
      console.log(value);
      resolve();
    },time);
  });

  function loop(){
    Promise.resolve(light.reduce((task,cur) => {
      return task.then(() => promisify(cur));
    },Promise.resolve(0))).then(loop);
  }

  loop();
}

lightRun(light);