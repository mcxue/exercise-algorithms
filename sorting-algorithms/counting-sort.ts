/**
 * 计数排序
 * 计数排序是桶排序晒额特殊情况
 * 当排序的 n 个数据的范围不大时，如最大值是 k，则可以划分 k 个"桶"，每个"桶"内的数据都是相等的，省去了"桶"内排序的时间
 */

/**
 * 这里有一份50名学生的成绩，分数范围 0~100，这里对它们分数进行排序
 */

const countingSort = (list: number[]) => {
  const max = list.reduce((result, current) => { // 计算最大值
    return current > result ? current : result;
  }, 0);

  const countList: number[] = []; // 申请一个计数列表
  for (let i = 0; i <= max; i++) {
    countList[i] = 0;
  }
  for (let i = 0; i < list.length; i++) { // 顺序累加
    countList[list[i]] += 1;
  }
  for (let i = 1; i < countList.length; i++) {
    if (Number.isInteger(countList[i])) {
      countList[i] += countList[i - 1];
    }
  }
  const tempResult = [];
  for (let i = list.length - 1; i >= 0; i--) {
    const cursor = countList[list[i]] - 1;
    tempResult[cursor] = list[i];
    countList[list[i]] -= 1;
  }
  for (let i = 0; i < tempResult.length; i++) {
    list[i] = tempResult[i];
  }
};

// const list = [89, 11, 16, 96, 57, 62, 18, 56, 87, 90, 93, 84, 43, 84, 90, 0, 39, 78, 77, 96, 33, 50, 80, 32, 43, 98, 66, 2, 49, 42, 80, 44, 45, 14, 49, 69, 76, 1, 66, 95, 30, 43, 2, 77, 8, 22, 83, 42, 9, 38];
// countingSort(list);
// console.log(list);
