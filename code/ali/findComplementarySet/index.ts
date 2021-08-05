/*** --- 问题描述 --- ** 
 * 算出两个数组的补集，数组只包含字符串和数字 ** 
 * --- 说明 --- ** - 补集：如果 b 是 a 的⼦集，返回存在于 a 不存在于 b 的元素集合，反之返回空集合 
 **/ 
type TElement = string | number; 

function findComplementarySet(a: TElement[], b: TElement[]): TElement[] { 
  // 如果 b 是空数组
  if(!b.length) return a;
  // 如果 b 的数组长度大于 a 的长度
  if(b.length > a.length){ return [] }

  let result: TElement[] = [];

  a.forEach((v: TElement) => {
    // 如果 a 中的值不在 b 中，并且结果集不存在当前的值，加入结果集
    if(b.indexOf(v) === -1 && result.indexOf(v) === -1){
      result.push(v);
    }
  }); 
  
  return result;
 }


module.exports = findComplementarySet;


