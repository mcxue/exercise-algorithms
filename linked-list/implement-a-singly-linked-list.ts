// 实现单链表

class SinglyLinkedList {
  value: number;
  next: SinglyLinkedList | null;

  constructor(value?: number, next?: SinglyLinkedList | null) {
    this.value = value === undefined ? 0 : value;
    this.next = next === undefined ? null : next;
  }
}

/**
 * 预期结果 1 3 4 2
 */
// const linkedList = new SinglyLinkedList(1);
// linkedList.next = new SinglyLinkedList(3);
// linkedList.next.next = new SinglyLinkedList(4);
// linkedList.next.next.next = new SinglyLinkedList(2);
// let cursor: null | SinglyLinkedList = linkedList;
// while (cursor) {
//   console.log(cursor.value);
//   cursor = cursor.next;
// }
