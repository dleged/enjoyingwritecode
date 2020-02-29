/**
 * react virtual dom的新老dom列表是如何进行比较差异；
 * 
 * 1.同一个父节点下的新老dom列表；
 * 2.逐一将新dom列表的节点和老dom列表去匹配；
 * 3.存在该节点，则将节点移动；
 * 4.不存在，则将节点插入合适位置；
 * 5.最后再遍历一遍老dom列表，去除掉已经删除的节点老；
 * 6.返回更新后的old列表；
 * 
 * ['A','B','C','D','E'] -> old
 * ['D','C','E','F','A','Z'] -> new
 * 
 * 简单的一个实现
 */

let A = {
    index: 0,
    name: 'A',
}
let B = {
   index: 1,
   name: 'B',
}
let C = {
   index: 2,
   name: 'C',
}
let D = {
   index: 3,
   name: 'D',
}
let E = {
   index: 4,
   name: 'E',
}
let F = {
   index: 5,
   name: 'F',
}


//  function moveNode(oldList,index,lastIndex,node){
//     oldList.splice(--index,1);
//     oldList.splice(--lastIndex,0,node);
//  }
 
 function insertNewNode(oldList,node){
    oldList.push(node);
 }

 function removeNode(oldList,newList){
    return oldList.filter((k) => {
        return newList.some((v) => v.name === k.name);
    });
 }

 function reactDiff(oldList,newList,lastIndex = 0){
    newList.forEach((v,index) => {
        if(oldList.includes(v)){
            let c_index = oldList.indexOf(v);
            oldList[c_index].index = index;
            lastIndex = Math.max(c_index,lastIndex);
        }else{
            v.index = index;
            insertNewNode(oldList,v); 
            lastIndex++;
        }
    });
    
    return removeNode(oldList,newList).sort((a,b) => a.index > b.index);
 }


 console.log(reactDiff([A,B,C,D,E],[D,A,C,F],0,0));


