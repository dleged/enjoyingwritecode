// 给定一个链表，删除链表的倒数第 n 个节点，并返回链表的头结点。

function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

function removeNthFromEnd(head, n) {

  let dummy = new ListNode(0, head);
  let slow = dummy;
  let fast = dummy;

  while (n--) {
    fast = fast.next;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow?.next?.next || null;


  return dummy.next;
}


// 测试用例1
// 输入：head = 1->2->3->4->5, n = 2
// 输出：1->2->3->5
let head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);
head1.next.next.next = new ListNode(4);
head1.next.next.next.next = new ListNode(5);
console.log((removeNthFromEnd(head1, 2))); // 应输出: 1->2->3->5

// 测试用例2
// 输入：head = 1->2, n = 2
// 输出：2
let head2 = new ListNode(1);
head2.next = new ListNode(2);
console.log((removeNthFromEnd(head2, 2))); // 应输出: 2

// 测试用例3
// 输入：head = 1, n = 1
// 输出：[]
let head3 = new ListNode(1);
console.log((removeNthFromEnd(head3, 1))); // 应输出: []