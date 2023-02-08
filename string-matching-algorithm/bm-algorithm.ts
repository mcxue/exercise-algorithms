// BM 算法

/**
 * 两条规则
 * 1. 坏字符规则
 * 2. 好后缀规则
 * 其中坏字符规则比较好写，好后缀规则比较难写
 */

/**
 * 坏字符规则中，构建坏字符哈希表 {[index: string]: number}
 */
const getBadChar = (b: string) => { // 字符最后一个出现的下标
  const hash: { [index: string]: number } = {};
  for (let i = 0; i < b.length; i++) {
    hash[b[i]] = i;
  }
  return hash;
};

// console.log(getBadCharHash('abcdcba'));

/**
 * 好后缀规则中，构建 suffix: number[]、prefix: boolean[]
 */

const getGoodSuffix = (b: string) => {
  const suffix: number[] = [];
  const prefix: boolean[] = [];
  for (let i = 0; i < b.length; i++) {
    suffix[i] = -1;
    prefix[i] = false;
  }
  for (let i = 0; i < b.length - 1; i++) { // 此处 i 指向前缀子串的末尾，从小到大全部遍历，子串的 i 最大值为 i-2
    let cursor = i; // 指针一步一步往前挪
    let lengthIndex = 0; // suffix 与 prefix 的下标，表示模式串中不同的的后缀子串长度，从 1 开始，下面代码可以体现
    while (cursor >= 0 && b[cursor] === b[b.length - 1 - lengthIndex]) {
      suffix[lengthIndex + 1] = cursor;
      cursor -= 1;
      lengthIndex += 1;
    }
    if (cursor === -1) {
      prefix[lengthIndex] = true;
    }
  }
  return {
    suffix,
    prefix,
  };
};

// console.log(getSuffixAndPrefix('abacdcba'));

const bm = (a: string, b: string) => {
  const badChar = getBadChar(b);
  const { suffix, prefix } = getGoodSuffix(b);
  let cursor = 0; // 逐渐向右滑动
  while (cursor <= a.length - b.length) {
    let cursor2 = b.length - 1; // 从模式串 b 从右往左挪动，指向坏字符
    while (cursor2 >= 0) {
      if (b[cursor2] === a[cursor + cursor2]) {
        cursor2 -= 1;
      } else {
        break;
      }
    }
    if (cursor2 === -1) return cursor;
    const badCharIndex = badChar[a[cursor + cursor2]] !== undefined ? badChar[a[cursor + cursor2]] : -1;
    const moveLength1 = cursor2 - badCharIndex;
    let moveLength2 = 0;
    if (cursor2 <= b.length - 1) { // 如果指针指向模式串中倒数第二个字符以左面，则表示有好后缀
      const goodSuffixLength = b.length - 1 - cursor2;
      if (suffix[goodSuffixLength] !== -1) { // 好后缀在模式串中的前缀字串中查询到时
        moveLength2 = cursor + 1 - suffix[goodSuffixLength];
      } else { // 好后缀在模式串中的前缀子串中未查询到时，从好后缀的子串中查询最长的能与模式串中前缀字串匹配的子串
        let cursor3 = cursor2 + 2;
        while (cursor3 <= b.length - 1) {
          if (prefix[b.length - cursor3]) {
            moveLength2 = cursor3;
            break;
          }
          cursor3 += 1;
        }
        if (cursor3 === b.length) {
          moveLength2 = b.length;
        }
      }
    }
    cursor += moveLength1 > moveLength2 ? moveLength1 : moveLength2;
  }
};

const a = 'abcbefgadbckdegadbcde';
const b = 'egad';
console.log(bm(a, b));


