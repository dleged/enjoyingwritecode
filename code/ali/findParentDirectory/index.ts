/*** --- 问题描述 ---
 * ** 给定⼀组⽂件路径，找出它们共同的的⽗级⽬录 **
 * --- 说明 --- **
 * - 如果不存在共同的⽗级⽬录，返回 `null`
 */

 const path1 = '/Users/a123/by-work/byfe-enterprise-bot/src/pages/bot-lab/verify/index.tsx';
 const path2 = '/Users/a123/by-work/byfe-enterprise-bot/src/pages/bot-lab/talk-flow/context.tsx';
 const path3 = '/Users/a123/by-work/byfe-enterprise-bot/src/utils/local-storage.ts';
 const path4 = '/Users/a123/self/rewrite-lodash/http/关于并发请求的内容/request.md';
 
 
 const paths = [path1, path2, path3, path4];
 
 const samePath = '/Users/a123';
 
 
 /**
  * 用map去做匹配，如果一样，对象只会有一个属性
  * 比如: {1:1}
  * @param paths
  * @param index
  * @returns
  */
 function isEqualOfPathStrByIndex(paths: string[],index: number) {
   let strMap = {};
   paths.forEach(element => {
     strMap[element[index]] = element[index];
   });
   return Object.keys(strMap).length === 1;
 }
 /**
  * 本质是探究n个字符串的最长公共子串
  * @param paths
  * @returns
  */
 function findParentDirectory(paths: string[]): string | null {
   if (paths.length===0) return null;
   let res = '';
   // 得到最小长度
   const minLength = Math.min(...paths.reduce((cur,it)=>{
     cur.push(it.length);
      return cur;
   },[]))
 
   // 最小长度为0，退出
   if (minLength===0) return null;
 
   // 用最小长度遍历
   for (let index = 0; index < minLength; index++) {
     if (isEqualOfPathStrByIndex(paths, index)){
       // paths一定有长度，没有长度前面就退出了
       res+=paths[0][index];
     }else {
       // 只要不匹配马上退出循环
       index = minLength;
     }
   }
   return res === '/' ? null : res || null;
 
 }
 
 const res = findParentDirectory(paths);
 console.log(res,res===samePath);

 module.exports = findParentDirectory;