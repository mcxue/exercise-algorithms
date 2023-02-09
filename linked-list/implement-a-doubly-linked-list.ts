// 实现双向链表

class DoubleLinkedList {
  value: number;
  next: DoubleLinkedList | null;
  previous: DoubleLinkedList | null;

  constructor(value: number, next: DoubleLinkedList | null, previous: DoubleLinkedList | null) {
    this.value = value;
    this.next = next;
    this.previous = next;
  }
}
