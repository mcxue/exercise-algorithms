/**
 * 快速排序
 * 选一个值作为基准点，在剩余的的值中，比它小的排左边，比它大的排右边
 * 重点在于选择中点分区后的排序
 * 递推公式：quickSortRecursive(first, last) = quickSortRecursive(first, pivot) + quickSortRecursive(pivot, last)
 */

const quickSort = (list: number[]) => {
  const quickSortRecursive = (first: number, last: number) => {
    if (first >= last) return;
    const pivot = list[last];
    let slowCursor = first;
    let quickCursor = first;
    while (quickCursor <= last - 1) {
      if (list[quickCursor] < pivot) {
        if (slowCursor !== quickCursor) {
          const temp = list[quickCursor];
          list[quickCursor] = list[slowCursor];
          list[slowCursor] = temp;
        }
        slowCursor += 1;
      }
      quickCursor += 1;
    }
    let pivotCursor = last;
    if (list[slowCursor] > pivot) { // 这个条件很容易忽视
      list[last] = list[slowCursor];
      list[slowCursor] = pivot;
      pivotCursor = slowCursor;
    }
    quickSortRecursive(first, pivotCursor - 1);
    quickSortRecursive(pivotCursor + 1, last);
  };
  quickSortRecursive(0, list.length - 1);
};

// const list = [6, 8, 7, 3, 5, 4, 2, 1, 0, 9];
// quickSort(list);
// console.log(list);
