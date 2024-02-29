const light = [
  { value: 'red', time: 2000 },
  { value: 'yellow', time: 1000 },
  { value: 'green', time: 2000 },
];

// 按照顺序，执行定时器

function lightRun(light) {


  let len = light.length;

  function loop(i) {
    const l = light[i];
    setTimeout(() => {
      console.log(l.value);
      i = i === len - 1 ? 0 : i + 1;
      loop(i);
    }, l.time)

  }


  loop(0);
}

lightRun(light);