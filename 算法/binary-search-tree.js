
// 找出二叉树中第 n 小的值

// 二叉搜索树（Binary Search Tree，简称 BST）是一种特殊的二叉树，它具有以下性质：

// 对于树中的每个节点 n，其左子树（Left Subtree）中的每个节点的值都小于节点 n 的值。
// 对于树中的每个节点 n，其右子树（Right Subtree）中的每个节点的值都大于节点 n 的值。
// 左子树和右子树也是二叉搜索树。

class TreeNode {
  constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

function kthSmallest(root,n){

  //关键：使用 stack 数据结构，依次遍历所有的左节点，遍历完左节点后
  //     出栈一个 node，然后遍历右节点。再所有的左节点，依次类推。
  // 栈其实就是逆向思维。出来的轨迹逆向的

  const stack = [];

  while(root || stack.length){

    while(root){
      stack.push(root);
      root = root.left;
    }

    // 左节点遍历结束，取出 stack 中最小的节点
    root = stack.pop();
    n--;
    if(n === 0) break;

    // 遍历右节点
    root = root.right;

  }


  return root.val;
}



// 测试用例
const root = new TreeNode(3);
root.left = new TreeNode(1, null, new TreeNode(2));
root.right = new TreeNode(4);

console.log(kthSmallest(root, 1)); // 输出: 1
console.log(kthSmallest(root, 2)); // 输出: 2
console.log(kthSmallest(root, 3)); // 输出: 3
console.log(kthSmallest(root, 4)); // 输出: 4