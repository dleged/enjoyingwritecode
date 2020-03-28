var i = 0;
function foo(){
  i++;
  if(i>20){
    return;
  }
  console.log("foo");
  setImmediate(() => console.log('setImmediate'));
  setTimeout(()=>{
    console.log("setTimeout");
  },0);
  process.nextTick(foo);//nextTick优先执行foo，又遇到nextTick，执行nextTick。。。
}   
setTimeout(foo, 2);//2ms后执行foo

//结果先输出所有的foo,再输出所有的SetImmediate,再输出所有的setTimeout