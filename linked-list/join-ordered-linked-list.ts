// 两个有序的链表合并

class SinglyLinkedList {
  value: number;
  next: SinglyLinkedList | null;

  constructor(value?: number, next?: SinglyLinkedList | null) {
    this.value = value === undefined ? 0 : value;
    this.next = next === undefined ? null : next;
  }
}

const linkedList = new SinglyLinkedList(1);
linkedList.next = new SinglyLinkedList(4);
linkedList.next.next = new SinglyLinkedList(7);
linkedList.next.next.next = new SinglyLinkedList(8);

const linkedList2 = new SinglyLinkedList(1);
linkedList2.next = new SinglyLinkedList(2);
linkedList2.next.next = new SinglyLinkedList(5);
linkedList2.next.next.next = new SinglyLinkedList(9);

const joinTwoSortedLinkedList = (linkedList: SinglyLinkedList | null, linkedList2: SinglyLinkedList | null) => {
  let cursor = linkedList;
  let cursor2 = linkedList2;
  let cursor3: SinglyLinkedList | null = null;
  let result: SinglyLinkedList | null = null;
  while (cursor && cursor2) {
    if (!result) { // 确定第一个节点
      if (cursor.value <= cursor2.value) {
        result = cursor3 = cursor;
        cursor = cursor.next;
      } else {
        result = cursor3 = cursor2;
        cursor2 = cursor2.next;
      }
    } else { // 确定第二个及之后的节点
      if (cursor.value <= cursor2.value) {
        cursor3!.next = cursor;
        cursor3 = cursor3!.next;
        cursor = cursor.next;
      } else {
        cursor3!.next = cursor2;
        cursor3 = cursor3!.next;
        cursor2 = cursor2.next;
      }
    }
  }
  if (cursor === null) {
    if (cursor3) {
      cursor3.next = cursor2;
    } else {
      result = cursor2;
    }
  } else if (cursor2 === null) {
    if (cursor3) {
      cursor3.next = cursor;
    } else {
      result = cursor;
    }
  }
  return result;
};
