var i = 0;
function foo(){
  i++;
  if(i>20){
    return;
  }
  console.log("foo", i);
  setTimeout(()=>{
    console.log("setTimeout", i);
  },0);
  process.nextTick(foo);
}

setTimeout(foo, 2);

setTimeout(()=>{
  console.log("Other setTimeout");
},2);

// foo 1,foo 2 ... other setTimeout? ... setTimeout 21,setTimeout 21;

// other setTimeout可能会在第一个foo后执行，nextTickQueue 会在正在进行中的回调组执行完之后执行