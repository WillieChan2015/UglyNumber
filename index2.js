/*
 * @Author: Mr.Chen
 * @Date: 2018-11-25 17:02:21
 * @LastEditors: Mr.Chen
 * @LastEditTime: 2018-11-25 19:48:19
 * @Description: 丑数，改良版，空间换时间
 */

// 算法思路
// /**
//  * 想办法从上一个丑数推断出下一个丑数，而不需要从1开始遍历再判断。
//  * 从1开始的10个丑数分别为1，2，3，4，5，6，8，9，10，12。
//  * 可以发现除了1以外，丑数都是由某个丑数*2或者*3或者*5得到的。
//  * 如2是丑数1*2得到的，3是丑数1*3得到的，4是丑数1*4得到的，5是丑数1*5得到的，6是丑数2*3得到的……

// 具体算法步骤：
// （1）从第一个丑数1开始，求出1*2=2 ，1*3=3 ，1*5 = 5；
// （2）取上面乘积中大于1的最小值2，作为第二个丑数（丑数是个递增序列，所以第i+1个丑数一定比第i个丑数）
// （3）求丑数2之前的丑数与2、3、5的乘积：1*2=2 ，1*3=3 ，1*5 = 5； 2*2 = 4； 2*3 = 6； 2*5 =10；
// （4）取上面乘积中大于2的最小值3，作为第三个丑数
//       ……
//       ……
// （i）取出丑数i之前的丑数分别与2、3、5的乘积
// （i+1）取乘积中大于i的最小值作为丑数
// （i+2）重复(i)(i+1)的步骤直到计数器等于N
// */

/**
 * 查找丑数
 * @param {Number} index 第几个丑数
 */
function getUglyNumber(index) {
  if (isNaN(index - 0)) {
    throw new Error("必须传入数字")
  }
  if (index <= 0) {
    return 0;
  }

  const uglyArr = [];
  uglyArr.push(1);

  let uglyNum = 1;
  while (uglyNum < index) {
    let m2 = 0, m3 = 0, m5 = 0;
    for (let i = 0; i < uglyNum; i++) {
      if (uglyArr[i] * 2 > uglyArr[uglyNum - 1]) {
        m2 = uglyArr[i] * 2;
        break;
      }
    }

    for (let i = 0; i < uglyNum; i++) {
      if (uglyArr[i] * 3 > uglyArr[uglyNum - 1]) {
        m3 = uglyArr[i] * 3;
        break;
      }
    }

    for (let i = 0; i < uglyNum; i++) {
      if (uglyArr[i] * 5 > uglyArr[uglyNum - 1]) {
        m5 = uglyArr[i] * 5;
        break;
      }
    }

    uglyArr.push(Math.min(m2, m3, m5));
    uglyNum++;
  }

  return uglyArr[uglyNum - 1];
}

let start = Date.now()
console.log(getUglyNumber(process.argv.slice(2)[0] - 0));
let end = Date.now();
console.log(end - start);
