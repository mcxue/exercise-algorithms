/**
 * 选择排序
 * 左侧是排好序的列表，右侧是未排好序的列表，右侧列表拿出最小的值插入到左侧列表的末尾
 */

const selectionSort = (list: number[]) => {
  let unsortedFirstCursor = 0;
  while (unsortedFirstCursor <= list.length - 2) {
    let minCursor = unsortedFirstCursor;
    let cursor = unsortedFirstCursor + 1;
    while (cursor <= list.length - 1) {
      if (list[cursor] < list[minCursor]) {
        minCursor = cursor;
      }
      cursor += 1;
    }
    if (list[unsortedFirstCursor] > list[minCursor]) {
      const temp = list[unsortedFirstCursor];
      list[unsortedFirstCursor] = list[minCursor];
      list[minCursor] = temp;
    }
    unsortedFirstCursor += 1;
  }
};

// const list = [6, 8, 7, 3, 5, 4, 2, 1, 0, 9];
// selectionSort(list);
// console.log(list);
