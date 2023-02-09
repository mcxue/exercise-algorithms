// 实现深度优先搜索

/**
 * 深度优先搜索非常适合使用递归实现
 * 要点如下：
 * 1. 递归技巧：搜索节点 A 到节点 S 的路径时，访问 A 的相邻节点 B，然后递归搜索节点 B 到节点 S 的路径
 * 2. 使用一个数组存储节点是否访问过，作为不再递归的判断依据
 * 3. 使用一个数组存储访问顺序，在访问节点 A 后继续访问其相邻的节点 B 时，记录下 B 是从 A 搜索到的
 */

/**
 * 在二叉树中使用深度优先搜索节点值为指定值的节点，返回访问顺序（图中搜索时候需要记录顶点是否访问，对于树则不需要记录）
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

const depthFirstSearchInTreeNode = (treeNode: TreeNode | null, value: number) => {
  if (!treeNode) return [];
  const previousList: number[] = [];
  const searchCursor = (treeNode: TreeNode, value: number, previousList: number[]): number | undefined => {
    console.log('遍历的节点值：',treeNode.value);
    if (treeNode.value === value) {
      return treeNode.value;
    }
    if (treeNode.left) {
      previousList[treeNode.left.value] = treeNode.value;
      let found = searchCursor(treeNode.left, value, previousList);
      if (found) return found;
    }
    if (treeNode.right) {
      previousList[treeNode.right.value] = treeNode.value;
      return searchCursor(treeNode.right, value, previousList);
    }
    return undefined;
  };
  const foundValue = searchCursor(treeNode, value, previousList);
  console.log(foundValue);
  if (!foundValue) return [];
  const result = [foundValue];
  let cursor = foundValue;
  while (previousList[cursor]) {
    result.unshift(previousList[cursor]);
    cursor = previousList[cursor];
  }
  return result;
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
// console.log(depthFirstSearchInTreeNode(treeNode, 5));
