// 在单、双链表中实现删除“值等于给定值”的节点，删除给定指针指向的节点

// 在单链表中删除值等于 value 的节点
const removeNode1 = (linkedList: SinglyLinkedList | null, value: number) => {
  let cursor: SinglyLinkedList | null = linkedList;
  let previous = null;
  while (cursor !== null && cursor.data !== value) {
    previous = cursor;
    cursor = cursor.next;
  }
  if (cursor !== null) {
    if (previous !== null) {
      previous.next = cursor.next;
    } else {
      linkedList = linkedList ? linkedList.next : null;
    }
  }
};

// 在双链表中删除值等于 value 的节点
const removeNode2 = (linkedList: DoubleLinkedList | null, value: number) => {
  let cursor: DoubleLinkedList | null = linkedList;
  while (cursor !== null && cursor.data !== value) {
    cursor = cursor.next;
  }
  if (cursor !== null) {
    if (cursor.previous === null) {
      linkedList = linkedList ? linkedList.next : null;
      if (linkedList) {
        linkedList.previous = null;
      }
    }
    if (cursor.next === null) {
      if (cursor.previous) {
        cursor.previous.next = null;
      }
    } else {
      if(cursor.previous){
        cursor.previous.next = cursor.next;
        cursor.next.previous = cursor.previous
      }
    }
  }
};
