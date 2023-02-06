// 二分查找的递归与非递归实现

/**
 * 二分查找的非递归实现
 */

const binarySearch = (list: number[], value: number) => {
  let left = 0;
  let right = list.length - 1;
  while (left < right) {
    const middle = Math.floor((left + right) / 2);
    if (list[middle] === value) return middle;
    if (list[middle] > value) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
};

// const list = [1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 15, 17, 18, 19];
// console.log(binarySearch(list, 10));

/**
 * 二分查找的递归实现
 */

const binarySearch2 = (list: number[], value: number) => {
  const binarySearchRecursion = (list: number[], left: number, right: number, value: number): number => {
    if (left > right) {
      return -1;
    }
    const middle = Math.floor((left + right) / 2);
    if (list[middle] === value) return middle;
    if (list[middle] > value) {
      return binarySearchRecursion(list, left, middle - 1, value);
    } else {
      return binarySearchRecursion(list, middle + 1, right, value);
    }
  };
  return binarySearchRecursion(list, 0, list.length - 1, value);
};

// const list = [1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 15, 17, 18, 19];
// console.log(binarySearch2(list, 5));
