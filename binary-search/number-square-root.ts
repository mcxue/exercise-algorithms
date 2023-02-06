// 如何编程实现“求一个数的平方根”（要求精度到小数点后 6 位）

/**
 * 这里小数点第 6 位是实际结果的第 6 位数字，而不是根据第 7 位四舍五入的
 * 对于小于 1 值算平方根不好算，放弃
 */

const calculateSquareRoot = (value: number) => {
  if (value === 1) return 1;
  if (value < 1) return -1;
  let left = 0;
  let right = value;
  while (Math.abs(left - right) >= 0.000001) {
    const middle = (left + right) / 2;
    const middleSquare = middle * middle;
    if (Math.abs((middleSquare - value)) < Number.EPSILON) { // 中间值正好等于平方根的值
      return middle;
    } else if (middleSquare < value) { // left 逼近
      left = middle;
    } else { // right 逼近
      right = middle;
    }
  }
  return Number(((left + right) / 2).toFixed(6));
};

// console.log(calculateSquareRoot(23));


