// 实现堆及其插入、查询、删除操作

/**
 *  堆的定义
 *  1. 堆必须是一个完全二叉树
 *  2. 堆中每个节点的值必须大于等于(或小于等于)其子树每个节点的值
 *  完全二叉树非常适合用数组存储
 */

/**
 * 这里实现大顶堆
 */
class Heap {
  #array: [null, ...number[]] = [null];

  insert(n: number) {
    this.#array.push(n);
    let cursor = this.#array.length - 1;
    if (cursor === 1) return this.#array;
    while (cursor >= 2 && this.#array[cursor]! > this.#array[Math.floor(cursor / 2)]!) { // 如果子节点大于父节点，交换两个节点的值
      const temp = this.#array[cursor];
      this.#array[cursor] = this.#array[Math.floor(cursor / 2)];
      this.#array[Math.floor(cursor / 2)] = temp;
      cursor = Math.floor(cursor / 2);
    }
    return this.#array;
  }

  findMax() {
    if (this.#array.length <= 1) return null;
    return this.#array[1];
  }

  removeMax() {
    if (this.#array.length === 1) {
      this.#array.pop();
      return this.#array;
    } else {
      this.#array[1] = this.#array.pop() as number;
      let cursor = 1;
      while ((this.#array[cursor] && this.#array[2 * cursor]) && (this.#array[cursor]! < this.#array[2 * cursor]! || (this.#array[2 * cursor + 1] && this.#array[cursor]! < this.#array[2 * cursor + 1]!))) {
        let sonCursor = 2 * cursor;
        if (this.#array[2 * cursor + 1]) {
          sonCursor = this.#array[2 * cursor]! > this.#array[2 * cursor + 1]! ? 2 * cursor : 2 * cursor + 1;
        }
        const temp = this.#array[cursor];
        this.#array[cursor] = this.#array[sonCursor];
        this.#array[sonCursor] = temp;
        cursor = sonCursor;
      }
      return this.#array;
    }
  }

  remove(n: number) {
    if (n <= 0 || !this.#array[n]) return null;
    const removeNumber = this.#array[n];
    const lastNumber = this.#array.pop();
    this.#array[n] = lastNumber as number;
    let cursor = n;
    if (lastNumber! < removeNumber!) { // 如果最后一个值小于删除的值，自上而下堆化
      while ((this.#array[cursor] && this.#array[2 * cursor]) && (this.#array[cursor]! < this.#array[2 * cursor]! || (this.#array[2 * cursor + 1] && this.#array[cursor]! < this.#array[2 * cursor + 1]!))) {
        let sonCursor = 2 * cursor;
        if (this.#array[2 * cursor + 1]) {
          sonCursor = this.#array[2 * cursor]! > this.#array[2 * cursor + 1]! ? 2 * cursor : 2 * cursor + 1;
        }
        const temp = this.#array[cursor];
        this.#array[cursor] = this.#array[sonCursor];
        this.#array[sonCursor] = temp;
        cursor = sonCursor;
      }
    } else if (lastNumber! > removeNumber!) { // 如果最后一个值大于删除的值，自上而下堆化
      while (cursor >= 2 && this.#array[cursor]! > this.#array[Math.floor(cursor / 2)]!) { // 如果子节点大于父节点，交换两个节点的值
        const temp = this.#array[cursor];
        this.#array[cursor] = this.#array[Math.floor(cursor / 2)];
        this.#array[Math.floor(cursor / 2)] = temp;
        cursor = Math.floor(cursor / 2);
      }
      return this.#array;
    }
  }
}

/**
 * 堆的样子长这样
 *    10
 *   9  8
 *  6 5 7 4
 */
// const heap = new Heap();
// heap.insert(4);
// heap.insert(5);
// heap.insert(7);
// heap.insert(6);
// heap.insert(10);
// heap.insert(9);
// console.log(heap.insert(8));
// console.log(heap.findMax());
// heap.removeMax();
// console.log(heap.removeMax());
// console.log(heap.remove(3))

