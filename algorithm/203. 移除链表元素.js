// 给定一个链表 head 和一个整数 val，删除链表中所有值为 val 的节点，并返回新链表的头。


function ListNode(val, next) {
  this.val = val;
  this.next = next;
}


function removeElements(head, val) {
  // 1->2->6->3->4->5->6, val = 6
  // pre

  // way1： 前驱指针，删除 cur，把前驱指针next 指向 cur.next

  // const dummy = new ListNode(0, head);
  // let pre = dummy;
  // let cur = dummy.next;

  // while (cur) {
  //   let next = cur.next;
  //   // 满足条件
  //   if (cur.val === val) {
  //     pre.next = next;
  //     cur = next;
  //   } else {
  //     pre = cur;
  //     cur = next;
  //   }

  // }


  // way2: 一个 cur 搞定

  const dummy = new ListNode(0, head);
  let cur = dummy;

  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }

  }


  return dummy.next;
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
console.log(removeElements(head1, val1).next.next);

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
