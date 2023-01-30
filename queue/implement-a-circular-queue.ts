class CircularQueue {
  #array: (number | null)[] = [];
  #max: number;
  #head: number = 0;
  #tail: number = 0;

  constructor(max: number) {
    this.#max = max;
    for (let i = 0; i <= max; i++) { // 循环队列，如果最大个数为 max，则需要申请 max + 1 个位置
      this.#array[i] = null;
    }
  }

  push(n: number) {
    if ((this.#tail + 1) % (this.#max + 1) === this.#head) return; // 只剩最后一个空，不能往里放数据
    this.#array[this.#tail] = n;
    this.#tail = (this.#tail + 1) % (this.#max + 1);
  }

  pop() {
    if (this.#head === this.#tail) return null;
    const result = this.#array[this.#head];
    this.#array[this.#head] = null;
    this.#head = (this.#head + 1) % (this.#max + 1);
    return result;
  }

  get() {
    return this.#array;
  }
}

const circularQueue = new CircularQueue(3);
circularQueue.push(1);
circularQueue.push(2);
circularQueue.push(3);
circularQueue.push(4);

console.log(circularQueue.get());
console.log(circularQueue.pop());
console.log(circularQueue.pop());
console.log(circularQueue.get());

circularQueue.push(6)
circularQueue.push(7)

console.log(circularQueue.pop());
console.log(circularQueue.get());


