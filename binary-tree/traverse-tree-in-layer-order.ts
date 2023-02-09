// 如何实现按层遍历？

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

/**
 * 树 treeNode1 长这样
 *      1
 *    2   3
 *   4 5 6 7
 */
const treeNode4 = new TreeNode(4);
const treeNode5 = new TreeNode(5);
const treeNode6 = new TreeNode(6);
const treeNode7 = new TreeNode(7);
const treeNode2 = new TreeNode(2, treeNode4, treeNode5);
const treeNode3 = new TreeNode(3, treeNode6, treeNode7);
const treeNode1 = new TreeNode(1, treeNode2, treeNode3);

// 按层遍历，借助队列先进先出的特性 期望的输出顺序为：1 2 3 4 5 6 7
//
const layerOrderTraverse = (treeNode: TreeNode | null) => {
  if (treeNode === null) return;
  const array: TreeNode[] = [];
  array.push(treeNode);
  while (array.length !== 0) {
    const node = array.shift() as TreeNode;
    console.log(node.value);
    if (node.left) array.push(node.left);
    if (node.right) array.push(node.right);
  }
};
// layerOrderTraverse(treeNode1);
