// 链表中最简单的一种是单向链表，一个链表包含2个域，一个当前节点的信息域下一个节点的指针；

class Node {
  constructor(val) {
    this.next = null;
    this.value = val || null;
  }
}

class NodeList extends Node {
  constructor(value) {
    super(value);
  }

  append(node, value) {
    const n = this;

    while (n) {
      if (n.value === value) {
        if (n.next) {
          node.next = n.next;
        }
        n.next = node;
        break;
      }

      n = n.next;
    }
  }

  delete(value) {
    const n = this;
    const preNode = null;
    while(n){
      if(n.value === value) {
        if(preNode){
          preNode.next = n.next;
        }else if(n.next){// 删除 head 节点
          this.next = n.next;
          n.next = null;
        }
        break;
      }
      preNode = n;
      n = n.next;
    }
  }
}


const list = new NodeList(1);
const node2 = new Node(2); 
const node3 = new Node(3);

list.append(node2,1);
list.append(node3,1);

console.log(list);