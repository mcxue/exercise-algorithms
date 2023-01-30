// 删除链表倒数第 k 个节点

class SinglyLinkedList {
  data: number;
  next: SinglyLinkedList | null;

  constructor(value?: number, next?: SinglyLinkedList | null) {
    this.data = value === undefined ? 0 : value;
    this.next = next === undefined ? null : next;
  }
}

const linkedList = new SinglyLinkedList(1); // 倒数第 4
linkedList.next = new SinglyLinkedList(3); // 倒数第 3
linkedList.next.next = new SinglyLinkedList(4); // 倒数第 2
linkedList.next.next.next = new SinglyLinkedList(2); // 倒数第 1

const removeCountdownKNode = (linkedList: SinglyLinkedList | null, k: number) => {
  let cursor = linkedList;
  let diff = k + 1; // 倒数第 k 个节点与 cursor 相差的 diff 为 k，这里 cursor2 指向倒数第 k 个节点的前一个节点，所以 cursor2 与 cursor 相差 k+1
  while (cursor && diff !== 0) {
    cursor = cursor.next;
    diff -= 1;
  }
  if (diff >= 2) return linkedList;
  if (diff === 1) { // 当 diff 为 1 时，删除的是头节点
    linkedList = linkedList?.next || null;
    return linkedList;
  }
  let cursor2 = linkedList;
  while (cursor) {
    cursor = cursor.next;
    cursor2 = cursor2!.next;
  }
  if (cursor2) {
    cursor2.next = cursor2?.next?.next || null;
  }
  return linkedList;
};


