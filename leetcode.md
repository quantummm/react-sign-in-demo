<!--
 * @Author: your name
 * @Date: 2020-09-25 18:09:55
 * @LastEditTime: 2020-09-25 18:10:21
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /shopping-cart-app/leetcode.md
-->

### 6. Fizz Buzz - 412

<img align="left" src="image-20200925170228838.png" alt="image-20200925170228838" style="zoom:50%;" />
### Solution (Javascript):

```js
/**
 * 25-09-2020
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const res = [];
  for (let i = 1; i <= n; i++) {
    i % 3 == 0 && i % 5 == 0
      ? res.push("FizzBuzz")
      : i % 3 == 0
      ? res.push("Fizz")
      : i % 5 == 0
      ? res.push("Buzz")
      : res.push(i.toString(10));
  }
  return res;
};
```

### 7. Shuffle an Array 打乱数组 - 384

<img align="left" src="image-20200925180005446.png" alt="image-20200925180005446" style="zoom:50%;" />

### Solution (Javascript):

洗牌算法 -

在数组最大长度和 i 之间随机产生一个 index，然后将这个 index 的数取出和 i 位置的数交换。

Issue: `rand_num = Math.floor(Math.random()* (arr.length - i) + i);`不加分号报错

```js
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  let arr = [...this.nums];
  for (let i = 0; i < arr.length; i++) {
    rand_num = Math.floor(Math.random() * (arr.length - i) + i);
    [arr[i], arr[rand_num]] = [arr[rand_num], arr[i]];
  }
  return arr;
};

/**
 * 25-09-2020
 * https://developer.mozilla.org/en-
 * US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
```
