// BF 算法

/**
 * 匹配算法算法：在主串 a 中查找模式串 b，一般主串的长度 n 大于模式串的长度 m
 */

/**
 * BF 算法算也称为朴素匹配算法
 * 这种匹配方式很"暴力"，简单直接，性能不高，其时间复杂度为 O(nm)
 * BF - Brute Force
 */

const bf = (a: string, b: string) => {
  for (let i = 0; i <= a.length - b.length; i++) { // 找到循环的条件：a.length===b.length 时 i=0 满足循环条件，b.length-a.length=1 时 i=1 满足条件，所以可以猜出 i<=b.length-a.length 满足条件
    let cursor = 0;
    while (cursor <= b.length - 1) {
      if (a[i + cursor] === b[cursor]) {
        cursor += 1;
      } else {
        break;
      }
    }
    if (cursor === b.length) return i; // 当 cursor 指向模式串最后一位之后的空位时，匹配成功
  }
};

// const a = 'HelloWorld!';
// const b = 'World';
// console.log(bf(a, b));


