// [2, 3, 3.2, 0, 0, 0, 0]
//            l
//               r


// 单链表
class ListNode {
  val = null;
  next = null;
  constructor(val, node) {
    this.val = val;
    this.next = node;
  }
}

const root = new ListNode(0, null);
root.next = new ListNode(1, new ListNode(2));



let tail = root;
let pre = null;// null
let cur = root; //0

// while (cur) {
//   const temp = cur.next;

//   cur.next = pre;

//   if (!temp) {
//     return cur;
//   }

//   pre = cur;
//   cur = temp;

// }

// 双链表

class DoubleListNode {
  val = null;
  next = null;
  pre = null;
  constructor(val, next, pre) {
    this.val = val;
    this.next = next;
    this.pre = pre;
  }
}

const A = new DoubleListNode('A');
const B = new DoubleListNode('B');
const C = new DoubleListNode('C');
const D = new DoubleListNode('D');
const E = new DoubleListNode('E');
console.log(A)

A.next = B
B.next = C
C.next = D
D.next = E

E.pre = D;
D.pre = C;
C.pre = B;
B.pre = A;

console.log(A)