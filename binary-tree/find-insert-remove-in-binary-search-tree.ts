// 二叉查找树的查找、插入和删除操作

/**
 * 二叉树查找树的特点：对于任意一个节点，其左子树中所有节点的值比该节点的值小，其右子数中所有节点的值比该节点的值大
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

/**
 * 树 treeNode5 长这样
 *      5
 *    3   7
 *   1 4 6 9
 */
const treeNode1 = new TreeNode(1);
const treeNode4 = new TreeNode(4);
const treeNode6 = new TreeNode(6);
const treeNode9 = new TreeNode(9);
const treeNode3 = new TreeNode(3, treeNode1, treeNode4);
const treeNode7 = new TreeNode(7, treeNode6, treeNode9);
const treeNode5 = new TreeNode(5, treeNode3, treeNode7);

// 查询节点，这里用了递归技巧，改写成循环也不难哦
const findNodeInSearchBinaryNode = (value: number, treeNode: TreeNode | null): null | TreeNode => {
  if (treeNode === null) return null;
  if (value === treeNode.value) return treeNode;
  if (value < treeNode.value) {
    return findNodeInSearchBinaryNode(value, treeNode.left);
  } else {
    return findNodeInSearchBinaryNode(value, treeNode.right);
  }
};
// console.log(findNodeInSearchBinaryNode(3, treeNode5));
// console.log(findNodeInSearchBinaryNode(8, treeNode5));

// 插入节点，这里简化操作，将要插入的数据放在叶子节点上
const insertNodeInSearchBinaryNode = (value: number, treeNode: TreeNode | null) => {
  if (!treeNode) return new TreeNode(value);
  let cursor = treeNode;
  while ((value < cursor.value && cursor.left !== null) || (value > cursor.value && cursor.right !== null) || value === treeNode.value) {
    if (value < cursor.value) {
      cursor = cursor.left as TreeNode;
    } else {
      cursor = cursor.right as TreeNode;
    }
  }
  if (value === cursor.value) return;
  if (value < cursor.value) {
    cursor.left = new TreeNode(value);
  } else {
    cursor.right = new TreeNode(value);
  }
};
// insertNodeInSearchBinaryNode(8, treeNode5);
// console.log(treeNode5);

// 删除节点，上面查找节点使用了递归技巧，这里使用循环练习一下
/**
 * 分三种情况讨论
 * 1. 如果删除的节点是叶子节点，则直接将其父节点的指针指向空
 * 2. 如果删除的节点只有一个子节点，则将其父节点的指针指向要删除的节点的子节点
 * 3. 如果删除的节点有两个子节点，则找到该节点的右子树中的"最小节点"，将要删除的节点的数据替换成"最小节点"的数据，然后删除"最小节点"
 */

const removeNodeInSearchBinaryNode = (value: number, treeNode: TreeNode | null) => {
  if (treeNode === null) return;
  let cursor: TreeNode | null = treeNode; // 寻找要删除的节点
  let cursorParent: TreeNode | null = null; // 存储要删除的节点的父节点
  while (cursor !== null && cursor.value !== value) {
    if (value < cursor.value) {
      cursorParent = cursor;
      cursor = cursor.left;
    } else {
      cursorParent = cursor;
      cursor = cursor.right;
    }
  }
  if (cursor === null) return;
  if (cursor.left && cursor.right) { // 当删除的节点有两个子节点时
    let cursor2 = cursor.right; // 寻找删除的节点的右子树中"最小节点"
    let cursor2Parent = cursor; // "最小节点"的父节点
    while (cursor2.left) {
      cursor2Parent = cursor2;
      cursor2 = cursor2.left;
    }
    cursor.value = cursor2.value;
    // 将指针指向"最小的节点"，此刻要删除掉它，它一定满足"至多只有一个子节点时"，所有后面的代码一定会执行
    cursor = cursor2;
    cursorParent = cursor2Parent;
  }
  // 当删除的节点至多只有一个子节点时，进行如下操作
  const cursorChild = cursor.left ? cursor.left : cursor.right;
  if (cursorParent!.left === cursor) { // 删除的节点是其父节点的左节点
    cursorParent!.left = cursorChild;
  } else { // 删除的节点是其父节点的左节点
    cursorParent!.right = cursorChild;
  }
};
// removeNodeInSearchBinaryNode(3, treeNode5);
// console.log(treeNode5);

