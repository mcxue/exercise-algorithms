/**
 * 插入排序
 * 左侧是排好序的列表，右侧是未排好序的列表，右侧列表依次拿出一个值插入到左侧列表
 */

const insertionSort = (list: number[]) => {
  let unsortedFirstCursor = 1;
  while (unsortedFirstCursor <= list.length - 1) {
    let cursor = unsortedFirstCursor;
    while (cursor - 1 >= 0 && list[cursor] < list[cursor - 1]) {
      const temp = list[cursor];
      list[cursor] = list[cursor - 1];
      list[cursor - 1] = temp;
      cursor -= 1;
    }
    unsortedFirstCursor += 1;
  }
};

// const list = [6, 8, 7, 3, 5, 4, 2, 1, 0, 9];
// insertionSort(list);
// console.log(list);
