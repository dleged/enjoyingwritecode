// 好的，以下是一个判断链表是否有环的算法题以及相应的测试用例：

// 题目：判断链表是否有环
// 给定一个链表，判断链表中是否有环。如果链表中存在环，则返回 true；否则，返回 false。

// 函数签名

function hasCycle(head) {

  let fast = head.next;
  let slow = head;

  while (fast && fast.next) {
    if (fast === slow) {
      return true;
    }

    fast = fast.next.next;
    slow = slow.next;

  }
  return false;
}


function ListNode(val) {
  this.val = val;
  this.next = null;
}

// 存在环
const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(3);
list1.next.next.next = new ListNode(4);
list1.next.next.next.next = new ListNode(5);
list1.next.next.next.next.next = list1.next;

// 不存在环
const list2 = new ListNode(1);
list2.next = new ListNode(2);
list2.next.next = new ListNode(3);
list2.next.next.next = new ListNode(4);
list2.next.next.next.next = new ListNode(5);

// 测试用例
console.log(hasCycle(list1)); // 预期输出：true
console.log(hasCycle(list2)); // 预期输出：false
