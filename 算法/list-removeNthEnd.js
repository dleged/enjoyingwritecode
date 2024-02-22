// 题目：删除链表的倒数第 N 个节点
// 给定一个链表，删除链表的倒数第 n 个节点，并返回链表的头结点。

// 输入：head = 1->2->3->4->5, n = 2
// 输出：1->2->3->5
// 测试用例：
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}


function removeNthFromEnd(head, nth) {
  const dummy = new ListNode(-1, head);
  let fast = dummy.next;
  let slow = dummy.next;

  // 多走了一步
  for (let i = 0; i <= nth; i++) {
    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return dummy.next;
}


// javascript
// Copy code
// 创建链表节点
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// 测试函数
let result = removeNthFromEnd(head, 2);

// 打印删除倒数第n个节点后的链表值
let output = "";
while (result !== null) {
  output += result.val + "->";
  result = result.next;
}
console.log(output.slice(0, -2)); // 输出：1->2->3->5