// 使用邻接矩阵的存储方法实现图

/**
 * 邻接矩阵底层依赖二维数组
 * 下面实现的是无向、无权的图
 */
class AdjacencyMatrixGraph {
  #vertexAmount: number;
  matrix: boolean[][];

  constructor(amount: number) {
    this.#vertexAmount = amount;
    this.matrix = [];
    for (let i = 0; i < amount; i++) {
      for (let j = 0; j < amount; j++) {
        if (!this.matrix[i]) {
          this.matrix[i] = [];
        }
        this.matrix[i][j] = false;
      }
    }
  }

  addEdge(a: number, b: number) {
    this.matrix[a][b] = true;
    this.matrix[b][a] = true;
  }
}

// const adjacencyMatrixGraph = new AdjacencyMatrixGraph(3);
// adjacencyMatrixGraph.addEdge(1, 2);
// console.log(adjacencyMatrixGraph.matrix);
