// 基于链表实现二叉树

/**
 * 对于非完全二叉树，一般使用链表实现
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
