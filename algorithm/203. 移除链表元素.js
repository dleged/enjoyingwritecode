// 给定一个链表 head 和一个整数 val，删除链表中所有值为 val 的节点，并返回新链表的头。


function ListNode(val) {
  this.val = val;
  this.next = null;
}


function removeElements(head, val) {

  //tail(-1) -> 1->2->6->3->4->5->6, val = 6
  //             pre cur next

  // dummy -> 1->2->6->3->4->5->6, val = 6

  const dummyNode = new ListNode(-1);
  dummyNode.next = head;
  let cur = dummyNode;

  while (cur.next) {

    // 下一个值满足条件
    if (cur.next.val === val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }

  }


  return dummyNode.next;

  // let tail = new ListNode(-1);
  // tail.next = head;
  // let pre = tail;
  // let cur = head;

  // while (cur) {
  //   const next = cur.next;
  //   if (cur.val === val) {
  //     pre.next = next;
  //     cur = next;
  //   } else {
  //     pre = cur;
  //     cur = next;
  //   }
  // }

  // return tail.next;
}


// 测试用例1
// 输入：head = 1->2->6->3->4->5->6, val = 6
// 输出：1->2->3->4->5
let head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(6);
head1.next.next.next = new ListNode(3);
head1.next.next.next.next = new ListNode(4);
head1.next.next.next.next.next = new ListNode(5);
head1.next.next.next.next.next.next = new ListNode(6);
let val1 = 6;
console.log(removeElements(head1, val1));

// 测试用例2
// 输入：head = [], val = 1
// 输出：[]
let head2 = null;
let val2 = 1;

console.log(removeElements(head2, val2));


// 测试用例3
// 输入：head = [7,7,7,7], val = 7
// 输出：[]
let head3 = new ListNode(7);
head3.next = new ListNode(7);
head3.next.next = new ListNode(7);
head3.next.next.next = new ListNode(7);
let val3 = 7;

console.log(removeElements(head3, val3));
