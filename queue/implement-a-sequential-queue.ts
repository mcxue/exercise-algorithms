class SequentialQueue {
  #max: number = 0;
  #array: number[] = [];

  constructor(max: number) {
    this.#max = max;
  }

  push(n: number) {
    if (this.#array.length >= this.#max) return;
    this.#array.push(n);
  }

  shift() {
    return this.#array.shift();
  }

  get() {
    return this.#array;
  }
}

const queue = new SequentialQueue(2);
queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue.get());
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());
