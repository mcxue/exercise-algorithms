/**
 * 冒泡排序
 * 每次把最大值冒泡到数组尾部
 */

const bubbleSort = (list: number[]) => {
  let unsortedLastCursor = list.length - 1; // 记录未排序的列表中最后一个数的位置
  while (unsortedLastCursor >= 1) { // 未排序的个数只剩一个时，退出循环
    let cursor = 0;
    while (cursor + 1 <= unsortedLastCursor) {
      if (list[cursor] > list[cursor + 1]) {
        const temp = list[cursor];
        list[cursor] = list[cursor + 1];
        list[cursor + 1] = temp;
      }
      cursor += 1;
    }
    unsortedLastCursor -= 1;
    cursor = 0;
  }
};

// const list = [6, 8, 7, 3, 5, 4, 2, 1, 0, 9];
// bubbleSort(list);
// console.log(list);
