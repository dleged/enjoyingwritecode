// 题目：合并两个有序链表
// 给定两个按升序排列的链表，将它们合并为一个新的按升序排列的链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
// 示例：
// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4
// 要求：
// 请编写一个函数 mergeTwoLists，接收两个升序排列的链表 l1 和 l2，返回合并后的升序排列的链表。如果需要更多提示或其他问题，请告诉我！

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeTwoLists(l1, l2) {

  const dummy = new ListNode(-1); // 创建一个哨兵
  let current = dummy;

  while (l1 && l2) {

    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }

    current = current.next;

  }

  if (l1) {
    current.next = l1;
  }

  if (l2) {
    current.next = l2;
  }

  return dummy.next;
}



// 创建链表节点
let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

// 测试函数
let mergedList = mergeTwoLists(l1, l2);

// 打印合并后的链表值
while (mergedList !== null) {
  console.log(mergedList.val);
  mergedList = mergedList.next;
}
// 预期输出: 1 -> 1 -> 2 -> 3 -> 4 -> 4