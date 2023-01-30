// 实现双向链表

class DoubleLinkedList {
  data: number;
  next: DoubleLinkedList | null;
  previous: DoubleLinkedList | null;

  constructor(data: number, next: DoubleLinkedList | null, previous: DoubleLinkedList | null) {
    this.data = data;
    this.next = next;
    this.previous = next;
  }
}
