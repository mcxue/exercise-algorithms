// 实现单链表

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

let cursor = linkedList;
console.log(linkedList.data);
while (cursor.next !== null) {
  cursor = cursor.next;
  console.log(cursor.data);
}
