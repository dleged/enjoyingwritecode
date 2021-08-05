//         1

//     2       3

//  4     5   6     7

const bt = require('./bt');

// 7
// 6
// 3
// 5
// 4
// 2
// 1



// 4 2 5 1 6 3 7
function inorder(root){ 
  if(!root) return;

  inorder(root.left);
  console.log(root.val);
  inorder(root.right);
}

// inorder(bt);

// 左中右
function inorderWhile(root){

  if(!root) return;
  
  let stack = [];
  let p = root;

  while(p || stack.length){
    while(p){
      stack.push(p);
      p = p.left;
    }
    const node = stack.pop();
    console.log(node.val);
    p = node.right;
  }
}

console.log(inorderWhile(bt));