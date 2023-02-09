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