// 变体1: 查找第一个值等于给定值的元素

const binarySearchVariant1 = (list: number[], value: number) => {
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
  // 一次次循环中 middle 最终会指向我们想要的答案(如果有答案的话)，然后 right 指向答案的前一个，在下一次循环 left 会逐渐逼近 right，最后因大于 right 推出循环，此时 left 指向 middle
  if (left <= list.length - 1 && list[left] === value) return left;
  return -1;
};

// const list = [1, 2, 3, 4, 5, 5, 5, 5, 6, 8, 8, 9];
// console.log(binarySearchVariant1(list, 5));

