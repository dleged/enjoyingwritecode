// var i = 0;
// function foo(){
//   i++;
//   if(i>20){
//     return;
//   }
//   console.log("foo");
//   setImmediate(() => console.log('setImmediate'));
//   setTimeout(()=>{
//     console.log("setTimeout");
//   },0);
//   process.nextTick(foo);//nextTick优先执行foo，又遇到nextTick，执行nextTick。。。
// }   
// setTimeout(foo, 2);//2ms后执行foo

//结果先输出所有的foo,再输出所有的SetImmediate,再输出所有的setTimeout

console.log(0);

setTimeout(() => {          // callback1
  console.log(1);
  setTimeout(() => {        // callback2
    console.log(2);
  }, 0);
  setImmediate(() => {      // callback3
    console.log(3);
  })
  process.nextTick(() => {  // callback4
    console.log(4);  
  })
}, 0);

setImmediate(() => {        // callback5
  console.log(5);
  process.nextTick(() => {  // callback6
    console.log(6);  
  })
})

setTimeout(() => {          // callback7              
  console.log(7);
  process.nextTick(() => {  // callback8
    console.log(8);   
  })
}, 0);

process.nextTick(() => {    // callback9
  console.log(9);  
})

console.log(10);
// 0 10 8 1 4 7 8 5 6 3 2