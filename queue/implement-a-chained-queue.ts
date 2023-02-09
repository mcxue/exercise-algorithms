class SinglyLinkedList {
  value: number;
  next: SinglyLinkedList | null;

  constructor(value?: number, next?: SinglyLinkedList | null) {
    this.value = value === undefined ? 0 : value;
    this.next = next === undefined ? null : next;
  }
}

class ChainedQueue {
  #head: SinglyLinkedList | null = null;
  #tail: SinglyLinkedList | null = null;
  #max: number = 0;
  #length: number = 0;

  constructor(max: number) {
    this.#max = max;
  }

  push(node: SinglyLinkedList) {
    if (this.#length >= this.#max) return;
    if (this.#head === null || this.#tail === null) { // 链表为空时，将头指针和尾指针指向该节点
      this.#head = node;
      this.#tail = node;
      this.#length += 1;
    } else { // 链表不为空
      this.#tail.next = node;
      this.#tail = node;
      this.#length += 1;
    }
  }

  shift() {
    if (this.#head === null || this.#tail === null) return null; // 链表为空时，啥也不做
    if (this.#head === this.#tail) { // 链表中只有一个节点时
      let node = this.#head;
      this.#head = null;
      this.#tail = null;
      this.#length -= 1;
      return node;
    } else { // 链表中有两个以上节点
      let node = this.#head;
      this.#head = this.#head.next;
      this.#length -= 1;
      node.next = null;
      return node;
    }
  }

  get() {
    return this.#head;
  }
}

const chainedQueue = new ChainedQueue(2);
chainedQueue.push(new SinglyLinkedList(1));
chainedQueue.push(new SinglyLinkedList(2));
chainedQueue.push(new SinglyLinkedList(3));
console.log(chainedQueue.get());
console.log(chainedQueue.shift());
console.log(chainedQueue.shift());
console.log(chainedQueue.shift());

