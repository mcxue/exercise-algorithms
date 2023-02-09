// 使用邻接表的存储方法实现图

/**
 * 邻接表有点想哈希表，每个顶点对应一条链表
 * 下面实现的是无向、无权的图
 */

class SinglyLinkedList {
  value: number;
  next: SinglyLinkedList | null;

  constructor(value?: number, next?: SinglyLinkedList | null) {
    this.value = value === undefined ? 0 : value;
    this.next = next === undefined ? null : next;
  }
}

class AdjacencyListGraph {
  #vertexAmount: number;
  list: SinglyLinkedList[];

  constructor(amount: number) {
    this.#vertexAmount = amount;
    this.list = [];
    for (let i = 0; i < amount; i++) {
      this.list[i] = new SinglyLinkedList();
    }
  }

  addEdge(a: number, b: number) {
    // 我没有给链表实现添加一个数据的操作，先暂时这样示意
    this.list[a].next = new SinglyLinkedList(b);
    this.list[b].next = new SinglyLinkedList(a);
  }
}

// const adjacencyListGraph = new AdjacencyListGraph(3);
// adjacencyListGraph.addEdge(1, 2);
// console.log(adjacencyListGraph.list);
