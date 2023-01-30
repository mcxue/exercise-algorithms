// 链表中环的检测

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
linkedList.next.next.next = new SinglyLinkedList(2);
linkedList.next.next.next.next = linkedList;

const detectSinglyLinkedListRing = (linkedList: SinglyLinkedList | null) => {
  let cursor1 = linkedList;
  let cursor2 = linkedList?.next || null;
  while (cursor1 !== cursor2 && cursor2 !== null) {
    cursor1 = cursor1?.next || null;
    cursor2 = cursor2?.next?.next || null;
  }
  return cursor1 === cursor2;
};

