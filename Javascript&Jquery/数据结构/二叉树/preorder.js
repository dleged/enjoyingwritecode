//         1

//     2       3

//  4     5   6     7
const bt = require('./bt');

// 1 2 4 5 3 6 7
function preorder(root) {
  if (!root) return;
  console.log(root.val);
  preorder(root.left);
  preorder(root.right);
}

// preorder(bt);

// function preorderWhile(root) {
//   if (!root) return;
//   const result = [];
//   const stack = [root];

//   while (stack.length) {
//     node = stack.pop();
//     if(node){
//       result.push(node.val);
//       const {left, right} = node;
//       stack.push(right);
//       stack.push(left);
//     }
//   }

//   return result;
// }

// function preorderWhile(root) {
//   if (!root) return;
//   let stack = [];
//   let p = root;

//   while (p || stack.length) {
//     while (p) {
//       console.log(p.val);
//       stack.push(p);
//       p = p.left;
//     }

//     let node = stack.pop();
//     p = node.right;
//   }
// }

// 中左右
function preorderWhile(root) {
  if(!root) return;
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    console.log(node.val);

    if(node.right) stack.push(node.right);// 右先进，后出
    if(node.left) stack.push(node.left);// 左后进，先出
  }

}

console.log(preorderWhile(bt));
