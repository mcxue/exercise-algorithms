// 理解回溯算法

/**
 * 回溯的处理思想有点类似枚举，枚举所有的解，找出其中满足期望的解。
 * 面对岔路口时随意选一条路走，当发现这条路走不通时，就会回退到上一个"岔路口"，另选一种走法继续走。
 * 深度优先算法利用的是回溯算法思想。
 */

/**
 * 背包问题
 * 我们有一个背包，背包总的承载重量是 Wkg。现在我们有 n 个物品，每个物品的重量不等，并且不可分割。我们现在期望选择几件物品，装载到背包中。在不超过背包所能装载重量的前提下，背包中物体总重量的最大值是多少呢？
 */

const backtrackingAlgorithm = (items: { label: string, weight: number }[], limitWeight: number) => {
  let maxWeight = 0;
  const fnCursive = (index: number, currentWeight: number) => {
    if (currentWeight === limitWeight || index === items.length) { // 终止条件，背包无剩余承重或已无物体进行装了
      if (currentWeight > maxWeight) {
        maxWeight = currentWeight;
      }
      return;
    }
    fnCursive(index + 1, currentWeight); // 选择不装当前第 index 物品
    if (currentWeight + items[index].weight <= limitWeight) { // 在装当前物品后不超过背包承受重量的情况下，选择装当前第 index 物品
      fnCursive(index + 1, currentWeight + items[index].weight);
    }
  };
  fnCursive(0, 0);
  return maxWeight;
};

// const items = [
//   { label: 'A', weight: 2 },
//   { label: 'B', weight: 2 },
//   { label: 'C', weight: 4 },
//   { label: 'D', weight: 6 },
//   { label: 'E', weight: 3 },
// ];
// const limitWeight = 9;
// console.log(backtrackingAlgorithm(items, limitWeight));

/**
 * 上面算法有很多重复计算的问题，比如在下面的数据中，(0,0) 的状态和 (1,0) 的状态是一样的
 * 这里新增一个缓存用于记录 (index,currentWeight) 的状态
 * 它与动态规划的执行效率基本上没有差别
 */
const backtrackingAlgorithm2 = (items: { label: string, weight: number }[], limitWeight: number) => {
  let maxWeight = 0;
  let cache: boolean[][] = []; // items.length 列，limitWeight 行的二维数组，默认为 false
  for (let i = 0; i < items.length; i++) { // 初始化缓存
    for (let j = 0; j <= limitWeight; j++) {
      if (j === 0) {
        cache[i] = [];
      }
      cache[i][j] = false;
    }
  }

  const fnCursive = (index: number, currentWeight: number) => {
    if (currentWeight === limitWeight || index === items.length) {
      if (currentWeight > maxWeight) {
        maxWeight = currentWeight;
      }
      return;
    }
    if (cache[index][currentWeight]) return;
    cache[index][currentWeight] = true;
    fnCursive(index + 1, currentWeight);
    if (currentWeight + items[index].weight <= limitWeight) {
      fnCursive(index + 1, currentWeight + items[index].weight);
    }
  };
  fnCursive(0, 0);
  return maxWeight;
};

// const items = [
//   { label: 'A', weight: 2 },
//   { label: 'B', weight: 2 },
//   { label: 'C', weight: 4 },
//   { label: 'D', weight: 6 },
//   { label: 'E', weight: 3 },
// ];
// const limitWeight = 9;
// console.log(backtrackingAlgorithm2(items, limitWeight));
