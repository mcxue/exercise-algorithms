// 实现广度优先搜索

/**
 * 要点：
 * 1. 使用一个队列存储顶点，首次将起始顶点入队，然后开始将队列中的节点逐个出队并将其连接的、未访问过的节点逐个入队，直到队列为空
 * 2. 使用一个数组存储顶点是否访问过，在将队列中的节点逐个出队时，将该节点设置为已访问，作为节点无需入队的判断依据
 * 3. 使用一个数组存储访问顺序，在访问节点 A 后继续访问其相邻的节点 B 时，记录下 B 是从 A 搜索到的
 */


/**
 * 在二叉树中使用广度优先搜索节点值为指定值的节点，返回访问顺序（图中搜索时候需要记录顶点是否访问，对于树则不需要记录）
 * 树长这样，这里假定每个节点值都不同，方便使用数组存储访问路径
 *      1
 *    2   3
 *   4 5 6 7
 */
class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value?: number, left?: TreeNode, right?: TreeNode) {
    this.value = value === undefined ? 0 : value;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const breadthFirstSearchInTreeNode = (treeNode: TreeNode, value: number) => {
  const previousList: number[] = [];
  const queue = [];
  queue.push(treeNode);
  while (queue.length >= 1) {
    const node = queue.shift() as TreeNode;
    console.log('遍历的节点值：',node.value)
    if (node.value === value) {
      const result = [];
      let cursor = node.value;
      result.push(node.value);
      while (previousList[cursor]) {
        result.unshift(previousList[cursor]);
        cursor = previousList[cursor];
      }
      return result;
    }
    if (node.left) {
      previousList[node.left.value] = node.value;
      queue.push(node.left);
    }
    if (node.right) {
      previousList[node.right.value] = node.value;
      queue.push(node.right);
    }
  }
  return [];
};

/**
 * 预期结果 [1, 2, 5]
 */
// const generateTreeNode = () => {
//   const treeNode4 = new TreeNode(4);
//   const treeNode5 = new TreeNode(5);
//   const treeNode6 = new TreeNode(6);
//   const treeNode7 = new TreeNode(7);
//   const treeNode2 = new TreeNode(2, treeNode4, treeNode5);
//   const treeNode3 = new TreeNode(3, treeNode6, treeNode7);
//   return new TreeNode(1, treeNode2, treeNode3);
// };
// const treeNode = generateTreeNode();
// console.log(breadthFirstSearchInTreeNode(treeNode, 5));
