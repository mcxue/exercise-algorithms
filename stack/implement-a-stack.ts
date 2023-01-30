// 基于数组实现的顺序栈

class Stack {
  #array: number[] = [];
  #max: number = 10;

  constructor(max: number) {
    this.#max = max;
  }

  push(n: number) {
    if (this.#array.length >= this.#max) return;
    this.#array.push(n);
  }

  pop() {
    return this.#array.pop();
  }

  get() {
    return this.#array;
  }
}

const stack = new Stack(5);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
console.log(stack.get());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
