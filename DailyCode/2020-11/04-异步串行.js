//https://juejin.im/post/6860646761392930830

/**
 * 
 * const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
   const subFlow = createFlow([() => delay(1000).then(() => log("c"))]);
  createFlow([
    () => log("a"),
    () => log("b"),
    subFlow,
    [() => delay(1000).then(() => log("d")), () => log("e")],
  ]).run(() => {
    console.log("done");
  }); 
*/
// 需要按照 a,b,延迟1秒,c,延迟1秒,d,e, done 的顺序打印

function createFlow(effects) {
  const queue = [...effects.flat()];

  return {
    run: async function (callback) {
      for (let fn of queue) {
        if (fn.isFlow) {
          await fn.run();
        } else {
          await fn();
        }
      }
      if (callback) {
        callback();
      }
    },
    isFlow: true,
  };
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const subFlow = createFlow([() => delay(1000).then(() => console.log("c"))]);
createFlow([
  () => console.log("a"),
  () => console.log("b"),
  subFlow,
  [() => delay(1000).then(() => console.log("d")), () => console.log("e")],
]).run(() => {
  console.log("done");
});


