// 一种更复杂的双向链表，每个节点有两个连接和一个信息域，一个连接指针指向上一个节点，一个连接指针指向下一个节点，头尾节点分别前后分别指向空；

class Node {
  constructor(val) {
    this.prev = null;
    this.value = val || null;
    this.next = null;
  }
}

class ListNode extends Node {
  constructor(val) {
    super(val);
  }

  append(node, val) {
    let n = this;
    let prevNode = null;

    while (n) {
      if (n.value === val) {
        node.prev = n;
        node.next = n.next;

        n.next = node;
        if(n.next) n.next.prev = node;
        break;

      }
      prevNode = n;
      n = n.next;
    }

  }

  delete(val) {
    let n = this;
    let prevNode = null;
    while (n) {
      if (n.value === val) {
        if (prevNode) prevNode.next = n.next;
        if (n.next) n.next.prev = prevNode;
        break;
      }
      prevNode = n;
      n = n.next;
    }
    
  }
}

let listNode = new ListNode(1);

let node2 = new Node(2);
let node3 = new Node(3);

listNode.append(node2, 1);
listNode.append(node3, 2);
listNode.delete(3)
console.log(listNode);
