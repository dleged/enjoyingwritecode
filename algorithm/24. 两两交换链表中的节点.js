// 给定一个链表 head，两两交换其中相邻的节点，并返回交换后的链表。

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
* @param {ListNode} head
* @return {ListNode}
*/
function swapPairs(head) {

  // 这题关键，需要一个前驱节点，承载交换后的指针 cur.next，cur.next.next 也需要被修改指向
  //  0 -> 1 ->2  ->3  -> 4
  // pre cur next curNext

  if (!head || !head.next) return head;

  const dummy = new ListNode(0,head);
  let pre = dummy;
  let cur = head;

  while(cur && cur.next){
    const curNext = cur.next.next;
    const next = cur.next;

    next.next = cur;
    cur.next = curNext;
    pre.next = next;

    pre = cur;
    cur = curNext;


  }

  return dummy.next;
}

// 测试用例1
// 输入：head = 1->2->3->4
// 输出：2->1->4->3
let head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);
head1.next.next.next = new ListNode(4);

console.log(swapPairs(head1))

// 测试用例2
// 输入：head = []
// 输出：[]
let head2 = null;
console.log(swapPairs(head2))


// 测试用例3
// 输入：head = [1]
// 输出：[1]
let head3 = new ListNode(1);
console.log(swapPairs(head3))
