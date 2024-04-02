// 给定两个（单向）链表，判定它们是否相交并返回相交的起始节点。请注意相交的定义基于节点的引用，而不是基于节点的值。
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function getIntersectionNode(headA, headB) {
  let lenA = 0;
  let lenB = 0;
  let curA = headA;
  let curB = headB;

  while (curA) {
    lenA++;
    curA = curA.next;
  }

  while (curB) {
    lenB++;
    curB = curB.next;
  }

  if (lenB > lenA) {
    [headA, headB] = [headB, headA];
    [lenA, lenB] = [lenB, lenA];
  }

  let poor = lenA - lenB;

  console.log(poor);

  while (poor--) {
    headA = headA.next;
  }

  while (headA && headB) {
    if (headA === headB) {
      return headA;
    }

    headA = headA.next;
    headB = headB.next;
  }

  return headA;
}


// 测试用例1
// 输入：headA = [4,1,8,4,5], headB = [5,0,1,8,4,5], skipA = 2, skipB = 3
// 输出：Intersected at '8'
let headA1 = new ListNode(4);
headA1.next = new ListNode(1);
headA1.next.next = new ListNode(8);
headA1.next.next.next = new ListNode(4);
headA1.next.next.next.next = new ListNode(5);

let headB1 = new ListNode(5);
headB1.next = new ListNode(0);
headB1.next.next = new ListNode(1);
headB1.next.next.next = new ListNode(8);
headB1.next.next.next.next = new ListNode(4);
headB1.next.next.next.next.next = new ListNode(5);

headB1.next.next.next.next.next = headA1.next.next;
console.log(getIntersectionNode(headA1, headB1)); // 应输出：8

// 测试用例2
// 输入：headA = [2,6,4], headB = [1,5], skipA = 3, skipB = 2
// 输出：null
let headA2 = new ListNode(2);
headA2.next = new ListNode(6);
headA2.next.next = new ListNode(4);

let headB2 = new ListNode(1);
headB2.next = new ListNode(5);

console.log(getIntersectionNode(headA2, headB2)); // 应输出：null