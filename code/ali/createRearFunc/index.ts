/*** --- 问题描述 --- **
 * 实现⼀个函数⽣成器，接收⼀个原函数和⼀组 index，⽣成⼀个新函数 *
 * 调⽤新函数时，按照 index 数组中定义的顺序将参数传⼊原函数中
 * **/
type TAnyFunction = (...args: any[]) => any;
function createRearFunc<T extends TAnyFunction>(func: T, indexes: number[]): any {
  return function(...args: any[]): T{

    let result: any[] = [];
    function swap(){
      indexes.forEach((v,index) => {
        result.push(args[index]);
      })
    }

    swap();
    // 涉及到 this 相关可以使用 call 或者 apply
    return func(...result);
  }
}

