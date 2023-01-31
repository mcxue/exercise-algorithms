// 实现二叉树遍历：前序遍历、中序遍历、后序遍历

class TreeNode {
  data: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(data: number, left?: TreeNode, right?: TreeNode) {
    this.data = data;
    this.left = left ? left : null;
    this.right = right ? right : null;
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

// 前序遍历 期望的输出顺序为：1 2 4 5 3 6 7
const preOrderTraverse = (treeNode: TreeNode | null) => {
  if (treeNode === null || (treeNode.left === null && treeNode.right)) return;
  console.log(treeNode.data);
  preOrderTraverse(treeNode.left);
  preOrderTraverse(treeNode.right);
};
// preOrderTraverse(treeNode1);

// 中序遍历 期望的输出顺序为：4 2 5 1 6 3 7
const inOrderTraverse = (treeNode: TreeNode | null) => {
  if (treeNode === null || (treeNode.left === null && treeNode.right)) return;
  inOrderTraverse(treeNode.left);
  console.log(treeNode.data);
  inOrderTraverse(treeNode.right);
};
// inOrderTraverse(treeNode1);

// 后序遍历 期望的输出顺序为：4 5 2 6 7 3 1
const postOrderTraverse = (treeNode: TreeNode | null) => {
  if (treeNode === null || (treeNode.left === null && treeNode.right)) return;
  postOrderTraverse(treeNode.left);
  postOrderTraverse(treeNode.right);
  console.log(treeNode.data);
};
postOrderTraverse(treeNode1)


