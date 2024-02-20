// 题目：反转链表
// 反转一个单链表。

// 示例：
// plaintext
// Copy code
// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL
// 函数签名：

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseList(head) {
    // your code here
    const dummy = new ListNode(-1);
    let current = head;
    let next = null;

    while (current) {

        //刻意练习：重点 列一下转换关系
        // dummy = -1
        // cur = 5
        // next = null;

        // next -> 4 -> current.next
        // currnet.next -> null -> dummy.next null
        // dummy.next -> 5 -> current
        next = current.next;
        current.next = dummy.next;
        dummy.next = current;
        current = next;
    
    }


let list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);

console.log(reverseList(list)); // 5->4->3->2->1->NULL

