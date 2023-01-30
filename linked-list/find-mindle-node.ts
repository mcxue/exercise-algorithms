// 寻找链表的中间节点

class SinglyLinkedList {
  data: number;
  next: SinglyLinkedList | null;

  constructor(value?: number, next?: SinglyLinkedList | null) {
    this.data = value === undefined ? 0 : value;
    this.next = next === undefined ? null : next;
  }
}

const linkedList = new SinglyLinkedList(1);
linkedList.next = new SinglyLinkedList(3);
linkedList.next.next = new SinglyLinkedList(4);
linkedList.next.next.next = new SinglyLinkedList(2); // middle
linkedList.next.next.next.next = new SinglyLinkedList(8);
linkedList.next.next.next.next.next = new SinglyLinkedList(7);
linkedList.next.next.next.next.next.next = new SinglyLinkedList(9);

const findMiddleNode = (linkedList: SinglyLinkedList | null) => {
  if (linkedList === null) return linkedList;
  if (linkedList.next === null) return [linkedList, linkedList.next];
  let quickCursor: SinglyLinkedList | null = linkedList;
  let slowCursor: SinglyLinkedList | null = linkedList;
  let slowCursorPrevious = null;
  while (quickCursor !== null && quickCursor.next !== null) {
    quickCursor = quickCursor.next.next;
    if (quickCursor === null) {
      slowCursorPrevious = slowCursor;
    }
    slowCursor = slowCursor!.next;
  }
  if (quickCursor === null) { // 如果快指针指向 null，链表长度为偶数个，返回慢指针指向的的节点的前一个节点和慢指针指向的节点
    return [slowCursorPrevious, slowCursor];
  } else { // 如果快指针指向的不是 null，链表长度为奇数个，返回慢指针指向的节点
    return [slowCursor];
  }
};
