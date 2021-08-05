//         1

//     2       3

//  4     5   6     7


// stack：       1 2 3 6 7 4 5
// outputStack： 1 3 7 6 2 5 4

const bt = require('./bt');

// 左右中
//4 5 2 6 7 3 1
function postorder(root) {
  if (!root) return;
  let stack = [root];
  let outputStack = []

    while(stack.length){
      const node = stack.pop();
      outputStack.push(node);
      if(node.left) stack.push(node.left);
      if(node.right) stack.push(node.right);
    }

    while(outputStack.length){
      const node = outputStack.pop();
      console.log(node.val);
    }

       


}

postorder(bt);
