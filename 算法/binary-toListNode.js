// 题目：给定一个二叉树，原地将它展开为一个单链表。展开后的单链表应该按照前序遍历顺序排列。

// 示例：

// 输入：

// markdown
// Copy code
//        1
//       / \
//      2   5
//     / \   \
//    3   4   6
// 输出：

// markdown
// Copy code
// 1
//  \
//   2
//    \
//     3
//      \
//       4
//        \
//         5
//          \
//           6
// 测试用例：
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function flatten(tree) {

  const stack = [];
  const list = [];

  const head = new TreeNode(-1, tree);

  // 深度优先遍历 -> Array
  while (tree || stack.length) {

    while (tree) {
      stack.push(tree);
      list.push(tree);
      tree = tree.left;
    }

    const node = stack.pop();
    tree = node.right;

  }

  // 重新赋值每个值的 -> right
  node = head.left;
  for (let i = 0; i < list.length; i++) {
    node.right = list[i];
    node = node.right;
  }
}

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(5);
tree.left.left = new TreeNode(3);
tree.left.right = new TreeNode(4);
tree.right.right = new TreeNode(6);

flatten(tree);

let current = tree;
while (current) {
  console.log(current.val);
  current = current.right;
}
// 预期输出：1,2,3,4,5,6

