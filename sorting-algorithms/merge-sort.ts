/**
 * 归并排序
 * 使用到了递归技巧和分而治之的思想，编写的核心在于合并两个有序数组
 * 递归公式：mergeSortRecursive(first,last) = mergeFn(mergeSortRecursive(first,middle), mergeSortRecursive(middle+1,last))
 */

const mergeSort = (list: number[]) => {
  const mergeFn = (first: number, middle: number, last: number) => {
    let cursor1 = first;
    let cursor2 = middle + 1;
    const tempList: number[] = [];
    while (cursor1 <= middle && cursor2 <= last) {
      if (list[cursor1] <= list[cursor2]) {
        tempList.push(list[cursor1]);
        cursor1 += 1;
      } else {
        tempList.push(list[cursor2]);
        cursor2 += 1;
      }
    }
    if (cursor1 > middle) {
      while (cursor2 <= last) {
        tempList.push(list[cursor2]);
        cursor2 += 1;
      }
    } else if (cursor2 > last) {
      while (cursor1 <= middle) {
        tempList.push(list[cursor1]);
        cursor1 += 1;
      }
    }
    for (let i = 0; i < tempList.length; i++) {
      list[first + i] = tempList[i];
    }
  };
  const mergeSortRecursive = (first: number, last: number) => {
    if (first >= last) return;
    const middle = Math.floor(first + (last - first) / 2);
    mergeSortRecursive(first, middle);
    mergeSortRecursive(middle + 1, last);
    mergeFn(first, middle, last);
  };
  mergeSortRecursive(0, list.length - 1);
};

// const list = [6, 8, 7, 3, 5, 4, 2, 1, 0, 9];
// mergeSort(list);
// console.log(list);
