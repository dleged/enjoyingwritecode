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



function binaryTreeToArray(tree){
  if(!tree){ return null; }
  let result = [];
  let queue = [tree];
  let current = null;
  while(queue.length){
    current = queue.shift();
    if(!current){
      result.push(null);
    }else{
      queue.push(current.left);
      queue.push(current.right);
      result.push(current.val);
    }
    
  }

  console.log(result);

}

binaryTreeToArray(TreeNode);



