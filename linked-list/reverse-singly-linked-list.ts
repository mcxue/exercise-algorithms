// 单链表反转

class SinglyLinkedList {
  value: number;
  next: SinglyLinkedList | null;

  constructor(value?: number, next?: SinglyLinkedList | null) {
    this.value = value === undefined ? 0 : value;
    this.next = next === undefined ? null : next;
  }
}

const linkedList = new SinglyLinkedList(1);
linkedList.next = new SinglyLinkedList(3);
linkedList.next.next = new SinglyLinkedList(4);
linkedList.next.next.next = new SinglyLinkedList(2);

const reverseSinglyLinkedList = (linkedList: SinglyLinkedList | null) => {
  let cursor = linkedList;
  let previousNode = null;
  let tempNext = null;
  while (cursor) { // 先处理当前指向的节点，在末尾将指针指向下一个。检查边界条件，cursor 为第一个或最后一个时，下列函数满足需求
    tempNext = cursor.next || null;
    cursor.next = previousNode
    previousNode = cursor;
    cursor = tempNext;
  }
  return previousNode;
};
