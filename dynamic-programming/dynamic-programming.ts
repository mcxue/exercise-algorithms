// 理解动态规划

/**
 * 动态规划的基本思路：
 * 我们把求解问题的过程分解为多个决策阶段。
 * 记录每一个阶段可达的状态集合（去掉重复的），然后通过当前阶段的状态集合，推导下一个阶段的状态集合，动态地往前推进。
 */

/**
 * 符合"一个模型和三个特征"的问题适合使用动态规划解决
 * 模型：多阶段决策最优解模型
 * 特征1：最优子结构
 * 特征2：无后效性
 * 特征3：重复子问题
 */

/**
 * 动态规划的两种解题方法
 * 1. 状态转移表法
 * 2. 状态转移方程法
 */

/**
 * 背包问题
 * 我们有一个背包，背包总的承载重量是 Wkg。现在我们有 n 个物品，每个物品的重量不等，并且不可分割。我们现在期望选择几件物品，装载到背包中。在不超过背包所能装载重量的前提下，背包中物体总重量的最大值是多少呢？
 */

const dynamicProgramming = (items: { label: string, weight: number }[], limitWeight: number) => {
  const states: boolean[][] = [];
  for (let i = 0; i < items.length; i++) { // 初始化状态表
    for (let j = 0; j <= limitWeight; j++) {
      if (j === 0) {
        states[i] = [];
      }
      states[i][j] = false;
    }
  }
  states[0][0] = true;
  if (items[0].weight <= limitWeight) {
    states[0][items[0].weight] = true;
  }
  for (let i = 1; i < items.length; i++) {
    for (let j = 0; j <= limitWeight; j++) { // 不把第 i 个物品放入背包
      if (states[i - 1][j]) {
        states[i][j] = true;
      }
    }
    for (let j = 0; j <= limitWeight - items[i].weight; j++) { // 把第 i 个物品放入背包
      if (states[i - 1][j]) {
        states[i][j + items[i].weight] = true;
      }
    }
  }
  for (let i = limitWeight; i >= 0; i--) {
    if (states[items.length - 1][i]) return i;
  }
  return 0;
};

// const items = [
//   { label: 'A', weight: 2 },
//   { label: 'B', weight: 2 },
//   { label: 'C', weight: 4 },
//   { label: 'D', weight: 6 },
//   { label: 'E', weight: 3 },
// ];
// const limitWeight = 9;
// console.log(dynamicProgramming(items, limitWeight));
