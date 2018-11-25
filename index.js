/*
 * @Author: Mr.Chen
 * @Date: 2018-11-25 16:40:35
 * @LastEditors: Mr.Chen
 * @LastEditTime: 2018-11-25 19:53:39
 * @Description: 丑数，此为蛮力法
 */

// 丑数，指的是只包含因子2、3或5的数，
// 例如6和8都是丑数，但14不是，因为包含因子7。
// 习惯上把1当作第一个丑数


/**
 * 判断是否丑数
 * @param {number} number
 */
function isUglyNumber(number) {
  if (typeof number !== 'number') {
    throw new Error("传入参数必须为数字类型");
  }

  while(number % 2 === 0) {
    number /= 2;
  }
  while(number % 3 === 0) {
    number /= 3;
  }
  while(number % 5 === 0) {
    number /= 5;
  }

  return number === 1;
}

function findUglyNumber(index) {
  if (isNaN(index - 0)) {
    throw new Error("必须传入数字")
  }
  if (index <= 0) {
    return 0;
  }

  let number = 0;
  let uglyNumFound = 0;

  while(uglyNumFound < index) {
    number++;
    if (isUglyNumber(number)) {
      uglyNumFound++;
    }
  }

  return number;
}
// console.log(process.argv.slice(2)[0]);
let start = Date.now()
// 由于是在node上跑js，所以为了简化测试，使用 process.argv 获取命令行的参数，格式为
// node index.js 10
// 即查找第 10 个丑数
console.log(findUglyNumber(process.argv.slice(2)[0] - 0));
let end = Date.now();
console.log(end - start);
