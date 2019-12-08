//判断是否是一个完全二叉树；

let TreeNode = {
  val: 1,
  left: {
     val: 2,
     right: { val: 5, right: null, left: null },
     left: { val: 4, right: null, left: null }
   },
  right: {
     val: 3,
     right: null,
     left: { val: 6, right: null, left: null }
   }
 }

function isCompleteTree(root){
  if(!root){ return false}
  let queue = [];
  let current = root;
  while(current !== null){
    //依次将left和right节点push进数组
    queue.push(current.left);
    queue.push(current.right);
    //取出第一项,对其left和right重复该步骤
    current = queue.shift();
  }

  return queue.filter(Boolean).length === 0;
}

console.log(isCompleteTree(TreeNode));
