// 变体: 如果有序数组是一个循环有序数组，如 [4,5,6,1,2,3]，那么，针对这种情况如何实现一个求“值等于给定值”的二分查找算法呢？

const binarySearchVariantCycle = (list: number[], value: number) => {
  let left = 0;
  let right = list.length - 1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (list[middle] === value) return middle;
    if (list[left] > list[middle]) { // middle 左边是循环有序数组，右边是有序数组
      if (list[middle] < value && value <= list[right]) { // 将 left 向右逼近的条件
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    } else { // middle 左边是有序数组，右边是循环有序数组
      if (list[middle] > value && value >= list[left]) { // 将 right 向左逼近的条件
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
  }
  return -1;
};

// const list = [8, 9, 10, 12, 15, 17, 18, 19, 1, 2, 3, 4, 5, 7];
// console.log(binarySearchVariantCycle(list, 15));
