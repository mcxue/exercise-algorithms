// 变体3: 查找第一个值大于或等于给定值的元素

const binarySearchVariant3 = (list: number[], value: number) => {
  let left = 0;
  let right = list.length - 1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (list[middle] >= value) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  // 在一次次循环中，left 指向第一个给定值
  if (left < list.length - 1 && list[left] >= value) return left;
  return -1;
};

// const list = [1, 2, 3, 4, 5, 5, 5, 5, 6, 8, 8, 9];
// console.log(binarySearchVariant3(list, 5));
