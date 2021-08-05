/**运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制 。
实现 LRUCache 类：

LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
 

进阶：你是否可以在 O(1) 时间复杂度内完成这两种操作？

 

示例：

输入
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
输出
[null, null, null, 1, null, -1, null, -1, 3, 4]

解释
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4
 */

class LRUCache {
  public size: number = 0;
  public hashMap: { [key: number]: DoubleListNode } = {};
  public dummyHead: DoubleListNode = null;
  public dummyTail: DoubleListNode = null;

  constructor(size: number) {
    this.size = size;

    this.dummyHead = new DoubleListNode(-1, -1);
    this.dummyTail = new DoubleListNode(-1, -1);

    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
  }

  get(key: number) {
    const node = this.hashMap[key];
    if (node === undefined) return -1;

    this.moveNodetoTail(node);

    return node;
  }

  moveNodetoTail(node: DoubleListNode) {
    this.removeNode(node);

    this.addNode(node);
  }

  put(key: number, value: number) {
    const node = this.hashMap[key];

    if (node) {
      this.moveNodetoTail(node);
    } else {
      if (Object.entries(this.hashMap).length < this.size) {
        const node = new DoubleListNode(key, value);
        this.addNode(node);
      } else {
        this.removeNode(this.dummyHead);
      }
    }
  }

  private addNode(node: DoubleListNode) {
    const tailPrev = this.dummyTail.prev;

    tailPrev.next = node;
    node.prev = tailPrev;

    node.next = this.dummyTail;
    this.dummyTail.prev = node;
  }

  private removeNode(node: DoubleListNode) {
    const prev = node.prev;
    const next = node.next;

    prev.next = next;
    next.prev = prev;
  }
}

class DoubleListNode {
  public key: number;
  public value: number;
  public prev: DoubleListNode | null;
  public next: DoubleListNode | null;

  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}


const lru = new LRUCache(2);
lru.put(1, 1); // 缓存是 {1=1}
lru.put(2, 2); // 缓存是 {1=1, 2=2}
lru.get(1);    // 返回 1