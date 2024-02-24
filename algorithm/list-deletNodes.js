
// 链表是一种常见的数据结构，让我们考虑一个简单的链表算法题：

// 题目：删除链表中指定值的所有节点
// 给定一个链表头和一个整数值 val，删除链表中所有节点值等于 val 的节点。

// 链表节点的定义如下：

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}


function deleteNodes(head, val) {

  let dummy = new ListNode(-1, head);
  let current = dummy;
  let next = current.next;

  while (next) {

    if (next.val === val) {// 下一个节点是否满足
      current.next = next.next;
      next = current.next;
    }else{// 不满足，两个指针继续向后
      current = next;
      next = next.next;

    }

  }

  return dummy.next;
}

// 测试用例 1
const list1 = new ListNode(1, new ListNode(2, new ListNode(6, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6)))))));
console.log(deleteNodes(list1, 6)); // 预期输出: 1 -> 2 -> 3 -> 4 -> 5

// 测试用例 2
const list2 = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))));
console.log(deleteNodes(list2, 3)); // 预期输出: 1 -> 1 -> 2

// 测试用例 3
const list3 = new ListNode(7, new ListNode(7, new ListNode(7, new ListNode(7))));
console.log(deleteNodes(list3, 7)); // 预期输出: 空链表（null）