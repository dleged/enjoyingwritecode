// 好的，以下是一道求二叉树最大深度的算法题以及相应的测试用例：

// 题目：二叉树的最大深度

// 给定一个二叉树，找出其最大深度。

// 示例：

// 输入: [3,9,20,null,null,15,7]
//     3
//    / \
//   9  20
//     /  \
//    15   7
// 输出: 3
// 测试用例：


class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}


// DFS、BFS、递归


function maxDepth(root){
  
};

function maxDepthDFS(root) {

  let max = 0;

  let stack = [];
  let node = { root, depth: 1 };

  while (node.root || stack.length) {
    while (node && node.root) {

      const n = node.root;
      const depth = node.depth;

      stack.push(node);
      max = Math.max(max, depth);

      node = { root: n.left, depth: depth + 1}

    }

    let n = stack.pop();

    node = { root: n.root.right, depth: n.depth + 1 }

  }

  return max;
}

const root1 = {
  val: 3,
  left: { val: 9, left: null, right: null },
  right: {
    val: 20,
    left: { val: 15, left: null, right: null },
    right: { val: 7, left: null, right: null }
  }
};
console.log(maxDepth(root1));
// 预期输出: 3

const root2 = {
  val: 1,
  left: { val: 2, left: null, right: null },
  right: null
};
console.log(maxDepth(root2));
// 预期输出: 2

const root3 = null;
console.log(maxDepth(root3));
// 预期输出: 0