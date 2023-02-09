// 在单链表中实现查找、插入、删除、查找第 k 个元素

// 查找 node.value = value 的节点
const findNode = (linkedList: SinglyLinkedList, value: number) => {
  let cursor: SinglyLinkedList | null = linkedList;
  while (cursor !== null && cursor.value !== value) {
    cursor = cursor.next;
  }
  return cursor;
};

// 在节点 b 后插入节点 x
const insertNode = (b: SinglyLinkedList, x: SinglyLinkedList) => {
  x.next = b.next;
  b.next = x;
};

// 在已知前驱节点 a 的情况下删除节点 b
const removeNode = (a: SinglyLinkedList, b: SinglyLinkedList) => {
  a.next = a?.next?.next || null;
};

// 查找第 k 个元素
const getNode = (linkedList: SinglyLinkedList, k: number) => {
  let i = 0;
  let cursor: SinglyLinkedList | null = linkedList;
  if (cursor !== null && i !== k) {
    cursor = cursor.next;
    i += 1;
  }
  return cursor;
};
