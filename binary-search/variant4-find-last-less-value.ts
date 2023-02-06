// 变体3: 查找最后一个值小于或等于给定值的元素

const binarySearchVariant4 = (list: number[], value: number) => {
  let left = 0;
  let right = list.length - 1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (list[middle] > value) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  if (right >= 0 && list[right] <= value) return right;
  return -1;
};

// const list = [1, 2, 3, 4, 5, 5, 5, 5, 6, 8, 8, 9];
// console.log(binarySearchVariant4(list, 5));
