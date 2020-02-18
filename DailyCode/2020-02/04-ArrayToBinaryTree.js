let treeArray = [ 1, 2, 3, 4, 5, 6, null, null, null, null, null, null, null ];

function TreeNode(val){
    this.val = val;
    if(val){
        this.left = this.right = null;
    }
}
// [3,9,20,null,null,15,7]

//     3
//    / \
//   9  20
//     /  \
//    15   7
   
function ArrayToBinaryTree(treeArray){
    if(!treeArray.length){return null;}
    let treeNode = new TreeNode(treeArray.shift());
    let queue = [treeNode];

    while(queue.length){
        let current = queue.shift();
        if(current.val){
            let left = new TreeNode(treeArray.shift());
            let right = new TreeNode(treeArray.shift());
            queue.push(left,right);
            current.left = new TreeNode(left);
            current.right = new TreeNode(right);
        }
    }

    return treeNode;
}

console.log(ArrayToBinaryTree([3,9,20,null,null,15,7]));
