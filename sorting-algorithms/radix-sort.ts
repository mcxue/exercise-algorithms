/**
 * 基数排序
 * 对于数据的要求是能够按位排序
 */

/**
 * 这里对 50 个手机号码进行排序
 * 这里引入归并排序算法
 */

const tempMergeSort = (list: number[]) => {
  const mergeFn = (first: number, middle: number, last: number) => {
    let cursor1 = first;
    let cursor2 = middle + 1;
    const tempList: number[] = [];
    while (cursor1 <= middle && cursor2 <= last) {
      if (list[cursor1] <= list[cursor2]) {
        tempList.push(list[cursor1]);
        cursor1 += 1;
      } else {
        tempList.push(list[cursor2]);
        cursor2 += 1;
      }
    }
    if (cursor1 > middle) {
      while (cursor2 <= last) {
        tempList.push(list[cursor2]);
        cursor2 += 1;
      }
    } else if (cursor2 > last) {
      while (cursor1 <= middle) {
        tempList.push(list[cursor1]);
        cursor1 += 1;
      }
    }
    for (let i = 0; i < tempList.length; i++) {
      list[first + i] = tempList[i];
    }
  };
  const mergeSortRecursive = (first: number, last: number) => {
    if (first >= last) return;
    const middle = Math.floor(first + (last - first) / 2);
    mergeSortRecursive(first, middle);
    mergeSortRecursive(middle + 1, last);
    mergeFn(first, middle, last);
  };
  mergeSortRecursive(0, list.length - 1);
};

const radixSort = (list: number[]) => {
  let count = 0; // 记录位的个数
  let tempNumber = list[0];
  if (!tempNumber) return;
  while (tempNumber) {
    count += 1;
    tempNumber = Math.floor(tempNumber / 10);
  }
  for (let i = 0; i < count; i++) {
    list.sort((a, b) => { // 为了方便，这里直接使用了内置函数，使用计数排序也是可以的，位的最大值是 9，计数数组只需 10 个
      // 个位 a % 10
      // 十位 Math.floor(a / 10) % 10
      // 百位 Math.floor(a / 100) % 10
      if (a / Math.pow(10, i) % 10 < b / Math.pow(10, i) % 10) {
        return -1;
      } else if (a / Math.pow(10, i) % 10 > b / Math.pow(10, i) % 10) {
        return 1;
      } else {
        return 0;
      }
    });
  }
};

// const list = [13043720523, 16494955760, 18690911300, 15561249983, 13497375334, 15553050202, 14853597019, 16415198963, 12040264741, 18176868139, 13874178122, 17006955016, 14711960262, 17841631558, 14181416373, 10217024365, 11148912244, 18665819082, 19436702144, 17967905977, 14131048822, 11770707053, 16577360963, 16750412381, 15916619729, 17807913063, 13736615553, 19222917002, 18011210908, 15382036867, 19191318201, 13350493034, 12339917590, 17730565520, 11158455774, 19146218201, 18129674057, 13902438192, 13404711133, 13653139815, 13675108730, 15073054386, 11040977252, 11180571488, 19865022426, 11919012593, 10590928340, 11448621280, 12526469697, 12300449957];
// radixSort(list);
// console.log(list);
