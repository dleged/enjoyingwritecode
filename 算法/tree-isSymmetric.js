// 题目：判断给定的二叉树是否是对称二叉树。

// 示例：

// plaintext
// Copy code
// 输入：[1,2,2,3,4,4,3]
//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// 输出：true

// 输入：[1,2,2,null,3,null,3]
//     1
//    / \
//   2   2
//    \   \
//    3    3
// 输出：false
// 测试用例：
class TreeNode {
  constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

function isSymmetric(tree) {

  function check(left, right) {
    if (!left && !right) {
      return true;
    }

    if (!left || !right) {
      return false;
    }



    return left.val === right.val && check(left.right,right.left) && check(left.left,right.right);
  }

  return check(tree, tree);

}



const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(2);
tree1.left.left = new TreeNode(3);
tree1.left.right = new TreeNode(4);
tree1.right.left = new TreeNode(4);
tree1.right.right = new TreeNode(3);

console.log(isSymmetric(tree1)); // 输出: true

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(2);
tree2.left.right = new TreeNode(3);
tree2.right.right = new TreeNode(3);

console.log(isSymmetric(tree2)); // 输出: false
