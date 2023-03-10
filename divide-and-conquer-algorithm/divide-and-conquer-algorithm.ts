// 理解分治算法

/**
 * 分治算法是一种处理问题的思想，递归是一种编程技巧。分治算法一般适合递归来实现，每一层递归都会涉及下面这样 3 个操作
 * 1. 分解：将原问题分解成一系列子问题
 * 2. 解决：递归地求解各个子问题
 * 3. 合并：将子问题的结果合并成原问题的结果
 */

/**
 * 能用分治算法解决的问题，一般需要满足下面这 4 个条件
 * 1. 原问题与分解成的小问题具有相同的结构
 * 2. 由元问题分解成的子问题可以独立求解，子问题之间没有相关性
 * 3. 具备分解终止条件
 * 4. 可以将子问题的结果合并成原问题的结果，而这个合并操作的代价不能太大
 */
