// 给定二叉树 [3,9,20,null,null,15,7]，


// 0 1 2 3 4 5 6

//     3
//    / \
//   9  20
//     /  \
//    15   7

// const list = [3, 9, 20, null, null, 15, 7];

const list = [1,2,3,null,null,4,5]

function BinaryTree(val) {
  return {
    val: val,
    left: null,
    right: null,
  };
}

function serialize(list) {
  if (!list.length) {
    return new BinaryTree(null);
  }

  const root = new BinaryTree(list.shift());
  const stack = [root];

  while (list.length) {
    const node = stack.shift();
    let val = list.shift();
    if (val) {
      const leftNode = new BinaryTree(val);
      node.left = leftNode;
      stack.push(leftNode);
    }
    val = list.shift();
    if (val) {
      const rightNode = new BinaryTree(val);
      node.right = rightNode;
      stack.push(rightNode);
    }
  }

  return root;
}

console.log(serialize(list));
