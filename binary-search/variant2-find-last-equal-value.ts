// 变体2: 查找最后一个值等于给定值的元素

const binarySearchVariant2 = (list: number[], value: number) => {
  let left = 0;
  let right = list.length - 1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (list[middle] <= value) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  if (right >= 0 && list[right] === value) return right;
  return -1;
};

// const list = [1, 2, 3, 4, 5, 5, 5, 5, 6, 8, 8, 9];
// console.log(binarySearchVariant2(list, 5));
