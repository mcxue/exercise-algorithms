// 贪心算法解决问题的步骤

/**
 * 贪心算法解决问题的步骤：
 * 1. 套用贪心算法问题模型。针对一组数据，事先定义限制值和期望值，希望从中选取几个数据，在满足限制值的情况下，期望值最大
 * 2. 尝试用贪心算法来解决
 * 3. 举例验证算法是否正确
 */

/**
 * 背包问题
 * 假设我们有一个可以容纳 100kg 物品的背包，可以装各种物品。我们有以下 5 种豆子，每种豆子的总量和总价值都各不相同。为了让背包中所装物品的总价值最大，我们如何选择在背包中装哪些豆子？每种豆子又该装多少呢？
 * 物品 总量(kg) 总价值(元)
 * 黄豆   100     100
 * 绿豆   30      90
 * 红豆   60      120
 * 黑豆   20      80
 * 青豆   50      75
 */

const greedyAlgorithm = (items: { label: string; totalWeight: number, totalValue: number }[], limitWeight: number) => {
  const result: { label: string; weight: number }[] = [];
  let currentWeight = 0;
  const beans = [...items];
  beans.sort((a, b) => b.totalValue / b.totalWeight - a.totalValue / a.totalWeight);

  while (beans.length >= 1 && currentWeight < limitWeight) {
    const bean = beans.shift() as { label: string; totalWeight: number, totalValue: number };
    if (bean.totalWeight <= limitWeight - currentWeight) {
      result.push({
        label: bean.label,
        weight: bean.totalWeight,
      });
      currentWeight += bean.totalWeight;
    } else {
      result.push({
        label: bean.label,
        weight: currentWeight,
      });
      currentWeight = limitWeight;
    }
  }
  return result;
};

// const beans = [
//   {
//     label: '黄豆',
//     totalWeight: 100,
//     totalValue: 100,
//   },
//   {
//     label: '绿豆',
//     totalWeight: 30,
//     totalValue: 90,
//   },
//   {
//     label: '红豆',
//     totalWeight: 60,
//     totalValue: 120,
//   },
//   {
//     label: '黑豆',
//     totalWeight: 20,
//     totalValue: 80,
//   },
//   {
//     label: '青豆',
//     totalWeight: 50,
//     totalValue: 75,
//   },
// ];
// const limitWeight = 100;
// console.log(greedyAlgorithm(beans, limitWeight));

