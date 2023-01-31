// 基于链表实现二叉树

/**
 * 对于非完全二叉树，一般使用链表实现
 */

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
